---
layout: talk
title: Correctness proofs of distributed systems with Isabelle
venue: Strange Loop
place: St. Louis, MO, USA
venue_url: https://thestrangeloop.com/2019/correctness-proofs-of-distributed-systems-with-isabelle.html
video_url: https://www.youtube.com/watch?v=7w4KC6i9Yac
slides_url: https://speakerdeck.com/ept/correctness-proofs-of-distributed-systems-with-isabelle
---

* [Isabelle code of demo](https://gist.github.com/ept/b6872fc541a68a321a26198b53b3896b)

<iframe width="550" height="315" src="https://www.youtube-nocookie.com/embed/7w4KC6i9Yac" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<script async class="speakerdeck-embed" data-id="e1beafadaa61453dbe5b93d41ce55c18" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

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
