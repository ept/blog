---
layout: ync-post
title: "OAccounts - Setting your accounts data free"
disqus: true
---

Open standards for data are really important. If you store your data in proprietary formats, you are
at the mercy of the software vendor who developed the standard; if they go out of business or hike
the prices or you find someone else who does the job much better, well, you're a bit stuck. If
you're lucky, you might be able to find someone who can import your data, but it probably won't be
perfect.

Think of trying to open Microsoft Word files in any application other than Microsoft Word:
you will probably see the text, but any more complex layout will, in all likelihood, be messed up.
That's an example of a proprietary standard. Now think of looking at websites: they work in Internet
Explorer, Firefox, Safari, Opera, Chrome, and even more different browsers. There might be some
minor glitches, and sometimes the developers had to expend extra effort to make it work everywhere
(because of bugs in particular browsers), but by and large, it simply works. Or think of email; no
matter which email application you use, it just works. Those are open standards.

I have been doing a fair bit of accounting-related work recently, both in keeping my company's
accounts and in developing the
[Ruby invoicing gem](/2009/02/12/ruby-invoicing-gem-released.html). And I can tell you, all accounting
software packages I have seen have proprietary formats, and getting them to work together is a
nightmare. Espen Antonsen wrote today on
[CloudAve](http://www.cloudave.com/), a widely-read blog on web-based accounting software and cloud
computing, about
[Data Standards for Web Applications](http://www.cloudave.com/link/data-standards-for-web-applications):

> One example where a common standard would be very beneficial is accounting. Accounting is defined by
> commonly adopted principles but differ in countries in relation to reports, tax setup's and such.
> But at the end of the day the data ends up in journal/transaction entries and account information.
> All accounting vendors take a different approach to this and importation of data must be designed
> for to suit the format in general or must be customized for customers. This limits the choice of
> accounting vendors for someone using a less popular accounting service. It also results in a lock-in
> for customers using applications which provide less commonly implemented data formats.

But Espen also points out that it's not just about exporting and importing
data, it's about linking it up continually:

> Taking data with you from one service to another is not just about the
> data in the system you are moving from but also about maintaining links to other systems. I suspect
> that data values that are linked to external integrated services are overlooked in many data exports.

<a href="http://www.w3.org/2009/Talks/0204-ted-tbl/#(7)">
    <img src="/2009/03/linkeddata.png" alt="Linked Data Standards (Image from Ted Berners-Lee's TED talk)"
        title="Linked Data Standards" width="400" height="225" class="size-full wp-image-240" />
</a>


**Open standards for accounting data**

I have started working on an
[open standard for accounting data called OAccounts](http://ept.github.com/oaccounts/), which is an
attempt to accomplish exactly this. (The name was probably inspired by
[OAuth](http://oauth.net/).) With the help of other interested parties I would like to draw up a
specification and a reference implementation for a data format and protocol for storing,
interchanging and synchronising accounting data between different software packages. Of course it
will all be free and open. In particular, I want it to be easier for developers to create
applications and tools which create/process transactions and do reporting (my
[Ruby invoicing gem](/2009/02/12/ruby-invoicing-gem-released.html) of course falls into this category).

Many web-based accounting systems have APIs, either RESTful or SOAP, but they are all
different, and some are woefully incomplete. If a third-party developer wants to integrate with
several different accounting systems, to have the broadest possible customer base, they will have to
implement each API separately. And if a user of one accounting system wants to use several
third-party extensions, such as payment processing, shopping carts and advanced reporting, they will
have to integrate each extension separately. The result is a complete mess:

<img src="/2009/03/integration-without-oaccounts.png"
    alt="Integration of accounting systems without OAccounts"
    width="323" height="142" class="aligncenter size-full wp-image-247" />

Well, implementing APIs is going to be
unavoidable if we want to integrate several different applications. But if we're doing that, we
should implement each API once, and have an open standard which provides the common language across
all those integrations. This is what OAccounts sets out to
achieve:

<img src="/2009/03/integration-with-oaccounts.png"
    alt="Integration of accounting systems with OAccounts"
    width="357" height="142" class="aligncenter size-full wp-image-246" />


**Why all of this?**

Starting OAccounts
for me was primarily motivated by my move from one accounting software package to another. I had
been using Sage in my small business for somewhere around 18 months, but I wanted to move away from
it, and I wanted to take my data with me. I preferably wanted something web-based with all the
Software-as-a-Service advantages.

To my great surprise, I had difficulty finding an online
accounting provider who could import my Sage data. From Xero, for example, all I got was "wait until
the end of your next accounting period, then enter the latest figures from Sage as opening balance".
No, that is not acceptable; I entered all that data carefully into Sage for a reason, namely that I
could go back and investigate individual transactions or examine a detailed billing history in
future. I wanted all my data to be portable.

Finally, as I was about to give up and write my own
parser for the Sage data files (which looked as though they were not too hard to reverse-engineer),
[KashFlow started offering a Sage import facility](http://www.kashflow.co.uk/Sage-To-KashFlow-Migration.asp).
Thank goodness, I thought.
(Dear accounting software start-ups: I think the very first feature you offer should be import from
your competitors. Remember, I was trying to give you money.)

Nevertheless, importing was not
totally smooth. There were a few bugs at first, which KashFlow was very quick to fix (I'm impressed
with the customer service!). Now I've got most of the data in KashFlow except for our history of VAT
returns, which I somehow need to reconstruct. It has already taken hours, if not days of work to
migrate the data, and I wish it was all much simpler.

For me, moving accounting systems was not a
completely clear decision. I disliked Sage quite a lot, but I didn't hate it from the bottom of my
heart; on the other hand, I think Kashflow is friendlier to use, but it's not quite the love of my
life either. In a vague situation like that, more sensible companies probably wouldn't have bothered
with the migration and would have just stuck with the status quo.

What I would have ideally liked
to do is to run several accounting systems in parallel for a while, and then choose which I liked
best after using them each for real tasks, such as completing a tax period. Of course this would
mean that a single export-import wouldn't be sufficient; there would have to be a continuous
synchronisation of the systems, the "linked data" which
[Tim Berners-Lee talked about](http://www.flickr.com/photos/photonquantique/3272712288/). Changes I
make in one application should be reflected in the other application (provided they both have the
capability, but accounting data has a pretty standard structure, so that would be perfectly
feasible).

I would like the
[OAccounts initiative](http://ept.github.com/oaccounts/) to be a starting point for discussions
about how we can make an open standard for storing and interchanging accounting data between
different systems. I have a bunch of ideas how this can be done in a safe and scalable way without
re-inventing the wheel, and I will write them up in a draft specification over the course of the
next few weeks. In the meantime, if you find this interesting or even would like to contribute,
please subscribe to my blog and leave a comment below. I appreciate your input.
