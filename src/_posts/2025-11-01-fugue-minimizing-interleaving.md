---
layout: paper
type: journal
title: "The Art of the Fugue: Minimizing Interleaving in Collaborative Text Editing"
authors: Matthew Weidner and Martin Kleppmann
venue: "IEEE Transactions on Parallel and Distributed Systems 36(11):2425–2437"
doi: 10.1109/TPDS.2025.3611880
paper_url: https://arxiv.org/abs/2305.00583
publisher_url: https://ieeexplore.ieee.org/document/11181220
---

* [GitHub repository](https://github.com/mweidner037/fugue)

Abstract
--------

Most existing algorithms for replicated lists, which are widely used in collaborative text editors,
suffer from a problem: when two users concurrently insert text at the same position in the document,
the merged outcome may interleave the inserted text passages, resulting in corrupted and potentially
unreadable text. The problem has gone unnoticed for decades, and it affects both CRDTs and
Operational Transformation. This paper defines maximal non-interleaving, our new correctness
property for replicated lists. We introduce two related CRDT algorithms, Fugue and FugueMax, and
prove that FugueMax satisfies maximal non-interleaving. We also implement our algorithms and
demonstrate that Fugue offers performance comparable to state-of-the-art CRDT libraries for text
editing.
