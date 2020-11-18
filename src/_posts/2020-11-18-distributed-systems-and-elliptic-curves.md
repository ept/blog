---
layout: ync-post
title: "New courses on distributed systems and elliptic curve cryptography"
---

I have just published new educational materials that might be of interest to computing people:
a new 8-lecture course on distributed systems, and a tutorial on elliptic curve cryptography.

Distributed Systems
-------------------

Since last year I have been delivering an 8-lecture undergraduate course on distributed systems at the University of Cambridge.
The first time I delivered it, I inherited the slides and exercises from the people who lectured it in previous years (Richard Mortier, Anil Madhavapeddy, Robert Watson, Jean Bacon, and Steven Hand), and I just used those materials with minor modifications.
It was a good course, but it was getting quite dated (e.g. lots of material on [CORBA](https://en.wikipedia.org/wiki/Common_Object_Request_Broker_Architecture), which is now of mostly historical interest).

Therefore, this year I decided to do a thorough refresh of the course content, and wrote a brand new set of slides and lecture notes.
Also, due to the pandemic we are not having any in-person lectures, so I recorded videos for all of the lectures.
I decided to make all of this available publicly under a [creative commons CC BY-SA license](https://creativecommons.org/licenses/by-sa/4.0/), which means that you're welcome to use it freely (including incorporating it into your own work), provided that you give credit to me, and that you share your derived work under the same license.

The result is here:

* [Lecture notes (PDF)](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/dist-sys-notes.pdf) (including exercises)
* Slides: [slideshow](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/dist-sys-slides.pdf) and [printable](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/dist-sys-handout.pdf) (PDF)
* [Lecture videos (YouTube)](https://www.youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB)
* [Course web page](https://www.cst.cam.ac.uk/teaching/2021/ConcDisSys)
* Solution notes for the exercises are available on demand ([email me](/contact.html) and convince me that you're not a student trying to cheat).
  Cambridge supervisors can [download the solution notes directly](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/supervisors/dist-sys-solutions.pdf) (Raven login required).

The course is primarily designed for Cambridge undergraduate students, and it includes some cross-references to other courses.
Many other courses also make their notes or slides publicly available, so you can still look them up if you're not at Cambridge by going to the [course web pages](https://www.cl.cam.ac.uk/teaching/2021/part1b-75.html).
(Many lecturers restrict their video recordings to Cambridge users only, so those might not be publicly available.)

The distributed systems course comprises about 7 hours of video and 87 pages of lecture notes.
It covers the following topics:

1. Introduction: distributed systems, computer networks, and RPC
2. System models: network faults, crash and Byzantine faults, synchrony assumptions
3. Physical clocks, clock synchronisation, and causality
4. Logical time, broadcast protocols (reliable, FIFO, causal, total order)
5. Replication, quorum protocols, state machine replication
6. Consensus, details on the Raft consensus algorithm
7. Replica consistency, two-phase commit, linearizability, eventual consistency
8. Case studies: collaboration software, Google's Spanner

The main focus of this course is on understanding the algorithms and the principles that allow us to build robust and reliable distributed systems.
It uses examples of practical systems as motivation, and the videos include a few live demos of real distributed systems in action.
The aim is to convey the fundamentals without being excessively theoretical; there are a few mathematical proofs in the exercises, but most of the discussion is informal and example-based.

The level of this course is intended for second-year undergraduates.
Our students at this level have reasonable fluency with mathematical notation, and some background in programming languages and operating systems, so that's what this course assumes.

Elliptic Curve Cryptography
---------------------------

Another document I'm releasing today is called
[Implementing Curve25519/X25519: A Tutorial on Elliptic Curve Cryptography](https://martin.kleppmann.com/papers/curve25519.pdf).
There's no video for this one, just a 30-page PDF.

Many textbooks cover the concepts behind Elliptic Curve Cryptography (ECC), but few explain how to go from the equations to a working, fast, and secure implementation.
On the other hand, while the code of many cryptographic libraries is available as open source, it can be [rather opaque to the untrained eye](https://github.com/jedisct1/libsodium/blob/master/src/libsodium/crypto_scalarmult/curve25519/ref10/x25519_ref10.c#L91-L132), and it is rarely accompanied by detailed documentation explaining how the code came about and why it is correct.

This tutorial bridges the gap between the mathematics and implementation of elliptic curve cryptography.
It is written for readers who are new to cryptography, and it assumes no more mathematical background than most undergraduate computer science courses.
Starting from first principles, this document shows how to derive every line of code in an implementation of the [X25519](https://tools.ietf.org/html/rfc7748) Diffie-Hellman key agreement scheme, based on the [widely-used Curve25519 elliptic curve](https://ianix.com/pub/curve25519-deployment.html).
The implementation is based on Dan Bernstein et al.'s [TweetNaCl](https://tweetnacl.cr.yp.to/).
It is fast and secure; in particular, it uses constant-time algorithms to prevent side-channel attacks.

I wrote this because I wanted to learn how real implementations of ECC work, but I couldn't find good resources that explained it, so I wrote the document as I figured it out step-by-step from a number of sources (and by doing a lot of the calculations myself).
I hope others will also find it useful.
