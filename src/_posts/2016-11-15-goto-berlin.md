---
layout: talk
title: Conflict resolution for eventual consistency
venue: GOTO Berlin
place: Berlin, Germany
venue_url: http://gotocon.com/berlin-2016/presentations/show_talk.jsp?oid=7910
slides_url: https://speakerdeck.com/ept/conflict-resolution-for-eventual-consistency
---

<script async class="speakerdeck-embed" data-id="4919ab73fb794e7ba0ff36501c981d5a" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>


Abstract
--------

What do collaborative editors like Google Docs, the calendar app on your phone, and multi-datacenter
database clusters have in common?

Answer: They all need to cope with network interruptions, and still work offline. They all allow
state to be updated concurrently in several different places, and asynchronously propagate changes
to other nodes. If data is concurrently changed on different nodes, you get conflicts that need to
be resolved.

There are different approaches to handling those conflicts: some systems let the user manually
resolve them; some systems choose one version as the winner and throw away the other versions; and
some systems try to merge concurrent updates automatically. For example, Google Docs uses an
algorithm called Operational Transform (OT) to perform this merge, while Riak uses Conflict-Free
Replicated Datatypes (CRDTs) to achieve a similar thing.

In this talk we will explore these algorithms for automatic merging. They start out quite simple,
but as we shall see, they soon become fascinatingly mind-bending once you start trying to do more
ambitious things. For example, if you wanted to write your own spreadsheet app or graphics software
that allows several users to edit the same document concurrently, how would you go about doing that?


References
----------

1.  Carlos Baquero, Paulo Sérgio Almeida, and Carl Lerche: “[The problem with embedded CRDT counters
    and a solution][embedded],” at *2nd Workshop on the Principles and Practice of Consistency for
    Distributed Data* (PaPoC), April 2016.
2.  Russell Brown: “[A Bluffers Guide to CRDTs in Riak][riak],” gist.github.com, 28 October 2013.
3.  John Day-Richter: “[What’s different about the new Google Docs: Making collaboration
    fast][googledocs],” drive.googleblog.com, 23 September 2010.
4.  Clarence Ellis and S J Gibbs: “[Concurrency Control in Groupware Systems][ellis-gibbs],” at *ACM
    International Conference on Management of Data* (SIGMOD), pages 399–407, May 1989.
5.  Abdessamad Imine, Pascal Molli, Gérald Oster, and Michaël Rusinowitch: “[Proving Correctness of
    Transformation Functions in Real-Time Groupware][proving],” at *8th European Conference on
    Computer-Supported Cooperative Work* (ECSCW), pages 277–293, September 2003.
6.  Martin Kleppmann and Alastair R Beresford: “[A Conflict-Free Replicated JSON
    Datatype][json-crdt],” arXiv:1608.03960, August 2016.
7.  Brice Nédelec, Pascal Molli, Achour Mostefaoui, and Emmanuel Desmontils: “[LSEQ: an Adaptive
    Structure for Sequences in Distributed Collaborative Editing][lseq],” at *13th ACM Symposium on
    Document Engineering* (DocEng), pages 37–46, September 2013.
8.  David A Nichols, Pavel Curtis, Michael Dixon, and John Lamping: “[High-Latency, Low-Bandwidth
    Windowing in the Jupiter Collaboration System][jupiter],” at *8th Annual ACM Symposium on User
    Interface Software and Technology* (UIST), pages 111–120, November 1995.
9.  Gérald Oster, Pascal Urso, Pascal Molli, and Abdessamad Imine: “[Data Consistency for P2P
    Collaborative Editing][woot],” at *ACM Conference on Computer Supported Cooperative Work*
    (CSCW), November 2006.
10. Nuno Preguiça, Joan Manuel Marquès, Marc Shapiro, and Mihai Letia: “[A commutative replicated
    data type for cooperative editing][treedoc],” at *29th IEEE International Conference on
    Distributed Computing Systems* (ICDCS), June 2009.
11. Matthias Ressel, Doris Nitsche-Ruhland, and Rul Gunzenhäuer: “[An Integrating,
    Transformation-Oriented Approach to Concurrency Control and Undo in Group Editors][adopted],” at
    *ACM Conference on Computer Supported Cooperative Work* (CSCW), pages 288–297, November 1996.
12. Hyun-Gul Roh, Myeongjae Jeon, Jin-Soo Kim, and Joonwon Lee: “[Replicated abstract data types:
    Building blocks for collaborative applications][rga],” *Journal of Parallel and Distributed
    Computing*, volume 71, number 3, pages 354–368, March 2011.
13. Marc Shapiro, Nuno Preguiça, Carlos Baquero, and Marek Zawirski: “[A comprehensive study of
    Convergent and Commutative Replicated Data Types][crdt-survey],” INRIA Research Report 7506,
    January 2011.
14. Daniel Spiewak: “[Understanding and Applying Operational Transformation][spiewak],”
    codecommit.com, 17 May 2010.
15. Chengzheng Sun and Clarence Ellis: “[Operational Transformation in Real-Time Group Editors:
    Issues, Algorithms, and Achievements][sun-ellis],” at *ACM Conference on Computer Supported
    Cooperative Work* (CSCW), pages 59–68, November 1998.
16. Chengzheng Sun, Xiaohua Jia, Yanchun Zhang, Yun Yang, and David Chen: “[Achieving Convergence,
    Causality Preservation, and Intention Preservation in Real-Time Cooperative Editing
    Systems][goto],” *ACM Transactions on Computer-Human Interaction*, volume 5, number 1, pages
    63–108, 1998.
17. Stéphane Weiss, Pascal Urso, and Pascal Molli: “[Logoot-Undo: Distributed Collaborative Editing
    System on P2P networks][logoot],” *IEEE Transactions on Parallel and Distributed Systems*,
    volume 21, number 8, pages 1162–1174, January 2010.

[embedded]: http://haslab.uminho.pt/cbm/files/abstractcounterpapocfinal.pdf
[riak]: https://gist.github.com/russelldb/f92f44bdfb619e089a4d
[googledocs]: https://drive.googleblog.com/2010/09/whats-different-about-new-google-docs.html
[ellis-gibbs]: http://www-ihm.lri.fr/~mbl/ENS/CSCW/material/papers/Ellis-SIGMOD89.pdf
[proving]: http://www.ecscw.org/2003/015Imine_ecscw03.pdf
[json-crdt]: http://arxiv.org/abs/1608.03960
[lseq]: https://hal.archives-ouvertes.fr/file/index/docid/921633/filename/fp025-nedelec.pdf
[jupiter]: http://www.lively-kernel.org/repository/webwerkstatt/projects/Collaboration/paper/Jupiter.pdf
[woot]: https://hal.archives-ouvertes.fr/file/index/docid/108523/filename/OsterCSCW06.pdf
[treedoc]: https://hal.inria.fr/inria-00445975/document
[adopted]: https://pdfs.semanticscholar.org/6a31/3d12c90b01efae531e70f8d0cd1d1e8565ae.pdf
[rga]: http://csl.skku.edu/papers/jpdc11.pdf
[crdt-survey]: http://hal.inria.fr/inria-00555588/
[spiewak]: http://www.codecommit.com/blog/java/understanding-and-applying-operational-transformation
[sun-ellis]: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.53.933&rep=rep1&type=pdf
[goto]: http://salvin.jeancharles.free.fr/Documents/Projet%20-%20Boulot/NTU-Singapore/p63-sun.pdf
[logoot]: https://www.researchgate.net/profile/Pascal_Urso/publication/233882440_Logoot-Undo_Distributed_Collaborative_Editing_System/links/0fcfd50c84f5194937000000.pdf
