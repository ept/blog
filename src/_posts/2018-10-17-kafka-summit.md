---
layout: talk
title: "Keynote: Is Kafka a Database?"
venue: Kafka Summit
place: San Francisco, CA, USA
venue_url: https://kafka-summit.org/speakers/martin-kleppmann/
slides_url: https://speakerdeck.com/ept/is-kafka-a-database
video_url: https://www.youtube.com/watch?v=v2RJQELoM6Y
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/v2RJQELoM6Y?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/b28e2b42bd8c4d17aec61c54aded7c45" title="Is Kafka a database?" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 314px;" data-ratio="1.78343949044586"></iframe>


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
