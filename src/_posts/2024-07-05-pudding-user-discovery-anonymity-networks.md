---
layout: ync-post
title: "Pudding: user discovery for anonymity networks"
---

I’d like to introduce an exciting new research paper I worked on! It's about a system called
[Pudding](https://arxiv.org/abs/2311.10825), and it was presented by
[Ceren](https://twitter.com/ckocaogullar1) at the
[IEEE Symposium on Security and Privacy](https://sp2024.ieee-security.org), one of the top academic
conferences on computer security, in May. [Daniel](https://www.danielhugenroth.com/) and
[Alastair](https://www.cl.cam.ac.uk/~arb33/) also worked on this project. Ceren's presentation
[is now available](https://www.youtube.com/watch?v=EEUdslTwYZ8):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EEUdslTwYZ8?si=8XNlKyv_Y5HZdGou" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Let me briefly explain what the paper is about.

Anonymity systems allow internet users to hide who is communicating with whom – for example, think
a whistleblower talking to a journalist, or a group of activists organising protests against their
repressive regime. [Tor](https://www.torproject.org/) is the most popular anonymity network;
[Nym](https://nymtech.net/) is a more recent design with stronger security (and incidentally, one of
the better cryptocurrency applications I’ve seen). Nym is based on a research system called
[Loopix](https://www.usenix.org/conference/usenixsecurity17/technical-sessions/presentation/piotrowska).

The trouble with these anonymity networks is that if you want to contact someone, you need to know
their public key, and sometimes a bunch of other information as well. In the case of Tor, this is
encoded in a “[onion service](https://community.torproject.org/onion-services/)” URL, which is an
unreadable sequence of random letters and numbers (sometimes service operators use brute force to
pick a public key so that the first few letters of the hostname spell out the name of the service,
but the rest remains random). In Nym, it’s an
[even longer base58 string](https://nymtech.net/docs/architecture/addressing-system.html). How are
users supposed to find the correct key for the person they’re trying to contact? If they send the
key via a non-anonymous channel or query a server, they leak the information of who is talking to
who, which defeats the entire purpose of the anonymity network.

Having to manually exchange public keys is a huge step backwards in terms of usability. A big part
of why WhatsApp and Signal succeeded in bringing end-to-end encryption to billions of users, while
PGP failed, is that today’s secure messaging apps allow you to find your friends using only a phone
number or some other friendly username, while PGP encouraged
[weird, nerdy, in-person meetings](https://en.wikipedia.org/wiki/Key_signing_party) for exchanging keys.

Pudding brings friendly usernames to the Loopix/Nym anonymity networks, so that users don’t have to
deal with long random strings. We used email addresses rather than phone numbers, for reasons
explained in the paper, but the idea is the same. The challenge is providing the username lookup in
a way that doesn’t leak who is talking to who. In fact, Pudding even goes further and hides whether
a given username is registered to the network or not.

If you’re wondering how this work on anonymity relates to my other work on
[CRDTs](https://crdt.tech/)/[local-first software](https://www.inkandswitch.com/local-first/): I see
anonymity networks as one possible transport layer on top of which we can build decentralised
collaboration software. Not all collaboration apps will need the metadata privacy of an anonymity
network, but it’s nice to be able to support high-risk users, such as investigative journalists, who
do have strong security needs.

If you want to learn more, please [watch the talk](https://www.youtube.com/watch?v=EEUdslTwYZ8),
[read the paper](https://arxiv.org/abs/2311.10825), or
[check out the source code](https://github.com/ckocaogullar/pudding-protocol)! Just note that the
implementation is a research prototype and not fit for production use. We're hoping that Nym might
officially adopt something like Pudding in the future.
