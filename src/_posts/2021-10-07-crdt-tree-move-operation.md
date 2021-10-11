---
layout: paper
type: journal
title: A highly-available move operation for replicated trees
authors: Martin Kleppmann, Dominic P. Mulligan, Victor B. F. Gomes, and Alastair R. Beresford
venue: IEEE Transactions on Parallel and Distributed Systems
doi: 10.1109/TPDS.2021.3118603
paper_url: https://martin.kleppmann.com/papers/move-op.pdf
publisher_url: https://ieeexplore.ieee.org/document/9563274
---


Abstract
--------

Replicated tree data structures are a fundamental building block of distributed filesystems, such as
Google Drive and Dropbox, and collaborative applications with a JSON or XML data model. These
systems need to support a *move* operation that allows a subtree to be moved to a new location
within the tree. However, such a move operation is difficult to implement correctly if different
replicas can concurrently perform arbitrary move operations, and we demonstrate bugs in Google Drive
and Dropbox that arise with concurrent moves. In this paper we present a CRDT algorithm that handles
arbitrary concurrent modifications on trees, while ensuring that the tree structure remains valid
(in particular, no cycles are introduced), and guaranteeing that all replicas converge towards the
same consistent state. Our algorithm requires no synchronous coordination between replicas, making
it highly available in the face of network partitions. We formally prove the correctness of our
algorithm using the Isabelle/HOL proof assistant, and evaluate the performance of our formally
verified implementation in a geo-replicated setting.
