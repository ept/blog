---
layout: ync-post
title: "Flickr API security weakness, and thoughts about web APIs in general"
disqus: true
---

I am in the process of uploading my entire digital photo archive to
[my Flickr account](http://flickr.com/photos/martinkleppmann/). This is a fairly big job as I have
collected over 10,000 digital photos since 2001; prior to uploading they were sorted into a
hierarchy of folders with copies on several different hard drives. I tried a few different
applications for uploading to Flickr, but none really did what I wanted -- I want to:

* map folder names to Flickr photosets and/or tags,
* be able to pause and resume the upload process (since it takes days and days to upload so many photos),
* use the right sorting order,
* deal sensibly with failures (using a retry schedule, giving up up after a number of
  unsuccessful attempts).

Eventually I came to the conclusion that I will just have to
[write my own Flickr uploader (uploadr) script](http://github.com/ept/uploadr.py/tree/master) (not
yet finished; currently based on
[Cameron Mallory's uploadr.py](http://berserk.org/uploadr/), although maybe I should be using
[Python Flickr API kit](http://stuvel.eu/projects/flickrapi) instead) and make the source available
so that I (and others with specialist upload requirements) can just customise it as we wish.

Anyway, that's why I've been playing around with the
[Flickr API](http://www.flickr.com/services/api/). I reckon the API has contributed significantly to
Flickr's success, because it makes it feasible for third parties to provide a huge variety of tools,
all of which add value to Flickr as a platform (and
[being a popular platform for developers is incredibly valuable](http://www.joelonsoftware.com/articles/APIWar.html)).
And at first I thought it was a
really neat API: you don't need to give out your password (which would put you at risk of someone
else storing it insecurely); you can choose to which applications you want to grant access your
data, and revoke that permission later; you can even choose between different levels of permission
(read-only, read-write without delete, read-write with delete).

Good authentication of access is
incredibly important. Imagine somebody managed to break into my account (which contains only
harmless photos of friends, family and holidays) and went on to post child pornography pictures. I
don't even want to think about it. If they were technically competent, they would maybe do so from a
public wireless network and fake their network card's MAC address. Then it would be hard for me to
prove that it wasn't me, and that would mean **serious trouble**. Therefore access to my account
must be safe.

[Flickr Uploadr](http://www.flickr.com/tools/uploadr/) is Flickr's official desktop
application for uploading photos. I stopped using it a while ago (since it lacks the features
described above), but I imagine it must be quite popular. So today, while playing around with the
Flickr API, I wondered how Uploadr authenticated itself. Of course, when you first launch it, you
get a page in your web browser on which you need to confirm that you want to let Uploadr upload
pictures to your account.

How does Flickr know that a particular file upload is coming from the
real Uploadr application? That is ensured by
[signing each API request with a secret key](http://www.flickr.com/services/api/auth.spec.html#signing).
The secret key is a 64-bit number,
usually written as 16 hex digits. And where is that secret key stored? Naturally, somewhere within
the Flickr Uploadr application itself. If you download Uploadr, that secret is somewhere on your own
hard drive.

Curious as I am, I searched for hex strings within the application binaries:

{% highlight bash %}
cd /Applications/Flickr\ Uploadr.app/
for file in `find . -type f`; do
  strings $file | grep -Ei '[0-9a-f]{16}'
done
{% endhighlight %}

In the output you can easily spot the
application's API key (a5c4c07991a15c6b56b88005a76e7774) -- a 128-bit number which also uniquely
identifies the application, but isn't secret. (Extra points if you can guess correctly how many
times the string '0123456789abcdef' is found. ;-) ) There's no 64-bit number which looks like it
might be the secret. However, with a small amount of experimentation I was also able to find the
secret in the binaries. I won't give it away here, but it should be a simple exercise for anybody
who [knows regular expressions](http://xkcd.com/208/).

The secret could have easily been hidden better
(e.g. by XORing with another binary string), but that's not the point. You could still find it with
a debugger, it might just take a few hours instead of a few minutes. If somebody wants to, they can
find the secret. And this applies to any other downloadable application just as much as it does to
Uploadr.

I am not the first person to discover the secret key in Flickr Uploadr --
[Ian McKellar independently discovered it a few weeks ago](http://ianloic.com/2009/01/05/no-more-secrets/),
using a different method. (Also read the comments below, where
[Richard](http://rcrowley.org/) and [Cal](http://www.iamcal.com/) from Flickr have replied.)

Knowing a popular application's secret
doesn't automatically give you access to the accounts to everybody who has authorised that
application, but it does bring you a lot closer. What you would still need to do is to trick users
into authorising a user token (a 'frob' in Flickr lingo) for that application. For example, this
could be done with a fake email appearing to come from Flickr, containing a link to the
authorisation page, or by redirection from some other site. On the surface it wouldn't look much
like a typical
[phishing email](http://en.wikipedia.org/wiki/Phishing): the link would genuinely point to
flickr.com and Flickr would simply be asking you whether you want to authorise Flickr Uploadr. Users
may pause and wonder for a moment, but if they have previously already authorised Uploadr, there's
hardly a reason why they should smell a rat. (At least that's what I expect. I have not tried it on
other people, and I'm not going to since that would be *wrong*.)

Alternatively, if you can sniff
the traffic from another user using the real Uploadr, you can just steal their previously
authenticated user token, since it is transmitted in the clear. However, if you are in a position to
sniff traffic, all bets are off anyway (you could simply
[steal their session cookie](http://en.wikipedia.org/wiki/Session_hijacking)).

The question is, of course, how to fix it?

* Ian [proposed an approach to authorisation](http://ianloic.com/2009/01/05/a-different-model-for-web-services-authorization/)
in which users explicitly authenticate actions, not applications; any changes made by an application
will first be placed in a kind of 'quarantine' area, and will only be published if authorised by the
user through a trusted channel (the website). In theory I think this is a good idea, but it has some
shortcomings: an additional step for the user, making it impractical for fast operations (such as a
Twitter update) and harming the user experience; and a significant amount of additional engineering
required on the site's side to implement the 'quarantine' area.

* A variant of Ian's idea would be to allow easy undoing of changes made by a
particular application during a particular time period. It would require a similar kind of
versioning of data. This isn't so much useful for preventing attacks, but it may be a good answer to
buggy third-party applications which might mess up your data. For example, a while ago I tried
synchronising contacts from my phone with [Highrise](http://www.highrisehq.com/) using
[Soocial](http://www.soocial.com/). It all went horribly wrong, and it would have been very useful
if I could have just rolled back the changes inflicted on my data by Soocial.

* My first suggestion to fix the Flickr security it is a fairly simple one, and
doesn't require major changes on Flickr's side: instead of coding the secret key into the
application, application developers should require that users apply for their own key, and ask them
to copy that key into the application's configuration. This effectively turns the application key
into a user key. It's not quite the way Flickr intended API keys to be used; applicants for API keys
are currently asked to write a paragraph or two of text to justify why they want one, and commercial
users may be unable to get a key. However, unless the current frob authentication mechanism is
switched off, users remain vulnerable to the same phishing risk as before. The user experience isn't
great either.

* If you are designing a new API, I would suggest a simpler authentication
mechanism: it should not be possible for applications to request tokens themselves; authentication
tokens should be produced only at the explicit request of a user, only via a trusted channel (the
website), and explicitly copied and pasted into the application by the user. I think this is
acceptable from the user experience perspective: it has a physical counterpart (e.g. giving your
friend a key to your house: an explicit transfer of key), it's familiar from serial numbers, and may
make people think for a moment longer about the permissions they are passing on to third parties. I
would still allow multiple keys for multiple different applications, to make them
revocable.

* My final suggestion is more of a comment about security awareness. Many
computer users, even the not fully tech literate, are learning to watch out for phishing emails;
today's lesson is that the reality is even more complicated. Even if the link points to the right
domain, even if it's using SSL, and even if all looks right on the page, it still doesn't meen that
it's safe.
