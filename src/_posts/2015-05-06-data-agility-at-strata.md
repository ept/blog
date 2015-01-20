---
layout: talk
title: "Systems that enable data agility: Lessons from LinkedIn"
venue: "Strata + Hadoop World"
place: "London, UK"
venue_url: http://strataconf.com/big-data-conference-uk-2015/public/schedule/detail/39689
lanyrd_url: http://lanyrd.com/2015/strata-hadoop-world-london/
---

Data is only useful if you can process it, analyse it, and create valuable products from it. If you
have an idea for a new data-driven product, how long does it take you to get it into production? In
this talk, we'll discuss Apache Kafka and Samza, open source tools created at LinkedIn with the goal
of helping teams implement data products and ship them to production rapidly.


Abstract
--------

Congratulations, you've got a lot of data! Now what? How do you enable your organisation to create
value from that data? What tools do your data scientists need in order to create data-driven
products? How do you empower your teams to experiment, to innovate, and to be agile in response to
customer needs?

In this session we will discuss LinkedIn's approach to solving these problems, and the open source
tools that were created at LinkedIn to support data agility in a large organisation. The approach
boils down to a few simple ideas:

1. Make all data available centrally, in real time. If it's too difficult to access data across
   silos, you can't derive value from it. For this purpose, LinkedIn created Apache Kafka, which can
   be the data exchange backbone of your organisation.
2. Make it easy to analyse and process that data. You've hired smart people, now empower them to
   easily try out new ideas for data-driven products, and rapidly get them into production if they
   are good. To support this, LinkedIn created Apache Samza, a stream processing framework that
   provides powerful, reliable tools for working with data in Kafka.

Since Kafka and Samza are open source, you can apply these lessons and start implementing your own agile data pipeline today. In this talk you'll learn about:

- How Kafka and Samza reliably scale to millions of messages per second
- What kinds of real-time data problems you can solve with Samza
- How Samza compares to other stream processing frameworks
- How data streams support collaboration between different data science, product and engineering
  teams within an organisation
- Lessons learnt on how to move fast without breaking things
