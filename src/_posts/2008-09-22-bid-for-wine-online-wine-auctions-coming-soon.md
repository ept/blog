---
layout: ync-post
title: "Bid for Wine, online wine auctions coming soon"
---

<div
style="float:right"><a
href="/2008/09/bidforwine.png"><img class="size-full wp-image-140" title="Bid for Wine logo"
src="/2008/09/bidforwine.png" alt="Bid for Wine logo" width="375" height="95" /></a></div>

I
should write a few words on one of the big projects we've currently got going on at
[Ept Computing](http://www.eptcomputing.com/). The client I am talking about is
[Bid for Wine](http://www.bidforwine.co.uk/), who want to enable wine lovers in the UK to buy and
sell wine online. Currently wine auctions exist only offline in the UK, which is rather surprising
given the success of eBay's model. Lionel, Spenser and Keith, the founders of Bid for Wine, are
setting out to change this. (See also the
[official Ept Computing/Bid for Wine press release](http://www.eptcomputing.com/news/2008-09-18/)
from a few days ago, and you can
[follow Lionel in the Bid for Wine blog](http://bidforwine.wordpress.com/).)

You may ask why
anybody would want a website like this. Well, you should know that there is a very active community
of wine lovers -- people who spend a lot of time hunting down rare and exciting wines, who organise
wine tastings, who publish tasting notes, and even many who have considered wine an investment and
who have accumulated wine worth six-figure sums in their cellars.

Unsurprisingly, people with a lot
of wine eventually come to the realisation that they will not be able to drink all that wine within
their lifetime and/or before the wine gets too old. But when they try to sell it, things are not
that easy. Merchants and auction houses won't just sell anything, they will often only pick the
famous wines and ignore the less-well-known but equally good ones; and even if they do sell, they
charge massive commissions and fees. This is where
[Bid for Wine](http://www.bidforwine.co.uk/) comes in.

My company,
[Ept Computing](http://www.eptcomputing.com/), is delivering the entire technical side of this
project, from specification, software architecture and project management through to development and
testing.  It is quite a massive project since we have a very ambitious set of requirements.

Not
only will it allow sellers to list auctions and potential buyers to place bids. It also deals with
multiple lots, i.e. selling many cases of the same stuff to several different buyers within one
auction. It even deals with VAT and Duty, so that buyers know exactly how much they will be paying,
and don't face surprising extra charges at the last minute. (Previously you had to be an expert in
taxation law to work out how much you would have to pay, and trust me, it's not that simple.) There
will also be consignment handling services on offer, and more.

We're developing this web
application from scratch using Ruby on Rails. We looked at a number of existing (open source and
commercial) auction platforms beforehand, but none convinced us. We wanted something which would be
powerful, maintainable, and would scale well; all the existing software we could find were
unprofessionally hacked-together PHP scripts which looked like a nightmare to maintain or customise.
Our auction platform is solid and beautiful, and it's already being adapted for use by another of
our clients (this one has nothing to do with wine, and I'll announce it at a later point).

There
are a number of technical challenges which we faced in the development of this project, and I will
be blogging about them over the course of the next few weeks. We are also planning to release some
of the general-purpose code from this application as Open Source, because we have borrowed a lot of
great things from the community and believe strongly that we should give back as well.

Work on the
site is progressing well, and it will be going into private beta soon. The countdown to launch is
on... watch this space!
