---
layout: paper
title: Making Sense of Stream Processing
authors: Martin Kleppmann
venue: O’Reilly Media
paper_url: http://www.oreilly.com/data/free/stream-processing.csp
---

This report is an edited, updated and extended version of five talks and blog posts I had published
previously:

- "[Turning the database inside out with Apache
  Samza](/2014/09/18/turning-database-inside-out-at-strange-loop.html)," at Strange Loop, St. Louis,
  Missouri, US, 18 September 2014.
- "[Making sense of stream processing](/2015/01/24/stream-processing-at-dev-winter.html)," at
  /dev/winter, Cambridge, UK, 24 January 2015.
- "[Using logs to build a solid data
  infrastructure](/2015/04/24/logs-for-data-infrastructure-at-craft.html)," at Craft Conference,
  Budapest, Hungary, 24 April 2015.
- "[Systems that enable data agility: Lessons from LinkedIn](/2015/05/06/data-agility-at-strata.html),"
  at Strata + Hadoop World, London, UK, 6 May 2015.
- "[Change data capture: The magic wand we forgot](/2015/06/02/change-capture-at-berlin-buzzwords.html),"
  at Berlin Buzzwords, Berlin, Germany, 2 June 2015.
- "[Samza and the Unix philosophy of distributed data](/2015/08/05/samza-unix-philosophy-at-huguk.html),"
  at UK Hadoop Users Group, London, UK, 5 August 2015.

Abstract
--------

How can event streams help make your application more scalable, reliable, and maintainable? In this
report, O’Reilly author Martin Kleppmann shows you how stream processing can make your data storage
and processing systems more flexible and less complex. Structuring data as a stream of events isn’t
new, but with the advent of open source projects such as Apache Kafka and Apache Samza, stream
processing is finally coming of age.

Using several case studies, Kleppmann explains how these projects can help you reorient your
database architecture around streams and materialized views. The benefits of this approach include
better data quality, faster queries through precomputed caches, and real-time user interfaces. Learn
how to open up your data for richer analysis and make your applications more scalable and robust in
the face of failures.

- Understand stream processing fundamentals and their similarities to event sourcing, CQRS, and
  complex event processing
- Learn how logs can make search indexes and caches easier to maintain
- Explore the integration of databases with event streams, using the new Bottled Water open source
  tool
- Turn your database architecture inside out by orienting it around streams and materialized views
