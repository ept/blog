---
layout: talk
title: Viewing collaborative editing through a databases lens
venue: Have You Tried Rubbing A Database On It? (HYTRADBOI)
place: Online
venue_url: https://www.hytradboi.com/
slides_url: https://speakerdeck.com/ept/collaborative-editing-through-a-databases-lens
---

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/a37bd2597afd4f13bad5cb1e89688ba7" title="Collaborative editing through a databases lens" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 420px;" data-ratio="1.3333333333333333"></iframe>

Abstract
--------

Software that allows several users to collaboratively edit a document, such as Google Docs, has
traditionally been ignored by the databases community. This is surprising, because managing the
edits to a text document, spreadsheet, vector graphics file, etc. is very much a data management
problem, albeit with a data model that is very different from that supported by most databases.

In our work on [Automerge](https://github.com/automerge/automerge), a library for building
collaborative software, we have been taking concepts from databases and applying them to the domain
of collaborative editing. In this talk I will show how column-oriented data formats, multi-version
concurrency control, log-structured storage, and other ideas from databases can be used to make
collaboration software better.
