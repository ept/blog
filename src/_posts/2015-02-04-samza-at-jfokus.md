---
layout: talk
title: "Scalable real-time data processing with Apache Samza"
venue: Jfokus
place: Stockholm, Sweden
venue_url: http://www.jfokus.se/jfokus/
lanyrd_url: http://lanyrd.com/2015/jfokus/
slides_url: https://speakerdeck.com/ept/scalable-stream-processing-with-apache-kafka-and-apache-samza
video_url: https://www.youtube.com/watch?v=uRmYJGRPfKU
---

<iframe width="550" height="309" src="https://www.youtube-nocookie.com/embed/uRmYJGRPfKU?rel=0" frameborder="0" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/861136005156013261a506fa84ad753a" title="Scalable stream processing with Apache Kafka and Apache Samza" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 395px;" data-ratio="1.4177215189873418"></iframe>


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
