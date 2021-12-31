---
layout: talk
title: "Automerge: A New Foundation for Collaboration Software"
venue: Emerging Technologies for the Enterprise (Philly ETE)
place: Online
venue_url: https://2021.phillyemergingtech.com/talks/automerge-a-new-foundation-for-collaboration-software/
slides_url: https://speakerdeck.com/ept/automerge-a-new-foundation-for-collaboration-software
video_url: https://www.youtube.com/watch?v=UUGdMHrdzIU
---

Unfortunately I forgot to share my screen, so the first 10 minutes of the talk are without slides!

<iframe width="550" height="315" src="https://www.youtube.com/embed/UUGdMHrdzIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/6288c2fdb7674b13acc82291373f1491" title="Automerge: A new foundation for collaboration software" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 420px;" data-ratio="1.3333333333333333"></iframe>


Abstract
--------

Lots of software these days needs to enable collaboration between several users. We know how to
build basic web apps, where all users read and update data in a shared database. But real-time
collaboration, as we know it from Google Docs or Figma or Trello, is a much bigger challenge. It
gets even harder if you want to allow users to continue working while offline.

Automerge is an open-source library that aims to make collaboration software simple and robust. It
provides a shared JSON-like data structure that several users can update at the same time, and which
automatically merges all updates into a consistent view. It provides data formats for efficiently
storing this data and syncing it between users. It seamlessly supports both offline work and live
real-time collaboration while online.

Internally, Automerge is based on Conflict-free Replicated Data Types (CRDTs). In this talk we will
explore some of the interesting computer science research that makes it possible, and see how it is
used in practice.
