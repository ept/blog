---
layout: talk
title: "Kafka and Samza: distributed stream processing in practice"
venue: "University of Cambridge Computer Laboratory "
place: Cambridge, UK
venue_url: http://talks.cam.ac.uk/talk/index/54973
slides_url: https://speakerdeck.com/ept/kafka-and-samza-distributed-stream-processing-in-practice
---

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/d34613904cb2013218e606b8621c13fd" title="Kafka and Samza: Distributed stream processing in practice" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 420px;" data-ratio="1.3333333333333333"></iframe>

This talk was given to an audience of academic researchers and postgraduate students,
as part of the University of Cambridge Computer Laboratory's
[Wednesday seminars](http://www.cl.cam.ac.uk/seminars/wednesday/) series.


Abstract
--------

Stream processing is an old idea, but it is currently being rediscovered in industry due to
pressures from increasing data volumes (throughput), increasingly diverse data sources (complexity)
and increasing impatience (latency).

Apache Samza and Apache Kafka, two open source projects that originated at LinkedIn, are being
successfully used at scale in production. Kafka is a fault-tolerant message broker, and Samza
provides a scalable processing model on top of it. They have an interesting “back to basics”
approach which questions many assumptions from the last few decades of data management practice.

In particular, their design is informed by the experience of operating large-scale systems under
heavy load, and the challenges that arise in a large organisation with hundreds or even thousands of
software engineers. This talk will introduce the architecture of Samza and Kafka, and explain some
of the reasoning behind their underlying design decisions.
