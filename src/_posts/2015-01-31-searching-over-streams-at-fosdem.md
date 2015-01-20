---
layout: talk
title: "Searching over Streams with Luwak and Apache Samza"
venue: "FOSDEM (Open Source Search Room)"
place: "Brussels, Belgium"
venue_url: https://fosdem.org/2015/schedule/event/searching_over_streams_with_luwak_and_apache_samza/
lanyrd_url: http://lanyrd.com/2015/fosdem/
---

Co-presented with [Alan Woodward](https://twitter.com/romseygeek).

Traditional searches take the form of individual queries over large mostly-stable corpuses of
documents.  In this talk, we'll show how we invert this paradigm to allow for searching over streams
of documents by combining Samza, a distributed stream-processing framework, with Luwak, a library
for efficiently running large numbers of queries over individual documents.


Abstract
--------

Real-time searching over streams is useful in a number of contexts.  For example, companies may want
to detect whenever they are mentioned in a news feed; or a Twitter user might want to see
a continuous stream of tweets for a particular hashtag.

[Luwak](https://github.com/flaxsearch/luwak) provides a mechanism for running many thousands of
queries over a single document in a highly efficient manner, by filtering out queries that it can
detect will not match.  Luwak is designed to run on a single node, holding all registered queries in
RAM.  Scaling to higher document throughput, or to more queries, requires parallelization across
multiple machines.

[Samza](http://samza.incubator.apache.org/) provides a framework for such parallelization, by
partitioning and recombining both the document streams and the query set (which can be treated as
just another stream), and also provides fault-tolerance mechanisms that allows swift recovery from
machine failure, without losing documents or queries.
