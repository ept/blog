---
layout: talk
title: "Local-first software: Collaborating without depending on servers"
venue: emergenCITY “Software and Resilience” Workshop
place: Online
venue_url: https://www.emergencity.de/news/workshop-software-and-resilience-at-emergencity-week-2021/
---

Abstract
--------

Cloud-hosted software services and web apps have become crucial machinery
for the functioning of companies, governments, and society, making it easier to
communicate, collaborate, and coordinate our actions. However, this type of
software depends on a server infrastructure that processes requests from
clients and stores the data in a central database. The datacenter where these
servers are hosted is often far away from the clients that depend on it.

If the clients can't reach the servers, cloud software stops working. In a disaster
scenario, we cannot assume that every device has a working internet connection
through which it can communicate with a remote cloud service. Instead, devices
that are physically close to each other can use local radio links such as mesh
networks to communicate.

However, most collaboration software today is built on top of the assumption
that there is one central database, and all communication is routed through it.
This assumption is no longer true when we allow nearby devices to communicate
directly, without going via any server.

This talk will introduce our research on algorithms for collaboration software that
works via any type of network, without assuming any servers. We call this type
of software "local-first", since it prioritises local networks and local storage over
cloud computing resources. We will also discuss Automerge, an open source
library of Conflict-free Replicated Data Types (CRDTs) that can be used to
create local-first software.
