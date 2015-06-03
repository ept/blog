---
layout: talk
title: Streams, CRDTs and the Future of Databases
venue: Code Mesh
place: London, UK
venue_url: http://www.codemesh.io/codemesh2015/martin-kleppmann
---

Abstract
--------

What do multi-datacenter database clusters, calendar sync on mobile phones, and real-time
collaboration apps like Google Docs have in common?

Answer: They all need to handle updates on a local node, and asynchronously synchronise data with
other nodes. They all need to cope with network interruptions and offline operation. They are all
optimised for low latency data access. And they all allow data to be modified concurrently on
different nodes, leading to conflicts that need to be resolved.

In this talk, we will discuss a category of data structures called CRDTs (conflict-free replicated
data types), which are designed for this kind of environment. We will do a tour of theory and
practical implementations, and we'll explore how they relate to stream processing, dataflow
programming and functional data structures.

And perhaps we'll catch a glimpse of what the future of databases will look like.
