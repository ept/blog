---
layout: paper
title: Verifying Strong Eventual Consistency in Distributed Systems
authors: Victor B. F. Gomes, Martin Kleppmann, Dominic P. Mulligan, and Alastair R. Beresford
venue: Proceedings of the ACM on Programming Languages (PACMPL), Vol. 1, OOPSLA, Article 109
place: Vancouver, BC, Canada
doi: 10.1145/3133933
paper_url: /papers/crdt-isabelle-oopsla17.pdf
---

* [arXiv: 1707.01747](https://arxiv.org/abs/1707.01747)

Abstract
--------

Data replication is used in distributed systems to maintain up-to-date copies of shared data across
multiple computers in a network. However, despite decades of research, algorithms for achieving
consistency in replicated systems are still poorly understood. Indeed, many published algorithms
have later been shown to be incorrect, even some that were accompanied by supposed mechanised proofs
of correctness. In this work, we focus on the correctness of Conflict-free Replicated Data Types
(CRDTs), a class of algorithm that provides strong eventual consistency guarantees for replicated
data. We develop a modular and reusable framework in the Isabelle/HOL interactive proof assistant
for verifying the correctness of CRDT algorithms. We avoid correctness issues that have dogged
previous mechanised proofs in this area by including a network model in our formalisation, and
proving that our theorems hold in all possible network behaviours. Our axiomatic network model is
a standard abstraction that accurately reflects the behaviour of real-world computer networks.
Moreover, we identify an abstract convergence theorem, a property of order relations, which provides
a formal definition of strong eventual consistency. We then obtain the first machine-checked
correctness theorems for three concrete CRDTs: the Replicated Growable Array, the Observed-Remove
Set, and an Increment-Decrement Counter. We find that our framework is highly reusable, developing
proofs of correctness for the latter two CRDTs in a few hours and with relatively little
CRDT-specific code.
