---
layout: ync-post
title: "Prediction: AI will make formal verification go mainstream"
---

Much has been said about the effects that AI will have on software development, but there is an
angle I haven't seen talked about: I believe that AI will bring formal verification, which for
decades has been a bit of a fringe pursuit, into the software engineering mainstream.

Proof assistants and proof-oriented programming languages such as [Rocq](https://rocq-prover.org/),
[Isabelle](https://isabelle.in.tum.de/), [Lean](https://lean-lang.org/),
[F\*](https://fstar-lang.org/), and [Agda](https://agda.readthedocs.io/) have been around for a long
time. They make it possible to write a formal specification that some piece of code is supposed to
satisfy, and then mathematically prove that the code *always* satisfies that spec (even on weird
edge cases that you didn't think of testing). These tools have been used to develop some large
formally verified software systems, such as an [operating system kernel](https://sel4.systems/),
a [C compiler](https://compcert.org/), and a
[cryptographic protocol stack](https://project-everest.github.io/).

At present, formal verification is mostly used by research projects, and it is
[uncommon](https://hillelwayne.com/post/why-dont-people-use-formal-methods/) for industrial software
engineers to use formal methods (even those working on classic high-assurance software such as
medical devices and aircraft). The reason is that writing those proofs is both very difficult
(requiring PhD-level training) and very laborious.

For example, as of 2009, the formally verified seL4 microkernel consisted of 8,700 lines of C code,
but proving it correct required 20 person-years and
[200,000 lines](https://www.sigops.org/s/conferences/sosp/2009/papers/klein-sosp09.pdf) of Isabelle
code – or 23 lines of proof and half a person-day for every single line of implementation. Moreover,
there are maybe a few hundred people in the world (wild guess) who know how to write such proofs,
since it requires a lot of arcane knowledge about the proof system.

To put it in simple economic terms: for most systems, the expected cost of bugs is lower than the
expected cost of using the proof techniques that would eliminate those bugs. Part of the reason is
perhaps that bugs are a negative externality: it's not the software developer who bears the cost of
the bugs, but the users. But even if the software developer were to bear the cost, formal
verification is simply very hard and expensive.

At least, that was the case until recently. Now, LLM-based coding assistants are getting pretty good
not only at writing implementation code, but also at
[writing](https://www.nature.com/articles/s41586-025-09833-y)
[proof scripts](https://www.galois.com/articles/claude-can-sometimes-prove-it) in
[various languages](https://arxiv.org/pdf/2503.14183v1). At present, a human with specialist
expertise still has to guide the process, but it's not hard to extrapolate and imagine that process
becoming fully automated in the next few years. And when that happens, it will totally change the
economics of formal verification.

If formal verification becomes vastly cheaper, then we can afford to verify much more software. But
on top of that, AI also creates a *need* to formally verify more software: rather than having humans
review AI-generated code, I'd much rather have the AI prove to me that the code it has generated is
correct. If it can do that, I'll take AI-generated code over handcrafted code (with all its
artisanal bugs) any day!

In fact, I would argue that writing proof scripts is one of the best applications for LLMs. It
doesn't matter if they hallucinate nonsense, because the proof checker will reject any invalid proof
and force the AI agent to retry. The proof checker is a small amount of code that is itself
verified, making it virtually impossible to sneak an invalid proof past the checker.

That doesn't mean software will suddenly be bug-free. As the verification process itself becomes
automated, the challenge will move to correctly defining the specification: that is, how do you know
that the properties that were proved are actually the properties that you cared about? Reading and
writing such formal specifications still requires expertise and careful thought. But writing the
spec is vastly easier and quicker than writing the proof by hand, so this is progress.

I could also imagine AI agents helping with the process of writing the specifications, translating
between formal language and natural language. Here there is the potential for subtleties to be lost
in translation, but this seems like a manageable risk.

I find it exciting to think that we could just specify in a high-level, declarative way the
properties that we want some piece of code to have, and then to vibe code the implementation along
with a proof that it satisfies the specification. That would totally change the nature of software
development: we wouldn't even need to bother looking at the AI-generated code any more, just like we
don't bother looking at the machine code generated by a compiler.

In summary: 1. formal verification is about to become vastly cheaper; 2. AI-generated code needs
formal verification so that we can skip human review and still be sure that it works; 3. the
precision of formal verification counteracts the imprecise and probabilistic nature of LLMs. These
three things taken together mean formal verification is likely to go mainstream in the foreseeable
future. I suspect that soon the limiting factor will not be the technology, but the culture change
required for people to realise that formal methods have become viable in practice.

**Updates:**

* [This paper](https://arxiv.org/abs/2509.22908) from September 2025 coins the term "vericoding" (in
  contrast to "vibecoding") to describe using LLMs to generate formally verified code, and presents
  some benchmark results for several languages.
* A few startups are on the case: I've heard reports that
  [Harmonic's Aristotle](https://aristotle.harmonic.fun/),
  [Logical Intelligence](https://logicalintelligence.com/), and
  [DeepSeek-Prover-V2](https://arxiv.org/pdf/2504.21801)
  are getting pretty good at writing Lean proofs.
