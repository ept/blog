---
layout: ync-post
title: "Doing a PhD"
---

I have decided to apply to do a PhD in Cambridge.

This might come as a surprise, so please let me
explain. It is something which has been tempting me for a long time. I have always loved working
independently and getting deep into a project which I find cool, and a PhD (in computer science at
least) seemed to me the ultimate manifestation of this independence: three years in which you can
learn about and figure out an interesting topic, and invent new ways, with hardly any constraints
other than that you're supposed to write up something vaguely insightful at the end. (I'm sure this
is an overly idealised notion of what a PhD entails, but please bear with my dreamworld for
now.)

On the other hand, I have started a company and I've had an incredibly experience-packed two
years so far doing that. I would be a completely different person now if I had gone directly into a
PhD after graduating. Running a start-up has made me less risk-averse, more dynamic, more outgoing
and confident, more pragmatic, more focussed, and has given me a much better understanding of how
the world works.

You might think that returning to university is a cop-out, a return from the harsh
winds of a start-up into the safe haven of academia. Let me assure you that this is not the case,
for two
reasons.

* Firstly, I will keep my company going on the side. Obviously I won't be doing it
  full-time any more, but I am keeping all of my active clients, and I will continue the high level of
  service they know from me. It won't be a return to student lifestyle for me; if anything, my focus
  will get sharper.
* Secondly, the research proposal I have written is not just any proposal. It is
  aimed squarely at what I (and many others) believe will be the most influential technologies of the
  next decade or two: technology which deals with the vast amount of data on the web, filtering,
  processing and mining that information such that it becomes a source of useful insight.
  **Machine learning** and **computational linguistics**.


We are rapidly moving towards a world
where everything which can be digitised and put on the web will be. Blogs, social networking sites,
Twitter and many other services increasingly become expressions of a person's identity. Already now
I find that if, for example, I receive an email from somebody I don't know, often the first thing I
do is to look up them up on LinkedIn, find their blog or Twitter username, look up their company or
affiliation and find out what they do. This allows me to quickly judge the context of their enquiry,
gauge the level at which I should reply, or detect whether I need to be cautious for some reason. If
it is somebody I have dealt with before, I have a private database of contact history which helps
when I don't remember details of conversations months or years back. (It's nothing particularly
secret, it's just an extended memory.)

Identity on the web further manifests itself in social
interactions with others. This can be a powerful source of insight: for example, if I don't know
somebody, but I see that they publicly communicate with somebody I already know and trust, I will
immediately be more inclined to trust them too. This is not a rigorous decision, but a useful first
guess in the absence of other information.

However, gathering the pieces of a person's identity
from across the web is currently a time-consuming manual process.

My own digital identity, for
example, is spread all over the interwebs. It manifests itself in
[my blog](/) (which you are currently reading),
[my LinkedIn profile](http://www.linkedin.com/in/martinkleppmann),
[my undergraduate dissertation](http://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-683.html),
[my open source projects](http://github.com/ept/),
[my company](http://www.eptcomputing.com/),
[my tweets](http://twitter.com/martinkl),
[my Facebook profile](http://www.facebook.com/profile.php?id=558703060),
[my photos](http://flickr.com/photos/martinkleppmann/) and
[my taste in music](http://www.last.fm/user/mk428), not to mention the many other fragments
scattered about other sites, in the form of press articles about me or my projects, my archived
emails to mailing lists, my comments on other people's blogs, etc. They are all there, and Google
has indexed them all (apart from the small number of things behind logins), but at the moment they
do not come together to form a coherent whole. They are scraps of data, but without further analysis
they don't mean much.

In a nutshell, my PhD proposal is to gather that publicly available data
together and make it useful. For me, that means to map out the graph of connections between
different people, and relationships between people and topics. Who is interested in what, and who
discusses what topics with which people?

Consider an example to see why this might be useful: say
you are new to a particular field of specialism (whatever it may be), and you attend a conference to
find out more about it. The programme of the conference is a long list of sessions with names of
speakers and titles of talks. Someone who has been in the field for a while will know many of the
speakers' names and will immediately know which sessions will be worth attending and which people to
talk to. But a newcomer will have no idea, and has no way to find out other than by spending years
getting to know the community. Why can't you just visualise the relationships between the various
speakers and topics, so that you can immediately see who the most influential presenters are and
whose interests are closest to your own? Or even discover which attendees of the event would be most
worth talking to? At the moment we rely on personal referrals, serendipitous meetings and crude
markers (like [First Tuesday](http://www.firsttuesday.co.uk/)'s
["green for start-up, red for investor, yellow for service provider"](http://www.independent.co.uk/news/business/news/disciples-stay-faithful-to-dot-coms-713036.html));
why can't we have a more direct way of finding the people we should be talking to?

There are two
steps to making this work: firstly identifying which two bits of information on the web belong to
the same person (even if they are on different websites, using a variant spelling of the name or
pseudonym-like username, and without confusing two people who happen to share the same name), and
secondly mapping out the relationships between the people and the topics they talk about.

Google's success rests, amongst other things, on the
[PageRank algorithm](http://ilpubs.stanford.edu:8090/422/) which calculates a 'quality' rating for
each page on the web. Their core innovation was to realise that links between pages, not just the
pages' content, were the measure which determined how useful a search result would be, and
implementing PageRank allowed them to achieve much better search results than the other search
engines at the time.

A lot has been said about the next big thing post-Google. I wouldn't want to
make predictions, but let's put it this way: I would not be surprised if the next core innovation is
to realise that individual people, and the connections between people, are even more powerful than
pages and links between pages. The marriage of social web and semantic web, to be fully
buzzword-compliant.

This is a difficult and multi-faceted problem, which is why I want to take it
on within the framework of a PhD rather than try to develop it as a product straight away. There is
a lot I need to learn, from the mathematical details of the best machine learning techniques to the
linguistic techniques needed to extract structured information from natural language text and small
clues on the web.

There is a lot of existing research on which to build.
[Stephen Clark](http://www.cl.cam.ac.uk/users/sc609), my proposed PhD supervisor, is one of the
authors of the
[C&C parser](http://svn.ask.it.usyd.edu.au/trac/candc/wiki), which is maybe the finest statistical
natural language parser out there; also in the Computer Lab's
[Natural Language and Information Processing Group](http://www.cl.cam.ac.uk/research/nl/),
[Simone Teufel](http://www.cl.cam.ac.uk/~sht25/) and others' work on
[citation analysis](http://www.cl.cam.ac.uk/~sht25/Project_Index/Citraz_Index.html) is likely to be
relevant. And I hope to collaborate with the lovely people at the Cambridge Engineering department's
[Machine Learning group](http://mlg.eng.cam.ac.uk/), including
[Zoubin Ghahramani](http://learning.eng.cam.ac.uk/zoubin/) who is recognised as one of the top
researchers worldwide in the machine learning field. Very good reasons to be in Cambridge.

Please note that this is not at all certain yet -- I have applied, but I may not get accepted, I may not
get funding, and the Board of Graduate Studies may lose/forget my papers. But all going well, this
is the general direction in which I'd like to head.

On a final note, it will also be interesting to
explore the ethical aspects of identity on the web. I believe that both open sharing of personal
information and automated mining of that information will increase massively in the coming years,
and exploring the ethical and social consequences, as well as protecting the rights of the
individual, should be a part of the research in this area.

PS. My favourite techy buzzword so far is **"maximum entropy supertagger"**
([one of the components](http://portal.acm.org/citation.cfm?id=1220396) of the C&C parser). Just say that out
loud. Maximum Entropy Supertagger. Doesn't it sound awesome? Before my inner eye, there is a sci-fi
film of a group of heroes fighting off an alien invasion. The tentacled beasts from outer space are
everywhere, but the good guys are just managing to keep them at bay. But then... ominous music in
the background... a huge towering construction appears from behind a hill in the distance. Silence
falls. Everybody stares at the terrifying thing brought by the aliens. The guy who later will be in
charge of single-handedly saving the world turns around, and in a brief close-up shot he says to his
colleagues in a perfect Hollywood manner: *"Oh my God. They've got a Maximum Entropy Supertagger."*
