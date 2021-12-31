---
layout: paper
type: conference
me_presenting: true
title: Interleaving anomalies in collaborative text editors
authors: Martin Kleppmann, Victor B. F. Gomes, Dominic P. Mulligan, and Alastair R. Beresford
venue: 6th Workshop on Principles and Practice of Consistency for Distributed Data (PaPoC)
place: Dresden, Germany
doi: 10.1145/3301419.3323972
venue_url: https://novasys.di.fct.unl.pt/conferences/papoc19/program.html
publisher_url: https://dl.acm.org/authorize?N688079
slides_url: https://speakerdeck.com/ept/interleaving-anomalies-in-collaborative-text-editors
paper_url: /papers/interleaving-papoc19.pdf
---

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/d78a2f4c9a664f0f9ae7231c059d7fa7" title="Interleaving anomalies in collaborative text editors" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 420px;" data-ratio="1.3333333333333333"></iframe>


Abstract
--------

Collaborative text editors allow two or more users to concurrently edit a shared document without
merge conflicts. Such systems require an algorithm to provide *convergence*, ensuring all clients
that have seen the same set of document edits are in the same state. Unfortunately convergence alone
does not guarantee that a collaborative text editor is usable. Several published algorithms for
collaborative text editing exhibit an undesirable anomaly in which concurrently inserted portions of
text with a well-defined order may be randomly interleaved on a character-by-character basis,
resulting in an unreadable jumble of letters. Although this anomaly appears to be known informally
by some researchers in the field, we are not aware of any published work that fully explains or
addresses it. We show that several algorithms suffer from this problem, explain its cause, and also
identify a lesser variant of the anomaly that occurs in another algorithm. Moreover, we propose
a specification of collaborative text editing that rules out the anomaly, and show how to prevent
the lesser anomaly from occurring in one particular algorithm.
