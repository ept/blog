---
layout: talk
title: "Staying in Sync: From Transactions to Streams"
venue: QCon
place: London, UK
venue_url: http://qconlondon.com/presentation/staying-sync-transactions-streams
---

Abstract
--------

For the very simplest applications, a single database is sufficient, and then life is pretty good.
But as your application needs to do more, you often find that no single technology can do everything
you need to do with your data. And so you end up having to combine several databases, caches, search
indexes, message queues, analytics tools, machine learning systems, and so on, into a heterogeneous
infrastructure...

Now you have a new problem: your data is stored in several different places, and if it changes in
one place, you have to keep it in sync in the other places, too. It's not too bad if all your
systems are up and running smoothly, but what if some parts of your systems have failed, some are
running slow, and some are running buggy code that was deployed by accident?

It's not easy to keep data in sync across different systems in the face of failure. Distributed
transactions and 2-phase commit have long been seen as the "correct" solution, but they are slow and
have operational problems, and so many systems can't afford to use them.

In this talk we'll explore using event streams and Kafka for keeping data in sync across
heterogeneous systems, and compare this approach to distributed transactions: what consistency
guarantees can it offer, and how does it fare in the face of failure?
