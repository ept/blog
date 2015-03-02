---
layout: talk
title: "Scalable real-time data processing with Apache Samza"
venue: Jfokus
place: Stockholm, Sweden
venue_url: http://www.jfokus.se/jfokus/talks.jsp#Scalablereal-timedat
lanyrd_url: http://lanyrd.com/2015/jfokus/
slides_url: https://speakerdeck.com/ept/scalable-stream-processing-with-apache-kafka-and-apache-samza
video_url: https://www.parleys.com/talk/scalable-real-time-data-processing-apache-samza
---

<script async class="speakerdeck-embed" data-id="861136005156013261a506fa84ad753a" data-ratio="1.41436464088398" src="//speakerdeck.com/assets/embed.js"></script>


Abstract
--------

High-volume event streams are becoming widespread: IoT sensor data, activity events on social media,
and monitoring events for fraud detection, to mention just a few. Hadoop is great for analysing data
after the fact, but it's often too slow to respond to things happening right now. Traditional event
processing frameworks are not scalable enough to handle the onslaught of data.

Apache Samza and Apache Kafka, two open source projects that originated at LinkedIn, have set out to
solve this problem. They are designed to go together: Kafka is a fault-tolerant message broker, and
Samza provides a scalable and powerful processing model on top of it.

This talk will introduce those projects, and explain how you can use them to solve your real-time
big data problems.
