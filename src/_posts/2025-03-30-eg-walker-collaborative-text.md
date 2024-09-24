---
layout: paper
type: journal
title: "Collaborative Text Editing with Eg-walker: Better, Faster, Smaller"
authors: Joseph Gentle and Martin Kleppmann
venue: 20th European Conference on Computer Systems (EuroSys)
place: Rotterdam, Netherlands
doi: 10.1145/3689031.3696076
venue_url: https://2025.eurosys.org/
paper_url: https://arxiv.org/abs/2409.14252
---

* [Code and benchmarks](https://zenodo.org/records/13823409) (also on [GitHub](https://github.com/josephg/egwalker-paper))
* [Rust implementation](https://github.com/josephg/diamond-types)
* [TypeScript implementation](https://github.com/josephg/eg-walker-reference)
* [Datasets](https://github.com/josephg/editing-traces)

Abstract
--------

Collaborative text editing algorithms allow several users to concurrently modify a text file, and
automatically merge concurrent edits into a consistent state. Existing algorithms fall in two
categories: Operational Transformation (OT) algorithms are slow to merge files that have diverged
substantially due to offline editing; CRDTs are slow to load and consume a lot of memory. We
introduce Eg-walker, a collaboration algorithm for text that avoids these weaknesses. Compared to
existing CRDTs, it consumes an order of magnitude less memory in the steady state, and loading
a document from disk is orders of magnitude faster. Compared to OT, merging long-running branches is
orders of magnitude faster. In the worst case, the merging performance of Eg-walker is comparable
with existing CRDT algorithms. Eg-walker can be used everywhere CRDTs are used, including
peer-to-peer systems without a central server. By offering performance that is competitive with
centralised algorithms, our result paves the way towards the widespread adoption of peer-to-peer
collaboration software. 
