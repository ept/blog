---
layout: talk
title: "Data liberation and data integration with Kafka"
venue: Strata + Hadoop World
place: New York, NY, US
venue_url: http://strataconf.com/big-data-conference-ny-2015/public/schedule/detail/42723
---

Even the best data scientist can't do anything if they cannot easily get access to the necessary
data. Simply making the data available is step 1 towards becoming a data-driven organization. In
this talk, we'll explore how Apache Kafka can replace slow, fragile ETL processes with real-time
data pipelines, and discuss best practices for data formats and integration with existing systems.


Abstract
--------

[Apache Kafka](http://kafka.apache.org/) is a popular open source message broker for high-throughput
real-time event data, such as user activity logs or IoT sensor data. It originated at LinkedIn,
where it reliably handles around a trillion messages per day.

What is less widely known: Kafka is also well suited for extracting data from existing databases,
and making it available for analysis or for building data products. Unlike slow batch-oriented ETL,
Kafka can make database data available to consumers in real-time, while also allowing efficient
archiving to HDFS, for use in Spark, Hadoop or data warehouses.

When data science and product teams can process operational data in real-time, and combine it with
user activity logs or sensor data, that turns out to be a potent mixture. Having all the data
centrally available in a
[stream data platform](http://blog.confluent.io/2015/02/25/stream-data-platform-1/) is an exciting
enabler for data-driven innovation.

In this talk, we will discuss what a Kafka-based stream data platform looks like, and how it is
useful:

* Examples of the kinds of problems you can solve with Kafka
* Extracting real-time data feeds from databases, and sending them to Kafka
* Using [Avro](http://radar.oreilly.com/2014/11/the-problem-of-managing-schemas.html) for schema
  management and future-proofing your data
* Designing your data pipelines to be resilient, but also flexible and amenable to change
