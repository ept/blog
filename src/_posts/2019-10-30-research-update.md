---
layout: ync-post
title: Research update for 2019
---

It has now been four years since I moved from industry into academic research, and
a lot has happened in this time.
In 2015 I posted a [year in review](/2015/12/28/year-2015-review.html) blog post, and
in 2016 I announced the [TRVE DATA](/2016/04/15/announcing-trve-data.html) project
(which I am still working on), but I haven't posted an update on my work since.
So here goes!

In academic terms, things have been going well. Last year I
[got my PhD](https://twitter.com/martinkl/status/1066748982129504256), 
and as of October 2019 I got another few upgrades to my titles:

* I am now an Early Career Fellow of the [Leverhulme Trust](https://www.leverhulme.ac.uk/early-career-fellowships),
  with a matching fellowship from the [Isaac Newton Trust](https://www.newtontrust.cam.ac.uk).
* In the department I am now a "Senior Research Associate" (SRA, up from "Research Associate" previously).
* At [Corpus Christi College](https://www.corpus.cam.ac.uk) I am now a
  [Fellow](https://www.corpus.cam.ac.uk/people/dr-martin-kleppmann) and Director of Studies
  (which means that I look after the computer science students in the college).

The fellowships from the Leverhulme Trust and Isaac Newton Trust are paying my salary
for the next three years, along with additional support from the
[Cambridge Centre for Mobile, Wearable Systems and Augmented Intelligence](https://mobicentre.cst.cam.ac.uk).
The college fellowship mainly involves a very generous dining allowance, and being part of
a community of academics across a broad range of subjects (it's nice sometimes to talk to people who
are not computer scientists).

My job title of "Senior Research Associate" reflects my status as an independent researcher: that is,
I set my own research agenda. However, to be clear, *independent* does not mean *alone*! My experience
of research has been a very sociable one, and all of my work has been in collaboration with others.
If you want to go far,
[go together](https://www.npr.org/sections/goatsandsoda/2016/07/30/487925796/it-takes-a-village-to-determine-the-origins-of-an-african-proverb).
On that note, shout-out to my fine collaborators of the last few years (in alphabetic order),
[Alastair Beresford](https://www.cl.cam.ac.uk/~arb33/),
[Victor Gomes](https://www.cl.cam.ac.uk/~vb358/),
[Stephan Kollmann](https://www.cl.cam.ac.uk/~sak70/),
[Dominic Mulligan](http://dominic-mulligan.co.uk/),
[Daniel Thomas](https://personal.cis.strath.ac.uk/d.thomas/),
[Peter van Hardenberg](https://twitter.com/pvh),
[Diana Vasile](https://www.cl.cam.ac.uk/~dac53/),
[Adam Wiggins](http://about.adamwiggins.com/),
and several more people from the [Ink & Switch](https://www.inkandswitch.com) research lab!

Huge thanks to [The Boeing Company](http://www.boeing.com) for funding my work for the last four years.
Huge thanks also to [Prof. Alastair Beresford](https://www.cl.cam.ac.uk/~arb33/), my excellent
adviser, mentor, collaborator, and PI (that's academic-speak for "boss") over the last four years.

Research funding
----------------

The Leverhulme Trust and Isaac Newton Trust, which are funding my work, are UK charities that support
research across many subjects and disciplines, including humanities and social sciences. They fund about
[140 early career fellowships](https://www.leverhulme.ac.uk/early-career-fellowships-2019) per year
across all subjects; only one or two per year of these are in computer science. So it looks like
I'm the computer scientist for this year!

A great aspect of this charity funding is that I am free to publish all my work as open source and
open access, with no restrictions. All the code I write is in a public repository by default. This
is very important to me, because the goal behind the things I'm working on (see below) is to
maximise the public benefit of these technologies through open source and open standards.

A downside is that all my positions are for a fixed three-year term (they are not tenure-track),
and I don't know what comes afterwards. But for now I am going to concentrate on making the most I
can out of those three years.

Background to my research
-------------------------

Nowadays, we increasingly depend on Internet services for communication and collaboration: for
example, we use Google Docs to collaborate on documents, spreadsheets and presentations; we copy
files between devices using Dropbox; we communicate with colleagues using Slack; and we use many
other online services for task tracking, note taking, project planning, knowledge management, and
more.

These services are very valuable and convenient, but their use is also risky because they are
provided through a centralised server infrastructure. If the company providing the service goes out
of business, or decides to discontinue a product, the servers are shut down, the software stops
working, and users are locked out of the documents and data created with that software.

Moreover, since those servers typically process user data in unencrypted form, a rogue employee, or
an adversary who gains access to the servers, can read and tamper with vast amounts of sensitive
data. The provider may also use the data in arbitrary ways, e.g. to train their machine learning
systems and target you with ads.

When these risks are unacceptable, we can fall back to what we might call "old-fashioned"
collaboration methods: for example, one person creates a spreadsheet with Excel and emails it to
their collaborator, who makes changes and then sends the modified file back again by email. This
approach has merits: it does not rely on any external services that might go away (besides the email
infrastructure), and the file can easily be encrypted. However, it quickly becomes messy if the
file is modified by more than one person at a time.

Research goals
--------------

Together with my collaborators I am developing the foundations of a new kind of collaboration
software, which we are calling [local-first software](https://www.inkandswitch.com/local-first.html).
It aims to achieve the best of both worlds: allowing the user-friendly real-time collaboration of
applications like Google Docs, in which several people can make changes simultaneously without
suffering conflicts, but without relying on trusted, centralised servers.

While most of today's Internet services keep the primary copy of any shared data on a server, the
local-first approach stores primary copies of the data as files on the collaborators' devices, like
in "old-fashioned" collaboration. Servers may still be used, but rather than being a linchpin, they
become an optional enabling component. Because all the data is local, the software continues
working, even when the device has no Internet access or the servers are unavailable. When a user
modifies a document, local-first software automatically sends the changes to collaborators whenever
a network connection is available, so there is no need to email files back and forth.

Local-first software allows multiple users to make changes to the same document concurrently, even
while users are offline, and ensures that all of the changes are automatically merged into
a consistent result. We do this using [CRDTs](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type).
In this regard our approach differs from version control systems such as SVN or Git, which require
conflicts to be resolved manually, and only offer merging of plain text files. By contrast, we can
perform all merges automatically, and support arbitrarily complex file formats such as spreadsheets,
CAD drawings, or databases with various data models.

Collaborators' devices can either communicate directly, using fast local networks in a
*peer-to-peer* manner, or indirectly via servers. To protect the confidentiality and integrity of
the communication between collaborators we plan to use *end-to-end encryption*. In this approach, if
servers are used, they only ever handle encrypted data that they cannot decrypt. Thus, even if
communication networks or servers are compromised by an attacker, user privacy and data
confidentiality are protected.

This approach is particularly suitable for sensitive data such as a university's student records,
a hospital's patient records, legally privileged communication, journalistic investigations, law
enforcement, diplomatic correspondence, and many other settings where regulations and
confidentiality obligations prohibit the sharing of unencrypted data with third parties.

Research outputs
----------------

The results of our research will be published in two forms: as traditional research papers in
academic venues, and in the form of open source software.

Research papers are important because they document the thought process and reasoning behind our
designs, and help others build upon our work in the future. We have already written a series of
[publications](/#publications) about our research in the last four years, and there is lots more
interesting material still to come.

Software releases are traditionally regarded as less important in academia (and, to be honest, a lot
of code written by researchers is not very good). However, I regard open source software as a
crucial output for this project. [Automerge](https://github.com/automerge/automerge) is the main
CRDT implementation I am working on, and it is designed from the start to be production-quality (in
terms of reliability, test coverage, stability, API design, documentation, community, and so on).

Automerge is not yet perfect, especially in terms of its performance: if it was, our research would
already be done! But I have a plan that should lead to big improvements in the coming year, and the
goal is that Automerge will soon be suitable for building ambitious, large-scale, local-first
applications.

In order to maximise the number of projects that can benefit from this work, the code is licensed
under the liberal [MIT license](https://opensource.org/licenses/MIT). Moreover, as the data format
(for representing documents on disk and for network communication) becomes stable, I think it will
make sense to formalise it as an open standard, with interoperable implementations in several
different programming languages and platforms.

And finally, we are starting to see an emerging community of users and contributors around Automerge.
New community members are regularly popping up in the
[Automerge Slack](https://communityinviter.com/apps/automerge/automerge), users are helpfully
reporting bugs, and a steadily growing
[set of contributors](https://github.com/automerge/automerge/graphs/contributors) have had their
pull requests merged. It's exciting to see this growing community engagement.

Interviews
----------

If you want to hear more, I've done a bunch of interviews with various podcasts and blogs over the
last few years:

* [With Software Engineering Daily about my book](https://softwareengineeringdaily.com/2017/05/02/data-intensive-applications-with-martin-kleppmann/),
  "Designing Data-Intensive Applications" (May 2017)
* [With Software Engineering Daily again](https://softwareengineeringdaily.com/2017/12/08/decentralized-objects-with-martin-kleppman/),
  this time about my research on CRDTs (December 2017)
* [With the Advance Tech Podcast](https://advancetechmedia.org/episode-008-martin-kleppmann/)
  about a wide range of topics that I find interesting (October 2017)
* [With the Invested Investor podcast](https://www.investedinvestor.com/articles/2018/1/23/martin-kleppmann)
  about my startup career before I switched towards research (January 2018)
* [With the Hydra conference](/2019/06/27/hydra-interview.html) about distributed systems in general,
  and my work specifically (June 2019)
* [With Computer Science Research (CSR) Tales](https://medium.com/csr-tales/csrtale-13-formal-verification-of-strong-eventual-consistency-1cc0af942e64)
  (July 2019) about the background story behind our paper
  "[Verifying Strong Eventual Consistency in Distributed Systems](/2017/10/25/verifying-crdt-isabelle.html)",
  which won the Distinguished Paper Award and Distinguished Artifact Award at the OOPSLA 2017 conference.
