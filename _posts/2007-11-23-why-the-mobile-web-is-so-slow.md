---
layout: ync-post
title: "Why the mobile web is so slow"
---

On the "desktop/laptop web" (in contrast to the mobile web), we've become used to a page loading in
about a second. On mobile phones, we are still far from seeing anything near that responsiveness --
for most people, the mobile web experience is still agonisingly slow. Personally, I start to get
irritated after about five seconds, and after as little as ten seconds there is a strong chance that
I will go away and do something else. And currently it's still a challenge to get a page to load
within that timeframe on a mobile.

Ever wondered why it is so slow? Yesterday I was reading a few
articles, and I repeatedly came across people who made a very simplistic assumption: namely that the
available network bandwidth is fully used. For example, they will say: on a standard 3G/UMTS
connection, each subscriber can transfer 384 kbit/s, therefore a 24 kB web page (text and a few
small pictures) will load in 0.5 seconds. Honestly, if you've *ever* tried to access even a simple
web page from a phone you know that this figure is just laughably wrong. It is *never* that
fast.

<p>Finally, after lots of searching, I found
[this paper](http://research.microsoft.com/~pablo/papers/www04.pdf) by
[Pablo Rodriguez](http://blog.rodriguezrodriguez.com/),
[Sarit Mukherjee](http://www1.bell-labs.com/user/sarit/) and Sampath Rangarajan. And they give some
good reasons why this is the
case:
<ul>
<li>The round-trip time for packets is between 400 and 1000 ms in a typical 3G
cell.</li>
<li>Packets loss is inevitable in wireless transmissions because of radio interference.
There are two approaches to packet loss: either let TCP deal with retransmission (in which case it
thinks the network is congested, and reduces the transfer rate), or to retransmit lost packets in a
low-level protocol (in which case the round-trip times observed by TCP can vary wildly, which
confuses TCP and also reduces the transfer rate).</li>
</ul>
In a nutshell, TCP is really not up to
the job, but it's so widely used that there is basically no chance that it is going to be replaced
anytime so on. (WAP included a layer called the
[Wireless Transaction Protocol](http://www.protocols.com/pbook/wap.htm), which attempted to be a
better replacement for TCP. But we know what happened to WAP -- nobody wants to use it.) In their
paper, Rodriguez et al. go on to describe a method for partially getting round the problem by
rewriting DNS and HTTP responses -- it's not ideal, but at least it removes some of the worst
problems.</p>

<p>The real problem here is that round-trip time though. On a normal broadband connection
I'd expect a round-trip time between 25 ms (within the UK) and 125 ms (across the Atlantic). On 3G,
even though the bandwidth is not that much lower than broadband, we've got a round-trip time 8 to 15
times higher. And this time really becomes noticeable every time you click on a
link:
<ol>
<li>Send a DNS request for the hostname we want to contact, and wait for the response.
(Unless we've cached the DNS record on the
handset.)</li>
<li>Send a TCP SYN packet to the server we want to contact, and wait for the
response.</li>
<li>Send the HTTP query over the established TCP connection.</li>
</ol>
This means
that every time we click a link, we have to wait 2 or 3 round trip times -- i.e. between 0.8 and 3.0
seconds -- until we get the very first few bytes of the page we requested. That's assuming that none
of those first few packets got lost (because if one of them was lost, there would be no way of
telling -- all you can do is wait for a timeout and try again). And then we still have to transfer
the whole page, and have all the TCP issues to deal with.</p>

I just hope that mobile phones nowadays
use
[persistent HTTP connections](http://en.wikipedia.org/wiki/HTTP_persistent_connection) or
[pipelining](http://en.wikipedia.org/wiki/HTTP_pipelining) which would remove some of the overheads.
Does anybody know if they do? I'd like to hear from you.

PS. I thought I had accidentally deleted
this post -- fortunately I managed to find it again, hidden away in a binary mess, in the MySQL log
file! :-)
