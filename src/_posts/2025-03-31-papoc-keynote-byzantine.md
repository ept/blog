---
layout: talk
title: "Keynote: Byzantine Eventual Consistency and Local-First Access Control"
venue: 12th Workshop on Principles and Practice of Consistency for Distributed Data (PaPoC)
place: Rotterdam, Netherlands
venue_url: https://papoc-workshop.github.io/2025/
slides_url: https://speakerdeck.com/ept/byzantine-eventual-consistency-and-local-first-access-control
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

<iframe class="speakerdeck-iframe" style="border: 0px; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 420;" frameborder="0" src="https://speakerdeck.com/player/c6290deac8a44e70afe2be04b02600cf" title="Byzantine Eventual Consistency and Local-first Access Control" allowfullscreen="true" data-ratio="1.3333333333333333"></iframe>
