Six things I wish we had known about scaling
============================================

Looking back at the last few years of building [Rapportive](https://rapportive.com/) and
[LinkedIn Intro](http://engineering.linkedin.com/mobile/linkedin-intro-doing-impossible-ios),
I realised that there were a number of lessons that we had to learn the hard way. We built some
reasonably large data systems, and there are a few things I really wish we had known beforehand.

None of these lessons are particularly obscure -- they are all well-documented, if you know where to
look. They are the kind of things that make you think _"I can't believe I didn't know that, I'm so
stupid #facepalm"_ in retrospect. But perhaps I'm not the only one who started out not knowing these
things, so I'll write them down for the benefit of anyone else who finds themself having to scale
a system. 

The kind of system I'm talking about is the data backend of a consumer web/mobile app with a million
users (order of magnitude). At the scale of Google, LinkedIn, Facebook or Twitter (hundreds of
millions of users), you'll have an entirely different set of problems, but you'll also have a bigger
team of experienced developers and operations people around you. The mid-range scale of about
a million users is interesting, because it's quite feasible for a small startup team to get there
with some luck and good marketing skills. If that sounds like you, here are a few things to keep in
mind.

## 1. Database connections are a real limitation

In a database like PostgreSQL or MySQL, each client connection to the database is handled by
a separate unix process. That puts a fairly low limit on the number of connections you can have to
the database -- typically a few hundred. Every connection adds overhead, so the entire database
slows down, even if those connections aren't actively processing queries. For example, Heroku
Postgres limits you to 60 connections on the smallest plan, and 500 connections on the
[largest plan](https://devcenter.heroku.com/articles/heroku-postgres-plans#standard-tier),
although having anywhere near 500 connections is
[actively discouraged](https://postgres.heroku.com/blog/past/2013/11/22/connection_limit_guidance/).

In a fast-growing app, it doesn't take long before you reach a few hundred connections. Each
instance of your Rails (or whatever) app uses one, or even several if using a connection pool. Each
background worker that needs to access the database uses one. Adding more boxes running your
application is fairly easy if they are stateless, but every box you add means more connections.

Partitioning (sharding) and read replicas probably won't help you with your connection limit, unless
you can somehow load-balance requests so that all the requests for a particular partition are
handled by a particular server instance. A better bet is to use a
[connection pooler](https://wiki.postgresql.org/wiki/PgBouncer), or to write your own data access
layer which wraps database access behind an API.

That's all doable, but it doesn't seem a particularly valuable use of your time when you're also
trying to iterate on product features. And every additional service you deploy is another thing that
can go wrong, another thing that needs to be monitored and maintained.

## 2. Read replicas are an operational pain

A common architecture is to designate one database instance as a _leader_ (also known as _master_)
and to send all database writes to that instance. The writes are then replicated to other database
instances (called _read replicas_, _followers_ or _slaves_), and many read-only queries can be
served from the replicas, which takes load off the leader. This architecture is also good for fault
tolerance, since it gives you a _warm standby_ -- if your leader dies, you can quickly promote one
of the replicas to be the new leader (you wouldn't want to be offline for hours while you restore
the database from a backup).

What they don't tell you is that setting up and maintaining replicas is significant operational
pain. MySQL is particularly bad in this regard: in order to set up a new replica, you have to first
[lock the leader to stop all writes](http://dev.mysql.com/doc/refman/5.6/en/replication-howto-masterstatus.html)
and take a consistent snapshot (which may take hours on a large database). How does your app cope if
it can't write to the database? What do your users think?

With Postgres, you don't need to stop writes to set up a replica, but it's still
[some hassle](http://www.postgresql.org/docs/current/static/warm-standby.html). One of the things
I like most about [Heroku Postgres](https://www.heroku.com/postgres) is that it wraps all the
complexity of replication behind a straightforward command-line tool.

Even so, you still need to failover manually if your leader fails. You need to monitor and maintain
the replicas. Your database library may not support read replicas out of the box, so you may need to
add that. Some reads need to be made on the leader, so that a user sees their own writes, even if
there is replication lag. That's all doable, but it's additional complexity, and doesn't add any
value from users' point of view.

## 3. Data evolution is difficult

Being able to rapidly respond to change is one of the biggest advantages of a small startup. Agility
in product and process means you also need the freedom to change your mind about the structure of
your code and data. There is lot of talk about making code easy to change, eg. with good automated
tests. But what about changing the structure of your data?

Schema changes have a reputation of being very painful, a reputation that is chiefly MySQL's fault:
simply adding a column to a table requires the
[entire table to be copied](http://dev.mysql.com/doc/refman/5.6/en/alter-table.html). On a large
table, that might mean several hours during which you can't write to the table. Various
[tools](http://www.percona.com/doc/percona-toolkit/2.2/pt-online-schema-change.html)
[exist](https://github.com/soundcloud/lhm) to make that less painful, but it's still ridiculous.

Postgres can make simple schema changes without copying the table, which means they are almost
instant. And of course the avoidance of schema changes is a primary selling point of document
databases such as MongoDB (so it's up to application code to deal with a database that uses
different schemas for different documents). But simple schema changes, such as adding a new field or
two, don't tell the entire story.

Not all your data is in databases; some might be in archived log files or some kind of blob storage.
How do you deal with that? And sometimes you need to make big changes to the data, such as breaking
a large thing apart or combining several small things; standard tools don't help much here. We've
written large migration jobs that process chunks of the data gradually over the course of a weekend,
retry failed chunks, track which things were modified while the migration was happening, and finally
catch up on the missed updates. A whole lot of complexity just for a one-off data migration.
Sometimes that's unavoidable, but it's heavy lifting that you'd rather not have to do in the first
place.

Hadoop data pipelines can help with this sort of thing, but now you have to set up a Hadoop cluster,
learn how to use it, figure out how to get your data into it, and figure out how to get the
transformed data out to your live systems again. Big companies like LinkedIn have figured out how to
do that, but in a small team it can be a massive time-sink.

## 4. Think about memory efficiency

At various times, we puzzled about weird latency spikes in our database activity. After many
[PagerDuty](http://www.pagerduty.com/) alerts and troubleshooting, it usually turned out that we
could fix the issue by throwing more RAM at the problem, either in the form of a bigger database
instance, or separate caches in front of it. It's sad, but true: many performance problems can be
solved by simply buying more RAM. And if you're in a hurry because your hair is on fire, it's often
the best thing to do. There are limitations to that approach, of course -- a m2.4xlarge instance on
EC2 costs quite a bit of money, and eventually there are no bigger machines to turn to. 

Besides buying more RAM, an effective solution is to use RAM more efficiently in the first place, so
that a bigger part of your dataset fits in RAM. In order to decide where to optimise, you need to
know what all your memory is being used for -- and that's actually surprisingly non-trivial. With
a bit of digging, you can usually get your database to report how much disk space each of your
tables and indexes is taking. Figuring out the working set, and how much memory is actually used
for what, is harder.

As a rule of thumb, your performance will probably be more predictable if your indexes completely
fit in RAM -- so that there's a maximum of one disk read per query, which reduces your exposure to
fluctuations in I/O latency. But indexes can get rather large if you have a lot of data, so this can
be an expensive proposition.

At one point we found ourselves reading up about the internal structure of an index in Postgres, and
realised that we could save a few bytes per row by indexing on the hash of a string column rather
than the string itself. (More on that in another post.) That reduced the memory pressure on the
system, and helped keep things ticking along for another few months. That's just one example of how
it can be helpful to think about using memory efficiently.

## 5. Realistic load testing is hard

Improving the performance of a system is ideally a very scientific process. You have in your head
a model of what your system is doing, and a theory of where the expensive operations are. You
propose a change to the system, and predict what the outcome will be. Then you make the change,
observe the system's behaviour under laboratory conditions, and thus gather evidence which either
confirms or contradicts your theory. That way you iterate your way to a better theory, and also
a better-performing implementation.

Sadly, we hardly ever managed to do it that way in practice. If we were optimising a microbenchmark,
running the same code a million times in a tight loop, it would be easy. But we are dealing with
large volumes of data, spread out across multiple machines. If you read the same item a million
times in a loop, it will simply be cached, and the load test tells you nothing. If you want
meaningful results, the load test needs to simulate a realistically large working set, a realistic
mixture of reads and writes, realistic distribution of requests over time, and so on. And that is
difficult.

It's difficult enough to simply _know_ what your access patterns actually are, let alone simulate
them. You can do some statistical analysis of your access logs (to determine something like _"x% of
requests are for y% of the items in the database"_). Then you can generate a reasonably
representative load of artificial requests, and run it against a copy of your real dataset.
Simulating writes is harder, as you may need to account for business logic rules (e.g. a sequential
workflow must first update A, then update B, then update C) and deal with changes that can happen
only once (if your write changes state from D to E, you can't change from D to E again later in the
test, as you're already in state E).

Even harder if you want to test with a dataset that is larger than the one you actually have (so
that you can find out what happens when you double your userbase). Now you have to work out the
statistical properties of your dataset (the distribution of friends per user is a power law with
x parameters, the correlation between one user's number of friends and the number of friends that
their friends have is y, etc) and generate a synthetic dataset with those parameters. You are now
in deep, deep yak shaving territory. Step back from that yak.

In practice, it hardly ever works that way. We're lucky if, sometimes, we can run the old code and
the new code side-by-side, and observe how they perform in comparison. Often, not even that is
possible. Usually we often just cross our fingers, deploy, and roll back if the change seems to have
made things worse. That is deeply unsatisfying for a scientifically-minded person, but it more or
less gets the job done.

## 6. Change capture is under-appreciated

So far I've only talked about things that suck -- sorry about the negativity. As final point, I'd
like to mention a technique which is awesome, but not nearly as widely known and appreciated as it
should be: _change capture_.

The idea of change capture is simple: let the application consume a feed of all writes to the
database. You could achieve a similar thing if, every time you write something to the database, you
also post it to a message queue. However, change capture is better because it contains exactly what
was committed to the database (avoiding race conditions). A good change capture system also allows
you to stream through the entire existing dataset, and then switch to consuming real-time updates
when it has caught up.

Consumers of this changelog are decoupled from the app that generates the writes, which gives you
great freedom to experiment without fear of bringing down the main site. You can use the changelog
for updating and invalidating caches, for maintaining full-text indexes, for calculating analytics,
for sending out emails and push notifications, for importing the data into Hadoop, and
[much more](http://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying).

LinkedIn built a technology called [Databus](http://www.socc2012.org/s18-das.pdf?attredirects=0) to
do this. The [open source release of Databus](https://github.com/linkedin/databus) is for Oracle DB,
and there is a proof-of-concept [MySQL version](https://github.com/linkedin/databus/wiki/Databus-for-MySQL)
(which is different from the version of Databus for MySQL that LinkedIn uses in production).

The new project I am working on, [Apache Samza](http://samza.incubator.apache.org/), also sits
squarely in this space -- it is a framework for processing real-time data feeds, somewhat like
MapReduce for streams. I am excited about it because I think this pattern of processing change
capture streams can help many people build apps that scale better, are easier to maintain and more
reliable than many apps today.

## In conclusion

There are no easy answers to these questions. Some new technologies and services can help --
for example, the new generation of distributed datastores tries to solve some of the above problems
(especially around automating replication and failover), but they have other limitations. There
certainly is no panacea.

Personally I'm totally fine with using new and experimental tools for derived data, such as caches
and analytics, where data loss is annoying but not end of your business. I'm more cautious with the
system of record (also known as _source of truth_). Every system has operational quirks, and you can
sleep better at night with a the devil you know, than the one you don't, whatever that devil may be
in your case.

I'm interested to see whether database-as-a-service offerings such as
[Firebase](https://www.firebase.com/), [Orchestrate](http://orchestrate.io/) or
[Fauna](https://fauna.org/) can help (I've not used any of them seriously, so I can't vouch them at
this point). I see big potential advantages for small teams in outsourcing operations, but also
a big potential risk in locking yourself to a system that you couldn't choose to host yourself if
necessary.

Building scalable systems is not all sexy roflscale fun. It's a lot of plumbing and yak shaving.
A lot of hacking together tools that really ought to exist already, but all the open source
solutions out there are too bad (and yours ends up bad too, but at least it solves your particular
problem).

On the other hand, if you have these sort of problems, consider yourself lucky. If you've got
scaling problems, you must be doing something right -- you must be making something that people
want.
