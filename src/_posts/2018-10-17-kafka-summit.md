---
layout: talk
title: "Keynote: Is Kafka a Database?"
venue: Kafka Summit
place: San Francisco, CA, USA
venue_url: https://kafka-summit.org/speakers/martin-kleppmann/
slides_url: https://speakerdeck.com/ept/is-kafka-a-database
---

<script async class="speakerdeck-embed" data-id="b28e2b42bd8c4d17aec61c54aded7c45" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

Abstract
--------

Let's explore a contentious question: is Kafka a database? In some ways, yes: it writes everything
to disk, and it replicates data across several machines to ensure durability. In other ways, no: it
has no data model, no indexes, no way of querying data except by subscribing to the messages in
a topic.

But there's more to this question than meets the eye. In an organisation, data flows between
different systems managed by different teams, and Kafka is becoming a popular way of realizing such
data flows. In doing so, it allows us to ensure certain kinds of consistency across different
systems. And if you look deeply at the structure of these data flows, it becomes possible to do new
things that would have been very difficult to do otherwise.

Four years after his talk “[Turning the database inside-out](https://www.youtube.com/watch?v=fU9hR3kiOK0)”,
which has been watched 100,000 times, Martin delivers an update on the big ideas that connect
databases and streams.
