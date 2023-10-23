---
layout: talk
title: Byzantine Fault Tolerance for Peer-to-Peer Collaboration Software
venue: KASTEL Distinguished Lecture Series
place: Karlsruhe Institute of Technology, Germany
venue_url: https://cybersec.kcist.kit.edu/473.php
slides_url: https://speakerdeck.com/ept/byzantine-fault-tolerance-for-peer-to-peer-collaboration
---

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
