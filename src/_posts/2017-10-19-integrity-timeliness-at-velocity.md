---
layout: talk
title: ACID versus eventual consistency... Can we get the best of both worlds?
venue: O'Reilly Velocity
place: London, UK
venue_url: https://conferences.oreilly.com/velocity/vl-eu/public/schedule/detail/62690
---

This talk is an invited keynote.

Abstract
--------

In distributed data systems, people often talk about the trade-off between consistency and
availability. The conclusion from the CAP theorem seems to be that you can’t have both. However,
when you take a closer look, you discover that there is much more subtlety than first meets the eye.
The words “consistency” and “availability” mean very different things to different people. For sure,
some forms of consistency and some forms of availability are at odds with each other, but many other
variants are actually perfectly compatible.

Systems with eventual consistency make very weak guarantees, which enables them to achieve good
performance and operational robustness in the face of failures. That’s a fine choice for some
applications, but other applications need stronger degrees of consistency, which begs the question:
how far can we ratchet up the consistency guarantees, without losing all that nice performance and
robustness that we get from eventual consistency?

In this talk, we will explore how we can split “consistency” into two separate concepts: “integrity”
and “timeliness”. And we will see how that distinction allows us to build systems that behave
correctly, even in the face of faults, while also achieving better availability and performance than
the classic approach of ACID transactions.
