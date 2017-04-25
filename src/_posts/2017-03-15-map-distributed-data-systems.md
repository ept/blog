---
layout: ync-post
title: Drawing a map of distributed data systems
---

**How we created an illustrated guide to help you find your way through the data landscape.**

[*Designing Data-Intensive Applications*](http://dataintensive.net/), the book I’ve been working on
for four years, is finally finished, and should be available in your favorite bookstore in the next
week or two. An incomplete beta (Early Release) edition has been available for the last 2½ years as
I continued working on the final chapters.

Throughout that process, we have been quietly working on a surprise. Something that has not been
part of any of the Early Releases of the book. In fact, something that I have never seen in any tech
book. And today we are excited to share it with you.

In *Designing Data-Intensive Applications*, each of the 12 chapters is accompanied by a map. The map
is a kind of graphical table of contents of the chapter, showing how some of the main ideas in the
chapter relate to each other.

Here is an example, from Chapter 3 (on storage engines):

<a href="https://d3ansictanv2wj.cloudfront.net/ch03-map_lg-12f05f19df9e49098d509847518f1c03.jpg"><img src="/2017/03/ch3-map.jpg"
width="550" height="419" alt="Chapter 3 map illustration from Designing Data-Intensive Applications"></a><br>
<small>Figure 1. Map illustration from <em>Designing Data-Intensive Applications</em>, O’Reilly Media, 2017.</small>

Don’t take it too seriously—some of it is a little tongue-in-cheek, we have taken some artistic
license, and the things included on the map are not exhaustive.

But it does reflect the structure of the chapter: political or geographic regions represent ways of
doing something, and cities represent particular implementations of those approaches. Similar things
are more likely to be close together, and roads or rivers represent concepts that connect different
implementations or regions.

Most computing books describe one particular piece of software and discuss all the aspects of how it
works. This book is structured differently: it starts with the concepts—discussing the high-level
approaches of how you might solve some problem, and comparing the pros and cons of each—and then
points out which pieces of software use which approach. The maps use the same structure: the region
in which a city is located tells you what approach it uses.

For example, in the map above, you can see a high-level subdivision into two countries: transaction
processing and analytics. Within transaction processing, there are two regions: log-structured
storage and B-trees, which are two ways of implementing OLTP storage engines. Within the B-tree
region, you see databases like MySQL and PostgreSQL<sup><a href="#_ftn1">[1]</a></sup>, while within
the log-structured region you see databases like Cassandra and HBase. On the analytics side, you can
see that the mountain range representing column storage reaches into both the data warehousing and
the Hadoop regions, since the approach applies to both.

The maps are in black and white, both because of practicalities of printing and also because I was
looking for a
[Tolkien-esque style](http://www.tolkien.co.uk/file/IfbTdA8/5d04a105-e66b-4d9b-b218-928c691eb83d.jpg).
You are, of course, welcome to color them in yourself. In fact, by coloring them in, you would be
following a fine tradition: for over three centuries, maps were printed in black and white from an
[engraved copper plate](http://www.maphistory.info/understanding.html), and then colored in by hand.

Each of the chapters has a map like that, focusing on the particular aspects discussed in that
chapter. This means that some cities appear on multiple islands—the data landscape is
multidimensional, so a city may lie in more than one (conceptual) realm. For example, the map below
is for Chapter 5 (on the topic of replication):

<a href="https://d3ansictanv2wj.cloudfront.net/ch05-map_lg-32ac8f29402e391034f664a63461eef5.jpg"><img src="/2017/03/ch5-map.jpg"
width="550" height="550" alt="Chapter 5 map illustration from Designing Data-Intensive Applications"></a><br>
<small>Figure 2. Map illustration from <em>Designing Data-Intensive Applications</em>, O’Reilly Media, 2017.</small>

Cities representing Cassandra, MongoDB, MySQL, and others appear on both this map, the Chapter 3 map
above, and some other maps, too.

Shipping routes connect some of the ports shown in the maps, in cases where there is a noteworthy
link between chapters. Most of the maps are of islands, but there are some exceptions. (I won’t give
away too much, but I just want to say...beware of the
[Kraken](https://en.wikipedia.org/wiki/Kraken).)

I am incredibly delighted that O’Reilly was willing to take on this crazy idea of creating maps. It
took a whole team to make them happen: from my
[rough pencil sketches](https://www.dropbox.com/s/yvuj7rqg66i93os/chapter3-map.jpg?dl=0) (which
showed the structure but had absolutely zero artistic value),
[Shabbir Diwan](http://shabbirdiwan.com/category/technique/scratch-board/),
[Edie Freedman](http://www.ediefreedman.com/), and [Ron Bilodeau](http://www.oreilly.com/pub/au/3771)
created the beautifully illustrated versions you see above, and
[Marie Beaugureau](https://twitter.com/cmariebeau) patiently managed several rounds of revisions, in
which we painstakingly polished all the details.

Perhaps you’re curious to know how we got onto the idea of creating maps. Early on in the Early
Release of the book, some readers told me they would love some kind of flowchart to help them decide
quickly which database they should use for their application. Such flowcharts
[have been attempted](https://medium.baqend.com/nosql-databases-a-survey-and-decision-guidance-ea7823a822d),
but I never liked them much—it is tempting to read them out of context and jump to conclusions too
quickly, and they have to simplify the issues to the point of almost being intellectually dishonest.

My goal for *Designing Data-Intensive Applications* was different. I can’t in good faith give you
a recommendation for one particular tool because I don’t know enough about your particular
requirements. However, I can teach you what questions to ask and how to evaluate vendors’ claims
critically. That requires more subtlety and detail than can be expressed in a one-page flowchart,
which is why the book is 600 pages long, not one page.

However, I did think that some kind of graphical representation of the main ideas and structure
would be useful. I thought about [Venn diagrams](https://en.wikipedia.org/wiki/Venn_diagram), but
they’re excruciatingly boring. I thought about [mind maps](https://en.wikipedia.org/wiki/Mind_map),
and then started taking the “maps” bit more literally. I thought about the
[Atlas of Experience](https://www.goodreads.com/book/show/1175738.The_Atlas_of_Experience) by Louise
van Swaaij and Jean Klare, a sublime book that represents aspects of human life as fictitious
[places on a geographic map](http://www.imaginaryatlas.com/wp-content/uploads/2013/04/worldof-experience.jpg).
(It is [originally in Dutch](http://www.deharmonie.nl/titel/grote-atlas-van-de-belevingswereld/);
the English translation is, sadly, out of print.)
[The Phantom Tollbooth](https://www.goodreads.com/book/show/378.The_Phantom_Tollbooth) by Norton
Juster and Jules Feiffer does
[a similar thing](http://bowenpeters.weebly.com/uploads/8/1/1/9/8119969/phantom_tollbooth_map.jpg).

Closer to technology, similar map-style visualizations have been used to
[represent online communities](https://xkcd.com/802/), to visualize the
[history of relational databases](https://hpi.de/naumann/projects/rdbms-genealogy.html) and
[programming languages](http://www.oreilly.com/go/languageposter), and to
[explain libraries related to Facebook’s React](https://twitter.com/linclark/status/708071521286266881).
I simply love the style.

Other inspirations for me are the ornate maps produced in the medieval and renaissance periods,
especially when it comes to whimsical
[sea monsters](https://www.bl.uk/shop/sea-monsters-on-medieval-and-renaissance-maps/p-284).
For example, around 1590, Abraham Ortelius published a
[wonderful map of Iceland](https://commons.wikimedia.org/wiki/File:Abraham_Ortelius-Islandia-ca_1590.jpg),
with [Mount Hekla](https://en.wikipedia.org/wiki/Hekla) spewing fire, and surrounded by fantastical
sea monsters:

<a href="/2017/03/ortelius-iceland.jpg"><img src="/2017/03/ortelius-iceland.jpg" width="550" height="410"
alt="“Islandia” map by Abraham Ortelius, ca. 1590."></a><br>
<small>Figure 3. “Islandia” map by Abraham Ortelius, ca. 1590. Source:
<a href="https://commons.wikimedia.org/wiki/File:Abraham_Ortelius-Islandia-ca_1590.jpg">Wikimedia Commons</a></small>

I feel those maps and sea monsters reflect the 16th-century sense of excitement to explore the earth
and discover new places, as well as the dangers of sailing across unknown seas. And perhaps a bit of
that excitement exists today in our exploration of technologies for storing, processing, and using
data. There seems to be a lot of potential, but we also don’t really know what we’re doing, and it’s
sometimes a bit dangerous (raise your hand if you’ve lost data at some point because something went
wrong).

We hope the maps in *Designing Data-Intensive Applications* will help convey some of that
excitement, and also make you smile. In both the print and ebook editions, the map for each chapter
appears at the start of each chapter.

What’s more, we have taken all the individual chapter maps and assembled them into a poster—an
archipelago of islands representing technologies in the sea of distributed data. The poster also
includes some bonus sea monsters (of course).

If you are at
[Strata + Hadoop World, San Jose](https://conferences.oreilly.com/strata/strata-ca)
this week, you can drop by the O’Reilly booth to pick up a free print of the poster so you have
something geeky and cool to hang on the wall in your office. Alternatively,
[you can download a JPG version for free from the O’Reilly website](https://d3ansictanv2wj.cloudfront.net/ddia-poster-web-89b1c62f6eb4b57336c6cbe2148cc9a9.jpg)
for your personal, noncommercial use.

We hope you enjoy *Designing Data-Intensive Applications* and the maps as much as we enjoyed making them!

<a href="/2017/03/ddia-poster.jpg"><img src="/2017/03/ddia-poster.jpg" width="550" height="733"
alt="Me holding the poster with the maps"></a><br>
<small>Figure 4. Me holding the poster with the maps.</small>

<p id="_ftn1">
[1] Footnote for the <a href="http://tirania.org/blog/archive/2011/Feb-17.html">well-actually</a>
crowd: yes, I know about hash indexes and GiST in PostgreSQL, various other index types in other
databases, and the fact that in MySQL the index type is actually a matter of the storage engine
(such as InnoDB), but those details are beside the point here. I am highlighting a dichotomy between
a page-oriented update-in-place approach and a log-structured, compaction-based approach. This
distinction is best explained with concrete examples, and the graphical representation cannot
capture all the subtleties that are discussed in the text of the book.
</p>
