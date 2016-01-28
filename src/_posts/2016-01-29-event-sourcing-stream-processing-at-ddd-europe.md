---
layout: talk
title: Event sourcing and stream processing at scale
venue: Domain Driven Design Europe
place: Brussels, Belgium
venue_url: http://dddeurope.com/2016/martin-kleppmann.html
slides_url: https://speakerdeck.com/ept/event-sourcing-and-stream-processing-at-scale
---

<script async class="speakerdeck-embed" data-id="c4860907b26946ca8ef4e36575a7b71a" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

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

References
----------

1. Tyler Akidau, Robert Bradshaw, Craig Chambers, et al.:
   “[The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in
   Massive-Scale, Unbounded, Out-of-Order Data Processing][dataflow],”
   *Proceedings of the VLDB Endowment*, volume 8, number 12, pages 1792–1803, August 2015.
2. Shirshanka Das, Chavdar Botev, Kapil Surlaker, et al.:
   “[All Aboard the Databus!][databus],” at *ACM Symposium on Cloud Computing* (SoCC), October 2012.
3. Pat Helland: “[Immutability Changes Everything][helland],” at
   *7th Biennial Conference on Innovative Data Systems Research* (CIDR), January 2015.
4. Nathan Marz and James Warren:
   “[Big Data: Principles and best practices of scalable realtime data systems][marz].”
   Manning, April 2015, ISBN 9781617290343.
5. Martin Kleppmann:
   “[Designing data-intensive applications][ddia].” O’Reilly Media, to appear.
6. Martin Kleppmann and Jay Kreps:
   “[Kafka, Samza and the Unix philosophy of distributed data][unixphil].”
   *IEEE Data Engineering Bulletin*, December 2015.
7. Jay Kreps: “[Why local state is a fundamental primitive in stream processing][localstate].”
   31 July 2014.
8. Jay Kreps: “[Questioning the Lambda Architecture][questioning].” July 2014.
9. Jay Kreps: “[I ♥︎ Logs][heart].” O'Reilly Media, September 2014.
10. Praveen Neppalli Naga: “[Real-time Analytics at Massive Scale with Pinot][pinot].” 29 Sept 2014.

[dataflow]: http://www.vldb.org/pvldb/vol8/p1792-Akidau.pdf
[databus]: http://www.socc2012.org/s18-das.pdf
[helland]: http://www.cidrdb.org/cidr2015/Papers/CIDR15_Paper16.pdf
[marz]: http://manning.com/marz/
[ddia]: http://dataintensive.net
[samza-li]: http://engineering.linkedin.com/stream-processing/moving-faster-data-streams-rise-samza-linkedin
[unixphil]: /papers/kafka-debull15.pdf
[localstate]: http://radar.oreilly.com/2014/07/why-local-state-is-a-fundamental-primitive-in-stream-processing.html
[questioning]: http://radar.oreilly.com/2014/07/questioning-the-lambda-architecture.html
[heart]: http://shop.oreilly.com/product/0636920034339.do
[pinot]: http://engineering.linkedin.com/analytics/real-time-analytics-massive-scale-pinot
