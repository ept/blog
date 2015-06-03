---
layout: talk
title: Streams as the team interface
venue: Øredev
place: Malmö, Sweden
venue_url: http://oredev.org/
---


Abstract
--------

How do you remain agile when working on a large application? How do you keep feedback cycles short
and ship features quickly? How do you adapt rapidly to changing requirements?

Somehow, you need to break the big application into smaller, more manageable chunks. Microservices
are a growing trend for splitting up monolithic applications into independently deployable services.
Although there are many good things about microservices, it's not all roses: keeping them reliable
and consistently performant can take serious effort.

In this talk, we'll discuss a different approach to breaking down a big application into smaller
chunks: stream processing. Many applications can be designed as a cascade of jobs that consume and
produce real-time data streams. When you build applications this way, streams are not just an
implementation detail — they become the interface from one team to another.

Building on the experience of building large-scale stream processing systems with Apache Kafka, this
talk will explore how streams can help make our software development more agile, and our systems
faster and more robust at the same time.
