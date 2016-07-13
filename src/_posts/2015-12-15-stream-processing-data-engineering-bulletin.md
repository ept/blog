---
layout: paper
title: Kafka, Samza and the Unix philosophy of distributed data
authors: Martin Kleppmann and Jay Kreps
venue: "IEEE Data Engineering Bulletin 38(4):4–14"
venue_url: http://sites.computer.org/debull/bull_issues.html
paper_url: /papers/kafka-debull15.pdf
---

Abstract
--------

Apache Kafka is a scalable message broker, and Apache Samza is a stream processing framework built
upon Kafka. They are widely used as infrastructure for implementing personalized online services and
real-time predictive analytics. Besides providing high throughput and low latency, Kafka and Samza
are designed with operational robustness and long-term maintenance of applications in mind. In this
paper we explain the reasoning behind the design of Kafka and Samza, which allow complex
applications to be built by composing a small number of simple primitives -- replicated logs and
stream operators. We draw parallels between the design of Kafka and Samza, batch processing
pipelines, database architecture, and the design philosophy of Unix.
