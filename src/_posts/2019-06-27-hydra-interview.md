---
layout: ync-post
title: Figuring out the future of distributed data systems
---

*I will be [speaking](/2019/07/11/hydra-distributed.html) at the
[Hydra distributed computing conference](https://hydraconf.com) in St. Petersburg in July 2019.
In the run-up to the conference, I did a long interview with
[Vadim Tsesko](http://twitter.com/incubos), a lead software engineer at
[Odnoklassniki](https://ok.ru).
We covered lots of interesting topics in this interview, and so I requested permission to
re-publish it on my own blog as well.*

*This interview was [originally published by Hydra](https://medium.com/@hydraconference/the-big-interview-with-martin-kleppmann-figuring-out-the-future-of-distributed-data-systems-28a680d99ae6).
It has also been [translated into Russian](https://habr.com/ru/company/jugru/blog/457736/).*


Contents:
---------

* [Moving from business to academic research](#moving-from-business-to-academic-research)
* [Designing Data-Intensive Applications](#designing-data-intensive-applications)
* [Common sense against artificial hype and aggressive marketing](#common-sense-against-artificial-hype-and-aggressive-marketing)
* [Pitfalls of CAP theorem and other industry mistakes](#pitfalls-of-cap-theorem-and-other-industry-mistakes)
* [Benefits of decentralization](#benefits-of-decentralization)
* [Blockchains, Dat, IPFS, Filecoin, WebRTC](#blockchains-dat-ipfs-filecoin-webrtc)
* [New CRDTs. Formal verification with Isabelle](#new-crdts-formal-verification-with-isabelle)
* [Event sourcing and Apache Kafka](#event-sourcing-and-apache-kafka)
* [Integrating storage systems: PostgreSQL, Memcached, Redis, Elasticsearch](#integrating-storage-systems-postgresql-memcached-redis-elasticsearch)
* [Distributed transactions and recovering from bugs](#distributed-transactions-and-recovering-from-bugs)
* [Professional growth and development](#professional-growth-and-development)


Moving from business to academic research
-----------------------------------------

**Vadim**: The first question I would like to ask you is really important for me. You founded Go
Test It and Rapportive, and you had been designing and engineering large-scale systems at LinkedIn
for a while. Then you decided to switch from industrial engineering to academia. Could you please
explain the motivation for that decision? What have you gained and what have you had to sacrifice?

**Martin**: It’s been a very interesting process. As you seem to be hinting at, not many people make
the switch in that direction. A lot of people go from academia to industry, but not so many back.
Which is understandable, because I had to take quite a large pay cut in order to go back to
academia. But what I really love about research is the freedom to work on topics that I find
interesting and that I think are important, even if those topics don’t immediately lead to
a commercially viable product within the next 6 months or so. Of course, at a company the stuff you
build needs to turn into a product that can be sold in some form or another.

On the other hand, the things I’m now working on are topics that are really important for the future
of how we build software and how the internet works. But we don’t really understand these topics
well enough yet to go and start building commercial products: we are still at the level of trying to
figure out, fundamentally, what these technologies need to look like. And since this is fundamental
research I realized it’s better to do this at a university than to try to do it at a company,
because at a university I’m free to work on things that might not become commercially viable for
another ten years, and that is OK. It’s OK to work with a much longer time horizon when you’re in
research.

Designing Data-Intensive Applications
-------------------------------------

**Vadim**: We’ll definitely get back to your current research interests. Meanwhile let’s talk about
your latest book [Designing Data-Intensive Applications](https://dataintensive.net). I’m a big fan
of your book and I believe it’s one of the best guides for building modern distributed systems.
You’ve covered almost all the notable achievements up to date.

**Martin**: Thank you, I’m glad you find it useful.

**Vadim**: Just for those unlucky readers who haven’t read your book yet, could you please name
several major achievements in the field of distributed systems nowadays?

**Martin**: Well, the goal of the book is not so much to explain one particular technology; the goal
is rather to give you a guide to the entire landscape of different systems that are used for storing
and processing data. There are so many different databases, stream processors, batch processing
tools, all sorts of replication tools and so on, and it’s really hard to get an overview. If you’re
trying to build a particular application it’s really hard to know which database you should use, and
which tools are the most appropriate ones for the problem you’re trying to solve.

A lot of existing computing books simply didn’t answer that problem in a satisfactory way. I found
that if you’re reading a book on Cassandra for example, it would tell you why Cassandra is
wonderful, but it generally wouldn’t tell you about things for which it’s not a good fit. So what
I really wanted to do in this book was to identify the main questions that you need to ask yourself
if you’re trying to build some kind of large-scale system. And through answering those questions you
can then help figure out which technologies are appropriate and which are less appropriate for the
particular problem you’re trying to solve — because, in general, there’s no one technology that is
perfect for everything. And so, the book is trying to help you figure out the pros and cons of
different technologies in different settings.

Common sense against artificial hype and aggressive marketing
-------------------------------------------------------------

**Vadim**: Indeed, often — if not always — there are many technologies with overlapping functions,
features and data models. And you can’t believe all those marketing buzzwords. You need to read the
white papers to learn the internals, and even try to read the source code to understand how it works
exactly.

**Martin**: And I found that you often have to read between the lines because often the
documentation doesn’t really tell you for which things a particular database sucks. The truth is
that every database sucks at some kind of workload, the question is just to know which ones they
are. So yes, sometimes you have to read the deployment guidelines for ops people and try to
reverse-engineer from that what is actually going on in the system.

**Vadim**: Don’t you feel that the industry lacks the common vocabulary or a set of criteria to
compare different solutions for the same problem? Similar things are called by different names, some
things are omitted which should always be clear and stated explicitly, like transaction guarantees.
What do you think?

**Martin**: Yeah, I think a problem that our industry has is that often, when people talk about a
particular tool, there’s a lot of hype about everything. Which is understandable, because the tools
are made by various companies, and obviously those companies want to promote their products, and so
those companies will send people to conferences to speak about how wonderful their product is,
essentially. It will be disguised as a tech talk, but essentially it’s still a sales activity. As an
industry, we really could do with more honesty about the advantages and disadvantages of some
product. And part of that requires a common terminology, because otherwise you simply can’t compare
things on an equal footing. But beyond a shared terminology we need ways of reasoning about things
that certain technologies are good or bad at.

Pitfalls of CAP theorem and other industry mistakes
---------------------------------------------------

**Vadim**: My next question is quite a controversial one. Could you please name any major mistakes
in the industry you have stumbled upon during your career? Maybe overvalued technologies or
widely-practiced solutions we should have got rid of a long time ago? It might be a bad example, but
compare JSON over HTTP/1.1 vs the much more efficient gRPC over HTTP/2. Or is there an alternative
point of view?

**Martin**: I think in many cases there are very good reasons for why a technology does one thing
and not another. So I’m very hesitant to call things mistakes, because in most cases it’s a question
of trade-offs. In your example of JSON over HTTP/1.1 versus Protocol Buffers over HTTP/2, I think
there are actually quite reasonable arguments for both sides there. For example, if you want to use
Protocol Buffers, you have to define your schema, and a schema can be a wonderful thing because it
helps document exactly what communication is going on. But some people find schemas annoying,
especially if they’re at early stages of development and they’re changing data formats very
frequently. So there you have it, there’s a question of trade-offs; in some situations one is
better, in others the other is better.

In terms of actual mistakes that I feel are simply bad, there’s only a fairly small number of
things. One opinion that I have is that the CAP Theorem is fundamentally bad and just not useful.
Whenever people use the CAP Theorem to justify design decisions, I think often they are either
misinterpreting what CAP is actually saying, or stating the obvious in a way. CAP as a theorem has a
problem that it is really just stating the obvious. Moreover, it talks about just one very narrowly
defined consistency model, namely linearizability, and one very narrowly defined availability model,
which is: you want every replica to be fully available for reads and writes, even if it cannot
communicate with any other replicas. These are reasonable definitions, but they are very narrow, and
many applications simply do not fall into the case of needing precisely that definition of
consistency or precisely that definition of availability. And for all the applications that use a
different definition of those words, the CAP Theorem doesn’t tell you anything at all. It’s simply
an empty statement. So that, I feel, is a mistake.

And while we’re ranting, if you’re asking me to name mistakes, another big mistake that I see in the
tech industry is the mining of cryptocurrencies, which I think is such an egregious waste of
electricity. I just cannot fathom why people think that is a good idea.

**Vadim**: Talking about the CAP Theorem, many storage technologies are actually tunable, in terms
of things like AP or CP. You can choose the mode they operate in.

**Martin**: Yes. Moreover, there are many technologies which are neither consistent nor available
under the strict definition of the CAP Theorem. They are literally just P! Not CP, not CA, not AP,
just P. Nobody says that, because that would look bad, but honestly, this could be a perfectly
reasonable design decision to make. There are many systems for which that is actually totally fine.
This is actually one of the reasons why I think that CAP is such an unhelpful way of talking about
things: because there is a huge part of the design space that it simply does not capture, where
there are perfectly reasonable good designs for software that it simply doesn’t allow you to talk
about.

Benefits of decentralization
----------------------------

**Vadim**: Talking about data-intensive applications today, what other major challenges, unsolved
problems or hot research topics can you name? As far as I know, you’re a major proponent of
decentralized computation and storage.

**Martin**: Yes. One of the theses behind my research is that at the moment we rely too much on
servers and centralization. If you think about how the Internet was originally designed back in the
day when it evolved from ARPANET, it was intended as a very resilient network where packets could be
sent via several different routes, and they would still get to the destination. And if a nuclear
bomb hit a particular American city, the rest of the network would still work because it would just
route around the failed parts of the system. This was a Cold War design.

And then we decided to put everything in the cloud, and now basically everything has to go via one
of AWS’s datacenters, such as us-east-1 somewhere in Virginia. We’ve taken away this ideal of being
able to decentrally use various different parts of the network, and we’ve put in these servers that
everything relies on, and now it’s extremely centralized. So I’m interested in decentralization, in
the sense of moving some of the power and control over data away from those servers and back to the
end users.

One thing I want to add in this context is that a lot of people talking about decentralization are
talking about things like cryptocurrencies, because they are also attempting a form of
decentralization whereby control is moved away from a central authority like a bank and into a
network of cooperating nodes. But that’s not really the sort of decentralization that I’m interested
in: I find that these cryptocurrencies are actually still extremely centralized, in the sense that
if you want to make a Bitcoin transaction, you have to make it on the Bitcoin network — you have to
use the network of Bitcoin, so everything is centralized on that particular network. The way it’s
built is decentralized in the sense that it doesn’t have a single controlling node, but the network
as a whole is extremely centralized in that any transaction you have to make you have to do through
this network. You can’t do it in some other way. I feel that it’s still a form of centralization.

In the case of a cryptocurrency this centralization might be inevitable, because you need to do
stuff like avoid double spending, and doing that is difficult without a network that achieves
consensus about exactly which transactions have happened and which have not. And this is exactly
what the Bitcoin network does. But there are many applications that do not require something like a
blockchain, which can actually cope with a much more flexible model of data flowing around the
system. And that’s the type of decentralized system that I’m most interested in.

Blockchains, Dat, IPFS, Filecoin, WebRTC
----------------------------------------

**Vadim**: Could you please name any promising or undervalued technologies in the field of
decentralized systems apart from blockchain? I have been using IPFS for a while.

**Martin**: For IPFS, I have looked into it a bit though I haven’t actually used it myself. We’ve
done some work with the [Dat](https://dat.foundation/) project, which is somewhat similar to
[IPFS](https://ipfs.io/) in the sense that it is also a decentralized storage technology. The
difference is that IPFS has [Filecoin](https://filecoin.io/), a cryptocurrency, attached to it as a
way of paying for storage resources, whereas Dat does not have any blockchain attached to it — it is
purely a way of replicating data across multiple machines in a P2P manner.

For the project that I’ve been working on, Dat has been quite a good fit, because we wanted to build
collaboration software in which several different users could each edit some document or database,
and any changes to that data would get sent to anyone else who needs to have a copy of this data. We
can use Dat to do this replication in a P2P manner, and Dat takes care of all the networking-level
stuff, such as NAT traversal and getting through firewalls — it’s quite a tricky problem just to get
the packets from one end to the other. And then we built a layer on top of that, using CRDTs, which
is a way of allowing several people to edit some document or dataset and to exchange those edits in
an efficient way. I think you can probably build this sort of thing on IPFS as well: you can
probably ignore the Filecoin aspect and just use the P2P replication aspect, and it will probably do
the job just as well.

**Vadim**: Sure, though using IPFS might lead to lower responsiveness, because WebRTC underlying Dat
connects P2P nodes directly, and IPFS works like a distributed hash table thing.

**Martin**: Well, WebRTC is at a different level of the stack, since it’s intended mostly for
connecting two people together who might be having a video call; in fact, the software we’re using
for this interview right now may well be using WebRTC. And WebRTC does give you a data channel that
you can use for sending arbitrary binary data over it, but building a full replication system on top
of that is still quite a bit of work. And that’s something that Dat or IPFS do already.

You mentioned responsiveness — that is certainly one thing to think about. Say you wanted to build
the next Google Docs in a decentralized way. With Google Docs, the unit of changes that you make is
a single keystroke. Every single letter that you type on your keyboard may get sent in real time to
your collaborators, which is great from the point of view of fast real-time collaboration. But it
also means that over the course of writing a large document you might have hundreds of thousands of
these single-character edits that accumulate, and a lot of these technologies right now are not very
good at compressing this kind of editing data. You can keep all of the edits that you’ve ever made
to your document, but even if you send just a hundred bytes for every single keystroke that you make
and you write a slightly larger document with, say, 100,000 keystrokes, you suddenly now have 10 MB
of data for a document that would only be a few tens of kilobytes normally. So we have this huge
overhead for the amount of data that needs to be sent around, unless we get more clever at
compressing and packaging up changes.

Rather than sending somebody the full list of every character that has ever been typed, we might
just send the current state of the document, and after that we send any updates that have happened
since. But a lot of these peer-to-peer systems don’t yet have a way of doing those state snapshots
in a way that would be efficient enough to use them for something like Google Docs. This is actually
an area I’m actively working on, trying to find better algorithms for synchronizing up different
users for something like a text document, where we don’t want to keep every single keystroke because
that would be too expensive, and we want to make more efficient use of the network bandwidth.

New CRDTs. Formal verification with Isabelle
--------------------------------------------

**Vadim**: Have you managed to compress that keystroke data substantially? Have you invented new
CRDTs or anything similar?

**Martin**: Yes. So far we only have prototypes for this, it’s not yet fully implemented, and we
still need to do some more experiments to measure how efficient it actually is in practice. But we
have developed some compression schemes that look very promising. In my prototype I reduced it from
about 100 bytes per edit to something like 1.7 bytes of overhead per edit. And that’s a lot more
reasonable of course. But as I say, these experiments are still ongoing, and the number might still
change slightly. But I think the bottom line is that there’s a lot of room there for optimization
still, so we can still make it a lot better.

**Vadim**: So this is what [your talk](https://hydraconf.com/2019/talks/6i4lkw8pwjnadgff5ylr11/)
will be about at the Hydra conference, am I right?

**Martin**: Yes, exactly. I’ll give a quick introduction to the area of CRDTs, collaborative
software and some of the problems that arise in that context. Then I’ll describe some of the
research that we’ve been doing in this area. It’s been quite fun because the research we’ve been
doing has been across a whole range of different concerns. On the very applied side, we’ve got a
JavaScript implementation of these algorithms, and we’re using that to build real pieces of
software, trying to use that software ourselves to see how it behaves. On the other end of the
spectrum, we’ve been working with formal methods to prove these algorithms correct, because some of
these algorithms are quite subtle and we want to be very sure that the systems we’re making are
actually correct, i.e. that they always reach a consistent state. There have been a lot of
algorithms in the past that have actually failed to do that, which were simply wrong, that is, in
certain edge cases, they would remain permanently inconsistent. And so, in order to avoid these
problems that algorithms have had in the past, we’ve been using formal methods to prove our
algorithms correct.

**Vadim:** Wow. Do you really use theorem provers, like Coq or Isabelle or anything else?

**Martin**: Exactly, we’ve been using Isabelle for that.

> You can attend
> [Martin’s talk](https://thestrangeloop.com/2019/correctness-proofs-of-distributed-systems-with-isabelle.html)
> “Correctness proofs of distributed systems with Isabelle” at The Strange Loop conference in September.

**Vadim**: Sounds great! Are those proofs going to be published?

**Martin**: Yes, our first set of proofs is already public. We
[published](https://martin.kleppmann.com/papers/crdt-isabelle-oopsla17.pdf) that a year and a half
ago: it was a framework for verifying CRDTs, and we verified three particular CRDTs within that
framework, the main one of which was RGA ([Replicated Growable
Array](http://csl.skku.edu/papers/jpdc11.pdf)), which is a CRDT for collaborative text editing.
While it is not very complicated, it is quite a subtle algorithm, and so it’s a good case where
proof is needed, because it’s not obvious just from looking at it that it really is correct. And so
the proof gives us the additional certainty that it really is correct. Our previous work there was
on verifying a couple of existing CRDTs, and our most recent work in this area is about our own
CRDTs for new data models we’ve been developing, and proving our own CRDTs correct as well.

**Vadim**: How much larger is the proof compared to the description of the algorithm? Because it can
be a problem sometimes.

**Martin**: Yes, that is a problem — the proofs are often a lot of work. I think in our latest
example… Actually, let me have a quick look at the code. The description of the algorithm and the
data structures is about 60 lines of code. So it’s quite a small algorithm. The proof is over 800
lines. So we’ve got roughly 12:1 ratio between the proof and the code. And that is unfortunately
quite typical. The proof is a large amount of additional work. On the other hand, once we have the
proof, we have gained very strong certainty in the correctness of the algorithm. Moreover, we have
ourselves, as humans, understood the algorithm much better. Often I find that through trying to
formalize it, we end up understanding the thing we’re trying to formalize much better than we did
before. And that in itself is actually a useful outcome from this work: besides the proof itself we
gain a deeper understanding, and that is often very helpful for creating better implementations.

**Vadim**: Could you please describe the target audience of your talk, how hardcore is it going to
be? What is the preliminary knowledge you expect the audience to have?

**Martin**: I like to make my talks accessible with as little previous knowledge requirement as
possible, and I try to lift everybody up to the same level. I cover a lot of material, but I start
at a low base. I would expect people to have some general distributed systems experience: how do you
send some data over a network using TCP, or maybe a rough idea of how Git works, which is quite a
good model for these things. But that’s about all you need, really. Then, understanding the work
we’ve been doing on top of that is actually not too difficult. I explain everything by example,
using pictures to illustrate everything. Hopefully, everybody will be able to follow along.

Event sourcing and Apache Kafka
-------------------------------

**Vadim**: Sounds really great. Actually, we have some time and I would like to discuss one of your
[recent articles](https://queue.acm.org/detail.cfm?id=3321612) about online event processing. You’re
a great supporter of the idea of event sourcing, is that correct?

**Martin**: Yes, sure.

**Vadim**: Nowadays this approach is getting momentum, and in the pursuit of all the advantages of
globally ordered log of operations, many engineers try to deploy it everywhere. Could you please
describe some cases where event sourcing is not the best option? Just to prevent its misuse and
possible disappointment with the approach itself.

**Martin**: There are two different layers of the stack that we need to talk about first. Event
sourcing, as proposed by Greg Young and some others, is intended as a mechanism for data modeling,
that is: if you have a database schema and you’re starting to lose control of it because there are
so many different tables and they’re all getting modified by different transactions — then event
sourcing is a way of bringing better clarity to this data model, because the events can express very
directly what is happening at a business level. What is the action that the user took? And then, the
consequences of that action might be updating various tables and so on. Effectively, what you’re
doing with event sourcing is you’re separating out the action (the event) from its effects, which
happen somewhere downstream.

I’ve come to this area from a slightly different angle, which is a lower-level point of view of
using systems like Kafka for building highly scalable systems. This view is similar in the sense
that if you’re using something like Kafka you are using events, but it doesn’t mean you’re
necessarily using event sourcing. And conversely, you don’t need to be using Kafka in order to do
event sourcing; you could do event sourcing in a regular database, or you could use a special
database that was designed specifically for event sourcing. So these two ideas are similar, but
neither requires the other, they just have some overlap.

The case for wanting to use a system like Kafka is mostly the scalability argument: in that case
you’ve simply got so much data coming in that you cannot realistically process it on a single-node
database, so you have to partition it in some way, and using an event log like Kafka gives you a
good way of spreading that work over multiple machines. It provides a good, principled way for
scaling systems. It’s especially useful if you want to integrate several different storage systems.
So if, for example, you want to update not just your relational database but also, say, a full-text
search index like Elasticsearch, or a caching system like Memcached or Redis or something like that,
and you want one event to have an updating effect on all of these different systems, then something
like Kafka is very useful.

In terms of the question you asked (what are the situations in which I would not use this event
sourcing or event log approach) — I think it’s difficult to say precisely, but as a rule of thumb I
would say: use whatever is the simplest. That is, whatever is closest to the domain that you’re
trying to implement. And so, if the thing you’re trying to implement maps very nicely to a
relational database, in which you just insert and update and delete some rows, then just use a
relational database and insert and update and delete some rows. There’s nothing wrong with
relational databases and using them as they are. They have worked fine for us for quite a long time
and they continue to do so. But if you’re finding yourself in a situation where you’re really
struggling to use that kind of database, for example because the complexity of the data model is
getting out of hand, then it makes sense to switch to something like an event sourcing approach.

And similarly, on the lower level (scalability), if the size of your data is such that you can just
put it in PostgreSQL on a single machine — that’s probably fine, just use PostgreSQL on a single
machine. But if you’re at the point where there is no way that a single machine can handle your
load, you have to scale across a large system, then it starts making sense to look into more
distributed systems like Kafka. I think the general principle here is: use whatever is simplest for
the particular task you’re trying to solve.

Integrating storage systems: PostgreSQL, Memcached, Redis, Elasticsearch
------------------------------------------------------------------------

**Vadim**: It’s really good advice. As your system evolves you can’t precisely predict the direction
of development, all the queries, patterns and data flows.

**Martin**: Exactly, and for those kinds of situations relational databases are amazing, because
they are very flexible, especially if you include the JSON support that they now have. PostgreSQL
now has pretty good support for JSON. You can just add a new index if you want to query in a
different way. You can just change the schema and keep running with the data in a different
structure. And so if the size of the data set is not too big and the complexity is not too great,
relational databases work well and provide a great deal of flexibility.

**Vadim**: Let’s talk a little bit more about event sourcing. You mentioned an interesting example
with several consumers consuming events from one queue based on Kafka or something similar. Imagine
that new documents get published, and several systems are consuming events: a search system based on
Elasticsearch, which makes the documents searchable, a caching system which puts them into key-value
cache based on Memcached, and a relational database system which updates some tables accordingly. A
document might be a car selling offer or a realty advert. All these consuming systems work
simultaneously and concurrently.

**Martin**: So your question is how do you deal with the fact that if you have these several
consumers, some of them might have been updated, but the others have not yet seen an update and are
still lagging behind slightly?

**Vadim**: Yes, exactly. A user comes to your website, enters a search query, gets some search
results and clicks a link. But she gets 404 HTTP status code because there is no such entity in the
database, which hasn’t been able to consume and persist the document yet.

**Martin**: Yes, this is a bit of a challenge actually. Ideally, what you want is what we would call
“causal consistency” across these different storage systems. If one system contains some data that
you depend on, then the other systems that you look at will also contain those dependencies.
Unfortunately, putting together that kind of causal consistency across different storage
technologies is actually very hard, and this is not really the fault of event sourcing, because no
matter what approach or what system you use to send the updates to the various different systems,
you can always end up with some kind of concurrency issues.

In your example of writing data to both Memcached and Elasticsearch, even if you try to do the
writes to the two systems simultaneously you might have a little bit of network delay, which means
that they arrive at slightly different times on those different systems, and get processed with
slightly different timing. And so somebody who’s reading across those two systems may see an
inconsistent state. Now, there are some research projects that are at least working towards
achieving that kind of causal consistency, but it’s still difficult if you just want to use
something like Elasticsearch or Memcached or so off the shelf.

A good solution here would be that you get presented, conceptually, with a consistent point-in-time
snapshot across both the search index and the cache and the database. If you’re working just within
a relational database, you get something called snapshot isolation, and the point of snapshot
isolation is that if you’re reading from the database, it looks as though you’ve got your own
private copy of the entire database. Anything you look at in the database, any data you query will
be the state as of that point in time, according to the snapshot. So even if the data has afterwards
been changed by another transaction, you will actually see the older data, because that older data
forms part of a consistent snapshot.

And so now, in the case where you’ve got Elasticsearch and Memcached, really what you would ideally
want is a consistent snapshot across these two systems. But unfortunately, neither Memcached nor
Redis nor Elasticsearch have an efficient mechanism for making those kinds of snapshots that can be
coordinated with different storage systems. Each storage system just thinks for itself and typically
presents you the latest value of every key, and it doesn’t have this facility for looking back and
presenting a slightly older version of the data, because the most recent version of the data is not
yet consistent.

I don’t really have a good answer for what the solution would look like. I fear that the solution
would require code changes to any of the storage systems that participate in this kind of thing. So
it will require changes to Elasticsearch and to Redis and to Memcached and any other systems. And
they would have to add some kind of mechanism for point-in-time snapshots that is cheap enough that
you can be using it all the time, because you might be wanting the snapshot several times per second
— it’s not just a once-a-day snapshot, it’s very fine-grained. And at the moment the underlying
systems are not there in terms of being able to do these kinds of snapshots across different storage
systems. It’s a really interesting research topic. I’m hoping that somebody will work on it, but I
haven’t seen any really convincing answers to that problem yet so far.

Distributed transactions and recovering from bugs
-------------------------------------------------

**Vadim**: Yeah, we need some kind of shared [Multiversion Concurrency
Control](https://en.wikipedia.org/wiki/Multiversion_concurrency_control).

**Martin**: Exactly, like the distributed transaction systems. XA distributed transactions will get
you some of the way there, but unfortunately XA, as it stands, is not really very well suited
because it only works if you’re using locking-based concurrency control. This means that if you read
some data, you have to take a lock on it so that nobody can modify that data while you have that
lock. And that kind of locking-based concurrency control has terrible performance, so no system
actually uses that in practice nowadays. But if you don’t have that locking then you don’t get the
necessary isolation behavior in a system like XA distributed transactions. So maybe what we need is
a new protocol for distributed transactions that allows snapshot isolation as the isolation
mechanism across different systems. But I don’t think I’ve seen anything that implements that yet.

**Vadim**: Yes, I hope somebody is working on it.

**Martin**: Yes, it would be really important. Also in the context of microservices, for example:
the way that people promote that you should build microservices is that each microservice has its
own storage, its own database, and you don’t have one service directly accessing the database of
another service, because that would break the encapsulation of the service. Therefore, each service
just manages its own data.

For example, you have a service for managing users, and it has a database for the users, and
everyone else who wants to find out something about users has to go through the user service. From
the point of view of encapsulation that is nice: you’re hiding details of the database schema from
the other services for example.

But from the point of view of consistency across different services — well, you’ve got a huge
problem now, because of exactly the thing we were discussing: we might have data in two different
services that depends upon each other in some way, and you could easily end up with one service
being slightly ahead of or slightly behind the other in terms of timing, and then you could end up
with someone who reads across different services, getting inconsistent results. And I don’t think
anybody building microservices currently has an answer to that problem.

**Vadim**: It is somewhat similar to workflows in our society and government, which are inherently
asynchronous and there are no guarantees of delivery. You can get your passport number, then you can
change it, and you need to prove that you changed it, and that you are the same person.

**Martin**: Yes, absolutely. As humans we have ways of dealing with this, for example, we might know
that oh, sometimes that database is a bit outdated, I’ll just check back tomorrow. And then tomorrow
it’s fine. But if it’s software that we’re building, we have to program all that kind of handling
into the software. The software can’t think for itself.

**Vadim**: Definitely, at least not yet. I have another question about the advantages of event
sourcing. Event sourcing gives you the ability to stop processing events in case of a bug, and
resume consuming events having deployed the fix, so that the system is always consistent. It’s a
really strong and useful property, but it might not be acceptable in some cases like banking where
you can imagine a system that continues to accept financial transactions, but the balances are stale
due to suspended consumers waiting for a bugfix from developers. What might be a workaround in such
cases?

**Martin**: I think it’s a bit unlikely to stop the consumer, deploying the fix and then restart it,
because, as you say, the system has got to continue running, you can’t just stop it. I think what is
more likely to happen is: if you discover a bug, you let the system continue running, but while it
continues running with the buggy code, you produce another version of the code that is fixed, you
deploy that fixed version separately and run the two in parallel for a while. In the fixed version
of the code you might go back in history and reprocess all of the input events that have happened
since the buggy code was deployed, and maybe write the results to a different database. Once you’ve
caught up again you’ve got two versions of the database, which are both based on the same event
inputs, but one of the two processed events with the buggy code and the other processed the events
with the correct code. At that point you can do the switchover, and now everyone who reads the data
is going to read the correct version instead of the buggy version, and you can shut down the buggy
version. That way you never need to stop the system from running, everything keeps working all the
time. And you can take the time to fix the bug, and you can recover from the bug because you can
reprocess those input events again.

**Vadim**: Indeed, it’s a really good option if the storage systems are under your control, and we
are not talking about side effects applied to external systems.

**Martin**: Yes, you’re right, once we send the data to external systems it gets more difficult
because you might not be able to easily correct it. But this is again something you find in
financial accounting, for example. In a company, you might have quarterly accounts. At the end of
the quarter, everything gets frozen, and all of the revenue and profit calculations are based on the
numbers for that quarter. But then it can happen that actually, some delayed transaction came in,
because somebody forgot to file a receipt in time. The transaction comes in after the calculations
for the quarter have been finalized, but it still belongs in that earlier quarter.

What accountants do in this case is that in the next quarter, they produce corrections to the
previous quarter’s accounts. And typically those corrections will be a small number, and that’s no
problem because it doesn’t change the big picture. But at the same time, everything is still
accounted for correctly. At the human level of these accounting systems that has been the case ever
since accounting systems were invented, centuries ago. It’s always been the case that some late
transactions would come in and change the result for some number that you thought was final, but
actually, it wasn’t because the correction could still come in. And so we just build the system with
the mechanism to perform such corrections. I think we can learn from accounting systems and apply
similar ideas to many other types of data storage systems, and just accept the fact that sometimes
they are mostly correct but not 100% correct and the correction might come in later.

**Vadim**: It’s a different point of view to building systems.

**Martin**: It is a bit of a new way of thinking, yes. It can be disorienting when you come across
it at first. But I don’t think there’s really a way round it, because this impreciseness is inherent
in the fact that we do not know the entire state of the world — it is fundamental to the way
distributed systems work. We can’t just hide it, we can’t pretend that it doesn’t happen, because
that imprecision is necessarily exposed in the way we process the data.

Professional growth and development
-----------------------------------

**Vadim**: Do you think that conferences like Hydra are anticipated? Most distributed systems are
quite different, and it is hard to imagine that many attendees will get to work and will start
applying what they have learned in day-to-day activities.

**Martin**: It is broad, but I think that a lot of the interesting ideas in distributed systems are
conceptual. So the insights are not necessarily like “use this database” or “use this particular
technology”. They are more like ways of thinking about systems and about software. And those kinds
of ideas can be applied quite widely. My hope is that when attendees go away from this conference,
the lessons they take away are not so much what piece of software they should be using or which
programming language they should be using — really, I don’t mind about that — but more like how to
*think* about the systems they are building.

**Vadim**: Why do you think it’s important to give conference talks on such complex topics as your
talk, compared to publishing papers, covering all their details and intricacies? Or should anyone do
both?

**Martin**: I think they serve different purposes. When we write papers, the purpose is to have a
very definitive, very precise analysis of a particular problem, and to go really deep in that. On
the other hand, the purpose of a talk is more to get people interested in a topic and to start a
conversation around it. I love going to conferences partly because of the discussions I then have
around the talk, where people come to me and say: “oh, we tried something like this, but we ran into
this problem and that problem, what do you think about that?” Then I get to think about other
people’s problems, and that’s really interesting because I get to learn a lot from that.

So, from my point of view, the selfish reason for going to conferences is really to learn from other
people, what their experiences have been, and to help share the experiences that we’ve made in the
hope that other people will find them useful as well. But fundamentally, a conference talk is often
an introduction to a subject, whereas a paper is a deep analysis of a very narrow question. I think
those are different genres and I think we need both of them.

**Vadim**: And the last question. How do you personally grow as a professional engineer and a
researcher? Could you please recommend any conferences, blogs, books, communities for those who wish
to develop themselves in the field of distributed systems?

**Martin**: That’s a good question. Certainly, there are things to listen to and to read. There’s no
shortage of conference talks that have been recorded and put online. There are books like my own
book for example, which provides a bit of an introduction to the topic, but also lots of references
to further reading. So if there are any particular detailed questions that you’re interested in, you
can follow those references and find the original papers where these ideas were discussed. They can
be a very valuable way of learning about something in greater depth.

A really important part is also trying to implement things and seeing how they work out in practice,
and talking to other people and sharing your experiences. Part of the value of a conference is that
you get to talk to other people as well, live. But you can have that through other mechanisms as
well; for example, there’s a Slack channel that people have set up for people [interested in
distributed systems](https://dist-sys-slack.herokuapp.com/). If that’s your thing you can join that.
You can, of course, talk to your colleagues in your company and try to learn from them. I don’t
think there’s one right way of doing this — there are many different ways through which you can
learn and get a deeper experience, and different paths will work for different people.

**Vadim**: Thank you very much for your advice and interesting discussion! It has been a pleasure
talking to you.

**Martin**: No problem, yeah, it’s been nice talking to you.

**Vadim**: Let’s meet on July 11 [at the conference](https://hydraconf.com/?utm_source=medium&utm_medium=kleppman).
