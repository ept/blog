---
layout: ync-post
title: "Imitating the iPhone User Agent in Firefox"
---

There are a number of web sites out there which provide specifically optimised versions for the
iPhone. I was curious to test them (and to look at their source code to see what they are doing),
but don't have an iPhone myself. Many sites will only give a visitor the iPhone version of their
site if the web browser identifies itself as Safari Mobile. How do you get it?

The solution is the
"[user agent](http://en.wikipedia.org/wiki/User_agent)" -- a string sent by the web browser to the
server as part of every request. It contains the name and version of the browser software you are
using, the operating system, and a few other bits and pieces. It's a very useful piece of
information to website administrators, who can use it to compile anonymous statistics about the
people who visit their site.

Many people consider it to be bad practice to serve different versions
of a site depending on the user agent, but it happens often enough anyway. And that's exactly what
is going on here. Fortunately there are tools which will let you modify the user agent, so you can
see what you would get if you were using some other software. This is sometimes called
"masquerading" as another browser. The technique described here is for
[Firefox](http://www.mozilla.com/en-US/firefox/), but
[it's possible to do the same thing with other browsers
too](http://www.ericgiguere.com/articles/masquerading-your-browser.html).

<p>Download the
[User Agent Switcher add-on for Firefox](https://addons.mozilla.org/en-US/firefox/addon/59), and
restart Firefox. In the menu, go to Tools -&gt; User Agent Switcher -&gt; Options -&gt; Options. Add
a new user agent, with description "iPhone", and the following entry in the user agent
field:
<blockquote>Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like
Gecko) Version/3.0 Mobile/3B48b Safari/419.3</blockquote>
The remaining fields (app version etc.)
can stay empty. Now you can click Tools -&gt; User Agent Switcher -&gt; iPhone, and your browser
instantly "becomes" an iPhone. If the site uses features which are not available in Firefox, it will
not render correctly, but at least the site should serve you the same content as it would do to an
iPhone. (The user agent above is taken from a real iPhone; there are probably many others which work
too, but that one has worked for me.)</p>

One big caveat: you shouldn't really be doing this! Use it
only briefly for testing a site, then reset the user agent to the Firefox default. Otherwise you'll
end up sending the iPhone user agent to all other web sites you visit too, and that isn't good for
anybody. You may up being locked out of certain web sites or getting the wrong version, and
administrators of web sites will hate you because you mess up their statistics.

So please, please
reset the user agent to the default when you've finished testing.
