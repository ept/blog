---
layout: talk
title: "Data liberation and data integration with Kafka"
venue: Strata + Hadoop World
place: New York, NY, US
venue_url: http://strataconf.com/big-data-conference-ny-2015/public/schedule/detail/42723
slides_url: https://speakerdeck.com/ept/data-liberation-and-data-integration-with-kafka
video_url: https://www.youtube.com/watch?v=GfJZ7duV_MM
---

<iframe width="550" height="309" src="https://www.youtube-nocookie.com/embed/GfJZ7duV_MM?rel=0" frameborder="0" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/e44d9f8df3284f7ca9deea573cb35f6f" title="Data liberation and data integration with Kafka" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 314px;" data-ratio="1.78343949044586"></iframe>


Abstract
--------

Even the best data scientist can't do anything if they cannot easily get access to the necessary
data. Simply making the data available is step 1 towards becoming a data-driven organization. In
this talk, we'll explore how Apache Kafka can replace slow, fragile ETL processes with real-time
data pipelines, and discuss best practices for data formats and integration with existing systems.

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


References
----------

1. Jay Kreps: “[Putting Apache Kafka to use: A practical guide to building a stream data platform
   (part 1)](http://blog.confluent.io/2015/02/25/stream-data-platform-1/).” 25 February 2015. 
2. Gwen Shapira: “[The problem of managing
   schemas](http://radar.oreilly.com/2014/11/the-problem-of-managing-schemas.html),” 4 November 2014.
3. Martin Kleppmann: “[Schema evolution in Avro, Protocol Buffers and
   Thrift](/2012/12/05/schema-evolution-in-avro-protocol-buffers-thrift.html),” 5 December 2012. 
4. Martin Kleppmann: “[Bottled Water: Real-time integration of PostgreSQL and
   Kafka](/2015/04/23/bottled-water-real-time-postgresql-kafka.html).” 23 April 2015. 
5. Martin Kleppmann: “[Designing data-intensive applications](http://dataintensive.net).”
   O’Reilly Media, to appear.
6. Shirshanka Das, Chavdar Botev, Kapil Surlaker, et al.:
   “[All Aboard the Databus!](http://www.socc2012.org/s18-das.pdf),” at *ACM Symposium on Cloud
   Computing* (SoCC), October 2012. 
