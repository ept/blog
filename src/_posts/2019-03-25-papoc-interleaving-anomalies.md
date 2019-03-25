---
layout: paper
type: conference
title: Interleaving anomalies in collaborative text editors
authors: Martin Kleppmann, Victor B. F. Gomes, Dominic P. Mulligan, and Alastair R. Beresford
venue: 6th Workshop on Principles and Practice of Consistency for Distributed Data (PaPoC)
place: Dresden, Germany
venue_url: https://novasys.di.fct.unl.pt/conferences/papoc19/program.html
slides_url: https://speakerdeck.com/ept/interleaving-anomalies-in-collaborative-text-editors
paper_url: /papers/interleaving-papoc19.pdf
---

<script async class="speakerdeck-embed" data-id="d78a2f4c9a664f0f9ae7231c059d7fa7" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

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
