---
layout: talk
title: "Keynote: Event-based thinking in collaboration software"
venue: 15th ACM International Conference on Distributed and Event-based Systems (DEBS)
place: Online
venue_url: https://2021.debs.org/keynote-speakers/
---

Abstract
--------

What do Google Docs and stream processing have in common? Both are centered around the idea of
streams of events. In the case of Google Docs and other collaboration software, each event describes
a change that a user has made to a document. Each user's local device has a copy of the shared
document, and processing the stream of changes means updating this local copy so that it is
consistent with all of the other users' copies of the document.

This talk will explore collaboration software through the lens of event-based thinking, explaining
some of the algorithms that are used to implement this kind of software, such as Conflict-free
Replicated Data Types (CRDTs). We will highlight new developments in this area, such as local-first
software, and identify some open challenges in the area.
