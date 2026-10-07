---
layout: ync-post
title: "Announcing the Centre for Cryptographic Trust Infrastructure (CCTI)"
---

Today I am happy to
[announce](https://www.cst.cam.ac.uk/news/researchers-receive-funding-explore-ambitious-new-ways-improving-ai-security)
a very exciting new research project that I’ve been working towards for years!

We are establishing the **Centre for Cryptographic Trust Infrastructure (CCTI)**, funded initially
by a £2.4m grant from the
[Advanced Research + Invention Agency](https://aria.org.uk/) (ARIA) through the
[Scaling Trust programme](https://aria.org.uk/opportunity-spaces/trust-everything-everywhere/scaling-trust).
CCTI is a collaboration between the
[University of Cambridge Department of Computer Science and Technology](https://www.cst.cam.ac.uk/),
the nonprofit [SINE Foundation](https://sine.foundation/), my longstanding collaborators at
[Ink & Switch](https://www.inkandswitch.com/), and the startup
[Light Squares](https://lightsquares.dev/).

The overall goal of the ARIA Scaling Trust programme is to enable AI agents to coordinate securely
on their owners’ behalf, across both the digital and physical worlds. The programme is funding
several teams who are investigating the use of cryptography to enable such coordination.

ARIA is a fairly new funding body in the UK, started only 3 years ago. It is modelled after
[DARPA](https://www.darpa.mil/), but with a civilian rather than military remit. ARIA’s goal is to
fund ambitious research that, if successful, will have a huge positive impact on society. For the
last year ARIA has already been funding a lot of my collaborators’ work on
[Automerge](https://automerge.org/) through the
[Safeguarded AI programme](https://aria.org.uk/opportunity-spaces/trust-everything-everywhere/safeguarded-ai/funded-projects?tabId=tooling-platforms&cardId=gaios),
and now I am extremely grateful for their support for CCTI as well!

Introducing CCTI
----------------

Imagine you’re a manufacturing company, and you have an AI agent that is tasked with finding
a supplier for a particular component you need. Your agent may contact various potential suppliers,
even interacting with their agents if they have them. But it’s a messy world out there. How is your
agent supposed to know if the other agents are telling the truth? They might be fraudsters,
pretending to have the product you want while actually giving you something else (or nothing at
all). If you don’t already have some sort of prior history or another way of establishing
reputation, there is no way for the agents to know whether they can trust each other.

The traditional economy solves this problem through trusted third parties such as certification
bodies, and by using expensive, slow, and manual processes for vetting potential suppliers (for
example, flying someone over to inspect their factory in person). But maybe our brave new AI world
will allow us to do this faster, cheaper, and more reliably?

Our hypothesis is that **cryptographic protocols** such as zero-knowledge proofs provide a way for
one agent to prove to another that it is telling the truth, but without revealing commercially
sensitive data. For example, it would allow a supplier to prove that its products were indeed
manufactured using a particular process as it claims. If this works, we believe that it will unlock
huge economic opportunities.

But wait, I hear you ask: cryptography can only prove something about the relationship between one
number and another number. How could it ever prove something about the physical world? Well, as it
happens, for the last two years my PhD student [Jessica](https://www.cst.cam.ac.uk/people/psjm3) and
I have already been busy using cryptography to prove things about the physical world, and CCTI is
a generalisation of this line of work.

In our [Emission Impossible](https://dl.acm.org/doi/pdf/10.1145/3744255.3811720) paper, Jessica and
I show how the operator of a datacenter could cryptographically prove to its customers what carbon
emissions have arisen from each customer’s use of computing resources in the datacenter. Since it’s
about emissions, it’s about the physical world. We chose datacenters as the use case for that paper
because it allowed us to make some simplifying assumptions; in particular, we considered only
electricity as the source of emissions and ignored, say, hardware manufacturing. But in subsequent
work since then we’ve been chipping away at these assumptions, and generalising the technique to
other use cases.

From the carbon emissions example you can see that we’re interested in sustainability issues. We
have also looked into using similar techniques for other sustainability concerns, such as verifying
that agricultural commodities were not grown on recently deforested land (as required by the
[EU Deforestation Regulation](https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en)).
CCTI is broader than this – we’re interested in any case of mutually untrusting parties wanting to
establish a trust relationship – but I believe the approach is particularly valuable in the context
of sustainability, where companies have a tendency of making dubious claims (“greenwashing”), but
where accuracy is important if we want to actually achieve our sustainability goals, such as
reducing carbon emissions.

But how does it work?
---------------------

I will leave a more detailed explanation of our technical approach to another post, but for now
I wanted to give a brief outline of how we intend to actually make this work, since otherwise this
project may seem outlandish.

Say you want to prove a property about some physical production process (e.g., that your company’s
steel was manufactured with a low-carbon process, such as
[direct reduction](https://www.sciencedirect.com/science/article/pii/S0959652618326301) with green
hydrogen and using an electric arc furnace powered by renewable electricity, rather than a blast
furnace).  Analysing a sample of the material itself may tell you the process, but it does not tell
you what carbon intensity was associated with the hydrogen and the electricity. Thus, we need to
prove a property that is not directly observable.

However, indirect facts are observable, and indeed cryptographically attestable. We can download
a list of financial transactions from the company’s bank account, and prove using
[TLSnotary](https://tlsnotary.org/) or a similar tool that the transactions are genuine (assuming
you trust the bank’s TLS certificate). We can verifiably associate each financial transaction with
a digital invoice, and attach product and emissions data to the invoices. That way, you could prove
cryptographically that the steel company did not buy any coke, but it did buy a lot of renewable
electricity and a lot of green hydrogen (themselves attested through recursively validated proofs).
You also need to prove that the company is not reselling high-emissions steel from another producer.
And if you can do that, the result is compelling evidence that the steel is indeed green as claimed.

Additionally, the proof process could take input from many other sources: sensor data from trusted
sensors can be digitally signed, emails can be authenticated via DKIM signatures, company identities
can be attested by government websites, and certification bodies can issue digital certificates. All
of these cryptographically attested facts can then feed into a big zero-knowledge proof that deduces
the fact you want to prove using domain-specific logic.

There is a lot more to this project – we are exploring game-theoretic models to help agents
establish what further evidence would be needed to come to an agreement, allowing us to weigh off
the cost of producing the evidence against the benefits it would bring. We are looking into
real-world use cases from several different industries to inform the design of the whole system, and
we will use LLM-based prototypes to measure the degree to which cryptographic protocols increase the
ability for untrusting agents to establish trust and come to an agreement.

If that sounds very ambitious – well, it is. But we think that we have a viable plan for making it
happen. And if it works, this project will be hugely impactful, potentially changing the way the
world economy works by enabling new business models that would have been infeasible previously. And
maybe we can even embed sustainability concerns in every single purchasing decision – which will be
critical for decarbonising the economy.

CCTI doesn’t have a website yet, as we’re just getting started. But we’ll be writing more about our
work as it progresses. Stay tuned!
