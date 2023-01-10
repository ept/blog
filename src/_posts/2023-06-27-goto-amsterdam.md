---
layout: talk
title: Creating local-first collaboration software with Automerge
venue: GOTO Amsterdam
place: Amsterdam, Netherlands
venue_url: https://gotoams.nl/2023/sessions/2449/creating-local-first-collaboration-software-with-automerge
---

Abstract
--------

Many of us use collaboration software such as Google Docs, Overleaf, Figma, or Trello every day.
While this cloud software is very valuable, it is also fragile: if the company providing it goes out
of business, or decides to suspend your account, the software stops working, and you are locked out
of all of the documents and data you ever created with that software.

Local-first software is an effort to make collaboration software less dependent on cloud services,
and Automerge is an open-source library for realising local-first software. Automerge uses
Conflict-free Replicated Data Types (CRDTs) to allow several users to concurrently update a file,
and it automatically merges those updates into a consistent result. It provides data formats for
efficiently storing this data and syncing it between users. It seamlessly supports both offline work
and live real-time collaboration while users are online.

This talk will introduce our recent research on CRDTs, and provide an update on the latest
developments in Automerge.
