---
layout: talk
title: "Getting data out of databases: a surprisingly tricky problem"
venue: All Your Base
place: London, UK
venue_url: http://allyourbaseconf.com/2015/speakers#martin-kleppmann
slides_url: https://speakerdeck.com/ept/getting-data-out-of-databases-a-surprisingly-tricky-problem
video_url: https://vimeo.com/145847021
---

<!-- Vimeo video does not allow embedding -->

<script async class="speakerdeck-embed" data-id="60a5d4be5e77446abcafc0dfe43be894" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

Writing to a database is easy, but getting the data out again is surprisingly hard.

Of course, if you just want to query the database and get some results, that’s fine. But what if you
want a copy of your database contents in some other system — for example, to make it searchable in
Elasticsearch, or to pre-fill caches so that they’re nice and fast, or to load it into a data
warehouse for analytics, or if you want to migrate to a different database technology?

As the data is constantly changing, a one-off snapshot of the database is not enough: you need to
tap into the ongoing stream of writes to the database. This technique is called Change Data Capture
(CDC). At companies like LinkedIn and Facebook, this is how caches and indexes are kept up-to-date.

This talk explains why change data capture is so useful, and how it prevents race conditions and
other ugly problems. Martin will explore the practical details of implementing CDC with PostgreSQL
and Apache Kafka, and discuss the approaches you can use to do the same with various other
databases.

References
----------

1. Martin Kleppmann: “[Bottled Water: Real-time integration of PostgreSQL and
   Kafka][bottled-water].” 23 April 2015. 
2. Shirshanka Das, Chavdar Botev, Kapil Surlaker, et al.:
   “[All Aboard the Databus!][databus],” at *ACM Symposium on Cloud Computing* (SoCC), October 2012. 
3. Yogeshwer Sharma, Philippe Ajoux, Petchean Ang, et al.: “[Wormhole: Reliable Pub-Sub to Support
   Geo-replicated Internet Services][wormhole],” at *12th USENIX Symposium on Networked Systems
   Design and Implementation* (NSDI), May 2015.
4. Jay Kreps: “[I &#x2665; Logs][heart-logs].” O'Reilly Media, September 2014.
5. Martin Kleppmann: “[Designing Data-Intensive Applications][ddia].” O’Reilly Media, to appear.
6. Martin Kleppmann: “[Turning the database inside-out with Apache Samza][inside-out].” 4 March 2015.
7. Pat Helland: “[Immutability Changes Everything][helland],” at *7th Biennial Conference on
   Innovative Data Systems Research* (CIDR), January 2015.

[bottled-water]: http://blog.confluent.io/2015/04/23/bottled-water-real-time-integration-of-postgresql-and-kafka/
[databus]: http://www.socc2012.org/s18-das.pdf
[wormhole]: https://www.usenix.org/system/files/conference/nsdi15/nsdi15-paper-sharma.pdf
[heart-logs]: http://shop.oreilly.com/product/0636920034339.do
[ddia]: http://dataintensive.net
[inside-out]: http://blog.confluent.io/2015/03/04/turning-the-database-inside-out-with-apache-samza/
[helland]: http://www.cidrdb.org/cidr2015/Papers/CIDR15_Paper16.pdf
