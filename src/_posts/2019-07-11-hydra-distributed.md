---
layout: talk
title: Syncing data across user devices for distributed collaboration
venue: Hydra distributed computing conference
place: St. Petersburg, Russia
venue_url: https://hydraconf.ru/en/2019/talks/6i4lkw8pwjnadgff5ylr11/
video_url: https://www.youtube.com/watch?v=j6KAYfP_iME
slides_url: https://speakerdeck.com/ept/syncing-data-across-user-devices-for-distributed-collaboration
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/j6KAYfP_iME" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>

<script async class="speakerdeck-embed" data-id="4e8242c59c7541e1b8b9be59e093ab2f" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

Google Docs and similar web apps are very convenient if several people need to work together on
a document: all users can simultaneously edit the shared document without having to send files back
and forth by email. From a distributed systems point of view, real-time collaboration is
a replication problem: each user has a replica of the shared document on their device, which they
can modify locally, and any changes are sent over the network to their collaborators.

Users may edit a document while offline, causing their replica to become temporarily inconsistent
with the others. As they re-synchronise with others, conflicts need to be resolved so that all
collaborators end up in a consistent state. Conflict-free Replicated Data Types (CRDTs), first
proposed in 2011, are increasingly being used to merge different users' versions of a document in
collaborative software.

This talk will give an update on the latest research on CRDTs, and our open source implementation
Automerge. We will also discuss efforts to build
"[local-first software](https://www.inkandswitch.com/local-first.html)", a new generation of
collaborative software, on top of these technologies.
