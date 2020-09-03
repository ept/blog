---
layout: paper
type: conference
title: Ghost trace on the wire? Using key evidence for informed decisions
authors: Diana A. Vasile, Martin Kleppmann, Daniel R. Thomas, and Alastair R. Beresford
venue: 27th International Workshop on Security Protocols
place: Cambridge, UK
doi: 10.1007/978-3-030-57043-9_23
paper_url: /papers/ghost-attack-spw19.pdf
venue_url: https://www.cl.cam.ac.uk/events/spw/2019/program/
publisher_url: https://link.springer.com/chapter/10.1007/978-3-030-57043-9_23
---

* [Transcript of discussion (version of record)](https://link.springer.com/chapter/10.1007/978-3-030-57043-9_24)

Abstract
--------

Modern smartphone messaging apps now use end-to-end encryption to provide authenticity, integrity
and confidentiality. Consequently, the preferred strategy for wiretapping such apps is to insert
a ghost user by compromising the platform's public key infrastructure. The use of warning messages
alone is not a good defence against a ghost user attack since users change smartphones, and
therefore keys, regularly, leading to a multitude of warning messages which are overwhelmingly false
positives. Consequently, these false positives discourage users from viewing warning messages as
evidence of a ghost user attack. To address this problem, we propose collecting evidence from
a variety of sources, including direct communication between smartphones over local networks and
CONIKS, to reduce the number of false positives and increase confidence in key validity. When there
is enough confidence to suggest a ghost user attack has taken place, we can then supply the user
with evidence to help them make a more informed decision.
