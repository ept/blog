---
layout: paper
type: conference
title: "Local-first software: You own your data, in spite of the cloud"
authors: Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan
venue: ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward! ’19)
place: Athens, Greece
paper_url: /papers/local-first-onward19.pdf
venue_url: https://2019.splashcon.org/track/splash-2019-Onward-Essays#program
doi: 10.1145/3359591.3359737
---

* [HTML version of article](https://www.inkandswitch.com/local-first.html)


Abstract
--------

Cloud apps like Google Docs and Trello are popular because they enable real-time collaboration with
colleagues, and they make it easy for us to access our work from all of our devices. However, by
centralizing data storage on servers, cloud apps also take away ownership and agency from users. If
a service shuts down, the software stops functioning, and data created with that software is lost.

In this article we propose *local-first software*: a set of principles for software that enables
both collaboration *and* ownership for users. Local-first ideals include the ability to work offline
and collaborate across multiple devices, while also improving the security, privacy, long-term
preservation, and user control of data.

We survey existing approaches to data storage and sharing, ranging from email attachments to web
apps to Firebase-backed mobile apps, and we examine the trade-offs of each. We look at Conflict-free
Replicated Data Types (CRDTs): data structures that are multi-user from the ground up while also
being fundamentally local and private. CRDTs have the potential to be a foundational technology for
realizing local-first software.

We share some of our findings from developing local-first software prototypes at the
Ink&nbsp;&amp;&nbsp;Switch research lab over the course of several years. These experiments test the
viability of CRDTs in practice, and explore the user interface challenges for this new data model.
Lastly, we suggest some next steps for moving towards local-first software: for researchers, for app
developers, and a startup opportunity for entrepreneurs.