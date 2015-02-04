---
layout: talk
title: "Scalable stream processing with Apache Samza and Apache Kafka"
venue: ApacheCon Europe
place: Budapest, Hungary
venue_url: http://apacheconeu2014.sched.org/event/3633e195715f88c3357749d57b7b3b8c
lanyrd_url: http://lanyrd.com/2014/apachecon-europe/
slides_url: https://speakerdeck.com/ept/scalable-stream-processing-with-apache-kafka-and-apache-samza
---

<script async class="speakerdeck-embed" data-id="861136005156013261a506fa84ad753a" data-ratio="1.41436464088398" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

[Samza](http://samza.incubator.apache.org/), an Apache Incubator project, is a framework for
processing and analysing high-volume data streams. It is built upon
[Apache Kafka](http://kafka.apache.org) and
[YARN](http://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) (Hadoop 2.0).
You can think of Samza as a real-time, continuously running version of MapReduce.

In this talk, Martin will show why stream processing is becoming an important part of the
architecture of data-intensive applications, alongside storage and batch processing. We will explore
how Samza works, and show how it reliably processes millions of messages per second.  We will also
examine what kinds of applications would benefit from using Samza.

This talk is for anyone interested in large-scale data processing problems. Developers working with
Hadoop, distributed storage (e.g. HBase, Cassandra) or real-time data flows will find it
particularly interesting. You will learn:

- What kinds of real-time data problems you can solve with Samza;
- How the stream processing model helps developers write more reliable applications more easily;
- Apache Samza's approach to stream processing, and how it compares to other frameworks;
- How to contribute to development.
