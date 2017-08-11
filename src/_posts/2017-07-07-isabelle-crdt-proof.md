---
layout: paper
title: A framework for establishing Strong Eventual Consistency for Conflict-free Replicated Datatypes
authors: Victor B. F. Gomes, Martin Kleppmann, Dominic P. Mulligan, and Alastair R. Beresford
venue: Archive of Formal Proofs
paper_url: https://www.isa-afp.org/entries/CRDT.html
---

Abstract
--------

In this work, we focus on the correctness of Conflict-free Replicated Data Types (CRDTs), a class of
algorithm that provides strong eventual consistency guarantees for replicated data. We develop
a modular and reusable framework for verifying the correctness of CRDT algorithms. We avoid
correctness issues that have dogged previous mechanised proofs in this area by including a network
model in our formalisation, and proving that our theorems hold in all possible network behaviours.
Our axiomatic network model is a standard abstraction that accurately reflects the behaviour of
real-world computer networks. Moreover, we identify an abstract convergence theorem, a property of
order relations, which provides a formal definition of strong eventual consistency. We then obtain
the first machine-checked correctness theorems for three concrete CRDTs: the Replicated Growable
Array, the Observed-Remove Set, and an Increment-Decrement Counter.
