---
layout: paper
type: conference
me_presenting: true
title: Moving Elements in List CRDTs
authors: Martin Kleppmann
venue: 7th Workshop on Principles and Practice of Consistency for Distributed Data (PaPoC)
place: Online (originally planned to be in Heraklion, Crete, Greece)
doi: 10.1145/3380787.3393677
venue_url: https://papoc-workshop.github.io/2020/
slides_url: https://speakerdeck.com/ept/moving-elements-in-list-crdts
paper_url: /papers/list-move-papoc20.pdf
publisher_url: https://dl.acm.org/doi/abs/10.1145/3380787.3393677
video_url: https://www.youtube.com/watch?v=TYBV324NWNQ
---

<iframe width="550" height="315" src="https://www.youtube-nocookie.com/embed/TYBV324NWNQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/fe89c490b52540b7a88c77974120d2fa" title="Moving elementsin list CRDTs" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 420px;" data-ratio="1.3333333333333333"></iframe>


Abstract
--------

Conflict-free Replicated Data Types (CRDTs) for lists allow multiple users to concurrently insert
and delete elements in a shared list object. However, existing algorithms behave poorly when users
concurrently move list elements to a new position (i.e. reorder the elements in the list). We
demonstrate the need for such a move operation, and describe an algorithm that extends a list CRDT
with an explicit move operation. Our algorithm can be used in conjunction with any existing list
CRDT algorithm. In addition to moving a single list element, we also discuss the open problem of
moving ranges of elements.
