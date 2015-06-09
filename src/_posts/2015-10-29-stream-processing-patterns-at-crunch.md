---
layout: talk
title: Patterns for real-time stream processing
venue: Crunch Conference
place: Budapest, Hungary
venue_url: http://crunchconf.com/
---

Abstract
--------

You have some streams of data, such as user activity on a website, or sensor readings from devices.
Now you want to process the data and make it useful with low latency: for example, generating
real-time recommendations, detecting abuse, filtering spam or predicting demand. And you want it to
scale well.

Perhaps you've heard of distributed stream processing frameworks such as Samza, Storm or Spark
Streaming, which may do what you want, but you're not sure how to use them most effectively.

This talk will introduce some common design patterns for working with high-volume, real-time data
streams. We will look at things like joining, enriching, filtering and aggregating streaming data,
and we'll explore how you might break down an application into streaming operators that do what you
want.
