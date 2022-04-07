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
slides_url: https://speakerdeck.com/ept/making-crdts-byzantine-fault-tolerant
---

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/392910792df1434a8fcb7d00a3c19792" title="Making CRDTs Byzantine fault tolerant" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 420px;" data-ratio="1.3333333333333333"></iframe>

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
