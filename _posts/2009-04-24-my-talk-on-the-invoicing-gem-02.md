---
layout: ync-post
title: "My talk on the Invoicing Gem 0.2"
---

<p>On Monday I did a talk in front of 80 or so of London's finest Ruby developers at
[LRUG](http://lrug.org/), to present the new v0.2 release of the
[Ruby invoicing gem](http://ept.github.com/invoicing/). The main new feature of this release is a
[Rails generator script](http://rubigen.rubyforge.org/) which can be invoked with
<code>script/generate invoicing_ledger</code> in the root directory of a Rails project. This
generates a default set of model objects, a database migration, a controller, views and some routes;
enough to get started with using the gem's features very quickly.</p>

Note that the Invoicing Gem still
isn't Rails-specific -- although the generator currently only works with Rails controllers and
templates, the core of the gem depends only on ActiveRecord and can be used with framework
components of your choice.

To demonstrate just quite how quickly the invoicing gem allows you to
add commercial features to your application I decided that it would be a good idea to have no
slides, but to spend the entire 25 minutes I was allocated to give a live demo. That is rather scary
for a speaker because a million things can go wrong (and indeed several things did), but with a
forgiving audience it ended up also being a lot of
fun.

[Skills Matter](http://skillsmatter.com/), who host the LRUG events, kindly
[recorded the talk and put it online](http://skillsmatter.com/podcast/ajax-ria/invoicing-gem). I
have also embedded the video
below:

<object width="550px"
height="512px">
<param name="allowfullscreen" value="true"
/>
<param name="allowscriptaccess" value="always"
/>
<param name="movie"
value="http://vimeo.com/moogaloop.swf?clip_id=4279902&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1"
/>
<embed
src="http://vimeo.com/moogaloop.swf?clip_id=4279902&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1"
type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="550px"
height="512px"></embed>
</object>

It's a bit hard to see exactly what I'm typing in that video, but
you can follow the exact steps from
[the notes I wrote myself for that
presentation](http://ept.github.com/invoicing/2009/04/21/invoicing-0-2-generator.html), and the
example application I used,
[*cracktastic*, is also on GitHub](http://github.com/ept/cracktastic).

I have the feeling that I
still need a lot of practise to improve my public speaking, but it's not too dreadful either.
