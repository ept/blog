---
layout: paper
type: report
title: A critique of the CAP theorem
authors: Martin Kleppmann
venue: "arXiv:1509.05393 [cs.DC]"
venue_url: http://arxiv.org/abs/1509.05393
paper_url: http://arxiv.org/abs/1509.05393
---

Abstract
--------

The *CAP Theorem* is a frequently cited impossibility result in distributed systems, especially
among *NoSQL* distributed databases. In this paper we survey some of the confusion about the
meaning of CAP, including inconsistencies and ambiguities in its definitions, and we highlight some
problems in its formalization. CAP is often interpreted as proof that eventually consistent
databases have better availability properties than strongly consistent databases; although there is
some truth in this, we show that more careful reasoning is required. These problems cast doubt on
the utility of CAP as a tool for reasoning about trade-offs in practical systems. As alternative to
CAP, we propose a *delay-sensitivity* framework, which analyzes the sensitivity of operation
latency to network delay, and which may help practitioners reason about the trade-offs between
consistency guarantees and tolerance of network faults.
