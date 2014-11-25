---
layout: talk
title: Ruby Invoicing Framework Gem
venue: London Ruby User Group (LRUG)
place: London, UK
venue_url: http://lrug.org/meetings/2009/03/
video_url: https://skillsmatter.com/skillscasts/666-invoicing-gem
---

This talk at [LRUG](http://lrug.org/) presented the v0.2 release of the
[Ruby invoicing gem](http://ept.github.com/invoicing/). The main new feature of this release is a
[Rails generator script](http://rubigen.rubyforge.org/) which can be invoked with
`script/generate invoicing_ledger` in the root directory of a Rails project. This
generates a default set of model objects, a database migration, a controller, views and some routes;
enough to get started with using the gem's features very quickly.

To demonstrate just quite how quickly the invoicing gem allows you to add commercial features to
your application I decided that it would be a good idea to have no slides, but to spend the entire
25 minutes I was allocated to give a live demo. That is rather scary for a speaker because a million
things can go wrong (and indeed several things did), but with a forgiving audience it ended up also
being a lot of fun.

[Skills Matter](http://skillsmatter.com/), who host the LRUG events, kindly
[recorded the talk and put it online](http://skillsmatter.com/podcast/ajax-ria/invoicing-gem).
It's a bit hard to see exactly what I'm typing in that video, but you can follow the exact steps from
[the notes I wrote myself for that presentation](http://ept.github.com/invoicing/2009/04/21/invoicing-0-2-generator.html),
and the example application I used, [*cracktastic*, is also on GitHub](http://github.com/ept/cracktastic).
