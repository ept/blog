---
layout: talk
title: "Attiya and Welch: Sequential Consistency versus Linearizability"
venue: Papers We Love
place: London, UK
venue_url: http://www.meetup.com/Papers-We-Love-London/events/223602194/
---

[Papers We Love][pwl] is a meetup for discussing academic computer science papers.
At this meeting I'm presenting the following paper:

[Hagit Attiya][attiya] and [Jennifer L Welch][welch]:
“[Sequential Consistency versus Linearizability][paper],”
ACM Transactions on Computer Systems (TOCS), volume 12, number 2, pages 91–122, May 1994.
[doi:10.1145/176575.176576][doi]

[pwl]: http://paperswelove.org/
[attiya]: http://www.cs.technion.ac.il/~hagit/
[welch]: https://parasol.tamu.edu/~welch/
[paper]: http://courses.csail.mit.edu/6.852/01/papers/p91-attiya.pdf
[doi]: http://dx.doi.org/10.1145/176575.176576


Abstract of my talk
-------------------

An often-cited constraint on distributed database design is the CAP theorem, an impossibility result
in distributed systems. It states that in a linearizable database, if the network is interrupted,
some nodes cannot respond to requests. Although being able to tolerate network faults is important,
the performance and response times of a database are often even more important, and CAP says nothing
about those. It's also a pretty boring theorem.

Attiya and Welch's paper, which we'll discuss in this session, is vastly more interesting. It also
proves an impossibility result, but it's about response times: on a network where the uncertainty of
packet delay is u, there is no algorithm that implements linearizability with read requests faster
than u/4 and write requests faster than u/2. On a network where packet delay is highly variable
(like many computer networks), a linearizable database is therefore inevitably going to be slow.

The paper then goes on to compare linearizability to sequential consistency (a weaker consistency
guarantee), and shows that sequential consistency can be significantly faster.

This is a theoretical paper, but its applications to practical systems are very real. Its proofs are
elegant and not too difficult to follow. It was almost a decade ahead of the CAP theorem. And
moreover, it has no male co-authors. What's not to love about it?


Abstract of the paper
---------------------

The power of two well-known consistency conditions for shared-memory multiprocessors, _sequential
consistency_ and _linearizability_, is compared. The cost measure studied is the worst-case response
time in distributed implementations of virtual shared memory supporting one of the two conditions.
Three types of shared-memory objects are considered: read/write objects, FIFO queues, and stacks. If
clocks are only approximately synchronized (or do not exist), then for all three object types it is
shown that linearizability is more expensive than sequential consistency: We present upper bounds
for sequential consistency and larger lower bounds for linearizability. We show that, for all three
data types, the worst-case response time is very sensitive to the assumptions that are made about
the timing information available to the system. Under the strong assumption that processes have
perfectly synchronized clocks, it is shown that sequential consistency and linearizability are
equally costly: We present upper bounds for linearizability and matching lower bounds for sequential
consistency. The upper bounds are shown by presenting algorithms that use atomic broadcast in
a modular fashion. The lower-bound proofs for the approximate case use the technique of “shifting,”
first introduced for studying the clock synchronization problem.
