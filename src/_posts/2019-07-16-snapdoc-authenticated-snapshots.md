---
layout: paper
type: journal
title: "Snapdoc: Authenticated snapshots with history privacy in peer-to-peer collaborative editing"
authors: Stephan A. Kollmann, Martin Kleppmann, and Alastair R. Beresford
venue: Proceedings on Privacy Enhancing Technologies (PoPETS), Vol. 2019, Issue 3
place: Stockholm, Sweden
doi: 10.2478/popets-2019-0044
paper_url: /papers/snapdoc-pets19.pdf
venue_url: https://www.petsymposium.org/2019/paperlist.php
publisher_url: https://petsymposium.org/popets/2019/popets-2019-0044.pdf
---


Abstract
--------

Document collaboration applications, such as Google Docs or Microsoft Office Online, need to ensure
that all collaborators have a consistent view of the shared document, and usually achieve this by
relying on a trusted server. Other existing approaches that do not rely on a trusted third party
assume that all collaborating devices are trusted. In particular, when inviting a new collaborator
to a group, one needs to choose between a) keeping past edits private and sending only the latest
state (a snapshot) of the document; or b) allowing the new collaborator to verify her view of the
document is consistent with other honest devices by sending the full history of (signed) edits. We
present a new protocol which allows an authenticated snapshot to be sent to new collaborators while
both hiding the past editing history, and allowing them to verify consistency. We evaluate the costs
of the protocol by emulating the editing history of 270 Wikipedia pages; 99% of insert operations
were processed within 11.0 ms; 64.9 ms for delete operations. An additional benefit of authenticated
snapshots is a median 84% reduction in the amount of data sent to a new collaborator compared to
a basic protocol that transfers a full edit history.
