---
layout: ync-post
title: Decentralised content moderation
hackernews: https://news.ycombinator.com/item?id=25776124
---

**Who is doing interesting work on decentralised content moderation?**

With Donald Trump suspended from Twitter and Facebook, and
[Parler](https://en.wikipedia.org/wiki/Parler) kicked off AWS, there is renewed discussion about
what sort of speech is acceptable online, and how it should be enforced. Let me say up front that
I believe that these bans were justified. However, they do raise questions that need to be
discussed, especially within the technology community.

As many have already pointed out, Twitter, Facebook and Amazon are corporations that are free to
enforce their terms of service in whatever way they see fit, within the bounds of applicable law
(e.g. anti-discrimination legislation). However, we should also realise that *almost all* social
media, the public spaces of the digital realm, are in fact privately owned spaces subject to
a corporation's terms of service. There is currently no viable, non-corporate alternative space that
we could all move to. For better or for worse, Mark Zuckerberg, Jack Dorsey, and Jeff Bezos (and
their underlings) are, for now, the arbiters of what can and cannot be said online.

This situation draws attention to the [decentralised web community](https://redecentralize.org/),
a catch-all for a broad set of projects that are aiming to reduce the degree of centralised
corporate control in the digital sphere. This includes self-hosted/federated social networks such as
[Mastodon](https://joinmastodon.org/) and [Diaspora](https://diasporafoundation.org/), peer-to-peer
social networks such as [Scuttlebutt](https://scuttlebutt.nz/), and miscellaneous blockchain
projects. The exact aims and technicalities of those projects are not important for this post.
I will start by focussing on one particular design goal that is mentioned by many decentralised web
projects, and that is *censorship resistance*.

Censorship resistance
---------------------

When we think of censorship, we think of totalitarian states exercising violent control over their
population, crushing dissent and stifling the press. Against such an adversary, technologies that
provide censorship resistance seem like a positive step forward, since they promote individual
liberty and human rights.

However, often the adversary is not a totalitarian state, but other users. Censorship resistance
means that anybody can say anything, without suffering consequences. And unfortunately there are
a lot of people out there who say and do rather horrible things. Thus, as soon as
a censorship-resistant social network becomes sufficiently popular, I expect that it will be filled
with messages from spammers, neo-nazis, and child pornographers (or any other type of content that
you consider despicable). One person's freedom from violence is another person's censorship, and
thus, a system that emphasises censorship resistance will inevitably invite violence against some
people.

I fear that many decentralised web projects are designed for censorship resistance not so much
because they deliberately want to become hubs for neo-nazis, but rather out of a kind of naive
utopian belief that more speech is always better. But I think we have learnt in the last decade that
this is not the case. If we want technologies to help build the type of society that we want to live
in, then certain abusive types of behaviour must be restricted. Thus, content moderation is needed.

The difficulty of content moderation
------------------------------------

If we want to declare some types of content as unacceptable, we need a process for distinguishing
between acceptable and unacceptable material. But this is difficult. Where do you draw the line
between healthy scepticism and harmful conspiracy theory? Where do you draw the line between healthy
satire, using exaggeration for comic effect, and harmful misinformation? Between legitimate
disagreement and harassment? Between honest misunderstanding and malicious misrepresentation?

With all of these, some cases will be very clearly on one side or the other of the dividing line,
but there will always be a large grey area of cases that are unclear and a matter of subjective
interpretation. “[I know it when I see it](https://en.wikipedia.org/wiki/I_know_it_when_I_see_it)”
is difficult to generalise into a rule that can be applied objectively and consistently; and without
objectivity and consistency, moderation can easily degenerate into a situation where one group of
people forces their opinions on everyone else, like them or not.

In a service that is used around the world, there will be cultural differences on what is considered
acceptable or not. Maybe one culture is sensitive about nudity and tolerant of depictions of
violence, while another culture is liberal about nudity and sensitive about violence. One person's
terrorist is another person's freedom fighter. There is no single, globally agreed standard of what
is or is not considered acceptable.

Nevertheless, it is possible to come to agreement. For example, Wikipedia editors successfully
manage to agree on what should and should not be included in Wikipedia articles, even those on
contentious subjects. I won't say that this process is perfect: Wikipedia editors are predominantly
white, male, and from the Anglo-American cultural sphere, so there is bound to be bias in their
editorial decisions. I haven't participated in this community, but I assume the process of coming to
agreement is sometimes messy and will not make everybody happy.

Moreover, being an encyclopaedia, Wikipedia is focussed on widely accepted facts backed by evidence.
Attempting to moderate social media in the same way as Wikipedia would make it joyless, with no room
for satire, comedy, experimental art, or many of the other things that make it interesting and
humane. Nevertheless, Wikipedia is an interesting example of decentralised content moderation that
is not controlled by a private entity.

Another example is federated social networks such as Mastodon or Diaspora. Here, each individual
server administrator has the authority to
[set the rules for the users of their server](https://docs.joinmastodon.org/admin/moderation/), but
they have no control over activity on other servers (other than to block another server entirely).
Despite the decentralised architecture, there is a
[trend towards centralisation](https://arxiv.org/pdf/1909.05801.pdf) (10% of Mastodon instances
account for almost half the users), leaving a lot of power in the hand of a small number of server
administrators. If these social networks are to go more mainstream, I expect these effects to be
amplified.

Filter bubbles
--------------

One form of social media is private chat for small groups, as provided e.g. by WhatsApp, Signal, or
even email. Here, when you post a message to a group, the only people who can see it are members of
that group. In this setting, not much content moderation is needed: group members can kick out other
members if they say things considered unacceptable. If one group says things that another group
considers objectionable, that’s no problem, because the two groups can’t see each other’s
conversations anyway. If one user is harassing another, the victim can block the harasser. Thus,
private groups are comparatively easy to deal with.

The situation is harder with social media that is public (anyone can read) and open (anyone can join
a conversation), or when the groups are very large. Twitter is an example of this model (and
Facebook to some degree, depending on your privacy settings). When anybody can write a message that
you will see (e.g. a reply to something you posted publicly), the door is opened to harassment and
abuse.

One response might be to retreat into our filter bubbles. For example, we could say that you see
only messages posted by your immediate friends and friends-of-friends. I am pretty sure that there
are no neo-nazis among my direct friends, and probably also among my second-degree network, so such
a rule would shield me from extremist content of one sort, at least.

It is also possible for users to collaborate on creating filters. For example,
[ggautoblocker](https://github.com/freebsdgirl/ggautoblocker) was a tool to block abusive Twitter
accounts during [GamerGate](https://en.wikipedia.org/wiki/Gamergate_controversy), a 2014
misogynistic harassment campaign that
[foreshadowed](https://www.theguardian.com/technology/2016/dec/01/gamergate-alt-right-hate-trump)
the rise of the alt-right and Trumpism. In the absence of central moderation by Twitter, victims of
this harassment could use this tool to automatically block a large number of harmful users so that
they wouldn’t have to see the abusive messages.

Of course, even though such filtering saves you from having to see things you don’t like, it doesn’t
stop the objectionable content from existing. Moreover, other people may have the opposite sort of
filter bubble in which they see *lots* of extremist content, causing them to become radicalised.
Personalised filters also stop us from seeing alternative (valid) opinions that would help broaden
our worldview and enable better mutual understanding of different groups in society.

Thus, subjective filtering of who sees what, such as blocking users, is an important part of
reducing harm on social media, but by itself it is not sufficient. It is also necessary to uphold
minimum standards on what can be posted at all, for example by requiring a baseline of civility and
truthfulness.

Democratic content moderation
-----------------------------

I previously argued that there is no universally agreed standard of acceptability of content; and
yet, we must somehow keep the standard of discourse high enough that it does not become intolerable
for those involved, and to minimise the harms e.g. from harassment, radicalisation, and incitement
of violence. How do we solve this contradiction? Leaving the power in the hands of a small number of
tech company CEOs, or any other small and unelected group of people, does not seem like a good
long-term solution.

A purely technical solution does not exist either, since code cannot make value judgements about
what sort of behaviour is acceptable. It seems like some kind of democratic process is the only
viable long-term solution here, perhaps supported by some technological mechanisms, such as
AI/machine learning to flag potentially abusive material. But what might this democratic process
look like?

Moderation should not be so heavy-handed that it drowns out legitimate disagreement. Disagreement
need not always be polite; indeed,
[tone policing](https://everydayfeminism.com/2015/12/tone-policing-and-privilege/) should not be
a means of silencing legitimate complaints. On the other hand, aggressive criticism may quickly flip
into the realm of harassment, and it may be unclear when exactly this line has been crossed.
Sometimes it may be appropriate to take into account the power relationships between the people
involved, and hold the privileged and powerful to a higher standard than the oppressed and
disadvantaged, since otherwise the system may end up reinforcing existing imbalances. But there are
no hard and fast rules here, and much depends on the context and background of the people involved.

This example indicates that the moderation process needs to embed ethical principles and values. One
way of doing this would be to have a board of moderation overseers that is elected by the user base.
In their manifesto, candidates for this board can articulate the principles and values that they
will bring to the job. Different candidates may choose to represent people with different world
views, such as conservatives and liberals. Having a diverse set of opinions and cultures represented
on such a board would both legitimise its authority and improve the quality of its decision-making.
In time, maybe even parties and factions may emerge, which I would regard as a democratic success.

Facebook employs
[around 15,000 content moderators](https://bhr.stern.nyu.edu/tech-content-moderation-june-2020), and
on all accounts it’s
[a horrible job.](https://www.theverge.com/2019/2/25/18229714/cognizant-facebook-content-moderator-interviews-trauma-working-conditions-arizona)
Who would want to do it? On the other hand, 15,000 is a tiny number compared to Facebook’s user
count. Rather than concentrating all the content moderation work on a comparatively small number of
moderators, maybe every user should have to do a stint at moderation from time to time as part of
their conditions for using a service? Precedents for this sort of thing exist: in a number of
countries, individuals may be called to jury duty to help decide criminal cases; and researchers are
regularly asked to review articles written by their peers. These things are not great fun either,
but we do them for the sake of the civic system that we all benefit from.

Moderators with differing political views may disagree on whether a certain piece of content is
acceptable or not. In cases of such disagreement, additional people can be brought in, hopefully
allowing the question to be settled through debate. If no agreement can be found, the matter can be
escalated to the elected board, which has the final say and which uses the experience to set
guidelines for future moderation.

Implications for decentralised technologies
-------------------------------------------

In decentralised social media, I believe that ultimately it should be the users themselves who
decide what is acceptable or not. This governance will have to take place through some human process
of debate and deliberation, although technical tools and some degree of automation may be able to
support the process and make it more efficient. Rather than simplistic censorship resistance, or
giving administrators dictatorial powers, we should work towards ethical principles, democratic
control, and accountability.

I realise that my proposals are probably naive and smack of “computer scientist finally discovers
why the humanities are important”. Therefore, if you know of any work that is relevant to this topic
and can help technological systems learn from centuries of experience in democracy in the civil
society, please send it to me — I am keen to learn more. Moreover, if there is existing work in the
decentralised web community on enabling this kind of grassroots democracy, I would love to hear
about it too.

You can find me on Twitter [@martinkl](https://twitter.com/martinkl), or contact me by email
(firstname at lastname dot com). I will update this post with interesting things that are sent to
me.

Updates: related work
---------------------

Here are some related projects that have been pointed out to me since this post was published. I
have not vetted them, so don't take this as an endorsement.

* The [Facebook/Instagram Oversight Board](https://oversightboard.com/) is quite close to what
  I have in mind, and it has [upheld](https://oversightboard.com/news/226612455899839-oversight-board-upholds-former-president-trump-s-suspension-finds-facebook-failed-to-impose-proper-penalty/)
  the suspension of Trump's account.
* The recently launched
  [MIT Center for Constructive Communication](https://news.mit.edu/2021/center-constructive-communication-0113)
  is an ambitious effort in this area.
* “[The Decentralized Web of Hate](https://foundation.mozilla.org/en/blog/fellow-research-decentralized-web-hate/)”
  is a detailed report by [Emmi Bevensee](http://emmibevensee.com/) on use of decentralised
  technologies by extremists.
* [Amy X. Zhang](https://homes.cs.washington.edu/~axz/publications.html) and her collaborators have
  done a lot of research on moderation.
* [Evelyn Douek argues](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4005326) that it's not sufficient to
  view content moderation as lots of individual decisions on individual pieces of content, but that accountability
  requires a new form of institution that provides a dynamic, continuous governance structure.
* [Jay Graber](https://twitter.com/arcalinea) recently published a comprehensive
  [report comparing decentralised social protocols](https://twitter.com/arcalinea/status/1352316972654944257), and a
  [blog post](https://jaygraber.medium.com/designing-decentralized-moderation-a76430a8eab)
  on decentralised content moderation.
* [Wes Chow](https://twitter.com/weschow) has written a
  [thoughtful and nunanced article](https://medium.com/@wesc/opportunities-in-the-design-of-decentralized-social-networks-d66cce42d74b)
  on decentralised content moderation, with lots of references to further reading at the end.
* A few [people](https://twitter.com/xmal/status/1349413781953273857)
  [mentioned](https://twitter.com/weschow/status/1349417270179737604) Slashdot, Reddit, and Stack Overflow
  as successful examples of community-run moderation.
* On the other hand, J. Nathan Matias [is skeptical](https://twitter.com/natematias/status/1496318787712344067)
  that volunteers will be able to handle the challenges of content moderation at scale, since Facebook reportedly
  spends $500m a year on it.
* [Trustnet](https://cblgh.org/articles/trustnet.html) is a way of computing numerical scores for
  the degree of trust in indvidual users, based on the social graph.
* [Matrix](https://matrix.org/), a federated messaging system, is
  [working on](https://matrix.org/blog/2020/10/19/combating-abuse-in-matrix-without-backdoors) a
  decentralised, subjective reputation system.
* [Freenet](https://freenetproject.org/) has a web-of-trust-based, decentralised
  [user reputation system](https://www.draketo.de/english/freenet/friendly-communication-with-anonymity)
  (see also this [Bachelor's thesis](https://github.com/xor-freenet/plugin-WebOfTrust/blob/master/developer-documentation/core-developers-manual/OadSFfF-version1.2-non-print-edition.pdf)).
* [Waivlength](https://www.waivlength.io/) is exploring a [governance approach inspired by jury duty](https://waivlengthdev.medium.com/jury-duty-a-decentralised-moderation-model-for-governing-a-social-media-platform-b675b558dd6d).
* [Freechains](https://github.com/Freechains/README) is a peer-to-peer content distribution
  protocol with an embedded user reputation system.
* [Songbird](https://github.com/Murmuration-Labs/songbird-decentralized-moderation) is a sketch of a
  decentralised moderation system for IPFS.
* [Cabal](https://cabal.chat/) allows users to
  [subscribe](https://twitter.com/substack/status/1349471659653124098) to other users' moderation
  actions, such as blocking and hiding posts.
* An app called [Fantastic](https://kc-fantastic-app.medium.com/decentralized-content-moderation-on-fantastic-app-3768989ced19)
  is exploring mechanisms for moderation.
* Felix Dietze's [2015 master's thesis](https://github.com/fdietze/notes/blob/master/felix_dietze_master_thesis_2015.pdf)
  explores community-run moderation. He is also working on
  [ranking](https://felix.unote.io/hacker-news-scores)
  [algorithms](https://github.com/fdietze/downvote-scoring)
  for news aggregators.
* Twitter is trialling [Birdwatch](https://blog.twitter.com/en_us/topics/product/2021/introducing-birdwatch-a-community-based-approach-to-misinformation.html),
  a crowdsourced effort to tackle misinformation.
* [Coinbase's approach](https://blog.coinbase.com/coinbases-philosophy-on-account-removal-and-content-moderation-c80d1aa452b7)
  is to ban only content that is illegal in jurisdictions where they operate, or content that is
  [not considered protected speech](https://en.wikipedia.org/wiki/United_States_free_speech_exceptions)
  under the U.S. First Amendment.
