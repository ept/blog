---
layout: ync-post
title: "iPhone specific web sites -- do they make sense?"
---

Looking back at 2007, I can't help but think that the iPhone was probably the most important and
influential technology phenomenon of the year. It's been talked about so much that I'm actually
starting to get sick of it. But that doesn't change the fact that it has had a significant impact,
particularly on the way the mobile web works.

One of the most striking developments that ensued are
the moves by several popular web sites to provide versions of their offering which are specifically
tailored to people visiting their site from an iPhone. Amongst others, I
found:

* [Amazon.com](http://www.amazon.com/gp/aw/h.html)
* [Facebook](http://iphone.facebook.com/)
* [Ta-Da Lists](http://www.tadalist.com/)
* [Meebo](http://www.meebo.com/)
* [Netvibes](http://iphone.netvibes.com/)

(Most of these sites show their iPhone look only to web browsers which identify themselves as Safari
Mobile.
[To test them in a desktop web browser, see this
article](/2008/01/03/imitating-the-iphone-user-agent-in-firefox.html).)

iPhone specific development is
fashionable, it seems. Some of those sites actually borrow and incorporate iPhone design elements
(such as the style of lists and tabs, animation and icons), further blurring the distinction between
web sites and applications.
[A List Apart](http://www.alistapart.com/), a widely respected resource for web developers, has even
published a long article on how to develop iPhone-specific web sites ([Part
I](http://www.alistapart.com/articles/putyourcontentinmypocket),
[Part II](http://www.alistapart.com/articles/putyourcontentinmypocketpart2)).
[Apple themselves also offer in-depth information](http://developer.apple.com/iphone/devcenter/).
[iPhoneApplicationList.com](http://iphoneapplicationlist.com/) maintains an extensive list of
iPhone-optimised web
applications.

[Christopher Schmitt
argues](http://christopherschmitt.com/2007/09/11/iphone-specific-web-development-misguided/) that
making websites accessible for people with disabilities would expand a website's reach far more than
making an iPhone-specific site does. And
[Scott Gilbertson of WIRED thinks](http://blog.wired.com/monkeybites/2007/08/the-iphone-is-i.html)
that the current situation is very similar to the old days when people were designing web sites
specifically for Internet Explorer 4 (which was ahead of Netscape at the time).
[Jeff Croft suggests the
opposite](http://www2.jeffcroft.com/sidenotes/2007/jul/18/question-those-who-think-made-iphone-apps-bad-idea/),
saying that device-specific application development is going to happen anyway, and it doesn't really
matter whether it uses web technologies or not.

**iPhone market share**

What is the market share
of iPhone internet browsing actually like? Hard to say, because it depends so much on what you
measure. In terms of sold devices, the iPhone is performing strongly, but it is still a small
proportion of the overall handset market. There are
[at least 100 million mobile devices with modern
browsers](http://www.eptcomputing.com/publications/mobile-web-satisfaction.pdf) (Opera Mobile,
Nokia's S60 browser, both of which are capable of displaying standard desktop web pages) compared to
an estimated 2 million iPhones. Phones with WAP/XHTML browsers or adaptation browsers (such as Opera
Mini) are a lot more numerous still. So in terms of the number of devices, writing iPhone-specific
sites (as opposed to Opera-specific sites, for instance) really doesn't make much
sense.

[Hitslink/Net Applications' operating system
statistics](http://marketshare.hitslink.com/report.aspx?qprid=10) show that in December 2007, iPhone
and iPod Touch users accounted for 0.14% of web page views, more than all other mobile platforms put
together (Windows Mobile: 0.06%, S60: 0.02%).
[The Register reported this too](http://www.theregister.co.uk/2007/12/04/iphone_tops_chart/).
However, Ray Anderson, CEO of
[Bango](http://bango.com/), points out that these figures are
misleading:

<blockquote><p>Hitslink produced this report by using data from their analytics customers.
These people operate HTML/PC websites. They say: "You simply paste a small piece of HTML code on
each page you wish to track statistics on".</p>

<p>The 300 million or so mobile phone browser users (say
50 million S60) can't or don't browse HTML sites. They browse mobile friendly sites (WAP or XHTML or
iMode) which will not have this HTML code in.</p>

<p>Considering that organizations like Bango, Admob,
Peperonity, Vodafone report mobile browser traffic in the billions of pages per day, most of thse
being S40 or S60 its clear that by ignoring non-HTML sites these stats are misleading and
mistaken.</p>
<p align="right">-- Ray Anderson, in an email to
[Mobile Monday London mailing list](http://tech.groups.yahoo.com/group/momolondon/), 5 Dec
2007</p>
</blockquote>

In other words, all that Hitslink's statistics say is that
iPhone users are more likely to visit more desktop web sites, but it doesn't say anything at all
about usage of sites which are specifically designed for mobile use. The conclusion I draw from this
is that an iPhone user is much more likely to visit desktop sites than Windows Mobile or S60 users,
and therefore non-iPhone users either mostly use sites designed for mobile, or don't use the web
much at all. This may have a variety of reasons -- due to its large screen, desktop web sites are
more usable on the iPhone than they are on devices with smaller screens; Safari Mobile has pretty
neat zooming capabilities; and maybe iPhone users simply approach the device with a more
web-oriented attitude, because after all it is more of an internet tablet than a
phone.

If iPhone users actually prefer desktop-style websites, because they work
quite nicely on the large screen, it really doesn't make much sense to design a specific iPhone
version of a site. On the other hand, if it's that increased usability of the iPhone web experience
which drives web usage per person to be many times higher than on S60 and Windows Mobile devices...
then there's a very strong case in favour of designing device-specific
sites.

Is iPhone-specific design just a case of companies wanting to look cool
by having an iPhone-optimised site and jumping on the bandwagon? Is this just a fashion which will
go away again as quickly as it came? Or do such companies actually derive significant benefits from
iPhone users? I'd be interested to hear your
comments.
