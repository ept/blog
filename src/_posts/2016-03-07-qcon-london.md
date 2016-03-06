---
layout: talk
title: "Staying in Sync: From Transactions to Streams"
venue: QCon
place: London, UK
venue_url: http://qconlondon.com/presentation/staying-sync-transactions-streams
slides_url: https://speakerdeck.com/ept/staying-in-sync-from-transactions-to-streams
---

<script async class="speakerdeck-embed" data-id="430b40b305d2465a9802c2119f51be70" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

For the very simplest applications, a single database is sufficient, and then life is pretty good.
But as your application needs to do more, you often find that no single technology can do everything
you need to do with your data. And so you end up having to combine several databases, caches, search
indexes, message queues, analytics tools, machine learning systems, and so on, into a heterogeneous
infrastructure...

Now you have a new problem: your data is stored in several different places, and if it changes in
one place, you have to keep it in sync in the other places, too. It's not too bad if all your
systems are up and running smoothly, but what if some parts of your systems have failed, some are
running slow, and some are running buggy code that was deployed by accident?

It's not easy to keep data in sync across different systems in the face of failure. Distributed
transactions and 2-phase commit have long been seen as the "correct" solution, but they are slow and
have operational problems, and so many systems can't afford to use them.

In this talk we'll explore using event streams and Kafka for keeping data in sync across
heterogeneous systems, and compare this approach to distributed transactions: what consistency
guarantees can it offer, and how does it fare in the face of failure?

References
----------

1. Mahesh Balakrishnan, Dahlia Malkhi, Ted Wobber, et al.: “<a href="http://research.microsoft.com/pubs/199947/Tango.pdf">Tango: Distributed Data Structures over a Shared Log</a>,” at <em>24th ACM Symposium on Operating Systems Principles</em> (SOSP), pages 325–340, November 2013. ISBN: 9781450323888, <a href="http://dx.doi.org/10.1145/2517349.2522732">doi:10.1145/2517349.2522732</a>
2. Molly Bartlett Dishman and Martin Fowler: “<a href="http://conferences.oreilly.com/software-architecture/sa2015/public/schedule/detail/40388">Agile Architecture</a>,” at <em>O'Reilly Software Architecture Conference</em>, March 2015.
3. Shirshanka Das, Chavdar Botev, Kapil Surlaker, et al.: “<a href="http://www.socc2012.org/s18-das.pdf">All Aboard the Databus!</a>,” at <em>3rd ACM Symposium on Cloud Computing</em> (SoCC), October 2012.
4. Pat Helland: “<a href="http://www.cidrdb.org/cidr2015/Papers/CIDR15_Paper16.pdf">Immutability Changes Everything</a>,” at <em>7th Biennial Conference on Innovative Data Systems Research</em> (CIDR), January 2015.
5. Martin Kleppmann: <em>Designing Data-Intensive Applications</em>. O'Reilly Media, to appear.
6. Jay Kreps: “<a href="http://shop.oreilly.com/product/0636920034339.do">I ♥︎ Logs</a>.” O'Reilly Media, September 2014. ISBN: 978-1-4919-0932-4
7. Jay Kreps: “<a href="http://blog.confluent.io/2015/02/25/stream-data-platform-1/">Putting Apache Kafka to use: a practical guide to building a stream data platform</a>,” blog.confluent.io, 25 February 2015.
8. Leslie Lamport: “<a href="http://research.microsoft.com/en-US/um/people/Lamport/pubs/time-clocks.pdf">Time, Clocks, and the Ordering of Events in a Distributed System</a>,” <em>Communications of the ACM</em>, volume 21, number 7, pages 558–565, July 1978. <a href="http://dx.doi.org/10.1145/359545.359563">doi:10.1145/359545.359563</a>
9. Neha Narkhede: “<a href="http://www.confluent.io/blog/announcing-kafka-connect-building-large-scale-low-latency-data-pipelines">Announcing Kafka Connect: Building large-scale low-latency data pipelines</a>,” confluent.io, 18 February 2016. 
10. Fred B Schneider: “<a href="http://www.cs.cornell.edu/fbs/publications/smsurvey.pdf">Implementing Fault-Tolerant Services Using the State Machine Approach: A Tutorial</a>,” <em>ACM Computing Surveys</em>, volume 22, number 4, pages 299–319, December 1990.
11. Yogeshwer Sharma, Philippe Ajoux, Petchean Ang, et al.: “<a href="https://www.usenix.org/system/files/conference/nsdi15/nsdi15-paper-sharma.pdf">Wormhole: Reliable Pub-Sub to Support Geo-replicated Internet Services</a>,” at <em>12th USENIX Symposium on Networked Systems Design and Implementation</em> (NSDI), May 2015.
12. Martin Thompson: “<a href="http://mechanical-sympathy.blogspot.co.uk/2011/09/single-writer-principle.html">Single Writer Principle</a>,” mechanical-sympathy.blogspot.co.uk, 22 September 2011.
13. Vaughn Vernon: <em>Implementing Domain-Driven Design</em>. Addison-Wesley Professional, February 2013. ISBN: 0321834577
