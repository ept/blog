---
layout: ync-post
title: "How to pull off a slick tech demo (in 5 easy steps)"
---

On Thursday I gave a demo of
[Go Test It, our cross-browser testing product](http://go-test.it/), at the Cambridge Tech Demo
Night. The audience was a mixture of startups, investors, business owners, developers and
researchers -- a fantastic group of people. This was a great opportunity to show to a larger group
of people that Go Test It is now a solid, usable product. How do you make the best use of such an
opportunity?

Demoing alongside me were four other startups:
[CamVine](http://camvine.com/),
[mbed](http://mbed.org/),
[CycleStreets](http://www.cyclestreets.net/) and
[WebTicketing](http://webticketing.net). I thought that all of them had very slick, impressive and
credible demos (and judging by the positive feedback I got, my own one seemed to go down quite well
too). I had not seen most of them before, but the message they got across in just seven minutes was
so powerful that I'm immediately convinced of their potential, and since the demo night I've even
been going around telling other people how awesome these startups are. That's powerful stuff.

So how do you make a demo which will convince others that you are great and that they should tell all
their friends about you?

Well, first you actually need something substantial to show. A product, a
web application, something which is new and interesting and solidly built. I don't believe in
vapourware demos; you've got to show the real thing. However, for most companies I know in Cambridge
that's really not a problem -- many have very impressive products, they just don't know how to
communicate them.

Even if you have a great product, you can still wreck it with a bad presentation.
I've seen that happen and it feels tragic, so please do yourself and your audience a favour and make
it a good demo. It's not that hard, and these are the guidelines I set myself when preparing my
demo. They may not work for everybody, but they worked well for me.

**1. Know what you're going to say**

When I was at school, the only role I was allowed to play in the drama club was to be the
lighting technician at the back of the room -- no chance anyone would let me near acting. That's
because I can't remember scripts word-by-word for the life of me, and even if I could, I feel really
silly when reciting learnt lines. Therefore I have no choice but to speak freely.

However, you do need to have a pretty clear idea of what you are going to talk about, and how long
it is going to take, if you want your presentation to be slick. You do need a script in the sense
that you need to decide beforehand:

* exactly which buttons you are going to click, and
* which topics you are going to address.

Then speak the whole thing out loud
twice. I find twice is a good number because I get a good feeling for how long the demo is going to
take -- essential when the presentation is strictly timed! -- but I don't feel over-rehearsed and
therefore silly either.

I like things to start with a few slides introducing the issues your
product solves. This gives the audience a context and makes your solution look stronger. But I
wouldn't spend more than 20% of the time in Powerpoint/Keynote mode; for example, in a seven-minute
presentation, you should be in the actual demo after about 80 or 90 seconds.

Embrace these time
constraints. They force you to be clear and to-the-point. Twitter is so successful precisely
*because* it forces you to be short; it wouldn't have worked without the 140 character limit. The
same is true in presentations and demos.


**2. Make it work offline**

Don't underestimate this
issue. There are almost always technical problems in any venue, and most usually they are either bad
internet access or problems with the projectors. Bad internet access is the most common. There's no
point in relying on a 3G card either, because probably reception will be bad in the Faraday cage
that is your demo venue, and if not, the network will be overloaded because everyone is tweeting.
There's no way round it: your app has got to work offline.

And even though you probably have a full
development environment on your laptop on which you can run your app, there are plenty of places
where you're accidentally relying on internet access. Some of my
favourites:

* You've copied and pasted the Google Analytics/UserVoice/whatever JavaScript
  snippet into your page. When you're offline, that script won't load until the network times out, and
  so the browser's page load event doesn't get fired until 30 seconds later. But all your funky
  graphical effects only get initialised when the page is fully loaded, and suddenly you have no
  animations, no Ajax, nothing! It's almost like the 1990s!
* You want to demonstrate clicking a link from an email, which opens a particular
  feature in your application; however, that email you sent to the test account contains the
  production site's URL, not the address on your local machine.
* You are relying on hostnames provided by a DNS server on another network.
* Some easily forgotten part of your infrastructure (your mail server, memcached,
  message queue, mashed-up web service, ...) is not on your own machine.
* Your Delicious Bookmarks Firefox extension (or other) tries to connect to its home
  server via an SSL connection. Since you're a new guest to the network, the wireless access point
  intercepts the connection and inserts its own login page; of course its SSL certificate is invalid
  though. The result? An annoying SSL certificate warning dialog which pops out of nothing every two
  minutes.


To make sure your application works offline, fully disconnect the network on
your laptop (or even better: go to a café with a dodgy public WiFi that intercepts SSL!), clear
your browser cache, and make sure every step of your demo still works flawlessly. Make sure you
leave enough preparation time to fix things that don't work -- it took me the best part of a day to
make Go Test It work without an internet connection! And I had to use, believe it or not, various
entries in my `/etc/hosts` file and even an `ssh` tunnel to localhost (for remapping ports).
Yes, a bit crazy, but it worked.

In the demo night on Thursday we actually had the projector problem rather than the internet problem. But
you're on the web, right? It shouldn't be hard for you to demonstrate your application on someone
else's computer. Even the hardware guys, mbed and CamVine, pulled off their demos smoothly using a
computer they had never touched before!


**3. Make it 100% reproducible**

An interesting demo
probably involves manipulating data somehow, and once data has been manipulated, it usually doesn't
like going back into the state it previously was.

You, however, should be able to run your demo
several times, doing exactly the same steps each time. That means after each run of your demo, you
need a way of quickly and reliably getting back to square one. And of course you need a well-defined
square one in the first place.

Your development database will probably contain lots of edge-cases:
excessively long strings, weird international characters, and other oddities from the times when
you've been testing error handling. That's not what your typical user's data would look like, so I
suggest having a separate database for demo purposes, with selected and nice representative example
data.

Then you must write down the steps for getting back to the starting state you expect at the
start of your demo: the database records you need to delete or add, the files you need to restore,
the sessions from which you need to log out, the cookies which you need to clear. Or even write a
shell script to do that for you. The last thing you'd want is that you can't demonstrate a key
feature of your application because some old data from your last trial run got stuck in
there!

Another thing which you should write down, if you haven't already, is exactly how to get
your development environment up and running after a reboot. For a full
[Go Test It](http://go-test.it/) development setup I need about a dozen terminal windows open, each
running a different process with an arcane command line, each providing a different part of our
infrastructure puzzle. When I'm under stress I probably won't remember every command correctly. They
are all documented, of course -- on our wiki, which is only accessible on the web. Print it off
beforehand.


**4. Clean laptop setup**

If you're anything like me, you'll have tons of files on
your desktop, a whole host of applications running, alerts popping up from time to time, and more.
Some of this might be confidential. None of this should be appearing on the large projected image of
your screen.

The easiest solution, I find, is to have a separate system user account to which I log
in only for demos. It is stripped down to the minimum:

* blank desktop,
* menus only contain the apps which are absolutely required,
* no unnecessary Firefox extensions (see the Delicious problems above),
* screensaver disabled.

When using the second user account, you can still
stay logged in to your primary account at the same time, and have all your terminal windows and
stuff open there. It makes sense though to shut down all applications which are not required for the
demo: TweetDeck, for example, is a notorious memory hog, and it would be a shame if one of the pages
in your demo suddenly takes 10 seconds to load because a shortage of memory caused Firefox, your
application server or your database to be paged out to disk.

Also keep in mind that projectors typically have a resolution of 1024x768 -- make sure you've
tested in advance what your website looks like at that width.

If you need to press arcane key combinations on your laptop to enable an
external monitor, make sure you know exactly what those keys are, and that you've tried them
beforehand.


**5. And now, enjoy it**

With all that preparation, there is nothing which could
possibly go wrong. Sit back, take a deep breath and relax. Public speaking is an honour and a
privilege, something to be enjoyed and relished, not something to be nervous about. Do your best to
be focussed and relaxed, speak loudly and clearly, and smile at your audience. And it will work like
a charm.
