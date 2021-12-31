---
layout: talk
title: "Automerge: Making Servers Optional for Real-Time Collaboration"
venue: TNG Big Techday
place: Munich, Germany
venue_url: https://www.tngtech.com/en/tng-about-us/bigtechday/big-techday-12/abstracts.html#c22092
slides_url: https://speakerdeck.com/ept/automerge-making-servers-optional-for-real-time-collaboration
video_url: https://www.youtube.com/watch?v=GXJ0D2tfZCM
---

<iframe width="550" height="315" src="https://www.youtube-nocookie.com/embed/GXJ0D2tfZCM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/5cfe4dbf817b4c34a7a5321af9f80234" title="Automerge: Making servers optional for real-time collaboration" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 420px;" data-ratio="1.3333333333333333"></iframe>


Abstract
--------

Once upon a time, we used software that ran on our own computers, that worked offline, and that
stored its data in files on the local disk. Then we decided to put it all in the cloud. We gained
some great features: real-time collaboration, like in Google Docs, for example. But we also lost
control of our own data, and became dependent on far-away servers to allow us to access the data
that we created.

Automerge is part of an effort to get the best of both worlds. It is a JavaScript library for
building real-time collaborative applications. However, apps built with Automerge also work offline,
storing data locally, and synchronise their data with collaborators whenever a network is available.
And although you can use it with servers, you don't have to: synchronisation also works
peer-to-peer, or via any network you choose.

In this talk we will explore how Automerge deals with different users independently modifying shared
data in a collaborative application (hint: by merging the changes... automatically!), how it
achieves consistency in highly distributed settings, and where it is heading in the future.
