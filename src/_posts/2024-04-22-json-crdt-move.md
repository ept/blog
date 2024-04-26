---
layout: paper
type: conference
title: Extending JSON CRDTs with Move Operations
authors: Liangrun Da and Martin Kleppmann
venue: 11th Workshop on Principles and Practice of Consistency for Distributed Data (PaPoC)
place: Athens, Greece
doi: 10.1145/3642976.3653030
venue_url: https://papoc-workshop.github.io/2024/
paper_url: https://arxiv.org/abs/2311.14007
slides_url: https://liangrunda.com/slides/papoc-move.pdf
---

Abstract
--------

Conflict-Free Replicated Data Types (CRDTs) for JSON allow users to concurrently update a JSON
document and automatically merge the updates into a consistent state. Moving a subtree in a map or
reordering elements in a list within a JSON CRDT is challenging: naive merge algorithms may
introduce unexpected results such as duplicates or cycles. In this paper, we introduce an algorithm
for move operations in a JSON CRDT that handles the interaction with concurrent non-move operations,
and uses novel optimisations to improve performance. We plan to integrate this algorithm into the
Automerge CRDT library. 
