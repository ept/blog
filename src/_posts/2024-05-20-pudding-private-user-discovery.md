---
layout: paper
type: journal
title: "Pudding: Private User Discovery in Anonymity Networks"
authors: Ceren Kocaoğullar, Daniel Hugenroth, Martin Kleppmann, and Alastair R. Beresford
venue: IEEE Symposium on Security and Privacy (S&P)
place: San Francisco, CA, USA
doi: 10.1109/SP54263.2024.00167
venue_url: https://sp2024.ieee-security.org/
paper_url: https://arxiv.org/abs/2311.10825
publisher_url: https://doi.ieeecomputersociety.org/10.1109/SP54263.2024.00167
---

* [GitHub repository](https://github.com/ckocaogullar/pudding-protocol)

Abstract
--------

Anonymity networks allow messaging with metadata privacy, providing better privacy than popular
encrypted messaging applications. However, contacting a user on an anonymity network currently
requires knowing their public key or similar high-entropy information, as these systems lack
a privacy-preserving mechanism for contacting a user via a short, human-readable username. Previous
research suggests that this is a barrier to widespread adoption.

In this paper we propose Pudding, a novel private user discovery protocol that allows a user to be
contacted on an anonymity network knowing only their email address. Our protocol hides contact
relationships between users, prevents impersonation, and conceals which usernames are registered on
the network. Pudding is Byzantine fault tolerant, remaining available and secure as long as less
than one third of servers are crashed, unavailable, or malicious. It can be deployed on Loopix and
Nym without changes to the underlying anonymity network protocol, and it supports mobile devices
with intermittent network connectivity. We demonstrate the practicality of Pudding with a prototype
using the Nym anonymity network. We also formally define the security and privacy goals of our
protocol and conduct a thorough analysis to assess its compliance with these definitions. 
