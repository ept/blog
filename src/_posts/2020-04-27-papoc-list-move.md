---
layout: paper
type: conference
title: Moving Elements in List CRDTs
authors: Martin Kleppmann
venue: 7th Workshop on Principles and Practice of Consistency for Distributed Data (PaPoC)
place: Heraklion, Crete, Greece
doi: 10.1145/3380787.3393677
venue_url: https://papoc-workshop.github.io/2020/
paper_url: /papers/list-move-papoc20.pdf
---


Abstract
--------

Conflict-free Replicated Data Types (CRDTs) for lists allow multiple users to concurrently insert
and delete elements in a shared list object. However, existing algorithms behave poorly when users
concurrently move list elements to a new position (i.e. reorder the elements in the list). We
demonstrate the need for such a move operation, and describe an algorithm that extends a list CRDT
with an explicit move operation. Our algorithm can be used in conjunction with any existing list
CRDT algorithm. In addition to moving a single list element, we also discuss the open problem of
moving ranges of elements.
