---
layout: ync-post
title: Upcoming conference talks about Samza
---

After my [talk about Samza fault tolerance](https://www.youtube.com/watch?v=d63kSjxVsGA&index=11&list=PLq-odUc2x7i-Q5gQtkmba4ov37XRPjp6n)
at [Berlin Buzzwords](http://berlinbuzzwords.de/) was well received a few months ago,
I submitted several more talk proposals to a variety of conferences. To my surprise,
all the proposals were accepted, so I'm now going to have a fairly busy time in the
next few months!

Here are the four conferences at which I'll be speaking between September and November.
All the talks are about [Apache Samza](http://samza.incubator.apache.org/), the stream
processing project I've been working on. However, all the talks are different, each
focussing on a different aspect and perspective.

If you don't yet have a ticket for these conferences, there are a few discount codes
below. Hope to see you there :-)

[**Turning the database inside out with Apache Samza**](https://thestrangeloop.com/sessions/turning-the-database-inside-out-with-apache-samza)  
[Strange Loop](https://thestrangeloop.com/), September 18--19 in St. Louis, Missouri.
([Lanyrd](http://lanyrd.com/2014/strangeloop/), [Twitter](https://twitter.com/strangeloop_stl))

The Strange Loop conference explores the future of software development from a wonderfully
eclectic range of viewpoints, ranging from functional programming to distributed systems.
In this talk I'll discuss the potential of stream processing as a fundamental programming
model, which has big advantages compared to the way we usually build applications today.

[**Building real-time data products at LinkedIn with Apache Samza**](http://strataconf.com/stratany2014/public/schedule/detail/36045)  
[Strata + Hadoop World](http://strataconf.com/stratany2014), October 15--17 in New York.
([Lanyrd](http://lanyrd.com/2014/strata-new-york/), [Twitter](https://twitter.com/strataconf))  
Use discount code SPEAKER20 to get 20% off.

MapReduce and its cousins are powerful tools for building data products such as recommendation
engines, detecting anomalies and improving relevance. However, with batch processing there may
be several hours delay before new data is reflected in the output. With stream processing, you
can potentially respond in seconds rather than hours, but you have to learn a whole new way of
thinking in order to write your jobs. In this talk I'll discuss some real-life examples of
stream processing at LinkedIn, and show how to use Samza to solve real-time data problems.

[**Staying agile in the face of the data deluge**](http://london-2014.spanconf.io/martin-kleppmann/)  
[Span conference](http://spanconf.io), October 28 in London, UK.
([Lanyrd](http://lanyrd.com/2014/spanconf/), [Twitter](https://twitter.com/spanconf))  
Use <a href="https://ti.to/span/london-2014?discount_code=kleppmann">this link</a> to get a 20% discount.

An often-overlooked but important aspect of tools is their _plasticity_: if your
application's requirements change, how easily do the tools let you adapt your existing
code and data to the new requirements? Samza is designed with plasticity in mind. In
this talk I'll discuss how re-processing of data streams can keep your application
development agile.

[**Scalable stream processing with Apache Samza and Apache Kafka**](http://apacheconeu2014.sched.org/event/3633e195715f88c3357749d57b7b3b8c)  
[ApacheCon Europe](http://events.linuxfoundation.org/events/apachecon-europe), November 17--21 in Budapest, Hungary.
([Lanyrd](http://lanyrd.com/2014/apachecon-europe/), [Twitter](https://twitter.com/apachecon))

Many of the most important open source data infrastructure tools are projects of the
Apache Software Foundatation: Hadoop, Zookeeper, Storm and Spark, to name just a few.
In this talk I'll focus on how Samza and Kafka (also Apache projects) fit into this
lively open source ecosystem.

**Background reading**

If you don't yet know about Samza, don't worry: I'll start each talk with a quick
introduction to Samza, and not assume any prior knowledge.

But if you want to ask smart-ass questions and embarrass me in front of the audience, you
can begin by reading the Samza
[documentation](http://samza.incubator.apache.org/learn/documentation/latest/)
(thoroughly updated over the last few months by yours truly), and start thinking of
particularly tricky questions to ask.

You may also be interested in this excellent series of articles by
[Jay Kreps](https://twitter.com/jaykreps), which are relevant to the upcoming talks:

* [The Log: What every software engineer should know about real-time data's unifying abstraction](http://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying)
* [Questioning the Lambda Architecture](http://radar.oreilly.com/2014/07/questioning-the-lambda-architecture.html)
* [Why local state is a fundamental primitive in stream processing](http://radar.oreilly.com/2014/07/why-local-state-is-a-fundamental-primitive-in-stream-processing.html) -- What do you get if you cross a distributed database with a stream processing system?
