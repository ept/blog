---
layout: talk
title: "Automerge: A New Foundation for Collaboration Software"
venue: Computer Laboratory Systems Research Group Seminars
place: Cambridge, UK
venue_url: http://talks.cam.ac.uk/talk/index/163276
video_url: https://www.youtube.com/watch?v=Qytg0Ibet2E
slides_url: https://speakerdeck.com/ept/automerge-a-new-foundation-for-collaboration-software-693133ad-118f-42fe-bb31-5e34dfbc43b8
---

<iframe width="550" height="315" src="https://www.youtube-nocookie.com/embed/Qytg0Ibet2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/ff039390c9604c2f87b6d3a4d10782d8" title="Automerge: a new foundation for collaboration software" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 420px;" data-ratio="1.3333333333333333"></iframe>

Abstract
--------

Software for real-time collaboration, such as Google Docs, Overleaf, Figma, or Trello, has enabled
many people around the world to continue working remotely during the pandemic. While this software
is very valuable, it is also fragile because it relies on centralised, trusted cloud services. If
the company providing the cloud software goes out of business, or decides to suspend your account,
the software stops working, and you are locked out of all of the documents and data you ever created
with that software.

[Local-first software](https://www.inkandswitch.com/local-first.html) is an effort to make
collaboration software less dependent on cloud services, and
[Automerge](https://github.com/automerge/automerge) is an open-source library for realising
local-first software. Automerge provides a shared JSON-like data structure that several users can
update concurrently, and which automatically merges those updates into a consistent result. It
provides data formats for efficiently storing this data and syncing it between users. It seamlessly
supports both offline work and live real-time collaboration while online.

Automerge is the result of years of research on
[Conflict-free Replicated Data Types](https://crdt.tech/) (CRDTs). In this talk we will explore both
the theoretical foundations of CRDTs, their practical applications, and the ongoing research in this
area.
