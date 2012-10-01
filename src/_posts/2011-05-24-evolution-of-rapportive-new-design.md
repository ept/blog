---
layout: ync-post
title: Evolution of Rapportive's new design
---

*This is a re-post from the [Rapportive blog](http://blog.rapportive.com/53827077).*

Today we are launching a new design for Rapportive. We put a huge amount of effort into this design,
because we all believe deeply great user experience, and we know that our users really appreciate it
too.

Here it is (best viewed fullscreen):

<iframe width="549" height="309" src="http://www.youtube.com/embed/DPaSxa2vopU" frameborder="0" allowfullscreen="allowfullscreen">
  <a href="http://www.youtube.com/watch?v=DPaSxa2vopU">View on YouTube</a>
</iframe>

In this post I'd like to explain some of our process and thinking in the creation of the new design.

Our old design, which we had [since launch](http://blog.rapportive.com/the-accidental-launch), has
served us very well. It was subtle, simple, effective, and blended in well with Gmail.
Unfortunately, it was beginning to show some limitations:

1. If you're using Gmail on a small screen, on a laptop or even a netbook, the Rapportive sidebar
   would often be too tall to fit on screen. Of course you can scroll down, but the main Gmail
   scrollbar is already used to scroll down in the conversation. We hooked into the page scrolling,
   but if you were on a long conversation, you had to scroll all the way to the bottom of the
   conversation if you wanted to see the rest of the Rapportive sidebar. That was really annoying.
2. Over the months we've been adding more and more useful stuff to the sidebar:
   [phone numbers](http://blog.rapportive.com/address-book-inbox-together-at-last),
   [Facebook status updates](http://blog.rapportive.com/40551428),
   [LinkedIn invitations](http://blog.rapportive.com/grow-your-network-with-rapportive), and a choice of
   [Raplets](http://raplets.com/) for a
   [variety of](http://thenextweb.com/apps/2010/04/29/rapportive/)
   [different](http://blog.rapportive.com/get-out-of-your-inbox-and-meet-people-in-pers)
   [purposes](http://blog.rapportive.com/rapportive-for-developers-bitbucket-github-st).
   This has pushed the previous design to its limits: some profiles would become unmanageably tall.
3. Different people find different parts of the sidebar useful. Some find [recent
   tweets](http://twitter.com/GraemeF/status/25286282993213440) most useful, others swear by our
   [CRM raplets](http://twitter.com/smsbnyc/status/40436337681104896), others again leave [lots of
   notes](http://twitter.com/nickcernis/status/15001395635691520) about their contacts.  But it
   sucks if the thing you're most interested is often scrolled off the bottom of the screen because
   the things higher up in the sidebar are taking all the space.

These three points have a common theme: we do not handle long sidebars well.

How long can a sidebar get? Well, here's my sidebar, with the CrunchBase and the MailChimp Raplets:

<p style="text-align: center">
  <img src="/2011/05/tall_profile.png" alt="Example of very tall Rapportive profile" width="230" height="1361"/>
</p>

As we add more features to Rapportive, these problems would only get worse, so we decided that it
was time to rethink our design.


Our design principles
---------------------

We had several guiding principles for the redesign. Rapportive should:

* Remain very subtle and unobtrusive: Rapportive should be there for you when you want it, but
  should not try to grab your attention or use more space than necessary. Your *email* is what's
  important, not the sidebar!
* Allow you to serendipitously discover things about your contacts: the information should simply be
  there when you glance at the sidebar, and shouldn't require a lot of clicking or scrolling.
* Look good on both large and small screens, both with lots of data and little data. That means it
  has to make efficient use of screen space.
* Avoid configuration dialogs. The interface should just do the right thing.
* Be clear, obvious to use, beautiful and *enjoyable* to interact with :)

Buttons
-------

First of all, I started with some graphical tweaking. Here are some nice buttons:

<p style="text-align:center">
<a href="/2011/05/connect_buttons.png"><img src="/2011/05/connect_buttons.png"
alt="Different sylings for 'add friend'/'connect' buttons"/></a>
</p>


How do we handle long sidebars?
-------------------------------

Our first thought: we could simply give the Rapportive sidebar its own scrollbar. That would avoid
having to scroll down to the bottom of a long conversation, because you could scroll the sidebar
separately. But that approach is pretty bad. A large part of the sidebar may still end up being
hidden off-screen, which means you have to go out of your way to scroll down, making it unlikely
that you'll discover things serendipitously.

Another idea that we ruled out quickly was a 'tabbed' interface. Tabs work well in a browser, where
you have exactly one web page per tab, and each tab is independent. Rapportive isn't like that: we
might have several pages of information for one person (i.e. the tabs aren't independent), and while
we have several full tabs for one person, the information for another person might be a lot more
sparse. That means that either you have to either have to waste a lot of space (e.g. always have a
tab for tweets, even if the person doesn't have a Twitter account), or you have things appearing in
different places for different people (which is confusing). Finally, tabs require a lot of laborious
clicking: you can't see what's in a tab without clicking it, and you can't see the contents of two
tabs at the same time. Tabs would have been an unpleasant, clunky interface.

An 'accordion' interface, like you find in Outlook for example, seemed like a step in a more
promising direction:

<p style="text-align:center">
<a href="/2011/05/accordion.png"><img src="/2011/05/accordion.png" alt="Accordion interface example" /></a>
</p>

You can have several sections, and each section can expand to show additional information when you
click it. When you expand one section, another one collapses to make room.  (In the screenshot
above, I could click 'Contacts' to see my list of contacts; the list of mailboxes under the 'Mail'
heading would be hidden to make room for the list of contacts.)

Accordions are fairly efficient when space is very limited, but they suck if you have a large
screen. If you have enough space that all your sections could be comfortably expanded side-by-side,
why limit it to only one expanded section at a time? I don't want to have to click a section to see
what's inside. It's the same problem as with tabs.

So I started experimenting with a kind of adaptive accordion which could have several sections
expanded at the same time, if there was enough screen space available. Here are some early design
ideas:

<p style="text-align:center">
<a href="/2011/05/section_headings.png"><img src="/2011/05/section_headings.png" width="550"
alt="Three designs for separators/headings between sidebar sections"/></a>
</p>

The designs were fairly ugly, but I could see an algorithm emerging here. I figured that we needed
an accordion with the following improvements:

* It should be possible for several sections to be expanded at the same time, up to a maximum of
  what will fit on screen without scrolling.
* When you expand a section, other sections may need to collapse in order to make space on screen.
  The application should be intelligent about which sections to collapse -- for example, if you
  haven't clicked a section in a long time, you probably find it less useful than a section which
  you clicked just now. So we should keep the recently-used sections expanded, if possible.
* The collapsed version of a section should be useful too; for example, the collapsed Twitter
  section could show just the username, whereas the expanded version could show the username and
  three most recent tweets. If the contact doesn't have a Twitter account, we shouldn't show the
  section at all, since it would just be a waste of space.
* Sometimes a section gets very tall, for example a Facebook status with lots of comments. In that
  case, we need to limit the section's height and give it a scrollbar, to avoid it dominating the
  entire sidebar. But if we can avoid scrollbars, we should do without.

Even scrollbars, despite being such a standard part of user interface design, have their problems:

<p style="text-align:center">
<a href="/2011/05/scrolling.png"><img src="/2011/05/scrolling.png" alt="Misalignment of text due to scrollbar spacing"/></a>
</p>

Fortunately such spacing issues are easy to iron out. A harder question is: how do we communicate to
the user that they can expand a section?


Expandable sections
-------------------

In the old design, if you clicked someone's Twitter username, we would open up a new browser tab to
show their tweet stream. In an accordion design, however, you'd expect that clicking the collapsed
section will cause it to expand (i.e. show recent tweets, not open a new browser tab). Do we break
the old interaction and force users to learn a new behaviour, or do we add an extra button for
expanding a section?

<p style="text-align:center">
<a href="/2011/05/expand1.png"><img src="/2011/05/expand1.png" alt="Up/down arrow button to trigger expansion of a section"/></a>
</p>

That was my first attempt. The arrows serve two purposes: to indicate that the section can be
expanded, and to act as a button to trigger the actual expanding. But I didn't like it. Some
sections would have arrows and others wouldn't (because we don't always have additional
information), so the "connect"/"add friend" buttons could become strangely misaligned. It also made
the interface look more cluttered and complicated.

Surely we could do better? For example, could we show the button for expanding a section only when
you hover over it? That's an interesting idea. What's more, we could then calculate how tall the
section would be if it was expanded, and indicate it with the height of the arrow:

<p style="text-align:center">
<a href="/2011/05/expand2.png"><img src="/2011/05/expand2.png" width="550"
alt="Large arrow when hovering mouse over expanded section; click the arrow to expand"/></a>
</p>

At this point we're really moving away from established user interface patterns. Will users notice
the arrow, and understand what it means? Will they figure out that you can click it? It contains a
lot of information: the fact that the section can be expanded, how big it will be and where it will
be placed when expanded. It's also a much bigger click target than the previous arrow button, which
is good. But it still has the problem of not looking particularly like a button. (It goes grey when
you hover over it, to indicate that you can interact with it, but still it's not exactly obvious.)

I was starting to get sick of this redesign, but fortunately, inspiration struck again. If we're
already using an arrow on hover to indicate how tall the expanded section will be, well... why don't
we use *the expanded section itself* to indicate how tall it will be? Yes, we can just show the
expanded section itself on hover!

<p style="text-align:center">
<a href="/2011/05/expand3.png"><img src="/2011/05/expand3.png" width="550"
alt="Showing the expanded version when hovering over a collapsed section"/></a>
</p>

It's obvious in retrospect, but it took a surprisingly long time to come up with this design. I call
it the ["genie"](http://en.wikipedia.org/wiki/Jinn_in_popular_culture) because it looks like a ghost
that has come out of an oil lamp.  Although the version above still isn't pretty, it really got to
the bottom of many of the challenges I discussed at the beginning:

* When you're not hovering your mouse over the sidebar, Rapportive remains minimalistic and
  uncluttered. No more buttons than necessary.
* If you're on a large screen, the sections of the sidebar expand to fill the screen space, so you
  can see everything at a glance. No need to click anything (unless you want to add them as a
  friend, of course).
* If you're on a smaller screen, we collapse your lesser-used sections to make them more compact; in
  most cases, this allows us to fit everything on screen without need for scrolling.
* When you're interacting with the sidebar, we allow Rapportive to pop up additional information
  outside of the sidebar. But we don't encroach on your email space when you're not interacting with
  the sidebar.
* The visual cues makes it pretty obvious that the expanded section is a bigger, more verbose
  version of the collapsed section. (I think it's a bit like a magnifying glass.)
* If there are several collapsed sections next to each other in the sidebar, you can skim the
  content of all of them by slowly moving the mouse across each of the collapsed sections. As the
  mouse moves from one section to another, the genie for the previous section disappears and the one
  for the new section appears. Wonderful for getting a quick overview of someone's online activity
  before you reply to their email.

Not all is great though. If there is space, we'd still like to show you the expanded section in the
sidebar right away, without you having to hover the mouse. But how do we make clear to users that
sections can be expanded?

In the screenshot above, I tried using a button with an arrow pointing right. If you clicked it, the
expanded section would slide into the sidebar, and the other sections would move out of the way to
make room. I liked the animation, but the button was ugly. Fortunately, Rahul had the idea that we
could use a right-pointing mouse cursor to indicate the same thing. So now you can click anywhere on
the genie and it will slide into the sidebar.

After some graphical tweaking, this is what the final design looks like:

<p style="text-align:center">
<a href="/2011/05/expand4.png"><img src="/2011/05/expand4.png" width="550"
alt="End result: Rapportive's new sidebar design with collapsible section"/></a>
</p>

I hope you'll agree that it is *gorgeous*. We have added very little new user interface (and we've
taken a lot away, compared to earlier designs), but the result is very effective. It fits neatly on
both big and small screens, it is easy to use, and it is actually lots of fun to play with. Give it
a try for yourself, and let us know what you think!

Usability without design is dreary. Design without usability is pretentious. Design and usability
together are delightful.
