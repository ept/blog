---
layout: talk
title: Turning the database inside-out
venue: Øredev
place: Malmö, Sweden
venue_url: http://oredev.org/2015/sessions/turning-the-database-inside-out-with-apache-samza
transcript_url: /2015/03/04/turning-the-database-inside-out.html
slides_url: https://speakerdeck.com/ept/turning-the-database-inside-out-with-apache-samza
video_url: https://vimeo.com/144819293
---

<script async class="speakerdeck-embed" data-id="bee4676021bf0132b11b1a9c43b4c166" data-ratio="1.41436464088398" src="//speakerdeck.com/assets/embed.js"></script>

<iframe src="https://player.vimeo.com/video/144863186" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

This was a repeat of my
[talk at Strange Loop 2014](/2014/09/18/turning-database-inside-out-at-strange-loop.html).

Abstract
--------

Databases are global, shared, mutable state. That's the way it has been since the 1960s, and no
amount of NoSQL has changed that. However, most self-respecting developers have got rid of mutable
global variables in their code long ago. So why do we tolerate databases as they are?

A more promising model, used in some systems, is to think of a database as an always-growing
collection of immutable facts. You can query it at some point in time — but that's still old,
imperative style thinking. A more fruitful approach is to take the streams of facts as they come in,
and functionally process them in real-time.

This talk introduces Apache Samza, a distributed stream processing framework developed at LinkedIn.
At first it looks like yet another tool for computing real-time analytics, but it's more than that.
Really it's a surreptitious attempt to take the database architecture we know, and turn it inside
out.

At its core is a distributed, durable commit log, implemented by Apache Kafka. Layered on top are
simple but powerful tools for joining streams and managing large amounts of data reliably.

What we have to gain from turning the database inside out? Simpler code, better scalability, better
robustness, lower latency, and more flexibility for doing interesting things with data. After this
talk, you'll see the architecture of your own applications in a completely new light.
