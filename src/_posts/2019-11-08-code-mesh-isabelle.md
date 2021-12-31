---
layout: talk
title: Correctness proofs of distributed systems with Isabelle
venue: Code Mesh
place: London, UK
venue_url: https://www.codesync.global/speaker/martin-kleppmann/
video_url: https://www.youtube.com/watch?v=NfdP6wwjsGk
slides_url: https://speakerdeck.com/ept/correctness-proofs-of-distributed-systems-with-isabelle
---

* [Isabelle code of demo](https://gist.github.com/ept/b6872fc541a68a321a26198b53b3896b)
* [Extended (2-hour) version of talk](https://www.youtube.com/watch?v=Uav5jWHNghY)

<iframe width="550" height="315" src="https://www.youtube-nocookie.com/embed/NfdP6wwjsGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/e1beafadaa61453dbe5b93d41ce55c18" title="Correctness proofs of distributed systems with Isabelle" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 314px;" data-ratio="1.78343949044586"></iframe>


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
