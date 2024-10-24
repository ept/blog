---
layout: paper
type: journal
title: Key Agreement for Decentralized Secure Group Messaging with Strong Security Guarantees
authors: Matthew Weidner, Martin Kleppmann, Daniel Hugenroth, and Alastair R. Beresford
venue: ACM SIGSAC Conference on Computer and Communications Security (CCS)
place: Seoul, South Korea
paper_url: https://eprint.iacr.org/2020/1281
doi: 10.1145/3460120.3484542
---

Abstract
--------

Secure group messaging protocols, providing end-to-end encryption for group communication, need to
handle mobile devices frequently being offline, group members being added or removed, and the
possibility of device compromises during long-lived chat sessions. Existing work targets
a centralized network model in which all messages are routed through a single server, which is
trusted to provide a consistent total order on updates to the group state. In this paper we adapt
secure group messaging for decentralized networks that have no central authority. Servers may still
optionally be used, but they are trusted less. We define decentralized continuous group key
agreement (DCGKA), a new cryptographic primitive encompassing the core of a decentralized secure
group messaging protocol; we give a practical construction of a DCGKA protocol and prove its
security; and we describe how to construct a full messaging protocol from DCGKA. In the face of
device compromise our protocol achieves forward secrecy and post-compromise security. We evaluate
the performance of a prototype implementation, and demonstrate that our protocol has practical
efficiency.
