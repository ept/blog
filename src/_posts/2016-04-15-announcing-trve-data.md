---
layout: ync-post
title: "Announcing TRVE DATA: Placing a bit less trust in the cloud"
---

In 2014, after 7 years in startups and internet companies, I left LinkedIn to take a sabbatical.
("Sabbatical" sounds better than "unemployment", don't you think?) For a year I worked full-time on
[my book][book], and explored what I wanted to do next. Then last year an opportunity came up that
was just perfect. I started the new job part-time in October 2015, while finishing off the book
during my remaining time (it should be done in the next few months).

Today I would like to introduce the project that we are working on: [TRVE DATA][trve], pronounced
“true data”. We've put up a little [website][trve] explaining the high-level idea, and in this blog
post I would like to briefly explain what it is, why we are doing it, and what makes me so excited
about it. If you want to keep in touch about the project, please [join our mailing
list][mailing-list].

The project is based at [University of Cambridge Computer Laboratory][cl], where I am working with
some excellent people: [Alastair Beresford][alastair], [Diana Vasile][diana], and
[Stephan Kollmann][stephan]. 


Placing a bit less trust in the cloud
-------------------------------------

As you have perhaps heard, [there is no cloud][no-cloud] -- it's just someone else's computer. And
people are storing all sorts of sensitive data on it, blindly trusting that this computer will only
allow authorised users access. What if it is compromised?

It's not just individuals' personal data, but we're talking about medical records, [journalistic
materials][mcgregor], and data about critical infrastructure like power stations and chemical
plants. Here are a few anecdotes from conversations I have had recently:

* A BBC journalist told me that they are officially banned from using Google Docs, but they use it
  anyway, because it's just so convenient.
* I have even heard rumours that the NHS (the English national health service) stores a worrying
  amount of patient medical data in Google spreadsheets.
* Lawyers on high-profile court cases will happily communicate with their clients by unencrypted
  email. Even though their communication enjoys [special protections under the law][privilege], the
  technology doesn't reflect that importance.
* The same thing goes for [diplomats][].
* Some Internet-of-Things companies... oh my god, don't ask about their security if you want to
  sleep at night.

I don't object to cloud services *per se* -- it's incredibly convenient not to have to run your own
infrastructure, and Google, Amazon or Microsoft almost certainly do a better job than you would if
you were running your own server. However, I am concerned that there is too much blind trust
involved.

When data is stored in AWS, Google Cloud Platform, Google Docs, Evernote, iCloud, Dropbox, etc. you
have no idea what the cloud provider is doing with it. Are they using it to train neural networks?
Are they letting governments around the world access it? Are they mining it and selling the results
for advertising purposes? Do they have an untrustworthy employee who is secretly looking at the
data? Do they have a security vulnerability through which criminals can steal it? At best you have
a vaguely-worded and unenforceable privacy policy to read, but most likely you simply don't know
what is happening to your data.


End-to-end encryption
---------------------

Today, it is common to use SSL/TLS for encryption of data as it moves across the internet, and disk
encryption for data at rest. But that encryption ends at the server software, and almost all cloud
services today process data in the clear on the servers. Therefore, anyone who can get access to the
server can also get access to the data.

On the other hand, [end-to-end encryption][ipbill] techniques mostly remove the need to trust the
server, by encrypting data on one end-user device such that only another end-user device can decrypt
it. There may still be servers and cloud services involved, but they cannot read or tamper with the
data. Someone who wants to steal the data would then have to break into one of the end-user devices
-- which is [still possible in most cases][cellebrite], depending on security practices, but at
least it is a much reduced attack surface, with fewer things that can go wrong.

End-to-end encryption is becoming popular for messaging apps, most recently rolled out in
[WhatsApp][whatsapp-e2e], along with [Signal][signal], iMessage (with
[reservations][imessage-attack]), and others. But we have [so much other important data besides text
messages][beyond-msg]! What about that?

The problem is that it's fairly easy to knock together a SaaS web app with Rails, or to build
a mobile app with a backend-as-a-service, but it is really hard to do the same in a way that uses
end-to-end encryption. The crypto itself is terribly difficult to get right, and even if you use an
established secure messaging protocol, you then have the problem that many services, databases,
libraries and tools can no longer be used, since they assume they can work with unencrypted data --
so you have to start almost from scratch. At the moment it is simply not feasible for most
application developers to use end-to-end encryption.

And that is what we are trying to change.


Making end-to-end security the new default
------------------------------------------

The long-term goal of TRVE DATA is quite ambitious: namely, to make it just as easy to build
applications with end-to-end security, and to make those applications equally usable, as the apps
without end-to-end security today.

Today, using http instead of https is increasingly frowned upon; I hope that in some years time, not
using end-to-end security will be equally frowned upon. Today, we trust cloud services but not the
network; in future, I hope that we will trust neither cloud services nor the network. We will still
be using the internet and cloud services, but we will use cryptographic tools to ensure they can't
mess with our data.

I want the tools for building secure applications to be so good that it will be a no-brainer to use
them. I want strong security to become the new default, and to raise the bar for all apps.

Of course, we have a very long way to go before this is reality. For now, we are concentrating on
a particular type of application: collaborative document editing. This is still a quite broad
category, including text documents, spreadsheets, graphics, to-do lists, notes, address books,
calendars, and so on.

For this kind of data, the TRVE project is building general-purpose libraries and tools that will
automatically sync data across several devices, allow sharing with other users, allow several people
to edit the same document in real time, and allow users to continue working offline. And all of the
communication between devices will, of course, be encrypted and authenticated end-to-end, with TRVE
handling key management as well as data sync.

The software we build will be open source and freely available. Our work-in-progress prototype is
already on GitHub, but I won't link to it — remember, this project only started six months ago, and
I'm working on in part-time. The code is not yet in a fit state to be used. But this is where we're
heading.

Motivation and concerns
-----------------------

> “Let us speak no more of faith in man, but bind him down from mischief by the chains of cryptography.”
>
> — [Edward Snowden][snowden], invoking [Thomas Jefferson][jefferson]

Jefferson's original quote was about the US constitution: a document designed to deliberately
restrict the powers of government, and to keep it accountable to its citizens. History has
repeatedly shown that putting too much unchecked power in the hands of a small number of people
leads to abuses of power and various problems, even if they start with benevolent intentions.

Snowden's quote is so apt because the rise of cloud services and "Big Data" have caused
a concentration of power in the hands of a small number of large companies. Cryptography is to data
what the constitution is to political power: a means of [giving some power and control back to
individuals][rogaway], and keeping powerful people honest. It makes mass surveillance harder and
helps preserve civil liberties.

I will preempt the inevitable question: *"What if terrorists use this software to plan an
attack?"* This issue merits a longer discussion, but the short answer is: terrorists use cars, guns
and explosives as well, all of which are far more dangerous than crypto. And I don't see any sign of
Ford stopping production of their cars because they might be used by terrorists.

It's actually pretty hard to kill someone with cryptography. You can try boring someone to death, or
hitting them over the head with a crypto textbook, but that's about it. As technologies go, crypto
is pretty non-lethal — in fact, it is a purely defensive technology.

On the other hand, encryption is absolutely essential for protecting data that is legitimately
sensitive, and to give some freedom to people [living under repressive regimes][tor]. Weakening it
for the convenience of law enforcement, as proposed in the [Investigatory Powers Bill][ipbill] in
the UK and [Feinstein-Burr][feinstein] in the US, would be a [big mistake][evidence].


The way forward
---------------

I believe that end-to-end security will soon be regarded as a necessity for any sort of important
data. For example, the Bar Council of the UK (the association of lawyers who represent their clients
in court) already [recommends using end-to-end encryption][bar-council] for data stored in the
cloud.

This trend starts with the most sensitive professions like doctors, lawyers, and [journalists][],
but I expect it to grow -- in order to maintain regulatory compliance, to prevent industrial
espionage, and to meet data protection requirements. The demand for better security comes not from
criminals trying to evade the law, but from professionals whose job involves dealing with important
data.

I am working on the TRVE DATA project because I feel this is one of the most important issues in
computing and society today, and I am hoping we will be able to make a positive difference. It's
a long-term project, and we're only just getting started.

We have set up a [public mailing list][mailing-list] for anyone who is interested in the project,
where we are planning to post monthly updates on our progress, and invite ideas and discussion from
anyone who would like to contribute. You can also find [@trvedata][twitter] on Twitter. Please join
us, and spread the word.


[book]: http://dataintensive.net/
[cl]: https://www.cl.cam.ac.uk/
[trve]: https://www.cl.cam.ac.uk/research/dtg/trve/
[alastair]: http://www.cl.cam.ac.uk/~arb33/
[diana]: http://www.cl.cam.ac.uk/~dac53/
[stephan]: http://www.cl.cam.ac.uk/~sak70/
[mailing-list]: https://lists.cam.ac.uk/mailman/listinfo/cl-trvedata
[no-cloud]: https://www.chriswatterston.com/blog/my-there-no-cloud-sticker
[mcgregor]: https://www.usenix.org/system/files/conference/usenixsecurity15/sec15-paper-mcgregor.pdf
[privilege]: https://en.wikipedia.org/wiki/Legal_professional_privilege
[diplomats]: https://twitter.com/csoghoian/status/700802867322441728
[ipbill]: http://martin.kleppmann.com/2015/11/10/investigatory-powers-bill.html
[cellebrite]: https://www.theguardian.com/technology/2016/mar/21/fbi-apple-court-hearing-postpone-unlock-terrorist-iphone
[whatsapp-e2e]: https://blog.whatsapp.com/10000618/end-to-end-encryption
[signal]: https://whispersystems.org/
[imessage-attack]: http://blog.cryptographyengineering.com/2016/03/attack-of-week-apple-imessage.html
[beyond-msg]: https://dymaxion.org/essays/pleasestop.html
[snowden]: http://www.theatlantic.com/politics/archive/2014/05/edward-snowdens-other-motive-for-leaking/370068/
[jefferson]: http://www.constitution.org/cons/kent1798.htm
[rogaway]: http://web.cs.ucdavis.edu/~rogaway/papers/moral.html
[tor]: https://twitter.com/matthew_d_green/status/720538970640269313
[feinstein]: http://www.burr.senate.gov/imo/media/doc/BAG16460.pdf
[evidence]: http://data.parliament.uk/writtenevidence/committeeevidence.svc/evidencedocument/draft-investigatory-powers-bill-committee/draft-investigatory-powers-bill/written/26275.html
[bar-council]: http://www.barcouncil.org.uk/media/407878/cloud_computing.pdf
[journalists]: http://www.cima.ned.org/wp-content/uploads/2016/03/CIMA-Journalist-Digital-Tools-03-01-15.pdf
[twitter]: https://twitter.com/trvedata
