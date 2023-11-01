---
layout: talk
title: Byzantine Fault Tolerance for Peer-to-Peer Collaboration Software
venue: KASTEL Distinguished Lecture Series
place: Karlsruhe Institute of Technology, Germany
venue_url: https://cybersec.kcist.kit.edu/473.php
slides_url: https://speakerdeck.com/ept/byzantine-fault-tolerance-for-peer-to-peer-collaboration
video_url: https://www.youtube.com/watch?v=VKHBRU3cKXw
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/VKHBRU3cKXw?si=gV0Ft5dYhperG659" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" style="border: 0px; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 420;" frameborder="0" src="https://speakerdeck.com/player/d70727e75cf64f959ad84a06398acb2b" title="Byzantine fault tolerance for peer-to-peer collaboration" allowfullscreen="true" data-ratio="1.3333333333333333"></iframe>

Abstract
--------

When developing web applications, the number one security rule is that the server should never trust
anything it receives from clients. When developing peer-to-peer software, the equivalent rule is
that a peer should never trust anything it receives from other peers. Unfortunately, many
researchers working on peer-to-peer applications seem to have forgotten this rule. There have been
efforts to build, for example, P2P equivalents of Google Docs, but they mostly assume trusted peers
that correctly follow the protocol. A malicious peer can easily cause permanent inconsistencies in
a document.

This talk will introduce our work-in-progress research on making collaboration software robust
against malicious (Byzantine) peers. Hint: there are no consensus algorithms and no blockchains
involved!
