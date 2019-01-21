---
layout: twocolumn
title: You own your data, in spite of the cloud
unfurl_image: /2019/01/there-is-no-cloud.png
abstract: Cloud services centralise control over data, which is problematic.
  We can do better, without sacrificing the things that make cloud services so convenient.
---

<div class="introduction">
  <p>Cloud services centralise control over data, which is problematic.
  We can do better, without sacrificing the things that make cloud services so convenient.</p>

  <p>In this article we compare cloud services to “old-fashioned” software — software that is locally installed on your computer, and that stores its data in files on your local disk — and explore how we can get the best of both worlds.</p>

  <p>We welcome your thoughts, questions, or critique: contact <a href="https://twitter.com/inkandswitch">@inkandswitch</a> or <a href="mailto:hello@inkandswitch.com">hello@inkandswitch.com</a>.</p>
  <h2>Contents</h2>
  <ol class="contents">
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#the-problems-with-cloud-apps">The problems with cloud apps</a></li>
    <li><a href="#the-old-fashioned-way">The old-fashioned way</a></li>
    <li><a href="#getting-the-best-of-both-worlds">Getting the best of both worlds</a></li>
    <li><a href="#adding-real-time-collaboration-to-old-fashioned-apps">Adding real-time collaboration to old-fashioned apps</a></li>
    <li><a href="#changing-our-mindset">Changing our mindset</a></li>
  </ol>
</div>


Introduction
------------

<p class="has-aside">
It's amazing how easily we can collaborate online nowadays.
We use Google Docs to collaborate on documents, spreadsheets and presentations; we communicate with colleagues using Slack; we track tasks in Trello; and so on.
We depend on these and many other online services, e.g. for taking notes, planning projects or events, remembering contacts, and a whole raft of business applications.
</p>

<aside>
I will call these services “cloud apps”, but you could just as well call them “<a href="https://en.wikipedia.org/wiki/Software_as_a_service">SaaS</a>” or “web-based apps”.
What they have in common is that we typically access them through a web browser or through mobile apps, and that they store their data on a server.
</aside>

Today's cloud apps offer vast benefits over earlier generations of software: seamless collaboration, and being able to access data from any device, are very useful features.
As we run more and more of our lives and work through these cloud apps, they become more and more critical to us.
The more time we invest in using one of these apps, the more valuable the data in it becomes to us.

However, in our research we have spoken to a lot of creative professionals, and in that process we have also learnt about the downsides of cloud apps.

<p class="has-aside">
We have found that when someone has put a lot of creative energy and effort into creating something, they tend to have a deep emotional attachment to it.
Creative work is not just visual art, or music, or poetry: explaining a technical thing, implementing an intricate algorithm, designing a user interface, or figuring out how to lead a team towards some goal are just as much creative efforts.
</p>

<aside>
Our research on software that supports the creative process is discussed further in our articles
<a href="https://www.inkandswitch.com/capstone-manuscript.html">Capstone, a tablet for thinking</a> and
<a href="https://medium.com/@hirodusk/the-ipad-as-a-fast-precise-tool-for-creativity-21384ea18659">The iPad as a fast, precise tool for creativity</a>.
</aside>

In the process of performing that creative work, professionals produce files and data: documents, presentations, spreadsheets, code, notes, drawings, and so on.
And they want to keep that data: for reference and inspiration in the future, to include it in a portfolio, or simply to archive because they feel proud of it.
It is important to **feel ownership** of that data, because the creative expression is something so personal.

However, cloud apps are problematic in this regard: they don't let you really take ownership of your own data.
Let me explain.

<figure>
  <img src="/2019/01/there-is-no-cloud.png" alt="There is no cloud… it’s just someone else’s computer"/>
  <figcaption>“There is no cloud” motif borrowed from <a href="http://www.chriswatterston.com/blog/my-there-is-no-cloud-sticker">Chris Watterston</a>, redrawn by <a href="https://martin.kleppmann.com/">Martin Kleppmann</a>.</figcaption>
</figure>


The problems with cloud apps
----------------------------

Today's cloud apps have a number of serious shortcomings:

1. If the service is unavailable, you cannot use the software, and you can no longer access your data created with that software.
   This means you are betting that the creators of the software will continue supporting it for a long time -- at least as long as you care about the data.
   If you think you will still care about the data in 20 years' time, then that is how long you are betting the service will last.

   <p class="has-aside">
   Now, I don’t see a great danger of Google shutting down Google Docs anytime soon (although popular products <a href="https://en.wikipedia.org/wiki/Google_Reader">do sometimes get shut down</a>, so you never know).
   But with any software developed by a startup there is a significant danger of an “incredible journey” event.
   And even with long-lived software there is the risk that the pricing or features change in a way you don’t like, and with a cloud app, continuing to use the old version is not an option – you will be upgraded whether you like it or not.
   </p>

   <aside>
   <a href="https://ourincrediblejourney.tumblr.com/">Our incredible journey</a> is a blog that documents and mocks startup products getting shut down after an acquisition.
   The blog posts announcing such shutdowns often smugly remark that the staff of the startup had an “incredible journey” over the lifetime of the company, to the frustration of the users.
   </aside>

2. Today's cloud apps typically don't work very well offline.
   That is surprising, because today's mobile devices are often offline: due to poor cellular data coverage, poor coffee shop wifi, while on a plane or on a train going through a tunnel.
   There is plenty of need for offline-capable apps.

   <p class="has-aside">
   There are some efforts to improve offline support in web and mobile apps, but I think it is fair to say that most current cloud apps do not score very well in this regard.
   </p>

   <aside>
   The <a href="http://offlinefirst.org/">Offline First</a> movement in particular is encouraging app developers to design software for better offline use.
   </aside>

3. Programmatic access to data in the service is limited.
   If the data was really your own, you would be able to hack up a quick script to programmatically manipulate it in some way, but the REST APIs that cloud apps provide (if any) are usually limited and clumsy.
   Data portability (e.g. downloading a zip file of JSON blobs or suchlike) is equally clumsy, and limited to read-only data access.

4. <p class="has-aside">
   Regarding security and privacy, you are at the mercy of the cloud provider: a rogue employee, or a hacker who gains access to their servers, can read and tamper with all of your data.
   Such security breaches are sadly <a href="https://en.wikipedia.org/wiki/List_of_data_breaches">terrifyingly common</a>.
   Many professionals need to deal with sensitive information, and data protection regulations or policies may rule out the use of cloud apps for such data.
   </p>
   
   <aside>
   <a href="http://www.boeing.com/innovation/">Boeing</a> is funding this research because the security of cloud apps is a key problem in industrial systems.
   </aside>

The common theme with these complaints is that although you can access your data in a cloud app, you **don't really own that data** -- the cloud provider does.
All data access must go via the server, and your access is restricted: you can only do the things that the server will let you do.

<p class="has-aside">
To put it bluntly, the cloud is someone else’s computer; and unlike the computer on your desk, that cloud computer is not under your control.
As they say, “never trust a computer you can’t throw out of a window”.
</p>

<aside>
The origin of the quote <em>“never trust a computer you can’t throw out of a window”</em> is unknown; it is often <a href="https://lifehacker.com/5222989/how-apple-co-founder-steve-wozniak-gets-things-done">falsely attributed to Steve Wozniak</a>.
</aside>


The old-fashioned way
---------------------

Let's contrast cloud apps with the way software used to work before web apps came along: programs running on your local computer, reading and writing files on the local disk.
I'll call this type of software "old-fashioned apps", although of course we still use a lot of software of this type today: text editors and IDEs, git and other version control systems, and many specialised software packages such as graphics applications or CAD software.

Old-fashioned apps may still use the Internet, but most of their features work offline because they only depend on files on the local disk.
They are more easily hackable and programmable, because the data is just lying there in files, ready for you to access: textual file formats can be manipulated with Unix tools such as [sed](https://linux.die.net/man/1/sed) and [awk](https://linux.die.net/man/1/awk), and even for complex binary file formats there are often command-line tools.
You don't need anybody's permission to access your files, since they are yours.

And, most importantly, old-fashioned apps continue to work forever, as long as you have a copy of the data and some way of running the software.
Even if the software author goes bust, you can continue running the last released version of the software.
Even if the operating system it runs on becomes obsolete (think: DOS software from the 1990s, or Amiga and Atari software from the 1980s), you can still run it in a virtual machine.
It helps if the software is open source, but even closed-source software can be preserved this way.
As storage media evolve over the decades, you can copy your files to new storage media, and then you can continue to access it.

Long-term data preservation is something that we should think about more.
Will future historians be able to read the data we are creating today, or are we creating, in the words of Vint Cerf, a ["digital Dark Age"](https://www.bbc.co.uk/news/science-environment-31450389)?
Some file formats (such as UTF-8 plain text, JPEG, and PDF), are so ubiquitous that they will probably be readable for centuries to come.
But a lot of data is only accessible by running the software that can read and write it.

<aside>
We have previously written about <a href="https://www.inkandswitch.com/capstone-manuscript-appendices.html#c-web-page-archiving">long-term archiving of web pages</a>.
For an interesting discussion of long-term data preservation, see <a href="http://www.vpri.org/pdf/tr2015004_cuneiform.pdf">“The Cuneiform Tablets of 2015”</a>, a paper by Long Tien Nguyen and Alan Kay at <a href="https://2015.onward-conference.org/track/onward2015-essays">Onward! 2015</a>.<br>
<img src="/2019/01/cuneiform.jpg" alt="Cuneiform script on clay tablet, ca. 3000 BC"><br>
Cuneiform script on clay tablet, ca. 3000 BC. Image from <a href="https://commons.wikimedia.org/wiki/File:Early_writing_tablet_recording_the_allocation_of_beer.jpg">Wikimedia Commons</a>.
</aside>

If that software is old-fashioned, at least you could still run it in a VM.
But if that software is a cloud app, you probably cannot run it yourself, unless the server is open source.
You can't just run your own build of Google Docs or Trello -- you are forever dependent on the software author to run it for you.
I worry that cloud apps are going to be problematic for long-term data preservation; the best we can probably do is to try to remember to export the data from cloud services as PDF files or some other read-only format from time to time.
But all interactivity would be lost in that export process.

For some kinds of data, you might not care about long-term preservation: for example, you might perhaps not be so upset if your Facebook posts or Tweets were suddenly to disappear tomorrow.
However, as discussed earlier, computing for creative professionals is fundamentally different from the consumption computing of social media, and for this category of users, long-term preservation is a concern.


Getting the best of both worlds
-------------------------------

I've pointed out how old-fashioned apps are better than cloud apps in four ways: long-term availability (even in the face of companies shutting down), offline support, programmatic access ("hackability"), and security/privacy.
All of these are important aspects of **owning your own data**.

However, not everything is great with old-fashioned apps.
In particular, collaboration is a pain: when you have several people working on a file, you have to send it back and forth by email, or use some kind of network filesystem or version control system.
But if several people concurrently update the same file, you need to merge the changes together.
This is doable for text files such as source code, but quickly becomes very difficult or impossible for complex file formats such as spreadsheets or graphics documents.

Moreover, long-term preservation of data only works in practice if you back it up, and move the files to new storage media from time to time.
Most people are not very good at backing up data; depending on how diligent you are, the risk of losing data due to your laptop dying might be greater than the risk of losing data due to a cloud service you use shutting down.
In that case, a cloud app would provide *better* data preservation than an old-fashioned app.

Since neither model is perfect, can we not combine them to get the best of both worlds?
We believe that in the future, software should allow you to own your data, while also providing the convenience of cloud apps.
The software should:

* **Run as a local executable** without requiring a server (so that it works offline, and so that the software can be archived), but with a good software update mechanism to get new versions;
* **Store its data in files on the local disk** (so that it works offline, and so that you can back up the files yourself), in a file format that can be easily read and written programmatically (so that you can extend the software with your own code);
* <p class="has-aside"><strong>Optionally <em>also</em> store its data on a server</strong> (so that you don’t have to back up the data yourself if you don’t want to, and so that you can easily share the data with other people);</p>
  <aside>
  To improve security, the data stored on the server could also be encrypted end-to-end, since the server only provides storage and does not need to interpret or manipulate the data itself.
  All display and modification of the data is performed by installed applications on end-user devices.
  For example, <a href="https://www.signal.org/">Signal</a> and <a href="https://www.whatsapp.com/">WhatsApp</a> do this for messaging, and <a href="https://www.tarsnap.com/">Tarsnap</a> takes this approach for backups.
  We want to bring this approach to many other types of apps.
  </aside>
* **Support real-time collaboration** in the same way as Google Docs and other cloud apps (so that you don't have to email files back and forth).

One app/service that meets three out of the four criteria is [Dropbox](https://www.dropbox.com/), which synchronises a folder full of files between devices.
However, it doesn't do anything about file formats or real-time collaboration: if two people modify the same file in Dropbox concurrently, you have to resolve the resulting conflict yourself.
([Dropbox Paper](https://www.dropbox.com/paper) supports real-time collaboration, but that feature comes at the cost of the other criteria: documents created with Dropbox Paper don't appear as files on your filesystem -- they only exist in the web app.)


Adding real-time collaboration to old-fashioned apps
----------------------------------------------------

The big mistake that cloud apps make, in my opinion, is that they treat the data on the server as the **primary, authoritative copy** of the data.

<p class="has-aside">
In a cloud app, if a client has a copy of the data (e.g. for offline use), it is considered to merely be a cache that is subordinate to the server.
Any data modification must be sent to the server, otherwise it “didn’t happen”.
</p>

<aside>
There is a similarity here to database replication: in many database systems, one replica is designated as the <em>leader</em> or <em>master</em>, and the others follow its lead.
However, highly available systems often need to allow the use of multiple leaders.
This topic is discussed in detail in my book, <a href="http://dataintensive.net/">Designing Data-Intensive Applications</a>.
</aside>

In order to take back ownership of your data, we must swap the roles: we need to treat the copy of the data on your local device -- your laptop, tablet, or phone -- as the primary copy.
(This is, of course, what old-fashioned apps have been doing all along.)
If you have multiple devices that each have a copy, that means there are multiple primary copies that need to be synchronised.
If you have collaborators, each of their devices also needs to be synchronised.
If there is a server, we consider it to just have one of the copies, and it is not otherwise special.

Sometimes two users will modify the file same while offline, and then find out about each others' changes when they are next online.
In these situations, we will need to merge those modifications in a way that preserves everybody's changes.

For example, in the following diagram, two different users concurrently modify a text file.
The red user adds the word "World" before the exclamation mark, and the blue user concurrently adds a smiley after the exclamation mark.
The two changes can be merged cleanly in the final text document.

<figure>
  <img src="/2019/01/text-edit.png" alt="Example of concurrent text editing"/>
  <figcaption>
    We have implemented this approach using <a href="https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type">Conflict-free Replicated Data Types</a> (CRDTs), a family of algorithms for automatically merging concurrent changes.
    <a href="https://github.com/automerge/automerge">Automerge</a> is our JavaScript CRDT implementation, and we have also developed a few <a href="https://github.com/automerge">related libraries</a>.
    You can watch a <a href="https://martin.kleppmann.com/2018/05/24/j-on-the-beach.html">conference talk on Automerge</a> if you’re interested in more.
  </figcaption>
</figure>


Changing our mindset
--------------------

This all sounds very idealistic and well, but could it actually work in the real world?

<p class="has-aside">
This is something we have been exploring in several projects at <a href="https://www.inkandswitch.com/">Ink &amp; Switch</a>.
We have built several pieces of software that work this way: a <a href="https://www.inkandswitch.com/capstone-manuscript.html">tablet app for collecting ideas and thinking</a>, a <a href="https://inkandswitch.github.io/pushpin/">collaborative pinboarding tool</a>, a <a href="https://medium.com/@pvh/pixelpusher-real-time-peer-to-peer-collaboration-with-react-7c7bc8ecbf74">pixel art editor</a>, and a <a href="https://github.com/automerge/trellis">Trello clone</a>.
They all store their data in files on local disk, and synchronise with other devices using peer-to-peer protocols (either <a href="https://datproject.org/">Dat</a> or <a href="https://webrtc.org/">WebRTC</a>).
And they work!
</p>

<aside>
These apps are all built on a modern JavaScript stack using <a href="https://reactjs.org/">React</a> and deployed as locally installed software (either using <a href="https://electronjs.org/">Electron</a> or <a href="https://support.google.com/chrome/a/answer/2714278?hl=en">Chrome Apps</a>).
</aside>

There are many technical lessons from these projects, but we also found conceptual differences compared to standard web development and cloud apps: we found that we need to **think differently** about this kind of software.
To summarise some of the key ideas:

* If you have a copy of the data on your local device, **nobody can stop you from modifying it**.
  This means that the typical server-centric view of access permissions has to change.
  Instead of preventing modifications, we have to move to a model where devices and users choose which modifications to pay attention to, and which to ignore.
  In slogan form: we need *attention, not permission*.
* <p class="has-aside">The <strong>role of servers</strong> is totally different compared to cloud apps.
  Servers may assist with storing and transmitting data, but they do not control your data.
  Since the new role of servers is much less critical, we explored new ideas, such as running a server on a <a href="https://www.raspberrypi.org/">$20 Raspberry Pi</a> on a home WiFi.
  No need for a beefy server in a datacenter!</p>
  <aside>WebRTC and Dat <a href="https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/">both</a> <a href="https://github.com/datprotocol/whitepaper/raw/master/dat-paper.pdf">perform</a> <a href="https://en.wikipedia.org/wiki/NAT_traversal">NAT traversal</a>, so they can connect to a device even if it does not have a publicly routable IP address (such as on a typical home WiFi).</aside>
* Concepts from version control, such as [**branching/forking and merging**](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell), apply to the world of CRDTs.
  This is something that most collaborative apps currently don't do, but it could be very powerful.

  For example, I recently had a situation where the university administration would send me some student data as a spreadsheet by email.
  Every couple of days they would send an updated version of the spreadsheet.
  I wanted to add some of my own information to the file, so I added some custom columns for myself (this change was not shared with the administration).
  Essentially, I wanted to maintain my own fork of the spreadsheet, and whenever admin sent a new version (i.e. for every ["upstream change"](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches)), I wanted to merge the upstream changes into my fork.
  We can do these kinds of things with source code in git, but I don't know of any spreadsheet that support this kind of workflow.

<!-- TODO: conclusions section; image to illustrate aforementioned spreadsheet workflow; "cloud peer"/"just another device" -->

There is more work to be done, but I believe that in these projects we have uncovered a very promising way forward.
It allows us to get the best of both worlds: the real-time collaboration and convenience of cloud apps, and the personal ownership and long-term preservation of old-fashioned software.
If these topics strike a chord, we'd love to hear your thoughts: get in touch at [@inkandswitch](https://twitter.com/inkandswitch) or [hello@inkandswitch.com](mailto:hello@inkandswitch.com).

*Many thanks to [Boeing](http://www.boeing.com/innovation/) and [Ink &amp; Switch](https://www.inkandswitch.com/) for supporting this research.*
