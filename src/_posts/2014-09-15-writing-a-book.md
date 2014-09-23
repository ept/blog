---
layout: ync-post
title: Hey, I'm writing a book!
---

About two years ago I wrote a blog post called
["Rethinking caching in web apps"](/2012/10/01/rethinking-caching-in-web-apps.html).
At almost 4,000 words, it was a lot longer than the
[received wisdom](http://blog.bufferapp.com/the-ideal-length-of-everything-online-according-to-science)
says a blog post should be. Nevertheless I had the feeling that I was only scratching
the surface of what needed to be said.

That got me thinking whether I should try writing something longer, like a book perhaps.
I love writing because it forces me to research something in depth, think it through,
and then try to explain it in a logical way. That helps me understand it much better
than if I just casually read about it. Or, put more eloquently:

> "Writing is nature's way of letting you know how sloppy your thinking is."
> -- Dick Guindon


Existing books
--------------

I am writing because the book I wanted to read didn't exist. I wanted a book that
would explain data systems to me -- the whole area of databases, distributed systems,
batch and stream processing, consistency, caching and indexing -- at the right level.
But I found that almost all the existing books, blog posts etc. fell into one of the
following categories:

1. Most computing books are hands-on guides to one particular technology. They assume that
   you've been told to use database X or programming language Y, and so they teach you
   how to use it. Those books are fine, but they are of little use if you're trying to
   decide whether X or Y is the right tool for you in the first place. These books tend to
   focus on the strong points of that particular technology, and fail to mention its
   shortcomings.
2. It's common to see blog posts with side-by-side comparisons of several similar
   technologies, but I find they tend to just focus on superficial aspects (performance
   benchmarks, API, software license) while completely missing the fundamental workings
   of the technology. They are like Top Trumps for databases, and don't actually help you
   understand anything any better.
3. By contrast, academic textbooks cover the fundamental principles and trade-offs that
   are common to many different technologies, but in doing so, they often lose all
   contact with reality. These books are generally written by academics with deep research
   experience in their field, but little awareness of the practicalities of real
   production systems. They often end up saying things which are technically correct,
   but useless or misleading if you want to actually build a real system.

I wanted something in between all of these. A book which would tell a story of the big ideas in
data systems, the fundamental principles which don't change from one software version to
another. But the book would also stay grounded in reality, explaining what works in practice
and what doesn't, and *why*. The book would examine the tools and systems that we already
use in production, compare their fundamental approaches, and help you figure out which
technology is appropriate to which use case.

I wanted to understand not just how to *use* a particular system, but also how it *works under
the hood*. That is partly out of intellectual curiosity, but equally importantly, because it
allows me to imagine what the system is doing. If some kind of unexpected behaviour occurs, or
if I want to push the limits of what a technology can do, it is tremendously useful to have
at least a rough idea of what is happening internally.

As I spoke to various people about these ideas, including some folks at O'Reilly, it became
clear that I wasn't the only one who wanted a book like this. And so,
[Designing Data-Intensive Applications](http://dataintensive.net/) was born.
And you'll know it when you see it, because it has an awesome Indian Wild Boar on the cover.

<p style="text-align: center"><a href="http://dataintensive.net"
  title="Designing Data-Intensive Applications (the wild boar book)"><img src="/2014/09/book-cover.png"
  alt="Designing Data-Intensive Applications (the wild boar book)" width="250" height="328"></a>
</p>

*Designing Data-Intensive Applications* (sorry about the verbose title -- you can just call it
"the wild boar book") has been in the works for some time, and today we're announcing the
[early release](http://shop.oreilly.com/product/0636920032175.do). The first four chapters
are now available -- ten or eleven are planned in total, so there's still long way to go.
But I left my job to work on this book full-time, so it's definitely happening.


Who should read this?
---------------------

If you're a software engineer working on server-side applications (a web application backend,
for instance), then this book is for you. It assumes that you already know how to build an
application and use a database, and that you want to "level up" in your craft. Perhaps you
want to work on highly scalable systems with millions of users, perhaps you want to deal with
particularly complex or ever-changing data, or perhaps you want to make an old legacy
environment more agile.

This book starts at the foundations, and gradually builds up a picture of modern data systems
layer by layer, one chapter at a time. I'm not trying to sell you any particular architecture
or approach, because I firmly believe that different use cases require different solutions.
Therefore, each chapter contains a broad overview and comparison of the different approaches
that have been successful in different circumstances.

It doesn't matter what your preferred programming language or framework is -- this book is
agnostic. It's about architecture and algorithms, about fundamental principles and practical
constraints, about the reasoning behind every design decision.

None of the ideas in this book are really new, and indeed many ideas are decades old.
Everything has already been said somewhere, in conference presentations, research papers,
blog posts, code, bug trackers, and engineering folklore. However, to my knowledge the ideas
haven't previously been collected, compared and evaluated like this.

I hope that by understanding what our options are, and the pros and cons of each approach,
we'll all become better engineers. By making conscious trade-offs and choosing our tools
wisely, we will build systems that are more reliable and much easier to maintain in the long
run. It's a quest to help us engineers be better at our jobs, and build better software.


Let's make software development better
--------------------------------------

Please join me on this quest by reading the draft of the book, and sending us your feedback:

* The book's website is [dataintensive.net](http://dataintensive.net/).
* You can buy the early release ebook from
  [O'Reilly](http://shop.oreilly.com/product/0636920032175.do), or if you're a Safari Books
  subscriber, you can [read it online](http://my.safaribooksonline.com/9781491903063).
* If you can think of any way the book could be improved, please email your thoughts to
  [feedback@dataintensive.net](mailto:feedback@dataintensive.net) or tweet us
  [@intensivedata](https://twitter.com/intensivedata). Now is the time to be involved.
* ...and if you like the sound of this, don't forget to tell your friends and colleagues
  about it!
