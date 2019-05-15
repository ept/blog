---
layout: talk
title: Adapting secure group messaging for encrypted CRDTs
venue: LightKone workshop on Verification, Security and Antidote
place: Kaiserslautern, Germany
slides_url: https://speakerdeck.com/ept/adapting-secure-group-messaging-for-encrypted-crdts
---

<script async class="speakerdeck-embed" data-id="b073059e8cba471293d33b2c453108cf" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

Secure messaging apps like WhatsApp, Signal, and iMessage have brought end-to-end encryption to over
1 billion users. The protocols underlying these apps provide much stronger security properties than
earlier encryption systems such as PGP/GnuPG. This makes them an interesting basis for implementing
CRDT-based data systems with end-to-end security: if we simply send all the CRDT operations or state
updates via a secure messaging protocol, we inherit its strong security properties.

However, there are lots of subtleties about the guarantees provided by secure messaging protocols:
in particular, the properties that hold for communication between two parties often don't easily
generalise to groups of more than two participants. This talk will summarise the current state of
research in secure group messaging, and discuss how we can bring this work into the world of CRDTs.
