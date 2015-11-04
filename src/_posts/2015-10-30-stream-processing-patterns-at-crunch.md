---
layout: talk
title: Patterns for real-time stream processing
venue: Crunch Conference
place: Budapest, Hungary
venue_url: http://crunchconf.com/
slides_url: https://speakerdeck.com/ept/patterns-for-real-time-stream-processing
video_url: http://www.ustream.tv/recorded/76606401
---

<script async class="speakerdeck-embed" data-id="74f7bbd817ec4001b9c4c4e92deaef4f" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

<iframe width="480" height="270" src="http://www.ustream.tv/embed/recorded/76606401?html5ui" allowfullscreen webkitallowfullscreen scrolling="no" frameborder="0" style="border: 0 none transparent;"></iframe>

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

References
----------

1. [Apache Samza documentation](http://samza.apache.org).
2. Tyler Akidau, Robert Bradshaw, Craig Chambers, et al.:
   “[The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in Massive-Scale,
   Unbounded, Out-of-Order Data Processing](http://www.vldb.org/pvldb/vol8/p1792-Akidau.pdf),”
   Proceedings of the VLDB Endowment, volume 8, number 12, pages 1792–1803, August 2015.
3. Shirshanka Das, Chavdar Botev, Kapil Surlaker, et al.:
   “[All Aboard the Databus!](http://www.socc2012.org/s18-das.pdf),” at
   ACM Symposium on Cloud Computing (SoCC), October 2012.
4. Nathan Marz and James Warren: “[Big Data: Principles and best practices of scalable
   realtime data systems](http://manning.com/marz/).” Manning, April 2015, ISBN 9781617290343.
5. Martin Kleppmann: “[Designing data-intensive applications](http://dataintensive.net).”
   O’Reilly Media, to appear.
6. Martin Kleppmann: “[Moving faster with data streams: The rise of Samza at
   LinkedIn](http://engineering.linkedin.com/stream-processing/moving-faster-data-streams-rise-samza-linkedin).”
   14 July 2014.
7. Jay Kreps: “[Why local state is a fundamental primitive in stream
   processing](http://radar.oreilly.com/2014/07/why-local-state-is-a-fundamental-primitive-in-stream-processing.html).”
   31 July 2014.
8. Jay Kreps: “[I ♥︎ Logs](http://shop.oreilly.com/product/0636920034339.do).” O'Reilly Media, September 2014. 
9. Praveen Neppalli Naga: “[Real-time Analytics at Massive Scale with
   Pinot](http://engineering.linkedin.com/analytics/real-time-analytics-massive-scale-pinot).” 29 Sept 2014.
10. Lili Wu, Sam Shah, Sean Choi, Mitul Tiwari, and Christian Posse: “[The Browsemaps: Collaborative Filtering
    at LinkedIn](http://ls13-www.cs.uni-dortmund.de/homepage/rsweb2014/papers/rsweb2014_submission_3.pdf),”
    at 6th Workshop on Recommender Systems and the Social Web, Oct 2014. 
