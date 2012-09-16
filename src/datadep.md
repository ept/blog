---
layout: ync-post
title: Thoughts on a better architecture for web apps
---

Having spent a lot of the last few years worrying about the scalability of data-heavy applications
like [Rapportive](http://rapportive.com/), I have started to get the feeling that maybe we have all
been "doing it wrong". Maybe what we consider to be "state of the art" application architecture is
actually holding us back.

I don't have a definitive answer for how we should be doing things differently, but along with a few
others I have been working on new architectural approaches which I'd like to put up for discussion.
My hope is that we can develop ways of better managing scale (in terms of complexity, volume of data
and volume of traffic) while keeping our applications nimble, easy and safe to modify and iterate.

My biggest problem with web application architecture is how **network communication concerns** are
often intermingled with **business logic concerns**. This makes it hard to rearrange the logic into
new architectures.


An example
----------

To illustrate, consider the clichéd Rails blogging engine example:

{% highlight ruby %}
class Post < ActiveRecord::Base
  attr_accessible :title, :content, :author
  has_many :comments
end

class Comment < ActiveRecord::Base
  attr_accessible :content, :author
  belongs_to :post
end

class PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.html  # show.html.erb
      format.json  { render :json => @post }
    end
  end
end

# posts/show.html.erb:
{% endhighlight %}

{% highlight rhtml+erb %}
<h1><%= @post.title %></h1>
<p class="author">By <%= @post.author %></p>
<div class="content">
  <%= simple_format(@post.content) %>
</div>
<h2>Comments</h2>
<ul class="comments">
  <% @post.comments.each do |comment| %>
    <li>
      <blockquote><%= simple_format(comment.content) %></blockquote>
      <p class="author"><%= comment.author %></p>
    </li>
  <% end %>
</ul>
{% endhighlight %}

Pretty good code by various standards, but it has always irked me a bit that I can't see where the
network communication (i.e. making database queries) is happening. When I look at that `Post.find`
in the controller, I can guess that probabably translates into a `SELECT * FROM posts WHERE id = ?`
internally -- unless the same query was already made recently, and ActiveRecord cached the result.
And another database query of the form `SELECT * FROM comments WHERE post_id = ?` might be made as a
result of the `@post.comments` call in the template. Or maybe the comments were already previously
loaded by some model logic, and then cached? Or someone decided to eagerly load comments with the
original post? Who knows.

The execution flow for a MVC framework request like `PostsController#show` probably looks something
like this:

<p><a href="/2012/09/architecture-high.png"><img src="/2012/09/architecture.png"
    alt="Typical MVC request flow" width="549" height="115"/></a></p>

Of course it is deliberately designed that way. Your template and your controller shouldn't have to
worry about database queries --- those are encapsulated by the model for many good reasons. I am
violating abstraction by even thinking about the database whilst I'm in the template code! I should
just think of my models as pure, beautiful pieces of application state. How that state gets loaded
from a database is a matter that only the models need to worry about.


Adding complexity
-----------------

In the example above, the amount of logic in the model is minimal, but it typically doesn't stay
that way for long. As the application becomes popular (say, the blogging engine morphs to become
Twitter, Tumblr, Reddit or Pinterest), all sorts of stuff gets added: memcache to stop the database
from falling over, spam filtering, analytics features, email sending, notifications, A/B testing,
more memcache, premium features, ads, upsells for viral loops, more analytics, even more memcache.
As the application inevitably grows in complexity, the big monolithic beast is split into several
smaller services, and different services end up being maintained by different teams.

As all of this is happening, the programming model typically stays the same: each service in the
architecture (which may be a user-facing web server, or an internal service e.g. for user
authentication) communicates over the network with a bunch of other nodes (memcached instances,
database servers, other application services), processes and combines the data in some way, and then
serves it out to a client.

That processing and combining of data we can abstractly call "business logic". It might be trivially
simple, or it might involve half a million lines of parsing, rendering or machine learning code. It
might behave differently depending on which A/B test bucket the user is in. It might deal with
hundreds of hairy edge cases. Whatever.

At the root of the matter, the business logic is just a pure function. It takes a bunch of inputs
(request parameters from the client, data stored in various databases and caches) and produces a
bunch of outputs (data to return to the client, data to write back to various databases and caches).
It is usually deterministic: given the same inputs, the business logic typically produces exactly
the same output again. It is also stateless: any data that is required to produce the output or to
make a decision has to be provided as an input.

By contrast, the network communication logic is all about 'wiring'. It may end up having a lot of
complexity in its own right: sending requests to the right node of a sharded database, retrying
failed requests with exponential back-off, making requests to different services in parallel,
cross-datacenter failover, service authentication, etc. But the network communication logic ought to
be general-purpose and completely independent of your application's business logic.

Both business logic and network communication logic are needed to build a service. But how do you
combine the two into a single process? Most commonly, we build abstractions for each type of logic,
hiding the gory implementation details. Much like in the blog example above, you end up calling a
method somewhere inside the business logic, not really knowing or caring whether it will immediately
return a value that the object has already computed, or whether it will talk to another process on
the same machine, or load the value from some remote cache, or make a query on some database
cluster.

It's good that the business logic doesn't need to worry about how and when the communication
happens. And it's good that the communication logic is general-purpose and not polluted with
application-specific concerns. But I think it's problematic that network communication may happen
somewhere deeply inside a business logic call stack. Let me try to explain why.


Precomputed caches
------------------

As your volume of data and your number of users grow, database access often becomes a bottleneck
(there are more queries competing for I/O, and each query takes longer when there's more data). The
standard answer to the problem is of course caching. You can cache at many different levels: an
individual database row, or a model object generated by combining several sources, or even an entire
HTML page ready to serve to a client. I will focus on the mid-to-high-level caches, where the raw
data has gone through some sort of business logic before it ends up in the cache.

Most commonly, caches are set up in read-through style: on every query, you first check the cache,
and return the value from the cache if it's a hit; otherwise it's a miss, so you do whatever is
needed to generate the value (query databases, apply business logic, perform voodoo), and return it
to the client whilst also storing it in the cache for next time. As long as you can generate the
value on the fly in a reasonable time, this works pretty well.

I will gloss over cache invalidation and expiry for now, but I return to it below.

The most apparent problem with a read-through cache is that the first time a value is requested,
it's always slow. (And if your cache is too small to hold the entire dataset, rarely accessed values
will get evicted and thus be slow every time.) That may or may not be a problem for you. One reason
why it may be a problem is that on many sites, the first client to request a given page is typically
the Googlebot, and Google [penalises](http://www.mattcutts.com/blog/site-speed/) slow sites in
rankings. So if you have the kind of site where Google juice is lifeblood, then a read-through
cache might not be good enough.

So, can you make sure that the data is in the cache even before it is requested for the first time?
Well, if your dataset isn't too huge, you can actually **precompute every possible cache entry**,
put them in a big distributed key-value store and serve them with minimal latency. That has a great
advantage: cache misses no longer exist. If you've precomputed every possible cache entry, and a key
isn't in the cache, you can be sure that there's no data for that key.

If that sounds crazy to you, consider these points:

* A database index is a precomputed cache. For every value you might want to search for, the index
  tells you where to find occurrences of that value. If it's not in the index, it's not in the
  database. Yes, databases have been doing this for a long time.
* With Hadoop you can process terabytes of data without breaking a sweat. I can process every single
  one of LinkedIn's 175 million member profiles within a few minutes. That is truly awesome power.
* There are several databases that allow you to precompute their data files in Hadoop, which makes
  them very well suited for serving the cache that you precomputed. I am currently using
  [Voldemort](http://www.project-voldemort.com/voldemort/) in read-only mode
  ([PDF research paper](http://static.usenix.org/events/fast12/tech/full_papers/Sumbaly.pdf)), but
  [HBase](http://hbase.apache.org/book/arch.bulk.load.html) and
  [ElephantDB](https://github.com/nathanmarz/elephantdb) can do this too.


TODO more stuff
---------------

I should make clear that this isn't a criticism of Rails specifically: probably the majority of
web apps are written this way, no matter what language or framework they use. It is comparatively
easy to read and write code in this style, and it works perfectly well for a great variety of
applications.


Advantages:

* Data fetching can be done in parallel, without burdening the business logic with complicated
  threading or callback spaghetti.
* Easier unit testing: you don't need to run a database, or stub out the database. You're just
  testing whether a function, given a certain input, produces an expected output. Easy.
