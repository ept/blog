---
layout: twocolumn
title: How to own your own data, in spite of the cloud
unfurl_image: /2019/01/there-is-no-cloud.png
abstract: Cloud services centralise control over data, which is problematic.
  We can do better, without sacrificing the things that make cloud services so convenient.
---


It's amazing how easily we can collaborate online nowadays.
We use Google Docs to collaborate on documents, spreadsheets and presentations; we communicate with colleagues using Slack; we track tasks in Trello; and so on.
We depend on these and many other online services, e.g. for taking notes, planning projects or events, remembering contacts, and a whole raft of business applications.

<p class="has-aside">
As we run more and more of our lives and work through these cloud apps, they become more and more critical to us.
The more time we invest in using one of these apps, the more valuable the data in it becomes to us.
</p>

<aside>
I will call these services “cloud apps”, but you could just as well call them “<a href="https://en.wikipedia.org/wiki/Software_as_a_service">SaaS</a>” or “web-based apps”.
What they have in common is that we typically access them through a web browser or through mobile apps, and that they store their data on a server.
</aside>

I don't know about you, but I find that when I have put a lot of creative energy and effort into creating something, I have a deep emotional attachment to it.
Creative work is not just visual art, or music, or poetry: explaining a technical thing, implementing an intricate algorithm, designing a user interface, or figuring out how to lead a team towards some goal are just as much creative efforts.

In the process of performing that creative work you most likely produce files and data: documents, presentations, spreadsheets, code, notes, drawings, and so on.
And if you're anything like me, you will want to keep that data: so that you can refer to it again in the future for inspiration, or to include it in a portfolio, or simply to archive because you feel proud of it.
You will want to **own** that data, because it's a part of you.
It's an expression of yourself.

However, cloud apps are problematic in this regard: they don't let you really **take ownership** of your own data.
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
   But with any software developed by a startup there is a significant danger of an <a href="https://ourincrediblejourney.tumblr.com/">“incredible journey”</a> event.
   And even with long-lived software there is the risk that the pricing or features change in a way you don’t like, and with a cloud app, continuing to use the old version is not an option – you will be upgraded whether you like it or not.
   </p>

   <aside>
   <a href="https://ourincrediblejourney.tumblr.com/">Our incredible journey</a> is a blog that documents and mocks startup products getting shut down after an acquisition.
   The blog posts announcing such shutdowns often smugly remark that the staff of the startup had an “incredible journey” over the lifetime of the company, to the frustration of the users.
   </aside>

2. Today's cloud apps typically don't work very well offline.
   That is surprising, because today's mobile devices are often offline: due to poor cellular data coverage, poor coffee shop wifi, while on a plane or on a train going through a tunnel.
   There is plenty of need for offline-capable apps.

   There are [some efforts](http://offlinefirst.org/) to improve offline support in web and mobile apps, but I think it is fair to say that most current cloud apps do not score very well in this regard.

3. Programmatic access to data in the service is limited.
   It might have a REST API through which you can read and modify the data on the server, but these APIs are often limited in capability and laborious to use.
   The service might have a data export feature, allowing you to download a zip file of JSON blobs or suchlike, but that is read-only data access.
   This means it is often difficult or impossible to extend a cloud app with your own logic, or to integrate it with another app.

The common theme with these complaints is that although you can access your data in a cloud app, you **don't really own that data** -- the cloud provider does.
All data access must go via the server, and your access is restricted: you can only do the things that the server will let you do.
If the data was really your own, you would be able to hack up a quick script to programmatically manipulate it without restriction, you could access it anywhere and everywhere (even while offline), and you could store it for the long term along with your family photos.

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

Old-fashioned apps still use the Internet (e.g. `git pull` and `git push`), but most of their features work offline because they only depend on files on the local disk.
They are more easily hackable and programmable, because the data is just lying there in files, ready for you to access: textual file formats can be manipulated with Unix tools such as [sed](https://linux.die.net/man/1/sed) and [awk](https://linux.die.net/man/1/awk), and even for complex binary file formats there are often command-line tools.
You don't need anybody's permission to access your files, since they are yours.

And, most importantly, old-fashioned apps continue to work forever, as long as you have a copy of the data and some way of running the software.
Even if the software author goes bust, you can continue running the last released version of the software.
Even if the operating system it runs on becomes obsolete (think: software from the 1990s running on MS-DOS), you can still run it in a virtual machine.
It helps if the software is open source, but even closed-source software can be preserved this way.
As storage media evolve over the decades, you can copy your files to new storage media, and then you can continue to access it.

Long-term data preservation is something that I ponder about from time to time.
Will future historians be able to read the data we are creating today, or are we creating, in the words of Vint Cerf, a ["digital Dark Age"](https://www.bbc.co.uk/news/science-environment-31450389)?
Some file formats (such as UTF-8 plain text, JPEG, and PDF), are so ubiquitous that they will probably be readable for centuries to come.
But a lot of data is only accessible by running the software that can read and write it.

<aside>
For an interesting discussion of long-term data preservation, see <a href="http://www.vpri.org/pdf/tr2015004_cuneiform.pdf">“The Cuneiform Tablets of 2015”</a>, a paper by Long Tien Nguyen and Alan Kay at <a href="https://2015.onward-conference.org/track/onward2015-essays">Onward! 2015</a>.<br>
<img src="/2019/01/cuneiform.jpg" alt="Cuneiform script on clay tablet, ca. 3000 BC"><br>
Cuneiform script on clay tablet, ca. 3000 BC. Image from <a href="https://commons.wikimedia.org/wiki/File:Early_writing_tablet_recording_the_allocation_of_beer.jpg">Wikimedia Commons</a>.
</aside>

If that software is old-fashioned, at least you could still run it in a VM.
But if that software is a cloud app, you probably cannot run it yourself, unless the server is open source.
You can't just run your own build of Google Docs or Trello -- you are forever dependent on the software author to run it for you.
I worry that cloud apps are going to be problematic for long-term data preservation; the best we can probably do is to try to remember to export the data from cloud services as PDF files or some other read-only format from time to time.
But all interactivity would be lost in that export process.

For some kinds of data, you might not care about long-term preservation: for example, you might perhaps not be so upset if your Facebook posts or Tweets were suddenly to disappear tomorrow (unless you are particularly proud of the jokes you told on Twitter, or the Facebook posts contain the only copy of the photos of a close relative).
But if you think of the data you care about the most -- the very best piece of work you have done, or photos of the most memorable event in your life -- those are probably things you would want to preserve.


Getting the best of both worlds
-------------------------------

I've pointed out how old-fashioned apps are better than cloud apps in three ways: long-term availability (even in the face of companies shutting down), offline support, and programmatic access ("hackability").
All of these are important aspects of **owning your own data**.

However, not everything is great with old-fashioned apps.
In particular, collaboration is a pain: when you have several people working on a file, you have to send it back and forth by email, or use some kind of network filesystem or version control system.
But if several people concurrently update the same file, you need to merge the changes together.
This is doable for text files such as source code, but quickly becomes very difficult or impossible for complex file formats such as spreadsheets or graphics documents.

Moreover, long-term preservation of data only works in practice if you back it up, and move the files to new storage media from time to time.
Most people are not very good at backing up data; depending on how diligent you are, the risk of losing data due to your laptop dying might be greater than the risk of losing data due to a cloud service you use shutting down.
In that case, a cloud app would provide *better* data preservation than an old-fashioned app.

What I would really like is the best of both worlds!
I would like software that allows me to own my own data, while also providing the convenience of cloud apps.
The software should:

* **Run as a local executable** without requiring a server (so that it works offline, and so that the software can be archived), but with a good software update mechanism to get new versions;
* **Store its data in files on the local disk** (so that it works offline, and so that you can back up the files yourself), in a file format that can be easily read and written programmatically (so that you can extend the software with your own code);
* <p class="has-aside"><strong>Optionally <em>also</em> store its data on a server</strong> (so that you don’t have to back up the data yourself if you don’t want to, and so that you can easily share the data with other people);</p>
  <aside>To improve security, the data stored on the server could also be encrypted end-to-end, since the server only provides storage and does not need to interpret or manipulate the data itself. All display and modification of the data is performed by installed applications on end-user devices.</aside>
* **Support real-time collaboration** in the same way as Google Docs and other cloud apps (so that you don't have to email files back and forth).

One app/service that meets three out of the four criteria is [Dropbox](https://www.dropbox.com/), which synchronises a folder full of files between devices.
However, it doesn't do anything about file formats or real-time collaboration: if two people modify the same file in Dropbox concurrently, you have to resolve the resulting conflict yourself.
([Dropbox Paper](https://www.dropbox.com/paper) supports real-time collaboration, but that feature comes at the cost of the other criteria: documents created with Dropbox Paper don't appear as files on your filesystem -- they only exist in the web app.)


Adding real-time collaboration to old-fashioned apps
----------------------------------------------------

<p class="has-aside">
The big mistake that cloud apps make, in my opinion, is that they treat the data on the server as the <strong>primary, authoritative copy</strong> of the data.
In a cloud app, if a client has a copy of the data (e.g. for offline use), it is considered to merely be a cache that is subordinate to the server.
Any data modification must be sent to the server, otherwise it “didn’t happen”.
</p>

<aside>
There is a similarity here to database replication: in many database systems, one replica is designated as the <em>leader</em> or <em>master</em>, and the others follow its lead.
However, highly available systems often need to allow the use of multiple leaders.
This topic is discussed in detail in <a href="http://dataintensive.net/">my book</a>.<br>
<a href="http://dataintensive.net/"><img src="/images/book-cover-small.png" alt="Designing Data-Intensive Applications"></a>
</aside>

In order to take back ownership of your data, this model needs to change: we need to treat the **copy of the data on your local device** -- your laptop, tablet, or phone -- as the primary copy.
(This is, of course, what old-fashioned apps have been doing all along.)
If you have multiple devices that each have a copy, that means there are multiple primary copies that need to be synchronised.
If you have collaborators, each of their devices also needs to be synchronised.
If there is a server, we consider it to just have one of the copies, and it is not otherwise special.

As we allow users to modify their local copy of the data while offline, it will inevitably sometimes happen that different users modify the same file without knowing that another user is also modifying it.
In these situations, we will need to merge those modifications in a way that preserves everybody's changes.
For example, in the following diagram, two different users concurrently modify a text file.

<figure>
  <img src="/2019/01/text-edit.png" alt="Example of concurrent text editing"/>
  <figcaption>The red user adds the word “World” before the exclamation mark, and the blue user concurrently adds a smiley after the exclamation mark. The two changes can be merged cleanly in the final text document.</figcaption>
</figure>

For the last few years I have been doing research on [Conflict-free Replicated Data Types](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (CRDTs), which can perform exactly this kind of synchronisation of data and merging of different users' changes.
Together with collaborators at [Ink &amp; Switch](https://www.inkandswitch.com/) I have developed [Automerge](https://github.com/automerge/automerge), a JavaScript CRDT implementation aimed at exactly this problem.
I won't go into into detail about Automerge and CRDTs in this blog post, but you can watch the following [conference talk recording](https://www.youtube.com/watch?v=PHz17gwiOc8) if you're interested in more.

<figure>
  <iframe src="https://www.youtube-nocookie.com/embed/PHz17gwiOc8?rel=0" class="youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  <figcaption>Recording of my <a href="https://martin.kleppmann.com/2018/05/24/j-on-the-beach.html">conference talk on Automerge</a> from May 2018. The <a href="https://speakerdeck.com/ept/automerge-making-servers-optional-for-real-time-collaboration">slides</a> are also available.</figcaption>
</figure>


Changing our mindset
--------------------

This all sounds very idealistic and well, but could it actually work in the real world?

This is something we have been exploring in several projects at [Ink &amp; Switch](https://www.inkandswitch.com/).
We have built several pieces of software that work this way: a [tablet app for collecting ideas and thinking](https://www.inkandswitch.com/capstone-manuscript.html), a [collaborative pinboarding tool](https://inkandswitch.github.io/pushpin/), a [pixel art editor](https://medium.com/@pvh/pixelpusher-real-time-peer-to-peer-collaboration-with-react-7c7bc8ecbf74), and a [Trello clone](https://github.com/automerge/trellis).
They are all built on a modern JavaScript stack using [React](https://reactjs.org/) and deployed as locally installed software (either using [Electron](https://electronjs.org/) or [Chrome Apps](https://support.google.com/chrome/a/answer/2714278?hl=en)).
They all store their data in files on local disk, and synchronise with other devices using peer-to-peer protocols (either [Dat](https://datproject.org/) or [WebRTC](https://webrtc.org/)).
We learnt many things along the way, but the bottom line is: it works!

There are many technical lessons from these projects, but we also found conceptual differences compared to standard web development and cloud apps: we found that we need to **think differently** about this kind of software.
To summarise some of the key ideas:

* If you have a copy of the data on your local device, **nobody can stop you from modifying it**.
  This means that the typical server-centric view of access permissions has to change.
  Instead of preventing modifications, we have to move to a model where devices and users choose which modifications to pay attention to, and which to ignore.
  In slogan form: we need **attention, not permission**.
* <p class="has-aside">The <strong>role of servers</strong> is totally different compared to cloud apps.
  Servers may assist with storing and transmitting data, but they do not control your data.
  Since the new role of servers is much less critical, we explored new ideas, such as running a server on a <a href="https://www.raspberrypi.org/">$20 Raspberry Pi</a> on a home WiFi.
  No need for a beefy server in a datacenter!</p>
  <aside>WebRTC and Dat <a href="https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/">both</a> <a href="https://github.com/datprotocol/whitepaper/raw/master/dat-paper.pdf">perform</a> <a href="https://en.wikipedia.org/wiki/NAT_traversal">NAT traversal</a>, so they can connect to a device even if it does not have a publicly routable IP address (such as on a typical home WiFi).</aside>
* Concepts from version control, such as **branching/forking and merging**, apply to the world of CRDTs.
  This is something that most collaborative apps currently don't do, but it could be very powerful.

  For example, I recently had a situation where the university administration would send me some student data as a spreadsheet by email.
  Every couple of days they would send an updated version of the spreadsheet.
  I wanted to add some of my own information to the file, so I added some custom columns for myself (this change was not shared with the administration).
  Essentially, I wanted to maintain my own fork of the spreadsheet, and whenever admin sent a new version (i.e. for every ["upstream change"](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches)), I wanted to merge the upstream changes into my fork.
  We can do these kinds of things with source code in git, but I don't know of any spreadsheet that support this kind of workflow.

There is more work to be done, but I believe that in these projects we have uncovered a very promising way forward.
It allows us to get the best of both worlds: the real-time collaboration and convenience of cloud apps, and the personal ownership and long-term preservation of old-fashioned software.
If these topics strike a chord, we'd love to hear your thoughts: get in touch at [@inkandswitch](https://twitter.com/inkandswitch) or [hello@inkandswitch.com](mailto:hello@inkandswitch.com).
