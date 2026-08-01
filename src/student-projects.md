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
  Sami Abobaker,
  [Niels Glodny](https://arxiv.org/abs/2507.22071),
  Kai Sun,
  [Nicole Choong](https://www.cl.cam.ac.uk/teaching/projects/archive/2023/nwyc2-dissertation.pdf),
  [Simeon Stoykov](https://www.cl.cam.ac.uk/teaching/projects/archive/2020/ss2476-dissertation.pdf),
  [David Berry](https://www.cst.cam.ac.uk/people/dgb37),
  [Jack Wickham](https://www.cl.cam.ac.uk/teaching/projects/archive/2019/jaw89-dissertation.pdf),
  [Elias Calocane](https://www.cl.cam.ac.uk/teaching/projects/archive/2018/ec581-dissertation.pdf)
* MPhil/master's:
  Zaz Brown,
  Leo Stewen,
  Aryan Shah,
  Firas Aleem,
  [Liangrun Da](https://github.com/TUM-DSE/research-work-archive/blob/main/archive/2024/winter/docs/msc_liangrun_da_design_and_verification_of_byzantine_fault_tolerant_crdts.pdf),
  [Ceren Kocaoğullar](https://www.cl.cam.ac.uk/teaching/masters/projects/archive/1921/CerenKocaogullarProject.pdf),
  [Eeo Jun](https://www.cl.cam.ac.uk/teaching/masters/projects/archive/1921/JunEeoProject.pdf),
  [Matthew Weidner](https://mattweidner.com/assets/pdf/acs-dissertation.pdf)
* Temporary research staff/interns:
  [Jonathan Heiß](https://www.tu.berlin/en/ise/team/jonathan-heiss),
  [Hossein Hafezi](https://hosseinhafezi.com/),
  [Thomas Addoah](https://www.geog.cam.ac.uk/people/addoah/),
  [Emilie Ma](https://arxiv.org/abs/2507.21122),
  [Leo Stewen](https://arxiv.org/abs/2404.11308),
  [Liangrun Da](https://arxiv.org/abs/2311.14007)
* PhD:
  [Jessica Man](https://www.cst.cam.ac.uk/people/psjm3) (ongoing),
  [Vincent Liu](https://www.cst.cam.ac.uk/people/sl955) (ongoing)

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
  well as tracking other sustainability issues such as deforestation across supply chains. See our
  [Emission Impossible paper](https://dl.acm.org/doi/pdf/10.1145/3744255.3811720) as an example.

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


<!--

Project ideas
-------------

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

-->

For students outside of Cambridge
---------------------------------

Please note that I advise students at other universities only in very exceptional cases. Sorry,
there just aren't enough hours in the day.
