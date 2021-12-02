---
layout: talk
title: Byzantine Eventual Consistency and the Fundamental Limits of Peer-to-Peer Databases
venue: Protocol Labs ConsensusDays
place: Online
venue_url: https://research.protocol.ai/sites/consensusday21/programme/
video_url: https://www.youtube.com/watch?v=RhVQ2y8rwe0
slides_url: https://speakerdeck.com/ept/byzantine-eventual-consistency-and-the-fundamental-limits-of-peer-to-peer-databases
---

* [Paper on arXiv](https://arxiv.org/abs/2012.00472)

<iframe width="550" height="315" src="https://www.youtube.com/embed/RhVQ2y8rwe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Abstract
--------

Sybil attacks, in which a large number of adversary-controlled nodes join a network, are a concern
for many peer-to-peer database systems, necessitating expensive countermeasures such as
proof-of-work. However, there is a category of database applications that are, by design, immune to
Sybil attacks because they can tolerate arbitrary numbers of Byzantine-faulty nodes. In this paper,
we characterize this category of applications using a consistency model we call *Byzantine Eventual
Consistency* (BEC). We introduce an algorithm that guarantees BEC based on Byzantine causal
broadcast, prove its correctness, and demonstrate near-optimal performance in a prototype
implementation.
