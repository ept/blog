---
layout: talk
title: "Building real-time data products at LinkedIn with Apache Samza"
venue: "Strata + Hadoop World"
place: "New York, NY, US"
venue_url: http://strataconf.com/stratany2014/public/schedule/detail/36045
lanyrd_url: http://lanyrd.com/2014/strata-new-york/
video_url: https://www.youtube.com/watch?v=yO3SBU6vVKA&list=PLeKd45zvjcDHJxge6VtYUAbYnvd_VNQCx
slides_url: https://speakerdeck.com/ept/building-real-time-data-products-at-linkedin-with-apache-samza
---

<iframe width="550" height="315" src="//www.youtube.com/embed/yO3SBU6vVKA?list=PLeKd45zvjcDHJxge6VtYUAbYnvd_VNQCx" frameborder="0" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/76815b7051a50132a8285acd04932bc4" title="Building real-time data products at LinkedIn with Apache Samza" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 314px;" data-ratio="1.78343949044586"></iframe>

Apache Samza is a framework for processing high-volume real-time event streams. In this session we
will walk through our experiences of putting Samza into production at LinkedIn, discuss how it
compares to other stream processing tools, and share the lessons we learnt about dealing with
real-time data at scale.


Abstract
--------

The world is going real-time. MapReduce, SQL-on-Hadoop and similar batch processing tools are fine
for analyzing and processing data after the fact — but sometimes you need to process data
continuously as it comes in, and react to it within a few seconds or less. How do you do that at
Hadoop scale?

[Apache Samza](http://samza.incubator.apache.org/) is an open source stream processing framework
designed to solve these kinds of problems. It is built upon YARN/Hadoop 2.0 and Apache Kafka. You
can think of Samza as a real-time, continuously running version of MapReduce.

Samza has some unique features that make it powerful. It provides high performance for stateful
processing jobs, including aggregation and joins between many input streams. It is designed to
support an ecosystem of many different jobs written by different teams, and it isolates them from
each other, so that one badly behaved job can't affect the others.

At LinkedIn, we have been using Samza in production for some time, both for internal analytics
purposes and for data products that are served on the live site. In this talk, we'll discuss our
experience of working with Samza. You'll learn about:

- What kinds of real-time data problems you can solve with Samza
- How it reliably scales to millions of messages per second
- How Samza compares to other stream processing frameworks
- How Samza can help collaboration between different data science, product and engineering teams within an organization
- How to avoid implementing the same data pipeline twice (once for offline/batch processing and once for real-time/stream processing)
- Lessons we learnt on how to structure real-time data pipelines for scale and flexibility
