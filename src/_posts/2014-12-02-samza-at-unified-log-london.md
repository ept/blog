---
layout: talk
title: "Scalable stream processing with Kafka and Samza"
venue: Unified Log London
place: London, UK
venue_url: http://www.meetup.com/unified-log-london/events/218025352/
slides_url: https://speakerdeck.com/ept/scalable-stream-processing-with-apache-kafka-and-apache-samza
---

<script async class="speakerdeck-embed" data-id="861136005156013261a506fa84ad753a" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

This was a repeat of [my talk at ApacheCon Europe](/2014/11/18/scalable-stream-processing-at-apachecon.html).

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
