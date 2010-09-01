---
layout: ync-post
title: "Comparing floating-point and decimal in Python"
---

Bizarre happenings in the world of Python. It seems that you are really not supposed to compare
floating-point and decimal numbers, as this example
shows:

<code>Python 2.5.1 (r251:54863, Jan 17 2008, 19:35:17)
\[GCC 4.0.1 (Apple Inc. build 5465)\]
on darwin
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt; from
decimal import Decimal
&gt;&gt;&gt; Decimal('1.0') &gt; 2.0
False
&gt;&gt;&gt; Decimal('3.0') &gt;
2.0
False
&gt;&gt;&gt; Decimal('1.0') &lt; 2.0
True
&gt;&gt;&gt; Decimal('3.0') &lt;
2.0
True
&gt;&gt;&gt; 2.0 &lt; Decimal('1.0')
False
&gt;&gt;&gt; 2.0 &lt;
Decimal('3.0')
False
&gt;&gt;&gt; 2.0 &gt; Decimal('1.0')
True
&gt;&gt;&gt; 2.0 &gt;
Decimal('3.0')
True
</code>

But that's not the end yet. I have
[NLTK](http://nltk.sourceforge.net/) 0.9.4 installed, and watch how truth is reversed if I simply
import the NLTK
package:

<code>&gt;&gt;&gt; import nltk
&gt;&gt;&gt; Decimal('1.0') &gt; 2.0
True
&gt;&gt;&gt;
Decimal('3.0') &gt; 2.0
True
&gt;&gt;&gt; Decimal('1.0') &lt; 2.0
False
&gt;&gt;&gt; Decimal('3.0')
&lt; 2.0
False
&gt;&gt;&gt; 2.0 &lt; Decimal('1.0')
True
&gt;&gt;&gt; 2.0 &lt;
Decimal('3.0')
True
&gt;&gt;&gt; 2.0 &gt; Decimal('1.0')
False
&gt;&gt;&gt; 2.0 &gt;
Decimal('3.0')
False
</code>

I'm filing bugs about this, but I do find this quite entertaining in a
'oh-my-God-I-always-believed-Python-was-a-well-behaved-language' sort of way.

<p>**Edit:** Edward
Loper from NLTK gave
[an
explanation](https://sourceforge.net/tracker/?func=detail&amp;atid=400896&amp;aid=2089412&amp;group_id=30982)
why this is the case -- it's not because of NLTK, but because of Python's internal handling of the
comparison operator on floating-point
numbers:
<blockquote>Apparently, you're only allowed to use comparison operators to compare
<code>Decimal</code> objects to (i) other
<code>Decimal</code> objects; (ii) integers; (iii) longs. Here, you're comparing it to a
<code>float</code>, which isn't allowed, as evidenced by the
following:</p>

<code>&gt;&gt;&gt; Decimal('.1').__cmp__(1)
-1
&gt;&gt;&gt;
Decimal('.1').__cmp__(.3)
NotImplemented
</code>

<p>Since Decimal's
<code>__cmp__</code> method returns
<code>NotImplemented</code>, python falls back on using
<code>.3</code>'s
<code>__cmp__</code> method.  Unfortunately, when you compare a
<code>float</code> to some random object, the results are pretty much arbitrary, and are not
guaranteed to be consistent. \[...\]</p>

nltk's not really playing much of a role here (other than
tweaking the system to change that arbitrary result -- my guess would be that the result depends on
the pointer address of the
<code>Decimal</code> class, or of some other object like that).</blockquote>

Crazy stuff.
