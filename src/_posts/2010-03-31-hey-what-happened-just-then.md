---
layout: ync-post
title: "Hey, what happened just then?"
---

There are moments in life where everything suddenly changes. Do you know what I mean? Those moments
are rare, but on some occasions, your entire outlook on life can fundamentally change
overnight.

This particular story begins about a year ago. I had just finished a few web development
contracts, and had started to build my automated web testing tool,
[Go Test It](http://go-test.it). At the time I thought Go Test It was going to be a small, simple
product which would take a few months to build and then mostly look after itself. (In retrospect:
Hahaha!) I wasn't sure where it was going to go, but I wanted to keep my options open, so I also
[applied to do a PhD](/2009/03/31/doing-a-phd.html) in Cambridge.

I had to propose a PhD topic, and I
made up something ad-hoc. I realised that most interesting things are created by individuals, not
organisations, and that the reputation and personal network of those individual people is key. And I
saw a problem: most things happen online, but fragmented across lots of different websites
(including private databases such as CRM systems), so the information is barely useful. I wanted to
pull this together and analyse it; I saw this as a route to learning more effectively, by using my
network of professional contacts.

To make it sound more academic and less startuppy, I padded the
PhD proposal with a bit of blah-blah about machine learning, natural language processing, citation
analysis and social graph analysis. But of course my plan was to turn it into a startup eventually.
I got my place in Cambridge, got the research funding, moved back into college -- then realised that
doing Go Test It and a PhD at the same time was madness, changed my mind, and withdrew from the PhD
just a week after I had started. Oh well, interesting experience. I hope I didn't waste too many
people's time.

Around that time I was talking to
[Red Gate](http://www.red-gate.com/), who were interested in acquiring Go Test It, and we closed
that deal in November 2009. The plan was that I would stay there for 10 months to hand it over and
get it standing on its own feet. We embarked on a big customer development push to figure out who
our customers really were and what they really wanted, and we learnt a lot. It was
good.


**Rapportive comes into being**

Other things were happening around that time. My friends
[Rahul](http://twitter.com/rahulvohra) and
[Sam](http://www.samstokes.co.uk/) were interested in doing a new startup, having worked together at
[mo.jo](http://mo.jo) before. I had talked to them about my ideas, originally intended for the PhD,
of "fixing CRM" by integrating it with social data, and we started thinking about turning it into a
startup sooner rather than later.

Rahul came up with some user interface ideas and started coding
them up in January; Sam joined in and engineered the backend. Our plan was that I would stay
full-time on Go Test It, and fund the other two from my earn-out until October 2010, which is when
Go Test It was to be fully handed over to Red Gate. Then I would join them full-time on the new
startup. It sounded like a good plan.

Rahul and Sam put together a prototype of Rapportive in a few
weeks; we showed it to a few people and they seemed to like it. We put up a simple one-page website,
with a few pictures and an install button, so that we had something we could show to potential
investors. It wasn't much. We hadn't even written a privacy policy because we were expecting it to
only go out to a small number of people.


**And then... OMGWTFBBQ**

What happened then was
[a tweet](http://twitter.com/plc/status/9968421868) by our friend
[Pete](http://twitter.com/plc) to
[Zee](http://twitter.com/zee) of
[The Next Web](http://thenextweb.com/). I had never imagined that a single tweet could be so
powerful. Zee loved what he saw and
[wrote it up immediately](http://thenextweb.com/apps/2010/03/04/gmail-slick-social-crm-tool/).
Within a day we also had rave write-ups on
[ReadWriteWeb](http://www.readwriteweb.com/archives/gmail_social_crm_plugin_rapportive.php) ("stop
what you are doing and install this plug-in!"), then
[Lifehacker](http://lifehacker.com/5486082/rapportive-replaces-gmail-ads-with-contact-info-is-very-cool)
and
[WebWorkerDaily](http://webworkerdaily.com/2010/03/05/rapportive-gmail-crm/) and dozens of smaller
blogs and news sites... thousands of people raving about us on Twitter... and within that day, over
10,000 users signed up.

10,000 users in one day. That's like a fairly large stadium full of people
using our software. I had never worked on anything with more than a couple of hundred users before.
It's hard to describe how that felt.

We were doing nothing but frantically commenting on blog
posts, replying to tweets, emails and Skype contacts, and scaling up our servers. Thank goodness for
[Heroku](http://heroku.com/), which made the scaling incredibly easy. We had a few periods of
slowness and had to temporarily disable some features, but we never went down. Our servers were
continuously handling over 20 requests per second, but we were taking care of our users and giving
individual responses to everyone who needed one.

We got a tremendous amount of love from our users,
both for the product and for responding swiftly and helpfully to any queries. The vast majority of
people who originally signed up are continuing to use it now, and new people are signing up every
day.

All of a sudden, our time is incredibly precious. We want to continue to develop Rapportive
quickly and continue making something which people really want. We are moving at a very rapid pace,
because every day, we have the opportunity to make tens of thousands of people happy.


**So... what about Go Test It?**

This success, great as it was, put me in a difficult situation. I was still
full-time on Go Test It, and we were just ramping up development to build several big, important
features which our customers really wanted. And at the same time, Rapportive needed me more every
day.

We had always been very open with the directors of Red Gate as to what was was going on with
Rapportive, and so we discussed what we should do. Eventually we decided that Rapportive needed me
most, and Go Test It wasn't yet ready to stand on its own feet, so we would shut Go Test It down
gracefully.

It was a very hard decision, probably one of the hardest I have yet had to make. Red
Gate, I and all the others who had worked on it had put a lot of time, effort and money into Go Test
It. I was also emotionally invested; after all, this was my first own product. But the opportunity
offered by Rapportive was just so disproportionately huge. Killing Go Test It quickly and painlessly
was the right decision.

Fortunately the damage was quite limited. Only a small number of customers
were using Go Test It regularly, and we found alternative solutions for them. We had a vesting
schedule, so the majority of the money from the acquisition went back to Red Gate. There were a few
other people working on the project too; they had to find new things to work on, but they are all
very talented so it's not difficult for them to find work. And most importantly, for me at least: I
managed to stay friends with everybody involved. So I think we achieved a good outcome
overall.


**Onwards and upwards**

So here we go: I'm now a full-time co-founder at Rapportive, and
together the three of us are going full steam ahead. We have tens of thousands of people who love
what we are doing. We have investors knocking on our door. And we have bucketloads of plans and
bright ideas combined with the energy and passion to make them happen.

Life never moves in straight lines; it is full of unexpected surprises. But hey, most surprises
turn out to be good ones if you make the most of them. And that's what we're doing right now.

We're in San Francisco and the Bay
Area from now until mid-April, so if you'd like to meet us in person, please
[drop me a note](mailto:martin@rapportive.com) -- we'd love to hear from you!
