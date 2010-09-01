---
layout: ync-post
title: "Context-sensitive constructions in English"
---

Anybody who has read about basics of computational linguistics (i.e. the cross-over area between
language and computing) will have come across the (very useful) definition of a
[context-free grammar](http://en.wikipedia.org/wiki/Context-free_grammar). Many computer-readable
languages such as programming languages are designed to be context-free, since this makes them more
manageable for both the computers and the humans operating them.

There are also grammars which are
more powerful than context-free grammars, and which allow more complex statements; the next level of
complexity are context-sensitive grammars.

Ever since these mathematical definitions were made,
people have wondered how our human languages fit into this framework. There has been a lot of
discussion about this in the academic community, and currently the general opinion seems to be that
most human languages are more or less context-free, but there are a few exceptions, such as a
[context-sensitive construction in Swiss
German](http://books.google.com/books?id=JOjoWrP4tnIC&amp;pg=PA165&amp;lpg=PA165&amp;dq=swiss+german+context-free&amp;source=web&amp;ots=Dd9UlGjRYA&amp;sig=fwZ8R_ewKbFYuONyV6caulpHpRk&amp;hl=en&amp;sa=X&amp;oi=book_result&amp;resnum=1&amp;ct=result).

In
my work at the moment I am trying to help improve the accuracy of computer understanding of certain
statements in natural language. We get fragments of text off the web and want to automatically
extract structured information from it, which can then be used in other parts of the program.

And
in this context I have come across constructions in English which, annoyingly, cannot be defined
using context-free grammars. Two examples
are:

<blockquote>"The square roots of 16, 9 and 4 are 4, 3 and 2,
respectively."</blockquote>

<blockquote>"The wardrobe has dimensions of 230x120x50 cm
(HxWxD)."</blockquote>

In both cases, the problem is that there is a linear matching-up which needs
to occur: in the first example, 16 is matched with 4, 9 is matched with 3, and 4 is matched with 2.
In the second example, 230 is matched with H (height), 120 with W (width) and 50 with D
(depth).

I'm still in the process of figuring out how to best analyse this kind of sentence.
Because it's context-sensitive, a lot of the typical parsing libraries won't do it out of the box.
Which adds to the fun :)
