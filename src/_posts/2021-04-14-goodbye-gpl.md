---
layout: ync-post
title: It's time to say goodbye to the GPL
---

The trigger for this post is the
[reinstating](https://www.fsf.org/news/statement-of-fsf-board-on-election-of-richard-stallman)
of Richard Stallman, a very [problematic character](https://rms-open-letter.github.io/), to the
board of the [Free Software Foundation](https://www.fsf.org/) (FSF). I am appalled by this move, and
join others in the call for his removal.

This occasion has caused me to reevaluate the position of the FSF in computing. It is the steward of
the GNU project (a part of Linux distributions,
[loosely speaking](https://www.gnu.org/gnu/incorrect-quotation.en.html)), and of a family of
software licenses centred around the
[GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License) (GPL). These
efforts are unfortunately tainted by Stallman's behaviour. However, this is not what I actually want
to talk about today.

In this post I argue that we should move away from the GPL and related licenses (LGPL, AGPL), for
reasons that have nothing to do with Stallman, but simply because I think they have failed to
achieve their purpose, and they are more trouble than they are worth.

First, brief background: the defining feature of the GPL family of licenses is the concept of
[copyleft](https://en.wikipedia.org/wiki/Copyleft), which states (roughly) that if you take some
GPL-licensed code and modify it or build upon it, you must also make your modifications/extensions
(known as a "[derivative work](https://en.wikipedia.org/wiki/Derivative_work)") freely available
under the same license. This has the effect that the GPL'ed source code cannot be incorporated into
closed-source software. At first glance, this seems like a great idea. So what is the problem?

The enemy has changed
---------------------

In the 1980s and 1990s, when the GPL was written, the enemy of the free software movement was
Microsoft and other companies that sold closed-source ("proprietary") software. The GPL intended to
disrupt this business model for two main reasons:

1. Closed-source software cannot easily be modified by users; you can take it or leave it, but you
   cannot adapt it to your own needs. To counteract this, the GPL was designed to force companies to
   release the source code of their software, so that users of the software could study it, modify
   it, compile and use their modified version, and thus have the freedom to customise their
   computing devices to their needs.
2. Moreover, GPL was motivated by a desire for fairness: if you write some software in your spare
   time and release it for free, it's understandable that you don't want others to profit from your
   work without giving something back to the community. Forcing derivative works to be open source
   ensures at least some baseline of "giving back".

While this made sense in 1990, I think the world has changed, and closed-source software is no
longer the main problem. **In the 2020s, the enemy of freedom in computing is cloud software** (aka
software as a service/SaaS, aka web apps) -- i.e. software that runs primarily on the vendor's
servers, with all your data also stored on those servers. Examples include Google Docs, Trello,
Slack, Figma, Notion, and many others.

This cloud software may have a client-side component (a mobile app, or the JavaScript running in
your web browser), but it only works in conjunction with the vendor's server. And there are lots of
problems with cloud software:

- If the company providing the cloud software goes out of business or decides to
  [discontinue a product](https://killedbygoogle.com/), the software stops working, and you are
  locked out of the documents and data you created with that software. This is an especially common
  problem with software made by a startup, which may get
  [acquired by a bigger company](https://ourincrediblejourney.tumblr.com/) that has no interest in
  continuing to maintain the startup's product.
- Google and other cloud services may
  [suddenly suspend your account](https://twitter.com/Demilogic/status/1358661840402845696) with no
  warning and [no recourse](https://www.paullimitless.com/google-account-suspended-no-reason-given/),
  for example if an automated system thinks you have violated its terms of service. Even if your own
  behaviour has been faultless, someone else may have hacked into your account and used it to send
  malware or phishing emails without your knowledge, triggering a terms of service violation. Thus,
  you could suddenly find yourself permanently locked out of every document you ever created on
  Google Docs or another app.
- With software that runs on your own computer, even if the software vendor goes bust, you can
  continue running it forever (in a VM/emulator if it's no longer compatible with your OS, and
  assuming it doesn't need to contact a server to check for a license check). For example, the
  Internet Archive has a collection of
  [over 100,000 historical software titles](https://archive.org/details/softwarelibrary) that you
  can run in an emulator inside your web browser! In contrast, if cloud software gets shut down,
  there is no way for you to preserve it, because you never had a copy of the server-side software,
  neither as source code nor in compiled form.
- The 1990s problem of not being able to customise or extend software you use is aggravated further
  in cloud software. With closed-source software that runs on your own computer, at least someone
  could reverse-engineer the file format it uses to store its data, so that you could load it into
  alternative software (think pre-[OOXML](https://en.wikipedia.org/wiki/Office_Open_XML) Microsoft
  Office file formats, or Photoshop files before the
  [spec](https://www.adobe.com/devnet-apps/photoshop/fileformatashtml/) was published). With cloud
  software, not even that is possible, since the data is only stored in the cloud, not in files on
  your own computer.

If all software was free and open source, these problems would all be solved. However, making the
source code available is not actually necessary to solve the problems with cloud software; even
closed-source software avoids the aforementioned problems, as long as it is running on your own
computer rather than the vendor's cloud server. Note that the Internet Archive is able to keep
historical software working without ever having its source code: for purposes of preservation,
running the compiled machine code in an emulator is just fine. Maybe having the source code would
make it a little easier, but it's not crucial. The important thing is having a copy of the software
**at all**.

Local-first software
--------------------

My collaborators and I have previously argued for
[local-first software](https://www.inkandswitch.com/local-first.html), which is a response to these
problems with cloud software. Local-first software runs on your own computer, and stores its data on
your local hard drive, while also retaining the convenience of cloud software, such as real-time
collaboration and syncing your data across all of your devices. It is nice for local-first software
to also be open source, but this is not necessary: 90% of its benefits apply equally to
closed-source local-first software.

Cloud software, not closed-source software, is the real threat to software freedom, because the harm
from being suddenly locked out of all of your data at the whim of a cloud provider is much greater
than the harm from not being able to view and modify the source code of your software. For that
reason, it is much more important and pressing that we make local-first software ubiquitous. If, in
that process, we can also make more software open-source, then that would be nice, but that is less
critical. Focus on the biggest and most urgent challenges first.

Legal tools to promote software freedom
---------------------------------------

Copyleft software licenses are a legal tool that attempts to force more software vendors to release
their source code. In particular, the
[AGPL](https://en.wikipedia.org/wiki/Affero_General_Public_License) is an attempt to force providers
of cloud services to release the source of their server-side software. However, this hasn't really
worked: most vendors of cloud software simply refuse to use AGPL-licensed software, and either use
a different implementation with a more permissive license, or re-implement the necessary
functionality themselves, or
[buy a commercial license](https://www.elastic.co/pricing/faq/licensing) that comes without the
copyleft clauses. I don't think the license has caused any source code to become available that
wouldn't have been open source anyway.

As a legal tool to promote greater software freedom, I believe copyleft software licenses have
largely failed, since they have done nothing to stop the rise of cloud software, and probably not
done much to increase the share of software whose source is available. Open source software has
become very successful, but much of this success is in projects with non-copyleft licenses (e.g.
Apache, MIT, or BSD licenses), and even in the GPL-licensed projects (e.g. Linux) I am skeptical
that the copyleft aspect was really an important factor in the project's success.

I believe a much more promising legal tool to promote software freedom is in government regulation.
For example, the GDPR includes a
[right to data portability](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/right-to-data-portability/),
which means that users must be able to move their data from one service to another. Existing
implementations of portability, such as
[Google Takeout](https://en.wikipedia.org/wiki/Google_Takeout), are quite rudimentary (what can you
really do with a big zip archive of JSON files?), but we can lobby regulators to
[push for better portability/interoperability](https://interoperability.news/), e.g. requiring
real-time bidirectional sync of your data between two apps by competing providers.

Another promising route I see is pushing
[public-sector procurement to prefer open source, local-first software](https://joinup.ec.europa.eu/sites/default/files/document/2011-12/OSS-procurement-guideline%20-final.pdf)
over closed-source cloud software. This creates a positive incentive for businesses to develop and
maintain high-quality open source software, in a way that copyleft clauses do not.

You might argue that a software license is something that an individual developer can control,
whereas governmental regulation and public policy is a much bigger issue outside of any one
individual's power. Yes, but how much impact can you really have by choosing a software license?
Anyone who doesn't like your license can simply choose not to use your software, in which case your
power is zero. Effective change comes from collective action on big issues, not from one person's
little open source side project choosing one license over another.

Other problems with GPL-family licenses
---------------------------------------

You can force a company to make their source code of a GPL-derived software project available, but
you cannot force them to be good citizens of the open source community (e.g. continuing to maintain
the features they have added, fixing bugs, helping other contributors, providing good documentation,
participating in project governance). What worth is source code that is just "thrown over the wall"
without genuine engagement in the open source project? At best it's worthless, and at worst it's
harmful because it shifts the burden of maintenance to other contributors of the project.

We need people to be good contributors to the open source community, and this is achieved by setting
up the right incentives and by being welcoming, not by software licenses.

Finally, a practical problem of GPL-family licenses is their
[incompatibility with other widely-used licenses](http://gplv3.fsf.org/wiki/index.php/Compatible_licenses),
making it difficult to use certain combinations of libraries in the same project and unnecessarily
fragmenting the open source ecosystem. Maybe it would be worth putting up with this problem if the
GPL had other strong advantages, but as I have explained, I don't think those advantages exist.

Conclusion
----------

The GPL and other copyleft licenses are not bad; I just think they're pointless. They have practical
problems, and they are tainted by the behaviour of the FSF, but most importantly, I do not believe
they have been an effective contributor to software freedom. The only real use for copyleft nowadays
is by commercial software vendors
([MongoDB](https://www.mongodb.com/licensing/server-side-public-license/faq),
[Elastic](https://www.elastic.co/pricing/faq/licensing)) who want to stop Amazon from providing
their software as a service -- which is fine, but it's motivated purely by business concerns, not by
software freedom.

Open source software has been tremendously successful, and it has come a long way since the origins
of the free software movement born from 1990s anti-Microsoft sentiment. I will acknowledge that the
FSF was instrumental in getting this all started. However, 30 years on, the ecosystem has changed,
but the FSF has failed to keep up, and has
[become more and more out of touch](https://r0ml.medium.com/free-software-an-idea-whose-time-has-passed-6570c1d8218a).
It has failed to establish a coherent response to cloud software and other recent threats to
software freedom, and it just continues to rehash tired old arguments from decades ago. Now, by
reinstating Stallman and dismissing the concerns about him, the FSF is
[actively harming](https://lu.is/blog/2021/04/07/values-centered-npos-with-kmaher/) the cause of
free software. We must distance ourselves from the FSF and their worldview.

For all these reasons, I think it no longer makes sense to cling on to the GPL and copyleft. Let
them go. Instead, I would encourage you to adopt a permissive license for your projects (e.g.
[MIT](https://opensource.org/licenses/MIT), [BSD](https://opensource.org/licenses/BSD-2-Clause),
[Apache 2.0](https://opensource.org/licenses/Apache-2.0)), and then focus your energies on the
things that will really make a difference to software freedom:
[counteracting](https://www.inkandswitch.com/local-first.html) the monopolising effects of cloud
software, developing sustainable business models that allow open source software to thrive, and
pushing for regulation that prioritises the interests of software users over the interests of
vendors.

*Thank you to [Rob McQueen](https://ramcq.net/) for feedback on a draft of this post.*
