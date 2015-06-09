---
layout: talk
title: "Change Data Capture: The Magic Wand We Forgot"
venue: Berlin Buzzwords
place: Berlin, Germany
venue_url: http://berlinbuzzwords.de/session/change-data-capture-magic-wand-we-forgot
lanyrd_url: http://lanyrd.com/2015/berlinbuzzwords/
slides_url: https://speakerdeck.com/ept/change-data-capture-the-magic-wand-we-forgot
video_url: https://www.youtube.com/watch?v=ZAZJqEKUl3U&list=PLeKd45zvjcDHJxge6VtYUAbYnvd_VNQCx&index=5
---

<iframe width="550" height="315" src="https://www.youtube.com/embed/ZAZJqEKUl3U?list=PLeKd45zvjcDHJxge6VtYUAbYnvd_VNQCx" frameborder="0" allowfullscreen></iframe>

<script async class="speakerdeck-embed" data-id="60f12a1eb231470a898a66d58f13536c" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

Links
-----

* [Blog post introducing Bottled Water](/2015/04/23/bottled-water-real-time-postgresql-kafka.html)
* [Bottled Water code on Github](https://github.com/confluentinc/bottledwater-pg)

Abstract
--------

A simple application may start out with one database, but as you scale and add features, it usually
turns into a tangled mess of datastores, replicas, caches, search indexes, analytics systems and
message queues. When new data is written, how do you make sure it ends up in all the right places?
If something goes wrong, how do you recover?

Change Data Capture (CDC) is an old idea: let the application subscribe to a stream of everything
that is written to a database -- a feed of data changes. You can use that feed to update search
indexes, invalidate caches, create snapshots, generate recommendations, copy data into another
database, and so on. For example, LinkedIn's [Databus](http://www.socc2012.org/s18-das.pdf) and
Facebook's [Wormhole](https://code.facebook.com/posts/188966771280871/wormhole-pub-sub-system-moving-data-through-space-and-time/)
do this. But the idea is not as widely known as it should be.

In this talk, I will explain why change data capture is so useful, and how it prevents race
conditions and other ugly problems. Then I'll go into the practical details of [implementing CDC
with PostgreSQL](/2015/04/23/bottled-water-real-time-postgresql-kafka.html) and
[Apache Kafka](http://kafka.apache.org/), and discuss the approaches you can use to do the same with
various other databases.

A new era of sanity in data systems awaits!
