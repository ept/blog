---
layout: ync-post
title: "Yes/No/Cancel causes Aspirin sales to soar"
---

Welcome to Yes/No/Cancel, the online usability magazine. This first article describes the origin of
the name, and explains why it is bad to use buttons labelled *Yes*, *No* and *Cancel* in computer
programs. I also discuss why user-friendliness in general is a very important topic.

This online
magazine (or blog if you will) is about user-friendliness, and lack thereof. It criticises bad
design and promotes good design. One might think that after usability research has been conducted
for many years and many books have been written on the topic, finally people would have learnt to
get it right. But no -- my impression is that many products are as bad as ever, and the reason why I
am writing this is to raise awareness of these problems.

But why should you care? As a user, you
should care because you have a choice -- you can stop using/buying the product that is not friendly
to use. You can switch to a better one, saving you frustration and annoyance. As a manufacturer, you
should care for much the same reason -- you are in a competitive environment, and if you don't
carefully consider the needs of your customers, you will see them leaving very soon!

Maybe you ask
how this website got its name. Yes/No/Cancel, that sounds like computers. Yes, and a lot of the
content here (but definitely not all) is going to be about computer software. Today, many pieces of
software are amongst the most complex pieces of engineering which the human mind has devised. It is
therefore not too surprising that some software packages are extremely difficult to use. But
software is also used by many people every day who don't want to know about this complexity. Is
difficulty of use really necessary? There are some examples of extremely complex systems which are
absolutely straightforward to interact with ([Google search](http://www.google.com) for example --
it's the work of a big team of the world's best software engineers over several years, and still
it's just a simple search box).

Making complicated systems easy to use is actually quite a
difficult problem. Part of the problem is that the engineers designing the system are often used to
a certain way of doing things, but this way is not always best adapted to a particular situation or
audience. The designers and developers of a system must therefore constantly be questioning their
habits, so that they can find better ways of solving problems if better ways exist.

One particular
bad habit of programmers annoys me so much that I decided to name this website after it.
[Johannes](http://www.jhauser.de/) suggested the name: **Yes/No/Cancel**. The choice you are so
often presented with in many computer applications, and so often you have to stop and think, because
it's not immediately clear what each of the choices is actually going to do. Which one of the
buttons will cause all your work to be lost if you press it? Which one will save it? And what does
*Cancel* mean anyway? Aaargh, it causes headaches.

<p>Let me explain this with a few examples. A
situation in which you frequently encounter a Yes/No/Cancel dialog box is when you are trying to
close a document without having saved it. Like
this:
<p style="text-align:
center"><img src="/static/2007/07/yesnocancel1-en.png" alt="Do you want to save the changes?
Yes/No/Cancel" /></p>
Nice of it to ask, you say -- you had completely forgotten to save. Ok. Now
compare it to this
one:
<p style="text-align:
center"><img src="/static/2007/07/yesnocancel2-en.png" alt="Do you really want to quit without
saving? Yes/No/Cancel" /></p>
Can you believe it? It's asking the opposite question! Now even if you
usually know by habit which button to press, suddenly you have to stop and think. And this box is
even worse, because it's not clear what the difference is between No and Cancel.</p>

<p>Fundamentally the
problem here is that we are actually asking two questions at the same
time:
<ol>
<li>Do you want to save the
document?</li>
<li>Do you want to quit the application?</li>
</ol>
The answer to each question might
be yes or no, which gives us four different possible
actions:
<ol>
<li>save changes and quit *(the "Yes" button in the first
example)
*</li>
<li>discard changes and quit *(the "No" button in the first
example)*</li>
<li>do nothing -- do not save and do not quit *(the "Cancel" button in the first
example)*</li>
<li>save changes but do not quit</li>
</ol>
The fourth option is generally perceived
to be silly, so there is no button for that purpose and we get a choice of three. In the first
example picture, these three correspond to Yes, No and Cancel respectively. What about the second
example? Clicking Yes will "discard changes and quit". Maybe clicking No will save changes and quit,
or maybe it will do nothing. Who knows what cancel will do, let alone the mystery of the red X in
the corner.</p>

Already with simple examples like this, you can begin to see that it's a bad idea to
label buttons as Yes, No and Cancel. The meaning of these words depends very much on the question.
In fact, if you have no previous computing experience, you will probably have no idea what to
answer. As a user, you just want to know which button is going to cause your work of the last 2
hours to be lost -- and neither of these examples makes it immediately clear which the "dangerous"
button is.

<p>Apple have tried to avoid this problem by not labelling the buttons Yes/No/Cancel, but
more
descriptively:
<p
align="center"><a href="/static/2007/07/yesnocancel3-en.png" title="Do you want to save changes to
this document before closing? Don’t
Save/Cancel/Save"><img src="/static/2007/07/yesnocancel3-en.png" alt="Do you want to save changes to
this document before closing? Don’t Save/Cancel/Save" /></a></p>
Using a verb (in this case
"save") is recommended in Apple's
[Human Interface
Guidelines](http://developer.apple.com/documentation/UserExperience/Conceptual/OSXHIGuidelines/).
Also note that the "dangerous" button (which discards changes and quits) is set apart from the two
"safe" buttons. This is clearly much better already, but the program is still trying to answer two
questions at the same time, which you may consider to be an unnecessary complication.</p>

I won't dwell
on any Microsoft vs. Apple discussion though, because what I am saying applies not just to these two
companies, but also to every other organisation or person who writes software. And there are some
terrible occurrences of Yes/No/Cancel in the world for which neither Microsoft nor Apple carries any
blame.

<p>One terrible thing which you see sometimes is an implicit relabelling of the buttons. Here
the programmer clearly couldn't be bothered to make his own buttons, and instead placed the burden
on the
user:
<p style="text-align:
center"><img src="/static/2007/07/yesnocancel4-en.png" alt="The connection failed. Click Yes to try
again, No to ignore the error, or Cancel to quit the application." /></p>
You really need to switch
on your brain to decide which button to press. And by phrasing the question badly, it can get even
worse:
<p style="text-align:
center"><img src="/static/2007/07/yesnocancel5-en.png" alt="It is not recommended that you continue
without overwriting this file…" /></p>
At this point, I very much hope that you will have run out
of the room screaming. And maybe returned to read the rest of this article. (With a headache.)</p>

<p>You
might think that the last example was very contrived, but the point I wanted to make was about
negative questions. Why ask whether not to do something (the negative) if you can simply ask whether
to do something (the positive)? I find this occurring particularly frequently with respect to
checkboxes:
<p style="text-align:
center"><img src="/static/2007/07/yesnocancel6-en.png" alt="Disable nuclear missiles?" /></p>
It is
counterintuitive to put a tick in a box for something you don't want. Just don't ask negative
questions. But that's a story for another day.</p>

A few final
remarks:
<ul>
<li>This website is not related to the
[web comic OK/Cancel](http://www.ok-cancel.com/) although we're talking similar subject
matter.</li>
<li>[Windows Vista allows button
relabelling](http://blogs.msdn.com/oldnewthing/archive/2006/09/11/749489.aspx) (article and
discussion by Raymond
Chen).</li>
<li>[This article shows that Vista doesn't actually use this
relabelling](http://www.user-interface.org/2005/12/23/dialog-boxes/), and contrasts different human
interface
guidelines.</li>
<li>You might have noticed that the implicit relabelling example above is actually
a case of Abort/Retry/Ignore. I first considered making that the name for this site, but fortunately
Abort/Retry/Ignore is largely extinct by now (lucky you if you don't know what I'm talking about).
There is
[an excellent poem about Abort/Retry/Ignore](http://www.annoyances.org/exec/show/article09-122)
though, inspired by E.A.Poe.</li>
</ul>
