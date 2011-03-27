---
layout: ync-post
title: "The Python Paradox is now the Scala Paradox"
hackernews:
- http://news.ycombinator.com/item?id=831817
- http://news.ycombinator.com/item?id=2218654
---

[Paul Graham](http://www.paulgraham.com/) has written a bunch of good essays on entrepreneurship,
laying down much of the philosophy behind
[Y Combinator](http://ycombinator.com/). If you've not read any of them yet, you should go and read
them now -- they contain lots of wisdom.

In his 2004 short essay
[The Python Paradox](http://www.paulgraham.com/pypar.html), PG argues (perhaps controversially) that
a company can hire smarter programmers if it chooses to write its code in a "comparatively esoteric"
programming language. At the time, Python was probably considered by most people to be esoteric in
comparison to Java -- in the sense that not many people would learn it at university or for career
purposes. Therefore, the programmers who knew Python were people who learnt it for fun; and learning
languages for fun is an activity which typically only the bright and motivated people engage in.
Which makes the language a good "quality filter" for people.

Of course times have moved on, and
Python (and Ruby, for that matter) are definitely entering the mainstream. They are still fine
languages, but they no longer carry as much of an early adopter aura about them. The culture of
testing and code beauty which is embraced by the Ruby and Python communities is still something
special, and that is now the primary reason why I would choose Ruby and Python over Java or C#.

PG's observation still holds true. But what are the new technologies to look out for? What can
you find in 2009 which has the same role as Python did in 2004?


**Choosing a programming language**

A few months ago, when I was designing the system architecture for
[Go Test It, our awesome cross-browser testing product](http://go-test.it), I had a lot of design
choices to make. For some parts of the system it was fairly clear what we were going to use: for
instance, the frontend web application was almost certainly going to be Rails, because I had some
existing tools like
[the invoicing gem](http://ept.github.com/invoicing/) which I wanted to reuse, and because it was
simply a good fit for the job.

But what about the actual test management infrastructure?

I chose to write it in [Scala](http://www.scala-lang.org/). There were plenty of reasons why this
could have seemed a bad idea:

* I had hardly any experience in using Scala, so I would have to invest a lot of time
  learning it as I went along;
* nobody else I knew had any experience in using Scala *at all*, so anyone I hired
  would probably also have to learn it (at the cost of slower progress);
* some of the tools (particularly the Eclipse plugin) were still packed with bugs;
* although I had access to Java libraries, I knew that I would have to write library
  wrappers of my own to make use of the Scala language features;
* setting up a proper build process was
  [pretty horrible](/2009/05/13/building-go-test-it-fun-with-scala-and-rest-apis.html).

Scala also had some technical merits; particularly the actor model for multithreaded programming was a
good fit for our problem. Still, in a purely technical consideration, it probably wouldn't have made
much sense. But my heart still said yes. The prospect of working with a language which looked
pretty, had static type inference, nice functional programming features, and runs on the JVM
(battle-tested and optimised over many years)... my heart just said yes. It wasn't a rational
choice, but an instinctive, emotional one.


**Paul Graham was right**

Shortly after working this
out and drawing my architecture diagram (a pretty insane-looking tangle of boxes and arrows on a
sheet of paper), I was talking to
[Sam Stokes](http://samstokes.co.uk/), a freelance developer sitting next to me in our shared
office. Sam is bright, motivated and interested in the things going on in the software world. We
were talking casually about Go Test It and I showed him my messy diagram.

And when I had talked him through the architecture ("I think I'll write these three components in
Scala, and they will talk to each other via a
[RabbitMQ message queue](http://www.rabbitmq.com/)"), Sam said, in effect, "Hey, this is cool, I
want to work on this".

And he did. Over the course of a few weekends, Sam spent several days
learning Scala and contributing to the
[Go Test It](http://go-test.it) codebase. When you use Go Test It today, you are using the Scala
code he wrote. He did this simply because he found it interesting and wanted to learn something new.
The code he wrote was good, production-quality stuff. And he didn't want a penny for it.

It's not often that you get high-quality contributions to a closed-source project from a developer
who is busy enough with several other projects already, for free.

Of course Sam cannot live on technical
stimulation and my gratitude alone, and since then, we have actually contracted him to do paid work
on Go Test It. But I found his initial reaction, and his approach to the project, a great example to
prove Paul Graham's point.

I would say **Scala in 2009 has the place which Python had in 2004**.
There are a few other languages I would also consider for this title:
[Haskell](http://www.haskell.org/),
[Erlang](http://erlang.org/) and
[Clojure](http://clojure.org/) come to mind (but don't take that as a recommendation -- I've not yet
used any of them seriously myself). What these languages all have in common is that they've been
around for long enough to come out of the purely academic space, are stable enough to be
production-worthy, but are also new and exciting enough to attract good
developers.


**Fashion-Driven Development?**

In [an article about non-relational databases](http://carsonified.com/blog/dev/should-you-go-beyond-relational-databases/)
which [Ryan Carson](http://twitter.com/ryancarson) asked me to write a few months ago, I suggested that
fashion can and should play a role in choosing which technologies to use. I got some criticism for
this remark, but I still stand by my view. It is effectively a different way of looking at PG's
statement, provided you look for the fashion in the right circles (i.e. amongst experienced
developers working at the cutting edge).

I wouldn't go with fashion against all technical merit,
but provided the technology is suitable and won't increase your costs disproportionately, why not do
something fashionable and adventurous? In an innovation-based technology business, the quality of
your developers is key. Investments into things which make your good developers happy will pay off
handsomely.
