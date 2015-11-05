---
layout: talk
title: Event sourcing and stream processing at scale
venue: Domain Driven Design Europe
place: Brussels, Belgium
venue_url: http://dddeurope.com/
---


Abstract
--------

If an idea is good, different communities will independently come up with it, but give it different
names. For example, the ideas of Event Sourcing and CQRS emerged from the DDD community, while
similar ideas appeared under the title of Stream Processing in internet companies such as LinkedIn,
Twitter and Google.

This talk attempts to bridge those communities, and works out the commonalities and differences
between Event Sourcing and Stream Processing, so that we can all learn from each other.

We will discuss lessons learnt from applying event-based architectures at large scale (over 10
million messages per second) at LinkedIn, and how such systems are implemented using the open source
distributed messaging projects Apache Kafka and Apache Samza. We'll also discuss some of the
architectural choices that affect scalability (both scalability in terms of data throughput, as well
as organisational scalability).
