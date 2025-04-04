---
layout: paper
type: journal
title: "Rollercoaster: An Efficient Group-Multicast Scheme for Mix Networks"
authors: Daniel Hugenroth, Martin Kleppmann, and Alastair R. Beresford
venue: 30th USENIX Security Symposium
paper_url: https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-957.html
venue_url: https://www.usenix.org/conference/usenixsecurity21/presentation/hugenroth
publisher_url: https://www.usenix.org/system/files/sec21-hugenroth.pdf
video_url: https://www.youtube.com/watch?v=b8JAQfZZZNM
slides_url: https://www.usenix.org/system/files/sec21_slides_hugenroth.pdf
---


Abstract
--------

Mix network designs such as Loopix provide strong metadata anonymity guarantees that are crucial
across many applications. However, because they limit the rate at which messages can be sent by each
user, they incur high delays when sending many messages to multiple recipients – for instance, in
decentralised collaborative apps.

In this paper we present an efficient multicast scheme named Rollercoaster that reduces the time for
delivering a message to all members of a group of size m from O(m) to O(log m). Rollercoaster can
be deployed without modifications to the underlying mix network, allowing it to benefit from the
anonymity set provided by existing users. We further develop an extension that achieves the same
asymptotic guarantees in the presence of unreliable group members.

While the scheme is applicable to many mix network designs, we evaluate it for the Loopix network,
which is the most advanced and practical design to date. For this evaluation we developed a network
simulator that allows fast, reproducible, and inspectable runs while eliminating external
influences.
