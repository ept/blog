---
layout: talk
title: "Transactions: myths, surprises and opportunities"
venue: Strange Loop
place: "St. Louis, Missouri, US"
venue_url: http://www.thestrangeloop.com/2015/transactions-myths-surprises-and-opportunities.html
slides_url: https://speakerdeck.com/ept/transactions-myths-surprises-and-opportunities
---

<script async class="speakerdeck-embed" data-id="0a5b3e46260542ff9e557458e33afd33" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

Back in the 1970s, the earliest databases had transactions. Then NoSQL abolished them. And now,
perhaps, they are making a comeback... but reinvented.

The purpose of transactions is to make application code simpler, by reducing the amount of failure
handling you need to do yourself. However, they have also gained a reputation for being slow and
unscalable. With the traditional implementation of serializability (2-phase locking), that
reputation was somewhat deserved.

In the last few years, there has been a resurgence of interest in transaction algorithms that
perform well and scale well. This talk answers some of the biggest questions about the bright new
landscape of transactions:

* What does ACID actually mean? What race conditions can you get with weak isolation (such as "read
  committed" and "repeatable read"), and how does this affect your application?
* What are the strongest guarantees we can achieve, while maintaining high availability and high
  performance at scale?
* How do the new generation of algorithms for distributed, highly-available transactions work?
* Linearizability, session guarantees, "consistency" and the much-misunderstood CAP theorem --
  what's really going on here?
* When you move beyond a single database, e.g. doing stream processing, what are your options for
  maintaining transactional guarantees?
