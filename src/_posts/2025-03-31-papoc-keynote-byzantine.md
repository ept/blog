---
layout: talk
title: "Keynote: Byzantine Eventual Consistency and Local-First Access Control"
venue: 12th Workshop on Principles and Practice of Consistency for Distributed Data (PaPoC)
place: Rotterdam, Netherlands
venue_url: https://papoc-workshop.github.io/2025/
---

Abstract
--------

CRDTs have long provided eventual consistency without a central server. But they have also long
ignored the question: how do you know which peers are allowed to update the state? Performing access
control without reintroducing a central server means we need a replicated data structure that stores
the set of authorised users. This access control list is itself a CRDT, but it needs to be resilient
against malicious manipulation. This talk will introduce how to think about Byzantine fault
tolerance in eventually consistent systems, apply those principles to the problem of local-first
access control, and show how these topics open exciting new research directions.
