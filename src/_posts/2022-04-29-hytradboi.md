---
layout: talk
title: Viewing collaborative editing through a databases lens
venue: Have You Tried Rubbing A Database On It? (HYTRADBOI)
place: Online
venue_url: https://www.hytradboi.com/
---


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
