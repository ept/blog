---
layout: paper
type: journal
title: "Peritext: A CRDT for Collaborative Rich Text Editing"
authors: Geoffrey Litt, Sarah Lim, Martin Kleppmann, and Peter van Hardenberg
venue: Proceedings of the ACM on Human-Computer Interaction (PACMHCI), Volume 6, Issue CSCW2, Article 531
doi: 10.1145/3555644
paper_url: https://www.inkandswitch.com/peritext/static/cscw-publication.pdf
---

* [Earlier version of this paper as web essay](https://www.inkandswitch.com/peritext/)
* [GitHub repository](https://github.com/inkandswitch/peritext)

Abstract
--------

Conflict-Free Replicated Data Types (CRDTs) support decentralized collaborative editing of shared
data, enabling peer-to-peer sharing and flexible branching and merging workflows. While there is
extensive work on CRDTs for plain text, much less is known about CRDTs for rich text with
formatting. No algorithms have been published, and existing open-source implementations do not
always preserve user intent.

In this paper, we describe a model of intent preservation in rich text editing, developed through
a series of concurrent editing scenarios. We then describe Peritext, a CRDT algorithm for rich text
that satisfies the criteria of our model. The key idea is to store formatting spans alongside the
plaintext character sequence, linked to a stable identifier for the first and last character of each
span, and then to derive the final formatted text from these spans in a deterministic way that
ensures concurrent operations commute.

We have prototyped our algorithm in TypeScript, validated it using randomized property-based
testing, and integrated it with an editor UI. We also prove that our algorithm ensures convergence,
and demonstrate its causality preservation and intention preservation properties.
