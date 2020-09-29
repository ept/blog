---
layout: ync-post
title: "Ruby on Rails vs. Java Enterprise"
disqus: true
---

Choosing a web application framework. Aaaaargh, the pain.

Ok, so we're actually in a pretty lucky
situation right now: We have a new, substantial web development project, which we're designing from
scratch. It's for a feature-rich, complex web application, it has got to scale well, and it has got
to be maintainable. Those are the core requirements, and I thought they didn't sound too demanding
really. Between us in the team we have experience in most of today's common programming languages,
so that wasn't an important point; what we wanted was the web framework which was **objectively the
best** given our requirements.

Most frameworks, it seemed, were essentially suitable only for toy
projects. There is a particularly ridiculous number of open-source web frameworks, and most of them
don't appear to be widely used in real-world situations. When I say real world, I don't mean your
average blog about kittens; I mean a site with at least **100 million page views per month** or so.
And I wanted the framework to be reasonably widely used, so that other people will have found the
fatal bugs and already fixed them before we come along.

This left me with three options which seemed to me to be worth taking seriously:

* Java Platform Enterprise Edition (JEE)
* Ruby on Rails
* Microsoft ASP.NET

Of course there are plenty more (Django came into
consideration, for example) but judging by the contents of the computer section of my local book
shop, those others must be pretty niche. Although ASP.NET looks like a reasonably well-designed
platform I had to unfortunately exclude it straight away, because I don't want the risk of being
locked into a Microsoft platform (and I'm not yet sure how reliable Mono is).

So the showdown is
between **Java Enterprise** and **Ruby on Rails**, and the contenders could hardly differ more in
terms of their culture. In a nutshell, Ruby on Rails focuses on fast and agile development, while
Java Enterprise focuses on flexibility and integration with enterprise IT. In Ruby on Rails, the
common tasks are made very very simple, and if you stick within those common tasks, life as a
developer is bliss; in Java Enterprise, even the simplest jobs require you to write ugly XML
configuration or auto-generate boilerplate code. Ruby on Rails is what you'll find on the servers of
a cool young Web 2.0 start-up; Java Enterprise is found in the IT nerve-centres of investment banks.
In a completely clichéd world view, Ruby on Rails hackers wear Jeans and T-Shirt, have a MacBook
and a Linux server, and have a lot of fun; while Java Enterprise software engineers wear suits, have
a Windows laptop and a Solaris server, and act very seriously. (I exaggerate.)

The instinctive
tendency here is obviously to go with the fun, informal start-up types than with the boring
corporate types. But wait, I was trying to make an objective decision, and the discussions about
these platforms are already quasi-religious and emotional enough.

I have tried to come up with a
list of criteria by which I want to judge these to frameworks. One by one, in no particular
order:

* **Developer productivity and learning curve for new developers.** Ruby on Rails
will get you started quicker, there's not much doubt about that. In Java, I think the worst problem
for a newcomer is actually the massive choice of different libraries to use and different ways to do
the same thing -- there doesn't appear to be any combination of libraries which is particularly
widely used; instead every tutorial, every manual and every book you find will use a different
combination of technologies and libraries, which makes it particularly hard to learn the first
steps. Because there isn't just one obviously right way of doing something in Java EE, developers
can spend a lot of time sorting out niggling little details, which slows them down and can be
demotivating. I believe that if there was a full standard distribution for Java EE (e.g.
Icefaces+JSF+Seam+EJB3+JPA+Hibernate+Glassfish, to name just one possible API stack out of thousands
of different combinations), people would write a lot more good documentation for that particular
stack, and it would become a lot easier for more developers to start using it effectively. With the
right tools and good documentation, productivity could potentially be about the same for Rails and
Java, but at the moment Java is shooting itself in the foot in this
regard.
* **Ease of recruiting good and motivated developers.** I've not yet worked out how
the two frameworks compare in this point. There are not many people who know Ruby, but those two do
tend to be pretty passionate about it, so there's an increased chance they will do a good job. Just
about every computer science student learns Java these days (except at a few misguided institutions
where they still teach C++), so there are plenty of Java developers around, although it's not clear
how many of them are actually really
good.
* **Standardisation of platform.** This point is a combination of the last two points.
If a lot of people use a platform, it is likely to be more stable, less buggy, better documented,
better designed, faster, more supported in the long term, more interoperable with other systems, and
so on. However, you can't just judge by number of users -- so many developers worldwide use plain
PHP, the poor souls, and probably don't even realise that although their LAMP platform is a
quasi-standard, it's complete rubbish for developing non-trivial
applications.
* **Manageability of a complex code base.** This is the point where I
personally really appreciate statically typed programming languages (call me old-fashioned). With
Java in Eclipse, you can immediately search for the place where something is defined, you can
refactor class and method names without too much fear (except when you use Java names in XML files),
you get decent code completion, you know at compile-time which methods an object has (rather than
calling something speculatively which may or may not be there), and so on. Dynamically typed
scripting languages are great for prototyping and writing things quickly, but I find they start
getting a bit scary and tricky to handle once you go past a few thousand lines of
code.
* **Testability and robustness** -- i.e. "if I change something here, how likely is it
that I will break something at the other end of the application?". Fortunately, both frameworks
offer reasonable support for automated regression testing; Ruby on Rails probably a bit more so,
because it relies primarily on automated tests (rather than a type system) to ensure things don't
fall apart
horribly.
* **Scalability, stability and reliability.** This is a pretty important one,
since any outage immediately gives a very bad impression to your users, and can potentially cost a
lot of money. However, it's hard to get hold of accurate reports on how well the frameworks behave
in a harsh production environment, with a large number of concurrent users (hundreds of page views
per second) and a large database. I'm inclined to attribute better stability to Java because it's
almost certainly used in corporates for more critical applications than Ruby is. Ruby on Rails, on
the other hand, has
[had some pretty bad press](http://www.techcrunch.com/2008/05/01/twitter-said-to-be-abandoning-ruby-on-rails/) concerning
its scalability. The biggest RoR deployment at the moment is apparently
[Yellow Pages](http://www.yellowpages.com/); rather embarrassingly for both them and for Rails, this
site has actually been down for at least the last 12 hours as I write this
post.
* **Internationalisation and Unicode.** There are translation features in both
frameworks, and they are both ok, although none really strikes me as brilliant. The bigger issue is
with Unicode support. I agree fully with
[Joel Spolsky's opinions in this matter](http://www.joelonsoftware.com/articles/Unicode.html) --
there is no such thing as 8-bit plain text. And yet, I could hardly believe my eyes,
[Ruby treats strings just as an array of
bytes](http://wiki.rubyonrails.org/rails/pages/HowToUseUnicodeStrings), 8 bits per character,
unspecified encoding. You can put UTF-8 in them, but then the standard string editing methods will
rip them up and make them invalid. For heaven's sake, guys, we live in the 21st century! Do you not
want to sell your software worldwide or what? Ok, there are some UTF-8-safe methods, but you've got
to remember to call them explicitly. At least Java encourages you to specify an encoding when you
convert between byte streams and strings (although in my opinion it still isn't radical enough --
all conversion methods without an explicit charset parameter ought to be marked as deprecated, to
make it really clear to the developer what they are
doing).
* **Toolchain support.** Java has been around for a long time, and some pretty
powerful tools to support it have evolved in that time (we are using the commercial
[MyEclipse](http://www.myeclipseide.com/) and it's doing a good job for us). Ruby on Rails is
younger, but is actually quite well supported too due to its active developer community --
[Aptana](http://www.aptana.com/rails/) is pretty neat, for
example.
* **Libraries for additional functionality.** Since Java is so common, libraries for
it are also very common -- pretty much whatever you want to do, you can download a jar file to do it
for you. With Ruby we're not that far yet, but more and more libraries are being ported, so this is
not likely to be a very limiting
factor.
* **Ease of integration with back end.** We've got some algorithmic, number-crunching
applications running in the background handling all the really clever technology. These are written
in Java, and the web framework has got to be able to communicate with them. If the web tier is also
in Java, that is easy; if it's not, we have to write an explicit interface, but it's not the end of
the world either.
* **Integrating with and impression on customers.** Who's your customer? If your
application is targeted at general consumers who will use it over the web, they don't care what
framework you use as long as it works well. However, if the software is actually going to be
licensed to an enterprise where the IT department have to integrate it with their own systems, then
the technology matters. Not so much because of real difficulties (most integrations probably happen
on the database level anyway, so the application server is pretty irrelevant) but because they are
going to ask you what technology you use; if it's different from what they use themselves, they will
suspect that it's going to be more effort to integrate, which might become their excuse not to buy
from you.
* **Long-term support.** In 3--5 years' time, what will have happened to the software?
It may be that our application is still running, but will we still get security updates and bugfixes
for the framework? Will somebody come along and completely re-write the API so that we in turn have
to invest a lot in porting the application to the new API, or else risk running on an unsupported
platform? This is crystal ball gazing of course, but to be honest: Java Enterprise is backed by Sun,
and if there is one thing which big corporations tend to be good at, it's *keeping things the way
they are*. With Rails I fear more about the changeability of the framework over time. That said,
the move from J2EE 1.4 to JEE 5 (two years ago today, incidentally) was pretty major, so maybe they
are both equally changeable.

After all those points I'd like to finish off with a few
things which I would rather **not** have:

* **Too much flexibility in combining technologies.** Abstract APIs create an illusion
of portability -- ok, so you think you can replace your PostgreSQL with Oracle by changing one line
in an XML configuration file. Really? Not even subtle differences in query semantics? And how often
are you going to make such a major change to the system like changing your database server? I don't
think it's exactly such a common case that it has to be optimised for. It's not bad to have those
APIs, but they don't add as much value as you might think at first. And as I mentioned above, having
too much choice about the components from which you can assemble your system implies a lack of
useful documentation and a slower learning curve for new
developers.
* **Boilerplate and duplicate code.** You can create it with a code generation
tool, with a bit of luck you can even keep it up-to-date with that tool, but it's still extremely
ugly and makes things harder to maintain. The main advantage of scripting languages in my mind is
that things like database model objects are defined at runtime rather than compile-time, eliminating
all that generated code. However, you then lose the static type system, so you can't win on this
one.

So where does that leave us? Do you have any further aspects or information which we
should consider, or any specific experience with these technologies? Let us know by the comments
below.
