---
layout: paper
type: conference
title: Undo and Redo Support for Replicated Registers
authors: Leo Stewen and Martin Kleppmann
venue: 11th Workshop on Principles and Practice of Consistency for Distributed Data (PaPoC)
place: Athens, Greece
doi: 10.1145/3642976.3653029
venue_url: https://papoc-workshop.github.io/2024/
paper_url: https://arxiv.org/abs/2404.11308
slides_url: https://github.com/lstwn/undo-redo-replicated-registers/blob/arxiv/presentation/build/Undo%20and%20Redo%20Support%20for%20Replicated%20Registers.pdf
---

Abstract
--------

Undo and redo functionality is ubiquitous in collaboration software. In single user settings, undo
and redo are well understood. However, when multiple users edit a document, concurrency may arise,
leading to a non-linear operation history. This renders undo and redo more complex both in terms of
their semantics and implementation.

We survey the undo and redo semantics of current mainstream collaboration software and derive
principles for undo and redo behavior in a collaborative setting. We then apply these principles to
a simple CRDT, the Multi-Valued Replicated Register, and present a novel undo and redo algorithm
that implements the undo and redo semantics that we believe are most consistent with users'
expectations.
