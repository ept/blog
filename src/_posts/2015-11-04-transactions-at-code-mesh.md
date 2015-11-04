---
layout: talk
title: "Transactions: Myths, Surprises and Opportunities"
venue: Code Mesh
place: London, UK
venue_url: http://www.codemesh.io/codemesh2015/martin-kleppmann
slides_url: https://speakerdeck.com/ept/transactions-myths-surprises-and-opportunities
---

<script async class="speakerdeck-embed" data-id="0a5b3e46260542ff9e557458e33afd33" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

Back in the 1970s, the earliest databases had transactions. Then NoSQL abolished them. And now,
perhaps, they are making a comeback... but reinvented.

The purpose of transactions is to make application code simpler, by reducing the amount of failure
handling you need to do yourself. However, they have also gained a reputation for being slow and
unscalable. With the traditional implementation of serializable transactions (2-phase locking), that
reputation was somewhat deserved.

In the last few years, there has been a resurgence of interest in transaction algorithms that
perform well and scale well. This talk answers some of the biggest questions about the bright new
landscape of transactions:

* You know that ACID stands for Atomicity, Consistency, Isolation and Durability, but are you
  certain that you know precisely what those words mean? What race conditions can you get with weak
  isolation (such as "read committed" and "repeatable read"), and how does this affect your
  application?
* How do modern implementations of serializability work, and how are they different from traditional
  algorithms?
* What are the strongest guarantees we can achieve, while maintaining high availability and high
  performance at scale?
* When you build a microservices architecture or use stream processing, you often end up with data
  spread across multiple databases. Does this mean you inevitably have to give up transactional
  guarantees?
