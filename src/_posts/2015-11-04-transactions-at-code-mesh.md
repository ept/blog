---
layout: talk
title: "Transactions: Myths, Surprises and Opportunities"
venue: Code Mesh
place: London, UK
venue_url: http://www.codemesh.io/codemesh2015/martin-kleppmann
slides_url: https://speakerdeck.com/ept/transactions-myths-surprises-and-opportunities
video_url: https://www.youtube.com/watch?v=eo2EBdSbO10
---

<iframe width="550" height="309" src="https://www.youtube-nocookie.com/embed/eo2EBdSbO10?rel=0" frameborder="0" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/0a5b3e46260542ff9e557458e33afd33" title="Transactions: Myths, Surprises and Opportunities" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 314px;" data-ratio="1.78343949044586"></iframe>

This was a repeat of my
[talk at Strange Loop 2015](/2015/09/26/transactions-at-strange-loop.html).

Abstract
--------

Back in the 1970s, the earliest databases had transactions. Then NoSQL abolished them. And now,
perhaps, they are making a comeback... but reinvented.

The purpose of transactions is to make application code simpler, by reducing the amount of failure
handling you need to do yourself. However, they have also gained a reputation for being slow and
unscalable. With the traditional implementation of serializable transactions (2-phase locking), that
reputation was somewhat deserved.

In the last few years, there has been a resurgence of interest in transaction algorithms that
perform well and scale well. This talk answers some of the biggest questions about the bright new
landscape of transactions:

* You know that ACID stands for Atomicity, Consistency, Isolation and Durability, but are you
  certain that you know precisely what those words mean? What race conditions can you get with weak
  isolation (such as "read committed" and "repeatable read"), and how does this affect your
  application?
* How do modern implementations of serializability work, and how are they different from traditional
  algorithms?
* What are the strongest guarantees we can achieve, while maintaining high availability and high
  performance at scale?
* When you build a microservices architecture or use stream processing, you often end up with data
  spread across multiple databases. Does this mean you inevitably have to give up transactional
  guarantees?

References
----------

1. Atul Adya: “[Weak Consistency: A Generalized Theory and Optimistic Implementations for
  Distributed Transactions](http://pmg.csail.mit.edu/papers/adya-phd.pdf),” PhD thesis,
  Massachusetts Institute of Technology, Cambridge, MA, USA, March 1999.
2. Hagit Attiya, Faith Ellen, and Adam Morrison: “[Limitations of Highly-Available
   Eventually-Consistent Data Stores](http://www.cs.technion.ac.il/people/mad/online-publications/podc2015-replds.pdf),”
   at *ACM Symposium on Principles of Distributed Computing* (PODC), July 2015.
3. Peter Bailis, Alan Fekete, Ali Ghodsi, Joseph M Hellerstein, and Ion Stoica:
   “[HAT, not CAP: Towards Highly Available Transactions](http://www.bailis.org/papers/hat-hotos2013.pdf),”
   at *14th USENIX Workshop on Hot Topics in Operating Systems* (HotOS), May 2013.
4. Peter Bailis, Ali Ghodsi, Joseph M Hellerstein, and Ion Stoica:
   “[Bolt-on Causal Consistency](http://db.cs.berkeley.edu/papers/sigmod13-bolton.pdf),”
   at *ACM International Conference on Management of Data* (SIGMOD), June 2013.
5. Peter Bailis, Aaron Davidson, Alan Fekete, et al.:
   “[Highly Available Transactions: Virtues and Limitations](http://www.bailis.org/papers/hat-vldb2014.pdf),”
   at *40th International Conference on Very Large Data Bases* (VLDB), September 2014.
6. Hal Berenson, Philip A Bernstein, Jim N Gray, et al.:
   “[A Critique of ANSI SQL Isolation Levels](http://research.microsoft.com/pubs/69541/tr-95-51.pdf),”
   at *ACM International Conference on Management of Data* (SIGMOD), May 1995.
7. Eric A Brewer: “[CAP Twelve Years Later: How the “Rules” Have Changed](http://cs609.cs.ua.edu/CAP12.pdf),”
   *IEEE Computer Magazine*, volume 45, number 2, pages 23–29, February 2012.
8. Michael J Cahill, Uwe Röhm, and Alan Fekete:
   “[Serializable Isolation for Snapshot Databases](http://www.cs.nyu.edu/courses/fall12/CSCI-GA.2434-001/p729-cahill.pdf),”
   at *ACM International Conference on Management of Data* (SIGMOD), pages 729–738, June 2008.
9. Donald D Chamberlin, Morton M Astrahan, Michael W Blasgen, et al.:
   “[A History and Evaluation of System R](http://diaswww.epfl.ch/courses/adms07/papers/p632-chamberlin.pdf),”
   *Communications of the ACM*, volume 24, number 10, pages 632–646, October 1981.
10. Tushar Deepak Chandra and Sam Toueg:
    “[Unreliable Failure Detectors for Reliable Distributed Systems](http://courses.csail.mit.edu/6.852/08/papers/CT96-JACM.pdf),”
    *Journal of the ACM*, volume 43, number 2, pages 225–267, March 1996.
11. Kapali P Eswaran, Jim N Gray, Raymond A Lorie, and Irving L Traiger:
    “[The Notions of Consistency and Predicate Locks in a Database System](http://paul.rutgers.edu/cs545/S02/papers/eswaran-transaction.pdf),”
    *Communications of the ACM*, volume 19, number 11, pages 624–633, November 1976.
12. Hector Garcia-Molina and Kenneth Salem: “[Sagas](http://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf),”
    at *ACM International Conference on Management of Data* (SIGMOD), May 1987.
13. Jim N Gray, Raymond A Lorie, Gianfranco R Putzolu, and Irving L Traiger:
    “[Granularity of Locks and Degrees of Consistency in a Shared Data Base](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.92.8248),”
    in *Modelling in Data Base Management Systems: Proceedings of the IFIP Working Conference on
    Modelling in Data Base Management Systems*, G.M. Nijssen, Editor. Elsevier/North Holland
    Publishing, pages 364–394, 1976.
14. Rachid Guerraoui: “[Revisiting the relationship between non-blocking atomic commitment and
    consensus](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.27.6456),” at *9th
    International Workshop on Distributed Algorithms* (WDAG), pages 87–100, September 1995.
15. Theo Härder and Andreas Reuter:
    “[Principles of Transaction-Oriented Database Recovery](http://web.stanford.edu/class/cs340v/papers/recovery.pdf),”
    *ACM Computing Surveys*, volume 15, number 4, pages 287–317, December 1983.
16. Pat Helland and Dave Campbell:
    “[Building on Quicksand](https://database.cs.wisc.edu/cidr/cidr2009/Paper_133.pdf),”
    at *4th Biennial Conference on Innovative Data Systems Research* (CIDR), January 2009.
17. Joseph M Hellerstein: “[The Declarative Imperative: Experiences and Conjectures in Distributed
    Logic](http://www.sigmod.org/publications/sigmod-record/1003/p05.article.hellerstein.pdf),”
    *ACM SIGMOD Record*, volume 39, number 1, March 2010.
18. Martin Kleppmann: “[Hermitage: Testing the ‘I’ in
    ACID](http://martin.kleppmann.com/2014/11/25/hermitage-testing-the-i-in-acid.html),” 25 November 2014.
19. Martin Kleppmann: “[A Critique of the CAP Theorem](http://arxiv.org/abs/1509.05393),”
    Preprint arXiv:1509.05393 [cs.DC], Sep 2015.
20. Martin Kleppmann: [*Designing Data-Intensive Applications*](http://dataintensive.net/).
    O’Reilly Media, to appear. ISBN 1-4493-7332-1.
21. Wyatt Lloyd, Michael J Freedman, Michael Kaminsky, and David G Andersen:
    “[Don’t Settle for Eventual: Scalable Causal Consistency for Wide-Area Storage with COPS](https://www.cs.cmu.edu/~dga/papers/cops-sosp2011.pdf),”
    at *23rd ACM Symposium on Operating Systems Principles* (SOSP), pages 401–416, October 2011.
22. Dan R K Ports and Kevin Grittner:
    “[Serializable Snapshot Isolation in PostgreSQL](http://drkp.net/papers/ssi-vldb12.pdf),”
    at *38th International Conference on Very Large Data Bases* (VLDB), volume 5, number 12, pages
    1850–1861, August 2012.
23. Michael Stonebraker, Samuel Madden, Daniel J Abadi, et al.:
    “[The End of an Architectural Era (It’s Time for a Complete Rewrite)](http://www.vldb.org/conf/2007/papers/industrial/p1150-stonebraker.pdf),”
    at *33rd International Conference on Very Large Data Bases* (VLDB), pages 1150–1160, September 2007.
24. Marek Zawirski, Annette Bieniusa, Valter Balegas, et al.:
    “[SwiftCloud: Fault-Tolerant Geo-Replication Integrated all the Way to the Client Machine](http://arxiv.org/abs/1310.3107),”
    INRIA Research Report 8347, August 2013.
