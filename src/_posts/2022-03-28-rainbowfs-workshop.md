---
layout: talk
title: "Automerge: CRDTs meet version control"
venue: RainbowFS final workshop
place: Paris, France
venue_url: https://rainbowfs.gitlabpages.inria.fr/final-workshop/
slides_url: https://rainbowfs.gitlabpages.inria.fr/final-workshop/slides/Kleppmann%20Automerge.pdf
---


Abstract
--------

Most collaboration software today assumes a Google-Docs-like model in which each collaborator’s
edits are applied to the shared document or data structure as quickly as possible, often keystroke
by keystroke. While this real-time collaboration model is great in some situations, it is not always
appropriate. Sometimes, a user will want to work in isolation on a separate version of a document
for a while, and share their updates with collaborators only when they are ready. Users might have
multiple versions of a document side-by-side, which may or may not be merged later.

Software developers often use version control systems such as Git to enable such branching and
merging workflows, to compare versions of a document, and to inspect the editing history. However,
while Git works okay for plain text files, its support for more complex file formats (e.g.
spreadsheets, graphics, CAD files) is poor: if two users modify the same file on different branches,
resolving that merge conflict is left as a manual task for the user.

But we already have an excellent tool for automatically merging concurrent updates to a data
structure: CRDTs! In this talk I will introduce our work-in-progress research on Automerge, which
aims to bring together the world of Git-like version control and the world of CRDTs.
