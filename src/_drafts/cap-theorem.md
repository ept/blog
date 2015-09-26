---
layout: ync-post
title: The CAP Theorem is false
---

// Paper discussion: https://news.ycombinator.com/item?id=10253711

The proof of the CAP theorem uses very specific (and somewhat counter-intuitive) definitions of the
words "consistency", "availability" and "partition". Many people who invoke the CAP theorem are not
in fact using the same definitions of those words. However, if you change the definitions, the
reference to the theorem becomes meaningless.

If people talked about other theorems in the way they talked about CAP, they would look completely
ridiculous. Let's make up a silly example:

> The [central limit theorem][clt] is an important result in probability theory. It shows that you
> cannot be both a rockstar and a professor at the same time: in order to be a rockstar, you have to
> make music **central** to your life, and in order to be a professor, you have to make research
> central to your life. The central limit theorem says that there is a **limit** to how many things
> can be central to your life at any one time, and the sum of music and research is above the limit.

By liberally re-interpreting words like "central" and "limit", I obtain a statement that is
obviously utter nonsense, and bears no relationship to the actual central limit theorem. That
doesn't make the CLT any less true; it just means I abused the language.

The abuse of the CAP theorem is not quite as blatant as this, but that just makes the abuse harder
to detect. If you're not using *exactly* the same definitions as the proof, you're not talking about
a theorem, you're just asserting an unproved rule of thumb.

[clt][https://en.wikipedia.org/wiki/Central_limit_theorem]


Today I am publishing [a paper (arXiv:TODO)][paper] showing that the proof of the [CAP
theorem][wikipedia] is incorrect. Thus, CAP is not a theorem (unless someone finds a new, correct
proof), and I propose that from now on we call it the *CAP principle* instead.

This is quite surprising. The purported proof was published by [Gilbert and Lynch][gilbert-proof]
over 13 years ago, and has been [cited over 1,000 times][citations] since then (according to Google
Scholar). Plenty of smart people have written about it and discussed it further. Follow-up papers
by [Brewer][brewer2012] and [Gilbert and Lynch][gilbert2012] were published on its 10-year
anniversary.

And yet, after spending a lot of time staring at the proof and going through it step by step, I am
convinced that it is false, due to problems in the way it is formalized, and that the error is not
trivial to fix. Perhaps I am yet to be proved wrong, in which case I will look rather foolish, but
for now I will boldly claim that *CAP is not a theorem*, and open up the matter for public debate.


How CAP is formalized
---------------------

In this blog post I will not go into all the details of how CAP and its definitions have been
interpreted over the past years; please see [sections 1 and 2 of the paper][paper] for the
background story. I will jump straight into [Gilbert and Lynch's proof][gilbert-proof], which is
discussed in section 3 of my paper.

The problem with the proof is that if you just glance at it briefly, it seems obviously correct --
in fact, it seems so straightforward that it is hardly worth proving. The error becomes apparent
only if you examine it in more detail, and apply rigorous logic.

Brewer's original proposals of CAP at [HotOS 1999][brewer-hotos] and [PODC 2000][brewer-podc] did
not formally define the meaning of *consistency*, *availability* and *partition tolerance*. In order
to prove a theorem, Gilbert and Lynch had to formalize the definitions, and they did so as follows:

* **Consistency** was defined as [linearizability][] (explained in my [previous post on
  CAP][stop-cp-ap]).

* **Availability** was defined thus: *"For a distributed system to be continuously available, every
  request received by a non-failing node in the system must result in a response."* Gilbert and
  Lynch explicitly state that availability does not depend on latency: it doesn't matter when the
  response arrives, as long as it eventually does arrive. (Formally speaking, this definition of
  availability is a [liveness][] property, not a safety property.)

  This is arguably an unrealistic definition of availability: your boss won't think your website is
  very available if it takes a week to load a page. However, this definition is what we must work
  with in the proof. (Spoiler: section 4 of the paper discusses how you might include latency in the
  definition of availability.)

* **Partition tolerance** is a matter of some confusion, and I refer you to section 2.3 of the paper
  if you want the details.


Proof structure
---------------

Gilbert and Lynch formalize CAP as an impossibility proof. It is supposed to show that no algorithm
exists that solves a particular problem (in this case, providing all three properties --
linearizability, availability and partition tolerance -- at the same time).

There is a common structure that is often used for this kind of proof (e.g. the [FLP result][flp]
follows a similar structure). In case you're not familiar with it, let me outline informally how it
works. It is structured like a sinister little game between me and you.

1. We agree on the rules of the game. In this case, we need to agree on the properties that the
   algorithm must satisfy (e.g. linearizability and availability), and the system model (the
   assumptions we make about the environment: How many nodes can nodes crash? Can crashed nodes
   recover? By how much can the network delay messages? How many messages may be lost in the
   network?).
2. You design an algorithm, call it *A*, which always provides the properties we agreed, as long as
   we stay within the system model (i.e. as long as only those faults occur that we agreed as part
   of the rules). You are allowed to be arbitrarily clever in the design of this algorithm, and you
   don't tell me how it works.
3. I take your algorithm *A* as a black box, and put it in a little torture chamber. In this chamber
   I am allowed to do everything that is allowed by the rules of step 1 (e.g. mess with the network,
   kill nodes), but I cannot assume anything about the internals of your algorithm. While *A* is
   being tortured, I observe whether it satisfies the properties that we agreed in step 1.
4. If I can prove that there is some situation in which *A* violates its properties in the torture
   chamber, then I win. If *A* always satisfies the properties, in spite of the torture, then you
   win.

(To be clear, this is all just a thought experiment on paper. No actual torturing or designing
algorithms is involved.)

Remember that you are allowed to be arbitrarily clever in the design of *A*, and I'm not allowed to
know how it works. Thus, if I can nevertheless find some situation in which *A* fails to satisfy the
required properties, we have a contradiction.

We can then deduce that an algorithm to solve this problem cannot exist, no matter how clever the
algorithms that we come up with in future. To be more precise, we can deduce that there is no
algorithm that always satisfies the given properties within the given system model.


The error in the CAP proof
--------------------------



I have no problem with vague, ambiguous, rule-of-thumb statements -- in fact, I make them all the
time. The difference is that I don't call it a theorem if really it's just a rule of thumb.


After I [previously wrote critical things][stop-cp-ap] about the CAP Theorem, I received various
comments along the lines of "I still find the CAP Theorem useful, even though it is not accurate."
No doubt there will be similar voices this time.

Perhaps I'm just an asinine pedant, but I struggle to see how an idea can be of practical use if it
is untrue or misleading. Perhaps it can be use for marketing purposes, where hyperbole is somewhat
acceptable, but if you're trying to design a computer system, being precise is essential. To [quote
Richard Feyman][feynman]: *"For a successful technology, reality must take precedence over public
relations, for nature cannot be fooled."* (By the way, Feynman's [contribution][feynman] to the 1986
[Rogers Commission report][rogers] is a terrific read. Even though it's about building rockets, it
contains lots of lessons for software design.)

Personally, I like the systems I use to be designed by insufferable pedants -- the kind of people
who insist on precise definitions and logically coherent arguments -- because at least they have
a *chance* of getting it right.

[paper]: http://arxiv.org/TODO
[wikipedia]: https://en.wikipedia.org/wiki/CAP_theorem
[brewer-hotos]: https://cs.uwaterloo.ca/~brecht/servers/readings-new2/harvest-yield.pdf
[brewer-podc]: http://www.cs.berkeley.edu/~brewer/cs262b-2004/PODC-keynote.pdf
[gilbert-proof]: http://webpages.cs.luc.edu/~pld/353/gilbert_lynch_brewer_proof.pdf
[gilbert2012]: http://groups.csail.mit.edu/tds/papers/Gilbert/Brewer2.pdf
[brewer2012]: http://cs609.cs.ua.edu/CAP12.pdf
[citations]: https://scholar.google.com/scholar?cites=17914402714677808535&as_sdt=2005&sciodt=0,5&hl=en
[linearizability]: http://www.bailis.org/blog/linearizability-versus-serializability/
[stop-cp-ap]: /2015/05/11/please-stop-calling-databases-cp-or-ap.html
[liveness]: https://www.cs.cornell.edu/fbs/publications/DefLiveness.pdf
[flp]: http://macs.citadel.edu/rudolphg/csci604/ImpossibilityofConsensus.pdf

[feynman]: http://science.ksc.nasa.gov/shuttle/missions/51-l/docs/rogers-commission/Appendix-F.txt
[rogers]: http://history.nasa.gov/rogersrep/genindex.htm
