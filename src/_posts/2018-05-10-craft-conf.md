---
layout: talk
title: "Automerge: Making servers optional for real-time collaboration"
venue: Craft Conference
place: Budapest, Hungary
venue_url: https://craft-conf.com/speaker/MartinKleppmann
slides_url: https://speakerdeck.com/ept/automerge-making-servers-optional-for-real-time-collaboration
---

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
And although you can use it with servers, you don’t have to: synchronisation also works
peer-to-peer, or via any network you choose.

In this talk we will explore how Automerge deals with different users independently modifying shared
data in a collaborative application (hint: by merging the changes... automatically!), how it
achieves consistency in highly distributed settings, and where it is heading in the future.

Resources
---------

* [Automerge](https://github.com/automerge/automerge)
* [Trellis](https://github.com/automerge/trellis)
* [Pixelpusher](https://github.com/automerge/pixelpusher) ([blog post](https://medium.com/@pvh/pixelpusher-real-time-peer-to-peer-collaboration-with-react-7c7bc8ecbf74))
* [MPL (WebRTC layer)](https://github.com/automerge/mpl)
* [Hypermerge](https://github.com/automerge/hypermerge)
* [Dat / Hypercore](https://datproject.org/)
* [Proving CRDTs correct](https://doi.org/10.1145/3133933)
* [JSON CRDT](http://arxiv.org/abs/1608.03960)
* [My book](http://dataintensive.net/)
