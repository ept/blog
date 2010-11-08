---
layout: ync-post
title: "Increasing user satisfaction on the mobile web: Technical considerations"
---

As part of the re-launch of Ept Computing's website I've also published a
[white paper on user satisfaction on the mobile web](http://www.eptcomputing.com/publications/).
Some of it consists of observations which I've previously blogged about, now pulled together and
presented in a more coherent and structured manner. I've structured it according to some
[interesting findings from the Online Publishers'
Association](http://www.online-publishers.org/media/176_W_opa_going_mobile_report_mar07.pdf). They
surveyed mobile web users and found that their main sources of dissatisfaction with the mobile web
were:

* site load time
* site navigation
* user friendliness

While I'm not quite sure what they mean with "user
friendliness" -- it's a kind of compound term for all sorts of factors which contribute towards the
user experience -- the other two, load time and navigation, are very clear areas which need to be
addressed if the mobile web wants to move forward.

Site load time is a tricky problem to address,
because
[slowness is mainly due to packet round-trip times on mobile data
services](/2007/11/23/why-the-mobile-web-is-so-slow/). I see Ajax and Flash to be the most promising
approaches to beat the network latency -- i.e. transferring more data up front in order to make the
site more responsive once it's loaded. Site navigation is mainly a question of information
architects figuring out how to present information most effectively on a mobile, and there are
already some very good examples of good mobile navigation design on the net.

If you're interested,
you can
[download the white paper](http://www.eptcomputing.com/publications/mobile-web-satisfaction.pdf)
(PDF, 124 kB). Here's the
abstract:

<blockquote>The use of internet and web services on mobile devices is expected to
revolutionise our attitude to information and communication in the near future. However, in order to
attract mainstream adoption, the mobile web must overcome some fundamental user experience problems.
In this white paper we approach the user experience from a technical point of view, explaining
reasons for deficiencies of the current approaches, and introduce some technical means for improving
the user experience.</blockquote>
