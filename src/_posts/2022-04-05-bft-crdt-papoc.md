---
layout: paper
type: conference
me_presenting: true
title: Making CRDTs Byzantine Fault Tolerant
authors: Martin Kleppmann
venue: 9th Workshop on Principles and Practice of Consistency for Distributed Data (PaPoC)
place: Rennes, France
doi: 10.1145/3517209.3524042
venue_url: https://papoc-workshop.github.io/2022/
paper_url: /papers/bft-crdt-papoc22.pdf
---


Abstract
--------

It is often claimed that Conflict-free Replicated Data Types (CRDTs) ensure consistency of
replicated data in peer-to-peer systems. However, peer-to-peer systems usually consist of untrusted
nodes that may deviate from the specified protocol (i.e. exhibit Byzantine faults), and most
existing CRDT algorithms cannot guarantee consistency in the presence of such faults. This paper
shows how to adapt existing non-Byzantine CRDT algorithms and make them Byzantine fault-tolerant.
The proposed scheme can tolerate any number of Byzantine nodes (making it immune to Sybil attacks),
guarantees Strong Eventual Consistency, and requires only modest changes to existing CRDT
algorithms.
