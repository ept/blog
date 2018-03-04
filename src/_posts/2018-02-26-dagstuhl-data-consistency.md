---
layout: talk
title: "Data structures as queries: Expressing CRDTs using Datalog"
venue: Dagstuhl Seminar 18091
place: Schloss Dagstuhl, Germany
venue_url: http://www.dagstuhl.de/18091
slides_url: https://speakerdeck.com/ept/data-structures-as-queries-expressing-crdts-using-datalog
---

I participated in [Dagstuhl Seminar 18091:
*Data Consistency in Distributed Systems: Algorithms, Programs, and Databases.*](http://www.dagstuhl.de/18091)

Abstract
--------

Currently there are two conventional formulations of CRDTs: state-based (where we prove that our
merge function is commutative, associative, and idempotent) or operation-based (where we prove that
the functions that apply operations to the local state are commutative). I propose a third
formulation in which the CRDT is expressed as a query over a monotonically growing set of
operations. The merge function for the set of operations is just the set union, which is trivially
commutative, associative, and idempotent. By expressing the desired data structure as
a deterministic query over that set we get convergence automatically. I will discuss how we can use
the Datalog language to express such queries, how this query-based approach can help us better
understand existing CRDTs, and how it facilitates designing new ones.

References
----------

1. Marc Shapiro, Nuno Preguiça, Carlos Baquero, and Marek Zawirski:
   “[Conflict-Free Replicated Data Types](https://pages.lip6.fr/Marek.Zawirski/papers/RR-7687.pdf),”
   at *13th International Symposium on Stabilization, Safety, and Security of Distributed Systems*
   (SSS), pages 386–400, October 2011. [doi:10.1007/978-3-642-24550-3_29](http://dx.doi.org/10.1007/978-3-642-24550-3_29)
2. Hyun-Gul Roh, Myeongjae Jeon, Jin-Soo Kim, and Joonwon Lee:
   “[Replicated abstract data types: Building blocks for collaborative applications](http://csl.skku.edu/papers/jpdc11.pdf),”
   *Journal of Parallel and Distributed Computing*, volume 71, number 3, pages 354–368, March 2011.
   [doi:10.1016/j.jpdc.2010.12.006](http://dx.doi.org/10.1016/j.jpdc.2010.12.006)
3. Victor Grishchenko:
   “[Citrea and Swarm: Partially ordered op logs in the browser](http://www.ds.ewi.tudelft.nl/~victor/polo.pdf),”
   at *1st Workshop on Principles and Practice of Eventual Consistency* (PaPEC 2014), April 2014.
   [doi:10.1145/2596631.2596641](http://dx.doi.org/10.1145/2596631.2596641)
4. Hagit Attiya, Sebastian Burckhardt, Alexey Gotsman, et al.:
   “[Specification and Complexity of Collaborative Text Editing](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/07/podc16-complete.pdf),”
   at *ACM Symposium on Principles of Distributed Computing* (PODC), pages 259–268, July 2016.
   [doi:10.1145/2933057.2933090](http://dx.doi.org/10.1145/2933057.2933090)
5. Todd J Green, Shan Shan Huang, Boon Thau Loo, and Wenchao Zhou:
   “[Datalog and Recursive Query Processing](http://blogs.evergreen.edu/sosw/files/2014/04/Green-Vol5-DBS-017.pdf),”
   *Foundations and Trends in Databases*, volume 5, number 2, pages 105–195, November 2013.
   [doi:10.1561/1900000017](http://dx.doi.org/10.1561/1900000017)
