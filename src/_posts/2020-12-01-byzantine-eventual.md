---
layout: paper
type: report
title: Byzantine Eventual Consistency and the Fundamental Limits of Peer-to-Peer Databases
authors: Martin Kleppmann and Heidi Howard
venue: "arXiv:2012.00472 [cs.DC]"
paper_url: https://arxiv.org/abs/2012.00472
---

Abstract
--------

Sybil attacks, in which a large number of adversary-controlled nodes join a network, are a concern
for many peer-to-peer database systems, necessitating expensive countermeasures such as
proof-of-work. However, there is a category of database applications that are, by design, immune to
Sybil attacks because they can tolerate arbitrary numbers of Byzantine-faulty nodes. In this paper,
we characterize this category of applications using a consistency model we call Byzantine Eventual
Consistency (BEC). We introduce an algorithm that guarantees BEC based on Byzantine causal
broadcast, prove its correctness, and demonstrate near-optimal performance in a prototype
implementation.
