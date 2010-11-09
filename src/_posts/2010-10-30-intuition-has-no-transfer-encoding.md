---
layout: ync-post
title: "Intuition has no transfer encoding"
---

**Intuition is really annoying sometimes.**

Actually, I love intuition, because almost all my thinking is based on it. I don’t think I
am very good at analysing and thinking things through logically. Often I just have a feeling
about how something should be, and then sometimes I post-rationalise it.

Not everybody’s mind works this way; if yours works like this too, you will think this is
completely obvious. If not, you probably know people of this type, who can just assert “I
think we should do it this way” and turn out to be right in maybe 75% of cases. Intuition is
never perfect, but I love it, because it often gives a “good enough” answer very quickly, or
at least provides some pointers towards places where it would be worth spending a bit more
time analysing.

The thing that I find so annoying about intuition is that it is **very hard to communicate**.
Let me explain.

Intuition is built from a large number of experiences: you grow up, you go through life, you
meet people, you go to places, you read stuff, you make up stuff. There is no chance you can
remember all the things you ever experience in factual detail, because that would be an
overwhelmingly huge amount of information. But those things are nevertheless not forgotten:
each experience leaves a trace, a tiny shadow of memory, so your thinking afterwards is ever
so slightly different from the way it was before.

Over the course of years, those tiny traces are aggregated, and what you get out at the end
is an intuitive understanding of how the world works (or rather, how those parts of the
world which you have experienced work). Think of it like very light crayon touches, in the
hands of an artist, gradually forming to be a beautiful picture — except that the picture is
never complete, and always evolving.

<object width="508" height="311">
    <param name="movie" value="http://www.youtube.com/v/5OLP4nbAVA4?fs=1&amp;hl=en_US"></param>
    <param name="allowFullScreen" value="true"></param>
    <param name="allowscriptaccess" value="always"></param>
    <embed src="http://www.youtube.com/v/5OLP4nbAVA4?fs=1&amp;hl=en_US"
        type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"
        width="508" height="311"></embed>
</object>

With that intuition, when you encounter a new situation, it doesn’t matter that you haven’t
encountered the exact same situation before: your brain does an approximate matching of the
new situation with your mental model of the world, and immediately predicts the right
answer. It doesn’t even need to search through memories, because the picture of the world in
your head is already the fully aggregated sum of your experiences.

(As a second step, you will typically compare your gut reaction to specific memories, to
check whether the results agree. But that’s another topic.)


**A tale of bitmaps and vector graphics**

The way I imagine the brain stores intuition is a bit like a huge bitmap image, with lots
and lots of pixels \[1\]. When a new piece of information
comes in, the brain’s massively parallel processing structure takes the new information,
combines it with the existing image, correlates, interpolates, extrapolates, and produces an
answer in an instant.

But what if you want to teach your intuition to someone else? You can’t tell that person all
the things you ever experienced in your life, because that would be far too much, and you’ve
forgotten and assimilated most of those memories anyway. But that mental bitmap is also a
terrible transfer format: our mouths and hands are extremely slow communication channels,
making it impossible to get the bitmap out of your brain. Imagine reading out the individual
pixel values of a bitmap image over the phone. It would take hours before the other person
had even the vaguest, blurriest idea of the outlines of the image. And it would take years
to fill in the detail.

So... if you want to transfer that bitmap out of your brain and into someone else’s, even
approximately, you have to turn that bitmap into a vector graphic.

In vector graphics, if you choose your points and curves carefully, you can communicate the
general structure of a picture very succinctly. You can enable the other person to very
quickly get a rough idea of your thinking. Of course it won’t have all the colourful detail
until you add lots more information, but that’s ok. And once you have analysed your picture
into a vector form, you have actually gained a better understanding of what it is really
about, you can zoom in to see a higher resolution, and you may be able to spot patterns that
you weren’t previously aware of.

Of course, the problem: turning bitmaps into vector graphics is hard. Computer Vision
researchers are always thinking about better algorithms for doing it.

And to return from our image analogy to the topic of intuition: expressing intuitive
knowledge in a structured form is really hard.


**Vectorising intuition**

As a child, when you learn your first language by imitating sounds and by being continually
corrected by your parents, you are building an intuition for the way that language works.
You start off with *ga ga ga*, and it takes years before you can speak a coherent
sentence; later, as time goes on and you grow up, you get quite good at it. Because your
brain stores a pre-rendered representation of the language, you can speak and understand it
easily and quickly.

When an adult learns a foreign language, by contrast, the usual way of learning it is by
studying grammar, vocabulary and carefully chosen texts. The rules of grammar and the
structure of the syllabus are a kind of vector representation of the language, optimised for
giving the learner a rough overview of the language structure and helping them construct
useful sentences as quickly as possible.

It is perfectly possible for an adult to go to a foreign country with no prior knowledge of
the language, and to learn to speak it without formal grammar or syllabus, in the same way
as a child does. However, most adults prefer to learn a language in a systematic manner,
presumably because learning in “vectorised” form allows you to be much faster in getting to
the stage where you can have an interesting conversation.

No matter which way you learn the basics, it always takes years to reach native proficiency
in a language; that is unavoidable, because in the end you can’t get around learning a huge
amount of subtle details and building your own intuition. (Even if represented in vector
form, complicated curves and shadings require a large number of points.) The difference is
in the time it takes to grok the core concepts.

**But here comes the important bit.** When it comes to learning languages, most
languages have benefitted from decades (if not centuries) of research and systematisation
efforts by many intelligent people. For most languages, grammar and learning techniques are
very well understood. But what if you want to communicate some intuition that **only you**
have? Well, you have to do the vectorising yourself.

When you have built an intuition in a specific area that is not well-known — say, with
regard to some arcane or new technology, or with regard to your company’s business strategy
— then there is no existing grammar you can refer to. You are like a linguist,
[going into the Amazonian Jungle](http://en.wikipedia.org/wiki/Daniel_Everett) to
document mysterious languages not yet known to the outside world. You have to observe the
systematic parts and the exceptions, and formulate the grammar yourself.

Turning your intuitive bitmap into a vector form that you can communicate... is hard. Very
hard. But you need to figure it out.


**Why is this important?**

Well, there’s only so far that a single person’s intuition can reach. If you want to build
great things and change the world, you need much more than a single person’s brain can hold.
You need both depth and breadth: fine-grained intuition in specific technical fields
requiring expertise, and also a greater variety of perspectives than a single person can
have experienced.

You need to combine the intuitions of several people, i.e. you have to form a team. And in
order to combine your intuitions, you need to communicate and explain them. Why? Because
otherwise you have no way of resolving differences, and no way of learning from each other
and improving.

By default, intuition comes without a reason attached: you ‘simply know’ that the answer is
X, but you don’t know why. The problem arises when your colleague ‘simply knows’ that the
answer is Y, where X≠Y, and doesn’t know a reason either. (Maybe X and Y are not completely
contradictory, but rather partially overlapping ideas or differences in emphasis. Different
nevertheless.) At that point either one has to overrule the other (which would defeat the
goal of forming a team in the first place), or you have to rationalise the intuition,
untangle the pre-aggregated reasoning, and communicate it in terms which the other person
can understand.

What if you could understand the structure of both X and Y, and the reasoning behind it, and
thus manage to synthesise the two? That is a lot of effort, but I am increasingly thinking
that figuring out how to communicate your intuition is one of the most valuable things you
can do in a team. For if you can combine your mental image of the world with other people’s,
you can build something much greater than each of you. Your thoughts can be superhuman, in
some sense. And that, if you can figure it out, is a huge advantage you can have.

A startup is a really interesting environment to try this kind of thing, because you can be
as choosy as you want about the people you work with. You can pick like-minded people, and
together work towards that shared intuition. You can build a good, well-founded, shared
intuition of who your customers are and what they want. And if you can attain that shared
intuition, you're well underway to success.


**Footnote:**

\[1\] I'm not sure what each individual pixel
represents. In mathematical terms, a picture is a function mapping from 2D space to colour,
and a bitmap approximates this function by sampling at regularly spaced values of the input.
Along that line of thinking, the mind is probably a function mapping from sensory inputs and
memories to explanations and actions (or something along those lines — I'm not a
neuroscientist). This function can be represented as lots of individual data points
("London &amp; lunchtime &amp; hunger &amp; last had Falafel 10 days ago → go to
the King of Falafel"), which is bitmap-like, or in some systematic manner ("I
like to eat falafel for lunch. For example, in London, the King of Falafel is good."),
which is vector-like, omitting redundant information (lunchtime and hunger are strongly
correlated, so mentioning both is fairly redundant) and emphasising structure or
dependencies (the King of Falafel only exists in London). However, as you can see, his only
vaguely makes sense. The bitmap/vector analogy is itself an example of a piece of intuition
that I'm trying to communicate to you right now.
