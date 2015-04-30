---
layout: talk
title: "Using logs to build a solid data infrastructure"
venue: "Craft Conf"
place: "Budapest, Hungary"
venue_url: http://craft-conf.com/2015#speakers/MartinKleppmann
lanyrd_url: http://lanyrd.com/2015/craftconf/
slides_url: https://speakerdeck.com/ept/using-logs-to-create-a-solid-data-infrastructure
video_url: http://www.ustream.tv/recorded/61479591/theater
---

<iframe width="550" height="346" src="http://www.ustream.tv/embed/recorded/61479591?v=3&amp;wmode=direct" scrolling="no" frameborder="0" style="border: 0px none transparent;"></iframe>

<script async class="speakerdeck-embed" data-id="49907c482df7478492d788c8da976160" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

How does your database store data on disk reliably? It uses a log.  
How does one database replica synchronise with another replica? It uses a log.  
How does a distributed algorithm like [Raft](https://ramcloud.stanford.edu/raft.pdf) achieve consensus?
It uses a log.   
How does activity data get recorded in a system like [Apache Kafka](http://kafka.apache.org/)? It uses a log.  
How will the data infrastructure of your application remain robust at scale? Guess what...

Logs are everywhere. I'm not talking about plain-text log files (such as syslog or log4j) -- I mean
an append-only, totally ordered sequence of records. It's a very simple structure, but it's also
a bit strange at first if you're used to normal databases. However, once you learn to think in terms
of logs, many problems of making large-scale data systems reliable, scalable and maintainable
suddenly become much more tractable.

Drawing from the experience of building scalable systems at LinkedIn and other startups, this talk
will explore why logs are such a fine idea: making it easier to maintain search indexes and caches,
making your applications more scalable and more robust in the face of failures, and opening up your
data for richer analysis, while avoiding race conditions, inconsistencies and other ugly problems.
