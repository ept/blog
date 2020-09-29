---
layout: ync-post
title: "Building Go Test It: Fun with Scala and REST APIs"
disqus: true
---

<img src="/2009/05/go-test-it.png" alt="Go Test It" width="285" height="177" class="size-full wp-image-279" />

[Go Test It](http://go-test.it/), the awesome new web testing product I am currently working on, was
[announced](http://twitter.com/martinkl/status/1763467765) on Monday. I had
[hinted at it](/2008/12/30/looking-back-at-2008-plans-for-2009.html) back in December, but now that it
is taking shape it was time for me to start spreading the word.

Please see the
[Go Test It website](http://go-test.it/) for details about the product; in summary, it allows web
developers and QA teams to very quickly and easily record functional tests on their web application,
and plays them back in our own cloud-hosted cross-browser infrastructure. It is going to be the
fastest way ever to get started with cross-browser testing, and also provide great tools for running
your existing test suites. With
[Go Test It](http://go-test.it/), there will be no more excuses for not having great coverage of
automated functional tests.

On this blog I would like to share from time to time some of the
technical challenges we have overcome in the process of building this product.


**Today: Simple REST APIs in Scala**

The Go Test It system consists of a number of different components using different
programming languages, different frameworks, different infrastructures. The main user front-end is a
[Rails](http://rubyonrails.org/) app, but not all tasks are so well suited to Ruby. In particular,
the multi-threaded parts of the system which do a lot of the internal coordination are being written
in [Scala](http://www.scala-lang.org/), a very elegant JVM-based language which lends itself well to
this sort of thing.

The various components of the system need to communicate, and depending on the
type of interaction needed, we're using a combination of a
[message queue](http://www.rabbitmq.com/) and
[REST APIs](http://en.wikipedia.org/wiki/Representational_State_Transfer). There is good Java
library support for both, and since Scala can seamlessly use Java libraries, it all fits together
very nicely.

[Jersey](https://jersey.dev.java.net/) is a really neat Java (and, by extension, Scala)
library for writing REST APIs. (It falls into a similar category as
[Sinatra](http://www.sinatrarb.com/) in the Ruby world.) For example, a resource which returns a
HTML document can be written in just a few lines of Scala code:

{% highlight scala %}
package com.example.restapi
import javax.ws.rs._

@Path("/hello")
class Hello {
  @GET @Produces(Array("text/html"))
  def doGet = "<html><body><h1>hello jersey/scala world!</h1></body></html>"
}
{%endhighlight %}

A resource is defined by a
class, annotated with the path(s) under which it can be accessed, and has one or more methods to
handle different HTTP verbs (GET, POST, PUT, DELETE), and if you want, also different methods for
different content types.

Coda Hale has written up
[some really nice examples of using Jersey](http://codahale.com/what-makes-jersey-interesting-parameter-classes/)
and doing nice clean
error handling of input. His examples are in Java, but translating them into Scala is a very simple
exercise -- more or less a matter of removing the type declarations and the semicolons.

But here comes the tricky bit. Given the beautiful code snippet above, how do you actually build and run the
thing? That is something I wrestled with for a while, and here I would like to reveal my solution.
You can build it with
[Maven](http://maven.apache.org/) (for the Ruby guys, it is basically
[RubyGems](http://rubyforge.org/projects/rubygems/) and
[Rake](http://rake.rubyforge.org/) rolled into one, intended for building Java projects with
automatic dependency management). The process is a bit scary, but once it works, it is magic -- it
automatically downloads all the right packages, sets the right classpaths and packages up the
results of your build into a war file (web archive).

But the scary bit first. You need to declare
your dependencies and build properties to Maven, and the prescribed way of doing that is using the
most ugly XML configuration file on the planet. I'm really sorry for the ugliness, but I think it's
worth it. However, the good news is that you only need to set it up once and never touch it again;
once your build is working, you can create resources and handle them in Scala to your heart's
content. And for a bonus, see below for a Capistrano recipe which allows you to easily deploy the
resulting war file to a Tomcat server, again and again.

First, put the following in a file called `pom.xml` in the base directory of your project:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelversion>4.0.0</modelversion>
    <groupid>com.example</groupid>
    <artifactid>restapi</artifactid>
    <packaging>war</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>restapi</name>

    <dependencies>
        <!-- Scala standard library -->
        <dependency>
            <groupid>org.scala-lang</groupid>
            <artifactid>scala-library</artifactid>
            <version>2.7.2</version>
        </dependency>

        <!-- JUnit for testing -->
        <dependency>
            <groupid>junit</groupid>
            <artifactid>junit</artifactid>
            <version>3.8.2</version>
            <scope>test</scope>
        </dependency>

        <!-- Jersey and Servlet (for the REST API) -->
        <dependency>
            <groupid>com.sun.jersey</groupid>
            <artifactid>jersey-server</artifactid>
            <version>1.0.3</version>
        </dependency>
        <dependency>
            <groupid>javax.servlet</groupid>
            <artifactid>servlet-api</artifactid>
            <version>2.4</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupid>com.sun.jersey.test.framework</groupid>
            <artifactid>jersey-test-framework</artifactid>
            <version>1.0.3</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Compile to Java 1.6 -->
            <plugin>
                <groupid>org.apache.maven.plugins</groupid>
                <artifactid>maven-compiler-plugin</artifactid>
                <configuration>
                    <source>1.6</source>
                    <target>1.6</target>
                </configuration>
                <executions>
                    <execution>
                        <phase>compile</phase>
                        <goals><goal>compile</goal></goals>
                    </execution>
                </executions>
            </plugin>

            <!-- Build Scala sources -->
            <plugin>
                <groupid>org.scala-tools</groupid>
                <artifactid>maven-scala-plugin</artifactid>
                <version>2.10</version>
                <executions>
                    <execution>
                        <id>scala-compile-first</id>
                        <phase>process-resources</phase>
                        <goals>
                            <goal>add-source</goal>
                            <goal>compile</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>scala-test-compile</id>
                        <phase>process-test-resources</phase>
                        <goals><goal>testCompile</goal></goals>
                    </execution>
                </executions>
            </plugin>

            <!-- Run the application using "mvn glassfish:run" -->
            <plugin>
                <groupid>org.glassfish</groupid>
                <artifactid>maven-glassfish-plugin</artifactid>
            </plugin>
        </plugins>

        <pluginmanagement>
            <plugins>
                <plugin>
                    <groupid>org.scala-tools</groupid>
                    <artifactid>maven-scala-plugin</artifactid>
                    <version>2.9.1</version>
                </plugin>

                <plugin>
                    <groupid>org.apache.maven.plugins</groupid>
                    <artifactid>maven-compiler-plugin</artifactid>
                    <version>2.0.2</version>
                </plugin>
            </plugins>
        </pluginmanagement>
    </build>

    <!-- List of repositories where the various dependencies and plugins can be found -->
    <repositories>
        <repository>
            <id>scala-tools.org</id>
            <name>Scala-tools Maven2 Repository</name>
            <url>http://scala-tools.org/repo-releases</url>
        </repository>

        <repository>
            <id>maven2-repository.dev.java.net</id>
            <name>Java.net Repository for Maven</name>
            <url>http://download.java.net/maven/2/</url>
            <layout>default</layout>
        </repository>

        <repository>
            <id>glassfish-repository</id>
            <name>Java.net Repository for Glassfish</name>
            <url>http://download.java.net/maven/glassfish</url>
        </repository>
    </repositories>

    <pluginrepositories>
        <pluginrepository>
            <id>scala-tools.org</id>
            <name>Scala-tools Maven2 Repository</name>
            <url>http://scala-tools.org/repo-releases</url>
        </pluginrepository>

        <pluginrepository>
            <id>maven2-repository.dev.java.net</id>
            <name>Java.net Repository for Maven</name>
            <url>http://download.java.net/maven/2/</url>
            <layout>default</layout>
        </pluginrepository>
    </pluginrepositories>
</project>
{% endhighlight %}


That was a terrible mouthful. Urgh. But worry not, the worst is over. Just one other XML file, and this one
goes in `src/main/webapp/WEB-INF/web.xml`:


{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://java.sun.com/xml/ns/j2ee" version="2.4"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">

    <servlet>
        <servlet-name>Example.com REST API</servlet-name>
        <servlet-class>com.sun.jersey.spi.container.servlet.ServletContainer</servlet-class>
        <init-param>
            <param-name>com.sun.jersey.config.property.packages</param-name>
            <param-value>com.example.restapi</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>Example.com REST API</servlet-name>
        <url-pattern>/*</url-pattern>
    </servlet-mapping>

    <session-config>
        <session-timeout>30</session-timeout>
    </session-config>
</web-app>
{% endhighlight %}


And that's all the boilerplate you need. You can now write the actual code, with Scala source files in
`src/main/scala` and Java source files in `src/main/java` (if you want to use Java alongside Scala).
For example, place the source for the Hello resource above in
`src/main/scala/com/example/restapi/Hello.scala`. Tests go in `src/test/scala` and
`src/test/java` respectively.

Now go and build it! (You need to have Maven 2.0.9 or newer installed.) The two most useful commands are
`mvn package`, which compiles and packages your project, and places the result in
`target/restapi-1.0-SNAPSHOT.war`, and `mvn glassfish:run`, which launches an embedded
[Glassfish](https://glassfish.dev.java.net/) application server and serves your new REST API on
`http://localhost:8080/` for local testing. The example resource which we defined above
would then be accessible at `http://localhost:8080/hello` in your web browser.

If you don't have the dependencies
yet, Maven will go away and download them. This will take a while, but they won't be re-downloaded
once you have them. It's a bit frightening at first to watch Maven doing its magic, but in my
limited experience so far it has always done a good job.

Now for the bonus points. Just building
your app locally is not enough; you also need to deploy it to a server and make it accessible to the
world. In our case this is
[Tomcat](http://tomcat.apache.org/), but any standard Java web container should do. I wanted to use
[Capistrano](http://www.capify.org/) for deployment, because it gets a lot of things right and also
fits well into the rest of our system which does have a lot of Ruby in it. There is an existing
[Capistrano recipe for deploying war files to Tomcat](http://github.com/andynu/capistrano-recipes/blob/master/capfile_tomcat),
but it needed a bit of improvement, so my own version is included below.

These deployment instructions assume you're running a
[Debian Lenny](http://www.debian.org/releases/stable/) system, with a
`restapi` user account; for other systems, you'll need to customise it to suit.

Create the following shell script in `/etc/tomcat5.5/symlink-webapp` and make it executable:


{% highlight bash %}
#!/bin/sh
# Allows an unprivileged user to deploy an application to Tomcat. Add a rule for this
# script and /etc/init.d/tomcat to /etc/sudoers. Then to deploy an application, call:
#     sudo /etc/tomcat5.5/symlink-webapp webapp-name /location/of/war/file
NAME=`echo "$1" | sed -e 's/\[^a-zA-Z0-9\\.-\]//g'`
echo "ln -f -s \"$2\" /var/lib/tomcat5.5/webapps/$NAME"
ln -f -s "$2" /var/lib/tomcat5.5/webapps/$NAME
{% endhighlight %}


Next, add the following line to `/etc/sudoers`:


{% highlight text %}
restapi ALL = NOPASSWD: /etc/init.d/tomcat5.5, /etc/tomcat5.5/symlink-webapp
{% endhighlight %}


With that set up, here's the `Capfile` for you to put in the base directory of your project:


{% highlight ruby %}
# This recipe is based on:
# http://github.com/andynu/capistrano-recipes/blob/master/capfile_tomcat

load 'deploy'
set :application, "restapi"

# DEPLOYMENT SCHEME
set :scm, :none
set :deploy_via, :copy
set :repository do
  fetch(:deploy_from)
end

# LOCAL
set :war_path, "#{File.dirname(__FILE__)}/target/*.war"

# TOMCAT SERVERS
role :webserver, "server.example.com"
set :tomcat_home, "/var/lib/tomcat5.5"
set :tomcat_ctrl, "/etc/init.d/tomcat5.5"
set :deploy_to, "/home/restapi/deploy"

# USER LOGIN
set :user, "restapi"
ssh_options[:keys] = File.expand_path('~/.ssh/my_private_ssh_key')
set :use_sudo, false
default_run_options[:pty] = true

set :deploy_from do
  dir = "/tmp/prep_#{release_name}"
  system("mkdir -p #{dir}")
  dir
end


# simple interactions with the tomcat server
namespace :tomcat do
  desc "start tomcat"
  task :start do
    sudo "#{tomcat_ctrl} start"
  end

  desc "stop tomcat"
  task :stop do
    sudo "#{tomcat_ctrl} stop"
  end

  desc "stop and start tomcat"
  task :restart do
    tomcat.stop
    tomcat.start
  end

  desc "tail :tomcat_home/logs/*.log and logs/catalina.out"
  task :tail do
    stream "tail -f #{tomcat_home}/logs/*.log #{tomcat_home}/logs/catalina.out"
  end
end


# Before everything else, build the application with maven and copy
# the war file to a temporary directory.
before 'deploy:update_code' do
  cmd = "mvn clean package"
  puts cmd; system cmd or raise "\"#{cmd}\" failed"
  set :war, Dir[war_path].first
  cmd = "cp #{war} #{deploy_from}"
  puts cmd; system cmd or raise "\"#{cmd}\" failed"
end


# Restart tomcat at the end of deployment
namespace :deploy do
  task :restart do
    cmd = "/etc/tomcat5.5/symlink-webapp #{application}.war #{deploy_to}/current/`basename #{war}`"
    puts cmd
    sudo cmd
    tomcat.restart
  end
end


# Disable all the default tasks that
# either don't apply, or I haven't made work.
namespace :deploy do
  [ :upload, :cold, :start, :stop, :migrate, :migrations ].each do |default_task|
    desc "[internal] disabled"
    task default_task do
      # disabled
    end
  end

  namespace :web do
    [ :disable, :enable ].each do |default_task|
      desc "[internal] disabled"
      task default_task do
        # disabled
      end
    end
  end

  namespace :pending do
    [ :default, :diff ].each do |default_task|
      desc "[internal] disabled"
      task default_task do
        # disabled
      end
    end
  end
end
{% endhighlight %}


So there we go. For the first time use `cap deploy:setup` to create the directories on the server, and
thereafter always type `cap deploy`. Those 11 keystrokes are all you need to fetch all the dependencies (no more
troubles replicating your build environment on different development machines), build a clean copy
of the entire app, ship it off to the server and run it. And your app can be all in beautiful,
concise and type-safe Scala. I have survived the XML deluge and I am happy :-)
