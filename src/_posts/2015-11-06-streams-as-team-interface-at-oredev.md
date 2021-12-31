---
layout: talk
title: Streams as the team interface
venue: Øredev
place: Malmö, Sweden
venue_url: http://oredev.org/2015/sessions/streams-as-the-team-interface
slides_url: https://speakerdeck.com/ept/streams-as-the-team-interface
video_url: https://vimeo.com/144863186
---

<iframe src="https://player.vimeo.com/video/144863186" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/cd8f6b0806d746bbaeff46752622f3af" title="Streams as the team interface" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 420px;" data-ratio="1.3333333333333333"></iframe>

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
