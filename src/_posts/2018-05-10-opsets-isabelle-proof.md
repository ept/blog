---
layout: paper
type: report
title: "OpSets: Sequential Specifications for Replicated Datatypes (Proof Document)"
authors: Martin Kleppmann, Victor B. F. Gomes, Dominic P. Mulligan, and Alastair R. Beresford
venue: Archive of Formal Proofs
paper_url: https://www.isa-afp.org/entries/OpSets.html
---

Abstract
--------

We introduce OpSets, an executable framework for specifying and reasoning about the semantics of
replicated datatypes that provide eventual consistency in a distributed system, and for mechanically
verifying algorithms that implement these datatypes. Our approach is simple but expressive, allowing
us to succinctly specify a variety of abstract datatypes, including maps, sets, lists, text, graphs,
trees, and registers. Our datatypes are also composable, enabling the construction of complex data
structures. To demonstrate the utility of OpSets for analysing replication algorithms, we highlight
an important correctness property for collaborative text editing that has traditionally been
overlooked; algorithms that do not satisfy this property can exhibit awkward interleaving of text.
We use OpSets to specify this correctness property and prove that although one existing replication
algorithm satisfies this property, several other published algorithms do not.
