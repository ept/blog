---
layout: paper
type: journal
title: "Online Event Processing: Achieving consistency where distributed transactions have failed"
authors: Martin Kleppmann, Alastair R. Beresford, and Boerge Svingen
venue: ACM Queue
doi: 10.1145/3317287.3321612
paper_url: /papers/olep-acm-queue.pdf
---


Abstract
--------

Distributed transactions have failed as a mechanism for ensuring consistency across heterogeneous
storage technologies in today's large-scale applications. Instead, we are witnessing the emergence
of a programming model that relies on append-only event logs rather than transactions, and which we
call OnLine Event Processing (OLEP) in contrast to OLTP. In this article we show that, although an
event log is a very simple abstraction, applications that rely on such logs can efficiently provide
strong consistency guarantees, such as atomicity and enforcing invariants, which are normally
associated with ACID transactions. We provide case studies from real industrial data systems that
have adopted the OLEP approach, demonstrating the practical advantages of building upon event logs.
