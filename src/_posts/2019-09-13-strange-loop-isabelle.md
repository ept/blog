---
layout: talk
title: Correctness proofs of distributed systems with Isabelle
venue: Strange Loop
place: St. Louis, MO, USA
venue_url: https://thestrangeloop.com/2019/correctness-proofs-of-distributed-systems-with-isabelle.html
---


Abstract
--------

Testing systems is great, but tests can only explore a finite set of inputs and behaviors. Many real
systems, especially distributed systems, have a potentially infinite state space. If you want to be
sure that a program does the right thing in all possible situations, testing is not sufficient: you
need proof. Only mathematical proof, e.g. by induction, can cover an infinite state space.

Pen-and-paper proofs are well established in mathematics, but they need to be laboriously checked by
hand, and humans sometimes make mistakes. Automated theorem provers and computerized proof
assistants can help here. This talk introduces Isabelle/HOL, an interactive proof assistant that can
be used to formally prove the correctness of algorithms. It is somewhat like a programming language
and REPL for proofs.

In this talk we will explore how Isabelle can be used to analyze algorithms for distributed systems,
and prove them correct. We will work through some example problems in live demos, and prove real
theorems about some simple algorithms. Proof assistants still have a pretty steep learning curve,
and this talk won't be able to teach you everything, but you will get a sense of the style of
reasoning, and maybe you will be tempted to try it for yourself.