---
layout: talk
title: "CRDTs: The Hard Parts"
venue: Hydra
place: online (originally planned to be in Moscow, Russia)
venue_url: https://hydraconf.com/2020/msk/talks/3mkcfa5h151ekfvfqau4qk/
video_url: https://www.youtube.com/watch?v=x7drE24geUw
slides_url: https://speakerdeck.com/ept/crdts-the-hard-parts
---

<iframe width="550" height="315" src="https://www.youtube-nocookie.com/embed/x7drE24geUw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<script async class="speakerdeck-embed" data-id="71c432e2f3004c6e991bed35810cecfe" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

Conflict-free Replicated Data Types (CRDTs) are an increasingly popular family of algorithms for
optimistic replication. They allow data to be concurrently updated on several replicas, even while
those replicas are offline, and provide a robust way of merging those updates back into a consistent
state. CRDTs are used in geo-replicated databases, multi-user collaboration software, distributed
processing frameworks, and various other systems.

However, while the basic principles of CRDTs are now quite well known, many challenging problems are
lurking below the surface. It turns out that CRDTs are easy to implement badly. Many published
algorithms have anomalies that cause them to behave strangely in some situations. Simple
implementations often have terrible performance, and making the performance good is challenging.

In this talk Martin goes beyond the introductory material on CRDTs, and discusses some of the
hard-won lessons from years of research on making CRDTs work in practice.

References
----------

* **Logoot:** Stéphane Weiss, Pascal Urso, and Pascal Molli:
  “[Logoot: A Scalable Optimistic Replication Algorithm for Collaborative Editing on P2P Networks](http://pagesperso.lina.univ-nantes.fr/~molli-p/pmwiki/uploads/Main/weiss09.pdf),” ICDCS 2009.
* **LSEQ:** Brice Nédelec, Pascal Molli, Achour Mostefaoui, and Emmanuel Desmontils:
  “[LSEQ: an Adaptive Structure for Sequences in Distributed Collaborative Editing](https://hal.archives-ouvertes.fr/file/index/docid/921633/filename/fp025-nedelec.pdf),” DocEng 2013.
* **RGA:** Hyun-Gul Roh, Myeongjae Jeon, Jin-Soo Kim, and Joonwon Lee:
  “[Replicated abstract data types: Building blocks for collaborative applications](http://csl.skku.edu/papers/jpdc11.pdf),”
  Journal of Parallel and Distributed Computing, 71(3):354–368, 2011.
* **Treedoc:** Nuno Preguiça, Joan Manuel Marques, Marc Shapiro, and Mihai Letia:
  “[A Commutative Replicated Data Type for Cooperative Editing](https://hal.inria.fr/inria-00445975/document),” ICDCS 2009.
* **WOOT:** Gérald Oster, Pascal Urso, Pascal Molli, and Abdessamad Imine:
  “[Data consistency for P2P collaborative editing](https://hal.archives-ouvertes.fr/file/index/docid/108523/filename/OsterCSCW06.pdf),” CSCW 2006.
* **A<sub>strong</sub>:** Hagit Attiya, Sebastian Burckhardt, Alexey Gotsman, Adam Morrison, Hongseok Yang, and Marek Zawirski:
  “[Specification and Complexity of Collaborative Text Editing](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/07/podc16-complete.pdf),” PODC 2016.
* **Interleaving anomaly:** Martin Kleppmann, Victor B. F. Gomes, Dominic P. Mulligan, and Alastair R. Beresford:
  “[Interleaving anomalies in collaborative text editors](/papers/interleaving-papoc19.pdf)”. PaPoC 2019.
* **Proof of no interleaving in RGA:** Martin Kleppmann, Victor B F Gomes, Dominic P Mulligan, and Alastair R Beresford:
  “[OpSets: Sequential Specifications for Replicated Datatypes](https://arxiv.org/abs/1805.04263),” May 2018.
* **Moving list items:** Martin Kleppmann:
  “[Moving Elements in List CRDTs](/papers/list-move-papoc20.pdf)”. PaPoC 2020.
* **Move operation in CRDT trees:** Martin Kleppmann, Dominic P. Mulligan, Victor B. F. Gomes, and Alastair R. Beresford:
  “[A highly-available move operation for replicated trees and distributed filesystems](/papers/move-op.pdf)”.
  Preprint, 2020.
* **Reducing metadata overhead:** Martin Kleppmann:
  “[Experiment: columnar data encoding for Automerge](https://github.com/automerge/automerge-perf/blob/master/columnar/README.md)”, 2019.
  Also: “[Preview: Automerge binary data format (Automerge PR #253)](https://github.com/automerge/automerge/pull/253)”, 2020.
* **Local-first software:** Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan:
  “[Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/local-first.html)”. Onward! 2019.
