---
layout: paper
type: report
title: "Research for Practice: Convergence"
authors: Martin Kleppmann and Peter Alvaro
venue: Communications of the ACM, volume 65, issue 11, pages 104–106
doi: 10.1145/3563901
paper_url: /papers/convergence-cacm.pdf
publisher_url: https://cacm.acm.org/magazines/2022/11/265835-research-for-practice-convergence/fulltext
---

* Also appears in ACM Queue, volume 20, issue 3, pages 88-95,
  [doi:10.1145/3546931](https://doi.org/10.1145/3546931)
  ([HTML version](https://queue.acm.org/detail.cfm?id=3546931&doi=10.1145%2F3546931),
  [PDF version](/papers/convergence-acm-queue.pdf))

Abstract
--------

In distributed systems, there are—broadly speaking—two approaches to data consistency: consensus or
convergence. The consensus approach can be implemented with algorithms such as Paxos or Raft, and it
ensures strong consistency, which means making the distributed system appear as if it were not
distributed (linearizable) and as if there were no concurrency (serializable). This approach makes
the system easy to use, but it comes at the cost of performance, scalability, and the kinds of
faults that can be tolerated, because every update needs to wait for a reply from other nodes before
it can complete.

The alternative approach, convergence, is more commonly known as eventual consistency. In this
model, different nodes are allowed to process updates independently, without waiting for each other.
This is typically faster, more robust, and more scalable, but it leads to nodes having temporarily
inconsistent versions of the data. As those nodes communicate with each other, those inconsistencies
must be resolved—that is, they should converge toward the same state.

Convergence is such a useful idea that different research communities have developed several ways of
achieving it. This article looks at four variations on the theme of convergence, drawn from four
areas of computer science. I have selected five fairly recent articles that provide introductions to
each of the techniques for convergence.
