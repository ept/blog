---
layout: ync-post
title: "Bug trackers and version control"
---

I believe strongly that teams of software engineers should have good tools which help to manage the
development process (as a minimum, bug tracking and version control of source code). We use
[Subversion](http://subversion.tigris.org/) and
[FogBugz](http://www.fogcreek.com/FogBUGZ/), but there are lots of other good tools too. These tools
get particularly useful when connected, so that it's possible to see e.g. which changes were made to
the code in order to fix a particular bug.

The usual way of connecting version control and issue
tracking is that developers must enter a bug number every time they make a commit to the source code
repository. And because most version control systems don't foresee integration with a bug tracker,
this is usually this is just a special string in the commit message ("BUG:12345"). A bit ugly, but
works.

A neater way of doing this, for users of  [Subclipse](http://subclipse.tigris.org/) or
[TortoiseSVN](http://tortoisesvn.tigris.org/), is to set a few magic properties in the base
directory of your project. These graphical front-ends detect the presence of those properties and
add a separate input box for the bug number to the commit dialog. The number entered there just gets
translated into a line in the commit message, so it's nothing magic, but it helps as a reminder to
put in the bug number, and avoids having to remember the syntax for the bug reference (was it
"Bug:12345" or "Bug#12345"?).

Full details of
[this 'bugtraq' convention are described on the "svn commit ./me"
blog](http://markphip.blogspot.com/2007/01/integrating-subversion-with-your-issue.html).

Here's what it looks like:

<p><a
href="/2008/07/screenshot.png"><img class="size-medium wp-image-95" title="Screenshot of bug
tracker, subversion and eclipse integration" src="/2008/07/screenshot.png" alt="Screenshot of
bug tracker, subversion and eclipse integration" width="300" height="272" /></a></p>
