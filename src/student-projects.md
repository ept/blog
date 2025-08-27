---
layout: front-page
title: Student Projects
---

<h1>Student Projects</h1>

I supervise student projects in my area of research at all levels: Part II, MPhil/Part III, and PhD.
If you're bright, motivated, and excited about the topics below, come join my research group!

I'm a new associate professor, having started only in 2024, but I have a fair bit of experience
supervising student projects:

* Part II/bachelor's:
  [Niels Glodny](https://arxiv.org/abs/2507.22071),
  Kai Sun,
  [Nicole Choong](https://www.cl.cam.ac.uk/teaching/projects/archive/2023/nwyc2-dissertation.pdf),
  [Simeon Stoykov](https://www.cl.cam.ac.uk/teaching/projects/archive/2020/ss2476-dissertation.pdf),
  [David Berry](https://www.cst.cam.ac.uk/people/dgb37),
  [Jack Wickham](https://www.cl.cam.ac.uk/teaching/projects/archive/2019/jaw89-dissertation.pdf),
  [Elias Calocane](https://www.cl.cam.ac.uk/teaching/projects/archive/2018/ec581-dissertation.pdf)
* MPhil/master's:
  Leo Stewen,
  Aryan Shah,
  Firas Aleem,
  [Liangrun Da](https://github.com/TUM-DSE/research-work-archive/blob/main/archive/2024/winter/docs/msc_liangrun_da_design_and_verification_of_byzantine_fault_tolerant_crdts.pdf),
  [Ceren Kocaoğullar](https://www.cl.cam.ac.uk/teaching/masters/projects/archive/1921/CerenKocaogullarProject.pdf),
  [Eeo Jun](https://www.cl.cam.ac.uk/teaching/masters/projects/archive/1921/JunEeoProject.pdf),
  [Matthew Weidner](https://mattweidner.com/assets/pdf/acs-dissertation.pdf)
* Research interns:
  [Emilie Ma](https://arxiv.org/abs/2507.21122),
  [Leo Stewen](https://arxiv.org/abs/2404.11308),
  [Liangrun Da](https://arxiv.org/abs/2311.14007)
* PhD:
  [Jessica Man](https://www.cst.cam.ac.uk/people/psjm3) (ongoing)

I've also examined 7 PhD theses, 8 master's dissertations, and dozens of undergraduate dissertations, so
I think I know what a good thesis looks like.

Research areas
--------------

The overarching theme of my research is **decentralisation of Internet services**: that is, trying
to move beyond the dominance of a few big tech companies, and towards models where users have better
control over their own data. Concretely, I'm working on:

* [Local-first](https://www.inkandswitch.com/local-first/), a new model for collaboration software
  (think real-time collaboration in the style of Google Docs) that works without centralised cloud
  services. I co-created [Automerge](https://automerge.org/), which powers a growing number of
  production collaboration tools, and I coined the term "local-first", which is increasingly
  becoming an industry trend with a [conference](https://www.localfirstconf.com/),
  [podcast](https://www.localfirst.fm/), [newsletter](https://www.localfirstnews.com/), etc.
* Decentralised social media, by advising social network [Bluesky](https://bsky.social/about) and
  contributing to the development of the underlying [AT Protocol](https://atproto.com/).
* Decentralised and privacy-preserving approaches to carbon emissions accounting and reporting, as
  well as tracking other sustainability issues such as deforestation across supply chains. (This is
  a new research area, so I haven't written much about it yet. Here's an initial
  [position paper](https://arxiv.org/abs/2506.16347).)

My approach to research:

* I connect theory with industrial practice. That is, I like to go all the way from a mathematical
  proof of an algorithm's correctness to working with industrial collaborators to implement and
  deploy the algorithm in real-world systems.
* I combine techniques from many areas of computer science: distributed systems, databases, formal
  verification, cryptography, and human-computer interaction.
* I believe that doing good work requires a range of different perspectives. I therefore cultivate
  an inclusive environment, and collaborate with a diverse set of people, both inside and outside
  academia.
* Encouragement and collaboration yield better results than pressure and competition.

As your supervisor, I will help you refine a project idea and provide guidance to make your project
successful, but you'll also have the freedom to choose your own path. I'll try my best to answer
your questions and unblock you if you're stuck. I will help you get good at writing and presenting
your ideas.


Project ideas
-------------

The following are some brief outlines of projects that I think could be promising. If you want to
know more about one of them, please get in touch. I'm also happy for you to propose your own
project, as long as it falls within my research area.

**Decentralised access control**. Level: Part II. Status: in progress

Imagine you have your phone and your laptop that are both authorised devices on your account; then
your phone revokes your laptop's access, and concurrently your laptop revokes your phone's access.
What should happen? In a centralised system, whichever revocation reaches the server first wins, but
in a decentralised system that approach doesn't work. In addition, we have to assume that some of
the operations might be malicious (maybe your phone was stolen and the thief is now using it to
access your account). Solving this problem robustly turns out to be a surprisingly challenging
problem. We have a draft paper (available on request) that attempts a solution; this project is to
implement and evaluate the algorithm from that paper.

**CRDT-based version control**. Level: Part II. Status: completed

[CRDTs](https://crdt.tech/) like [Automerge](https://automerge.org/) and
[Eg-walker](https://arxiv.org/abs/2409.14252) allow multiple users to concurrently edit a text
document, and to merge those edits automatically. They work by internally recording
a keystroke-granularity editing history of the document. In principle, this enables them to offer
version control features (like comparing versions of a file from different points in time), but in
practice they do not yet implement this. The project is to implement a version control system based
on one of these algorithms. It could efficiently support keystroke-granularity editing history,
whereas Git would become very inefficient if you made a separate commit for every keystroke.

**Benchmarking Operational Transformation**. Level: Part II/MPhil. Status: one project completed, more possible

In a [recent paper](https://arxiv.org/abs/2409.14252) we examined how different collaborative
editing algorithms handle not only real-time collaboration, but also asynchronous collaboration,
where users work on their own branch for a while before merging with their collaborators' branches.
We tested with one [OT](https://en.wikipedia.org/wiki/Operational_transformation) algorithm, which
turned out to be extremely slow on asynchronous traces. This project is to explore this performance
characteristic more thoroughly by testing a wider selection of algorithms (e.g.
[ShareDB](https://github.com/share/sharedb)) and datasets. You may have to implement some algorithms
yourself, as some older ones are not available as peudocode, and collect additional datasets.

**Byzantine fault tolerant set reconciliation**. Level: Part II/MPhil. Status: available

Set reconciliation is a protocol in which two parties each have a set of items (e.g. files), and
they want to figure out which items they need to send to each other so that at the end both have all
of the items. Set reconciliation is very useful for data sync between collaborating users. A number
of such algorithms have been published recently, including
[Rateless IBLTs](https://arxiv.org/pdf/2402.02668),
[RBSR](https://logperiodic.com/rbsr.html),
[BFT Set Reconciliation](https://lsd.gnunet.org/lsd0003/),
[minisketch](https://github.com/sipa/minisketch) ([paper](https://arxiv.org/pdf/1905.10518)),
[hash history](https://oceanstore.cs.berkeley.edu/publications/papers/pdf/hh_icdcs03_kang.pdf), and
[BEC](https://arxiv.org/abs/2012.00472).
Many of them aim to be Byzantine fault-tolerant, i.e. resilient against corruption by malicious
parties. The goal of this project is to benchmark these algorithms, and to compare their trade-offs
in terms of performance, security, and other characteristics.

**Formalising Git merge**. Level: MPhil/PhD. Status: one project completed, more possible

Even though huge numbers of people use Git every day, and many have a rough idea of how it works
internally, there are some parts of it that very few people really understand. One such dark corner
is how exactly Git performs merges, rebases, and cherry-picks. There are multiple
[merge strategies](https://git-scm.com/docs/merge-strategies), but they are barely documented. Back
in 2007 a [formal model](https://www.cis.upenn.edu/~bcpierce/papers/diff3-short.pdf) of 3-way merges
was published, but I believe Git's merge strategies are more sophisticated than what that model
describes. This project is to develop a formal model that precisely describes how Git merges work,
so that we can reason about them and prove properties (for example, does merging A into B always
produce the same result as merging B into A?). As an extension, we can also consider less mainstream
version control systems such as [Pijul](https://pijul.org/manual/theory.html) and
[Darcs](https://en.wikibooks.org/wiki/Understanding_Darcs/Patch_theory).

**Expressing CRDTs using Datalog**. Level: MPhil/PhD. Status: one project in progress

[CRDTs](https://crdt.tech/) are an essential building block for
[local-first software](https://www.inkandswitch.com/local-first/), but they are
[difficult](https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-969.pdf) to get right. To be sure that
they are correct, we have to prove their commutativity, which is
[a lot of work](https://dl.acm.org/doi/pdf/10.1145/3133933).
One idea for solving this problem is to define CRDTs using
[Datalog](https://columbiadb.github.io/files/papers/datalog.pdf), a subset of Prolog that was
designed for expressing database queries. It would have the nice property that every algorithm
written in the language would be
[guaranteed to converge](https://speakerdeck.com/ept/data-structures-as-queries-expressing-crdts-using-datalog)!
However, some CRDTs probably can't be expressed using Datalog with stratified negation, and this
project could explore where that boundary lies. Achieving good performance will require a Datalog
engine that supports incremental view maintenance, of which there aren't many, so this project may
end up having to adapt an existing Datalog engine for the required workload.

**App-specific conflict detection**. Level: MPhil/PhD. Status: available

When multiple users concurrently edit the same file and then merge their changes,
[CRDTs](https://crdt.tech/) guarantee that those users will automatically converge to the same
state. However, that merged state might not be what they wanted; for example, in a graphics app, two
users might have edited nearby objects in a way that the merged result is undesirable (e.g. the
objects obscure each other). The problem is that the CRDT doesn't know which objects are "near" each
other, since that's an application-defined notion, and so it can't warn the user about the
potentially bad merge. This project is to design and implement a mechanism for applications to query
the editing history of a file in order to detect when concurrent edits may have a semantic conflict,
in order to notify the user and involve them in manually resolving such conflict cases.

**Cut&paste in collaborative text editors**. Level: MPhil/PhD. Status: available

Most collaborative text editors support inserting and deleting text, but they don't have explicit
support for moving a block of text from one place to another. Cutting and pasting a section is done
by deleting the text from the old location and inserting a fresh copy of the section in the new
location. If another user concurrently edits that section, their edits are either lost or attached
to the old location. It would be nicer if those edits were instead applied to the section in its new
location. This project is to design, implement, and verify a collaborative text editing algorithm
that supports moving blocks of text.

That's just a selection of ideas... I have many more, but this page is getting too long!


For students outside of Cambridge
---------------------------------

Please note that I advise students at other universities only in very exceptional cases. Sorry,
there just aren't enough hours in the day.
