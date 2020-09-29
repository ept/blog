---
layout: ync-post
title: Java's hashCode is not safe for distributed systems
hackernews: http://news.ycombinator.com/item?id=4127664
disqus: true
---

As you probably know, hash functions serve many different purposes:

1. Network and storage systems use them (in the guise of checksums) to detect accidental
   corruption of data.
2. Crypographic systems use them to detect malicious corruption of data and to implement signatures.
3. Password authentication systems use them to make it harder to extract plaintext passwords from
   a database.
4. Programming languages use them for hash maps, to determine in which hash bucket a key is placed.
5. Distributed systems use them to determine which worker in a cluster should handle a part of a
   large job.

All those purposes have different requirements, and different hash functions exist for the various
purposes. For example, [CRC32](http://en.wikipedia.org/wiki/Cyclic_redundancy_check) is fine for
detecting bit corruption in Ethernet, as it's really fast and easy to implement in hardware, but
it's useless for cryptographic purposes. [SHA-1](http://tools.ietf.org/html/rfc3174) is fine for
protecting the integrity of a message against attackers, as it's cryptographically secure and also
reasonably fast to compute; but if you're storing passwords, you're probably better off with
something like [bcrypt](http://codahale.com/how-to-safely-store-a-password/), which is
*deliberately* slow in order to make brute-force attacks harder.

Anyway, that's all old news. Today I want to talk about points 4 and 5, and why they are also very
different from each other.


**Hashes for hash tables**

We use hash tables (dictionaries) in programming languages all the time without thinking twice. When
you insert an item into a hash table, the language computes a hash code (an integer) for the key,
uses that number to choose a bucket in the hash table (typically `mod n` for a table of size `n`),
and then puts the key and value in that bucket in the table. If there's already a value there (a
hash collision), a linked list typically takes care of storing the keys and values within the same
hash bucket. In Ruby, for example:

<pre><span class="ansi1 ansi31">$</span> ruby --version
ruby 1.8.7 (2011-06-30 patchlevel 352) [i686-darwin11.0.0]

<span class="ansi1 ansi31">$</span> pry
[1] pry(main)&gt; hash_table = {<span class="ansi1 ansi32">'</span><span class="ansi32">answer</span><span class="ansi1 ansi32">'</span> =&gt; <span class="ansi1 ansi34">42</span>}
=&gt; {<span class="ansi1 ansi32">&quot;</span><span class="ansi32">answer</span><span class="ansi1 ansi32">&quot;</span>=&gt;<span class="ansi1 ansi34">42</span>}
[2] pry(main)&gt; <span class="ansi1 ansi32">'</span><span class="ansi32">answer</span><span class="ansi1 ansi32">'</span>.hash
=&gt; <span class="ansi1 ansi34">-1246806696</span>
[3] pry(main)&gt; <span class="ansi1 ansi32">'</span><span class="ansi32">answer</span><span class="ansi1 ansi32">'</span>.hash
=&gt; <span class="ansi1 ansi34">-1246806696</span>
[4] pry(main)&gt; ^D

<span class="ansi1 ansi31">$</span> pry
[1] pry(main)&gt; <span class="ansi1 ansi32">'</span><span class="ansi32">answer</span><span class="ansi1 ansi32">'</span>.hash
=&gt; <span class="ansi1 ansi34">-1246806696</span>
[2] pry(main)&gt; <span class="ansi1 ansi32">&quot;</span><span class="ansi32">don't panic</span><span class="ansi1 ansi32">&quot;</span>.hash
=&gt; <span class="ansi1 ansi34">-464783873</span>
[3] pry(main)&gt; ^D
</pre>

When you add the key `'answer'` to the hash table, Ruby internally calls the `#hash` method on
that string object. The method returns an arbitrary number, and as you see above, the number is
always the same for the same string. A different string usually has a different hash code.
Occasionally you might get two keys with the same hash code, but it's extremely unlikely that you
get a large number of collisions in normal operation.

The problem with the example above: when I quit Ruby (`^D`) and start it again, and compute the hash
for the same string, I still get the same result. *But why is that a problem,* you say, *isn't that
what a hash function is supposed to do?* -- Well, the problem is that I can now put on my evil
genius hat, and generate a list of strings that all have the same hash code:

<pre><span class="ansi1 ansi31">$</span> pry
[1] pry(main)&gt; <span class="ansi1 ansi32">&quot;</span><span class="ansi32">a</span><span class="ansi1 ansi32">&quot;</span>.hash
=&gt; <span class="ansi1 ansi34">100</span>
[2] pry(main)&gt; <span class="ansi1 ansi32">&quot;\0</span><span class="ansi32">a</span><span class="ansi1 ansi32">&quot;</span>.hash
=&gt; <span class="ansi1 ansi34">100</span>
[3] pry(main)&gt; <span class="ansi1 ansi32">&quot;\0\0</span><span class="ansi32">a</span><span class="ansi1 ansi32">&quot;</span>.hash
=&gt; <span class="ansi1 ansi34">100</span>
[4] pry(main)&gt; <span class="ansi1 ansi32">&quot;\0\0\0</span><span class="ansi32">a</span><span class="ansi1 ansi32">&quot;</span>.hash
=&gt; <span class="ansi1 ansi34">100</span>
[5] pry(main)&gt; <span class="ansi1 ansi32">&quot;\0\0\0\0</span><span class="ansi32">a</span><span class="ansi1 ansi32">&quot;</span>.hash
=&gt; <span class="ansi1 ansi34">100</span>
[6] pry(main)&gt; <span class="ansi1 ansi32">&quot;\0\0\0\0\0</span><span class="ansi32">a</span><span class="ansi1 ansi32">&quot;</span>.hash
=&gt; <span class="ansi1 ansi34">100</span>
</pre>

Any server in the world running the same version of Ruby will get the same hash values. This means
that I can send a specially crafted web request to your server, in which the request parameters
contain lots of those strings with the same hash code. Your web framework will probably parse the
parameters into a hash table, and they will all end up in the same hash bucket, no matter how big
you make the hash table. Whenever you want to access the parameters, you now have to iterate over a
long list of hash collisions, and your swift O(1) hash table lookup is suddenly a crawling slow O(n).

I just need to make a small number of these evil requests to your server and I've brought it to its
knees. This type of denial of service attack was already
[described](http://www.cs.rice.edu/~scrosby/hash/CrosbyWallach_UsenixSec2003.pdf) back in 2003, but
it only became widely known last year, when Java, Ruby, Python, PHP and Node.js all suddenly
[scrambled](http://www.ocert.org/advisories/ocert-2011-003.html) to fix the issue.

The solution is for the hash code to be consistent within one process, but to be different for
different processes. For example, here is a more recent version in Ruby, in which the flaw is fixed:

<pre><span class="ansi1 ansi31">$</span> ruby --version
ruby 1.9.3p125 (2012-02-16 revision 34643) [x86_64-darwin11.3.0]

<span class="ansi1 ansi31">$</span> pry
[1] pry(main)&gt; <span class="ansi1 ansi32">'</span><span class="ansi32">answer</span><span class="ansi1 ansi32">'</span>.hash
=&gt; <span class="ansi1 ansi34">968518855724416885</span>
[2] pry(main)&gt; <span class="ansi1 ansi32">'</span><span class="ansi32">answer</span><span class="ansi1 ansi32">'</span>.hash
=&gt; <span class="ansi1 ansi34">968518855724416885</span>
[3] pry(main)&gt; ^D

<span class="ansi1 ansi31">$</span> pry
[1] pry(main)&gt; <span class="ansi1 ansi32">'</span><span class="ansi32">answer</span><span class="ansi1 ansi32">'</span>.hash
=&gt; <span class="ansi1 ansi34">-150894376904371785</span>
[2] pry(main)&gt; ^D
</pre>

When I quit Ruby and start it again, and ask for the hash code of the same string, I get a
completely different answer. This is obviously not what you want for cryptographic hashes or
checksums, since it would render them useless --- but for hash tables, it's exactly right.


**Hashes for distributed systems**

Now let's talk about distributed systems --- systems in which you have more than process, probably
on more than one machine, and they are talking to each other. If you have something that's too big
to fit on one machine (too much data to fit on one machine's disks, too many requests to be
handled by one machine's CPUs, etc), you need to spread it across multiple machines.

How do you know which machine to use for a given request? Unless you have some application-specific
partitioning that makes more sense, a hash function is a simple and effective solution: hash the
name of the thing you're requesting, mod number of servers, and that's your server number.
(Though if you ever want to change the number of machines,
[consistent hashing](http://michaelnielsen.org/blog/consistent-hashing/) is probably a better bet.)

For this setup you obviously don't want a hash function in which different processes may compute
different hash codes for the same value, because you'd end up routing requests to the wrong server.
You can't use the same hash function as the programming language uses for hash tables.

Unfortunately, this is
[exactly](http://squarecog.wordpress.com/2011/02/20/hadoop-requires-stable-hashcode-implementations/)
what Hadoop does. [Storm](http://storm-project.net/), a stream processing framework,
[does too](https://github.com/nathanmarz/storm/blob/33a2ea5/src/clj/backtype/storm/tuple.clj#L7-8).
Both use the Java Virtual Machine's
<a href="http://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#hashCode()">Object.hashCode()</a>
method.

I understand the use of `hashCode()` --- it's very tempting. On strings, numbers and collection
classes, `hashCode()` always returns a consistent value, apparently even across different JVM
vendors. It's like that despite the
<a href="http://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#hashCode()">documentation</a>
for `hashCode()` explicitly *not* guaranteeing consistency across different processes:

> Whenever it is invoked on the same object more than once during an execution of a Java
> application, the hashCode method must consistently return the same integer, provided no
> information used in equals comparisons on the object is modified. *This integer need not remain
> consistent from one execution of an application to another execution of the same application.*

And once in a while, a bold library comes along that actually returns different `hashCode()` values
in different processes -- [Protocol Buffers](http://code.google.com/p/protobuf/), for example -- and
[people get quite confused](https://groups.google.com/forum/?fromgroups#!topic/protobuf/MCk1moyWgIk).

The problem is that although the documentation says `hashCode()` doesn't provide a consistency
guarantee, the Java standard library behaves as if it *did* provide the guarantee. People start
relying on it, and since backwards-compatibility is rated so highly in the Java community, it will
probably never ever be changed, even though the documentation would allow it to be changed. So the
JVM gets the worst of both worlds: a hash table implementation that is open to DoS attacks, but also
a hash function that can't always safely be used for communication between processes. :(


**Therefore...**

So what I'd like to ask for is this: if you're building a distributed framework based on the JVM,
**please don't** use Java's `hashCode()` for anything that needs to work across different processes.
Because it'll look like it works fine when you use it with strings and numbers, and then someday a
brave soul will use (e.g.) a protocol buffers object, and then spend days banging their head against
a wall trying to figure out why messages are getting sent to the wrong servers.

What should you use instead? First, you probably need to serialize the object to a byte stream
(which you need to do anyway if you're going to send it over the network). If you're using a
serialization that always maps the same values to the same sequence of bytes, you can just hash that
byte stream. A cryptographic hash such as MD5 or SHA-1 would be ok for many cases, but might be a bit
heavyweight if you're dealing with a really high-throughput service. I've heard good things about
[MurmurHash](http://code.google.com/p/smhasher/), which is non-cryptographic but lightweight and
claims to be well-behaved.

If your serialization doesn't always produce the same sequence of bytes for a given value, then you
can still define a hash function on the objects themselves. Just please don't use `hashCode()`. It's
ok for in-process hash tables, but distributed systems are a different matter.

(Oh, and in case you were wondering: it looks like the web servers affected by Java's
hashCode collisions fixed the problem not by changing to a different hash function, but
simply by limiting the number of parameters:
[Tomcat](http://svn.apache.org/viewvc/tomcat/tc7.0.x/trunk/java/org/apache/tomcat/util/http/Parameters.java?r1=1195977&r2=1195976&pathrev=1195977),
[Jetty](https://github.com/eclipse/jetty.project/commit/085c79d7d6cfbccc02821ffdb64968593df3e0bf).)
