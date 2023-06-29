---
layout: talk
title: Creating local-first collaboration software with Automerge
venue: "Amsterdam |> Elixir"
place: Amsterdam, Netherlands
venue_url: https://www.meetup.com/amsterdam-elixir/events/294180192/
slides_url: https://speakerdeck.com/ept/creating-local-first-collaboration-software-with-automerge
---

<iframe class="speakerdeck-iframe" style="border: 0px none; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 420;" src="https://speakerdeck.com/player/aaaa9966971e4118b69b6717ed0f4034" title="Creating local-first collaboration software with Automerge" allowfullscreen="true" data-ratio="1.3333333333333333" frameborder="0"></iframe>

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
