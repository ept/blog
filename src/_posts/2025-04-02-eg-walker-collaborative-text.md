---
layout: paper
type: journal
me_presenting: true
title: "Collaborative Text Editing with Eg-walker: Better, Faster, Smaller"
authors: Joseph Gentle and Martin Kleppmann
venue: 20th European Conference on Computer Systems (EuroSys)
award: Gilles Muller Best Artifact Award
place: Rotterdam, Netherlands
doi: 10.1145/3689031.3696076
venue_url: https://2025.eurosys.org/
paper_url: https://arxiv.org/abs/2409.14252
slides_url: https://speakerdeck.com/ept/collaborative-text-editing-with-eg-walker-better-faster-smaller
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

<iframe class="speakerdeck-iframe" style="border: 0px; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 420;" frameborder="0" src="https://speakerdeck.com/player/1f109616fd894e149979707dfe88cdcf" title="Collaborative text editing with Eg-walker: Better, faster, smaller" allowfullscreen="true" data-ratio="1.3333333333333333"></iframe>
