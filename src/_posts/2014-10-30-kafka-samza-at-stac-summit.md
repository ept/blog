---
layout: talk
title: "Kafka & Samza – LinkedIn's open source stream processing infrastructure"
venue: STAC Summit
place: London, UK
venue_url: https://stacresearch.com/fall2014LON
---

This talk was given to an audience of technologists in the financial services industry. They have
been users of sophisticated stream processing systems for a long time, and wanted to know what the
new systems such as [Samza](http://samza.incubator.apache.org/), coming out of internet companies,
are all about.


Abstract
--------

Only a handful of industries used to be concerned with event-stream processing, such as defense,
sensor-driven manufacturing, and of course capital markets. Today, stream processing is a topic in
many more industries, from retailing to utilities to social media. And as with so many
data-intensive problems today, web companies are creating and open sourcing a large amount of code
to handle them. Retail banking and wealth management technologists are considering these open source
tools to deal with whole new classes of problems, while some trading firms are starting to use them
for old classes of problems.

Apache Kafka and Apache Samza are two big data technologies open sourced by LinkedIn. Kafka is
a publish-subscribe message bus designed for high throughput and reliability. Samza builds on Kafka
and Hadoop to provide high-throughput, stateful stream processing across a cluster (joining,
filtering, transforming, etc.). In this talk, Martin will introduce the motivation and architecture
of these systems and explore their uses and limitations.
