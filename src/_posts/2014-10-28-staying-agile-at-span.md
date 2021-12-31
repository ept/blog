---
layout: talk
title: "Staying agile in the face of the data deluge"
venue: "Span conference"
place: London, UK
venue_url: http://london-2014.spanconf.io/martin-kleppmann/
lanyrd_url: http://lanyrd.com/2014/spanconf/
video_url: https://www.youtube.com/watch?v=b_H4FFE3wP0
slides_url: https://speakerdeck.com/ept/staying-agile-in-the-face-of-the-data-deluge
---

<iframe width="550" height="315" src="//www.youtube.com/embed/b_H4FFE3wP0" frameborder="0" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/c3b3b35040e3013242cb36dddb3f194a" title="Staying agile in the face of the data deluge" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 314px;" data-ratio="1.78343949044586"></iframe>

As our applications need to process ever more data in ever shorter time, it's difficult to stay
sane. The architecture of our applications quickly becomes a monstrosity of different databases,
queues and servers held together by string and sellotape. That may work at first, but soon gets
ugly. If something goes wrong, it's hard to recover. If features of the application need to change,
it's hard to adapt.

Stream processing gives us a route towards building data systems that are scalable, robust, and easy
to adapt to changing requirements. In this talk, we will discuss how you can bring sanity to your
own application architecture with Apache Samza, an open source framework for distributed stream
processing applications.

Apache Samza is used in production at LinkedIn, building upon years of hard-won experience in
building large-scale data systems. Even if you're not processing millions of messages per second,
like LinkedIn is, you can still pick up useful tips on how to structure your data processing  for
scale and agility.
