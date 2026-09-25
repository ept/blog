---
layout: talk
title: "Keynote: Byzantine Eventual Consistency for Reliable Local-first Software"
venue: 45th International Symposium on Reliable Distributed Systems (SRDS)
place: Rome, Italy
venue_url: https://srds-conference.org/
slides_url: https://speakerdeck.com/ept/byzantine-eventual-consistency-for-reliable-local-first-software
---

<iframe class="speakerdeck-iframe" style="border: 0px; background: padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 550 / 420;" frameborder="0" src="https://speakerdeck.com/player/34979657186441c9bf9f4711f7fbfecc" title="Byzantine Eventual Consistency for Reliable Local-First Software" allowfullscreen="true" allow="web-share" data-ratio="1.3333333333333333"></iframe>

Abstract
--------

Local-first software, a growing industry movement, aims to make collaborative applications (such as
text and graphics editors, spreadsheets, etc.) resilient against server failure by making the client
software on the end user's device a full replica of the application state, and allowing it to sync
with other replicas in a decentralised fashion. This has many advantages, but also introduces new
challenges, since the system can no longer rely on a central server to maintain the consistency and
security of the collaborative document, and practical systems have to tolerate potentially malicious
clients. This talk gives an overview of our work on Byzantine Eventual Consistency, and how the open
source Automerge library makes this approach efficient.
