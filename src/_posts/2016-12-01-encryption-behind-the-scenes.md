---
layout: ync-post
title: "End-to-end encryption: Behind the scenes"
---

This text is the script of a talk written by
[Diana Vasile](http://www.cl.cam.ac.uk/~dac53/) and [Martin Kleppmann](http://martin.kleppmann.com/),
and presented at the [Strange Loop conference](/2016/09/16/end-to-end-encryption-at-strange-loop.html)
in September 2016. The talk involved a bit of acting-out of cryptographic protocols, and we have
included the "stage directions" for acting in the text below.
A [video recording](https://www.youtube.com/watch?v=oRZoeDRACrY) of the talk is also available.
Our acting is not very good, but hopefully it is nevertheless educational and entertaining!

Thank you to [Mike Bridge](https://twitter.com/michaelbridge) for taking photos of us on-stage
(included in the text below).


Abstract
--------

There is no cloud -- it's just someone else's computer. And you're storing all sorts of sensitive
data on it, blindly trusting that this computer will only allow access to authorised users. What if
it is compromised?

End-to-end encryption avoids having to trust the servers. Although PGP/GPG encrypted email never
went mainstream, secure messaging apps like WhatsApp, Signal and iMessage have shown that it is
feasible for millions of people to use end-to-end encryption without being security experts.

But how do these protocols actually work? In this talk, we will dig into the details of secure
messaging protocols -- to understand the threats against which they defend, and how cryptographic
operations are combined to implement those defences in the protocol. If you have ever wondered what
"forward secrecy" means, how key exchange works, or how protocols can ensure you're communicating
with the right person (not an impostor like a "man in the middle"), this talk will clear things up.


Setup
-----

The talk requires various messages, printed on 21 pieces of cardboard. They are grouped into three
piles, listed in the order they are required.

Diana's pile (left side of stage as seen from the audience):

<ol>
<li>D1: “Dpub, Dprv, Mpub”</li>
<li>D2: “E<sub>k</sub>(sig&nbsp;||&nbsp;msg),&nbsp;k<sup>Mpub</sup>” (2 copies stacked on top of each other, to be picked up as one)</li>
<li>D3: Folded card: “x,&nbsp;g” on one half, can be opened to also reveal “k&nbsp;=&nbsp;g<sup>xy</sup>”</li>
<li>D4: “g<sup>x</sup>”</li>
<li>D5: “E<sub>k</sub>(msg)”</li>
<li>D6: Folded card: “x,&nbsp;g” on one half, can be opened to also reveal “k1&nbsp;=&nbsp;g<sup>xw</sup>”</li>
<li>D7: “g<sup>x</sup>”</li>
<li>D8: “E<sub>k1</sub>(msg)”</li>
</ol>

Sam's pile (middle of stage):

<ol>
<li>S1: “Dpub, Mpub”</li>
<li>S2: a photo of Martin on one side, a photo of Diana on the other side</li>
<li>S3: Folded card: “w,&nbsp;g” on one half, can be opened to also reveal “k1&nbsp;=&nbsp;g<sup>xw</sup>, k2&nbsp;=&nbsp;g<sup>yw</sup>”</li>
<li>S4: “g<sup>w</sup>” (2 copies)</li>
<li>S5: “E<sub>k2</sub>(msg)”</li>
</ol>

Martin's pile (right side of stage as seen from the audience):

<ol>
<li>M1: “Mpub, Mprv, Dpub” (2 copies stacked on top of each other, to be picked up as one)</li>
<li>M2: Folded card: “y,&nbsp;g” on one half, can be opened to also reveal “k&nbsp;=&nbsp;g<sup>xy</sup>”</li>
<li>M3: “g<sup>y</sup>”</li>
<li>M4: Folded card: “y,&nbsp;g” on one half, can be opened to also reveal “k2&nbsp;=&nbsp;g<sup>wy</sup>”</li>
<li>M5: “g<sup>y</sup>”</li>
</ol>

Sam and Martin also each need a music stand to prop up cards temporarily, as there are too many
cards to hold all at once.

Script
======

<img src="/2016/12/01/slide01.png" width="550" height="412">

**Martin:**

Hello everyone, hope you're all well. My name is Martin Kleppmann...

**Diana:**

...and I'm Diana Vasile. We are both researchers at the University of Cambridge, at the Computer
Lab, which is the department of computer science. Our work is in the area of end-to-end encryption.
Although the basic cryptographic algorithms have existed for decades, end-to-end encryption is only
just breaking into the mainstream with messaging apps like Signal, and now WhatsApp, which has
started using Signal's protocol. In this talk, we would like to explore how those messaging apps
work, and understand some of their strengths and weaknesses.

<img src="/2016/12/01/slide02.png" width="550" height="412">

**Martin:**

The work we have been doing is part of a project called [TRVE DATA](http://trvedata.org/). Our goal
is to bring end-to-end encryption to lots more applications, so that we don't have to blindly trust
the cloud and server operators any more. We're totally fine with using cloud services, we just don't
want to have to blindly trust them when it comes to medical data, legally privileged communication,
journalistic investigations, or other sensitive kinds of data. For example, we want something like
Google Docs, in which the servers can't read the content of the document, only the end user devices
can read it.  The project is still at an early stage, but you can find out more at trvedata.org,
spelled with a "v" instead of a "u".

<img src="/2016/12/01/slide03.png" width="550" height="412">

**Diana:**

Right now, if someone claims their application is "secure", that typically means that the client
uses HTTPS to communicate with the server. HTTPS means running HTTP over TLS (which used to be
called SSL). This protocol encrypts and authenticates the data as it flows over the network. The
nice thing about that security layer is that you no longer have to trust the network. For example,
you can log into your online banking while using a free coffee shop wifi, and you can be reasonably
confident that nobody is going to steal money from your account, even though the coffee shop owner
can see all of your network packets flowing through their router, and even tamper with them.

<img src="/2016/12/01/slide04.png" width="550" height="412">

So, TLS is great because it means we don't have to trust the network, and we can send sensitive data
like credit card numbers over the internet, even though we may not trust all of the network
operators. However, most data is still stored on servers somewhere, also known as "the cloud".

<img src="/2016/12/01/slide05.png" width="550" height="412">

This is your friendly reminder that there is no cloud -- it's just somebody else's computer. And
when you're using email, or Google Docs, or Evernote, or Facebook, or any other kind of web
application, you have to blindly trust the operators of those servers to do the right thing: to
prevent unauthorised access to the data, and to maintain integrity.

<img src="/2016/12/01/slide06.png" width="550" height="412">

What we want to do is provide end-to-end encryption, which means that the data remains encrypted as
it flows through any servers. This means we treat the servers like the network: we trust neither.

PGP/GnuPG
---------

<img src="/2016/12/01/slide07.png" width="550" height="412">

**Diana:**

The classic example of end-to-end encryption is PGP, which provides encryption for emails and files.
It's been around since the late 80s and it's famous for its usability problems. But in this talk
we're going to start by looking at the cryptographic primitives that it uses and then see how we can
improve on them.

The most important underlying algorithm behind PGP is RSA, which is used for both encryption and
signing. You've probably come across the concept of public and private keys and RSA is one of the
algorithms that can do this sort of public key cryptography. We won't go into the details of the
mathematics behind it, but will use the mathematical notation as it will help us understand some of
the other protocols further down the line.

<img src="/2016/12/01/slide08.png" width="550" height="412">

RSA is based on exponentiations and modular arithmetic. A private key and a public key are each just
a number, and they are chosen such that when you multiply them together, you get 1 in a certain set
of numbers. In other words, the public key and the private key are inverses of each other. If you
remember how exponentiation works, if you take some number m and raise it to the power Dpub, and
then raise the result to the power Dprv, you get the same as if you had taken m to the power Dpub
times Dprv. Since Dpub times Dprv is 1, m to the power 1 is just m, so we get back the same number.
The reason this encryption algorithm works is because actually reversing the exponentiations is
computationally difficult, such that it would take millions of years. So by raising the number m to
the power of Dpub, even if you know Dpub, you can't get back m unless you know Dprv.

<img src="/2016/12/01/slide09.png" width="550" height="412">

Let's have a look at how PGP uses RSA. First of all, when people describe these protocols, the
example they use is that Alice wants to send a message to Bob. But we are bored of always hearing
about Alice and Bob, and our names are not Alice and Bob. So we are going to use the example that
Diana wants to send an encrypted and signed message to Martin. The idea of a signature is that
Martin can be sure that it was really Diana who sent the message.

The way that works with RSA is that Diana first takes a hash of her message and then raises the
result to the power of her private key. When Martin wants to check the signature, he needs to raise
the actual signature to the power of Diana's public key and verify that he gets back the hash of the
message. This succeeds only if the signature was created with Diana's private key and thus proves
that the sender of the message has this private key.

<img src="/2016/12/01/slide10.png" width="550" height="412">

**Martin:**

Let's do a live demo of how encrypting and sending a message with PGP works. But live demos on
computers are boring. Let's do a live live demo in real life!

<em class="stagedir">(Sam enters)</em>

For this purpose, I'd like to welcome a special guest on stage, my friend Sam Stokes. The three of
us are going to act out a few messaging protocols using low-tech tools. The scenario is that Diana
wants to send a message to me. And Sam is going to play the role of the network&hellip; and he is
going to do that very well, but sometimes he might turn out to be a bit evil. To be clear, in real
life, Sam is the least evil person you'll meet, but he has agreed to be temporarily a bit evil for
the purpose of this talk.

Here is me, this is what I know <em class="stagedir">(Martin holds up 2 stacked copies of card M1:
"Mpub, Mprv, Dpub")</em>: I have my own private and public key, Mprv and Mpub, in red; and I have
Diana's public key Dpub in blue, since it is public. <em class="stagedir">(Diana holds up card D1:
"Dpub, Dprv, Mpub".)</em> Diana has her own private and public keys, and she has my public key.
<em class="stagedir">(Sam holds up card S1: "Dpub, Mpub", then places it on the stand in front of
him.)</em> And Sam has both of our public keys, since he can find them online.

<img src="/2016/12/01/slide11.png" width="550" height="412">

Now Diana wants to send me a message using PGP. To encrypt the message, PGP uses symmetric key
encryption, where the signature and message are encrypted using some random key k.
<em class="stagedir">(Diana holds up 2 stacked copies of card D2:
"E<sub>k</sub>(sig&nbsp;||&nbsp;msg),&nbsp;k<sup>Mpub</sup>".)</em> Diana first generates a random
k, and encrypts the signature and the message using that key. The result is the ciphertext c. Then
Diana does RSA encryption: she raises k to the power of my public key, and sends it to me, along
with the ciphertext c.

<em class="stagedir">(Diana passes the 2 stacked copies of D2:
"E<sub>k</sub>(sig&nbsp;||&nbsp;msg),&nbsp;k<sup>Mpub</sup>" to Sam, who carries them across the
stage towards Martin. Halfway, Sam stops and reveals that there are two copies, apparently "making
a copy" of the message. He sneakily keeps one copy to himself, and passes the other copy to
Martin.)</em>

Now the encrypted message travels across the network. Remember that Sam is our network today. He can
see the ciphertext c, but he can't access the symmetric key k, because he doesn't have the private
key to decrypt it. But he can take a copy of the message and stash it away for the future.

When I get the message, I take the encrypted k and raise it to the power of my private key Mprv.
Since the private key is the inverse of the public key, I get back the original k. Now I can decrypt
the ciphertext using k, and get out the signature and the actual message. And finally, I can check
the signature and read the message contents.

PGP weaknesses
--------------

<img src="/2016/12/01/slide12.png" width="550" height="412">

So far, this seems reasonable, doesn't it? Even if Sam is a server, the message is protected from
Sam in transit. Only I can read it, so end-to-end encryption works. Nevertheless, people have become
quite critical of PGP. For example, Matthew Green says that it's like a museum of 1990s crypto. We
have learnt a lot since the 1990s on how to design more secure systems, but PGP hasn't significantly
evolved.

<img src="/2016/12/01/slide13.png" width="550" height="412">

In particular, think about what happens over a long period of time, perhaps a few years. People will
send me all sorts of encrypted messages, and they are all encrypted using the same public key Mpub.
But what happens if my private key Mprv falls into the wrong hands somehow? There are lots of ways
how that could happen. Someone could trick me into revealing it, or steal my laptop, or exploit my
browser to install malware, or turn up with a warrant signed with a judge, or simply coerce me in
some way&hellip;

<em class="stagedir">(Sam sneaks up to Martin, who is still holding his two copies of the M1: "Mpub,
Mprv, Dpub" card. He steals one of the copies, and triumphantly marches off. He raises the card,
along with the copy of the D2: "E<sub>k</sub>(sig&nbsp;||&nbsp;msg),&nbsp;k<sup>Mpub</sup>" message
he took previously, demonstrating that he now has the ability to decrypt the message.)</em>

<a href="https://www.flickr.com/photos/strangeloop2016/29796417602/in/album-72157673243990730/"><img src="/2016/12/01/acting01.jpg" width="550" height="367"></a>

...the problem is, that if my key is *ever* compromised, it's a complete disaster. Any message
addressed to me in the past or in the future can now be decrypted by the person who stole my key.

<img src="/2016/12/01/slide14.png" width="550" height="412">

**Diana:**

So what we really want from such a protocol is the ability to self-heal. We call this ability
forward and backward secrecy and what this healing implies is that if at any point any private key
got stolen, the number of vulnerable messages is kept as small as possible. It's impossible to make
the system so that absolutely no messages are compromised, but at least we can avoid exposing years
worth of messages to the attacker.

<img src="/2016/12/01/slide15.png" width="550" height="412">

<a href="https://www.flickr.com/photos/strangeloop2016/29282981544/in/album-72157673243990730/"><img src="/2016/12/01/acting02.jpg" width="550" height="367"></a>

Diffie-Hellman
--------------

The most common way of achieving forward secrecy is by using the Diffie-Hellman protocol, which
actually dates back to the 1970s, and for which the authors received a Turing Award last year.

<img src="/2016/12/01/slide16.png" width="550" height="412">

Diffie-Hellman works like this: we start with two constants g and p, which are publicly known. They
need to be chosen according to certain mathematical rules, but we'll gloss over those details. When
Diana wants to send an encrypted message to Martin, she first randomly chooses a number x and keeps
it secret. <em class="stagedir">(Diana raises her card D3: "x,&nbsp;g", folded over so the other side is
not visible.)</em> She then raises g to the power of x and sends that along to Martin. <em
class="stagedir">(Diana passes her card D4: "g<sup>x</sup>" to Sam, who delivers it to Martin.)</em> Upon
receiving the exponentiation, Martin also chooses a random number y and keeps it secret. <em
class="stagedir">(Martin raises his card M2: "y,&nbsp;g", folded over so the other side is not
visible.)</em> He then similarly raises g to the power of Y and sends it to Diana. <em
class="stagedir">(Martin passes his card M3: "g<sup>y</sup>" to Sam, who delivers it to Diana.)</em>

<img src="/2016/12/01/slide17.png" width="550" height="412">

When Diana receives g<sup>y</sup> she can further raise it to the power of her secret number x, resulting in
the secret k. Similarly, Martin takes the g<sup>x</sup> and raises it to the power of his secret number y,
which should arrive at the same secret k since the operations are commutative.
<em class="stagedir">(Diana and Martin unfold their cards to show k.)</em> Now we can communicate
securely using this secret k, only known to us. Even though Sam was able to observe g<sup>x</sup> and g<sup>y</sup>, he
is not able to calculate k from those numbers. Similarly to the PGP example before, Diana can now
encrypt the message using k and send the ciphertext to Martin. <em class="stagedir">(Diana takes the
card D5: "E<sub>k</sub>(msg)" and passes it to Sam, who delivers it to Martin.)</em> Since Martin has the same
k, he can now decrypt it.

So how do we achieve the forward secrecy that we talked about earlier? Remember that in Diffie
Hellman, the secret numbers x and y can be thrown away as soon as the key exchange has completed.
That leaves just k as a secret, but we don't want to keep that for too long either. The thing to
realise here is that we don't have to just complete the DH exchange once, we can keep doing it all
the time.

<img src="/2016/12/01/slide18.png" width="550" height="412">

In the first two messages, Diana and Martin exchange g<sup>x1</sup> and g<sup>y1</sup> and derive
k1, which they can use to encrypt a message. Then Diana replies, but she doesn't only send an
encrypted message, but also includes a new g<sup>x2</sup>, from which both can derive a new key k2,
and so on. This is called a *ratchet*; as the participants exchange messages, they also continually
derive new keys. If any key is stolen at some point in time, the attacker might be able to decrypt
a few messages, but the key will soon become useless.

Pre-keys
--------

<img src="/2016/12/01/slide19.png" width="550" height="412">

**Martin:**

Diffie-Hellman is pretty great for achieving forward secrecy, but it's still not quite perfect. In
particular, there are two problems with Diffie-Hellman that we'd like to talk about. The first one
is: what happens if the recipient of the message is offline? This isn't a problem in the case of a
client connecting to a server, because we can assume the server to always be online. But if we're
doing end-to-end encryption between messaging apps on mobile phones, well, mobile phones are offline
a lot of the time.

With Diffie-Hellman, as we described it so far, Martin needs to be online in order for Diana to send
a message to Martin. That's because Diana needs to calculate the shared secret k in order to encrypt
the message, but she can only calculate k once she has received a g<sup>y</sup> from Martin.

Fortunately, there is a pretty simple solution called "pre-keys", and it is used for example in
Signal and WhatsApp. In our previous example, I generated the g<sup>y</sup> only after Diana sent me
her g<sup>x</sup>. But actually, there is no need to wait for someone to send me a message: I can
just generate a supply of secret numbers y, and exponentials g<sup>y</sup>, ahead of time -- for
example, when I first install the app. I can then store the g<sup>y</sup> values on a server, which
is ok since g<sup>y</sup> is not secret. The server can hand out those values on my behalf if I am
offline.

<img src="/2016/12/01/slide20.png" width="550" height="412">

For example, if Diana wants to contact me while I am offline, she can generate her own random x, get
one of my g<sup>y</sup> values from the server, and then calculate k right away. She can then
encrypt a message using that k, and send it to a server, along with her g<sup>x</sup>. The server
will buffer the encrypted message until I come back online. When I retrieve the message from the
server, I can calculate k using g<sup>x</sup> and y, and thus I can decrypt it -- even if Diana is
now offline. This pre-key protocol is super useful for asynchronous messaging apps like Signal and
WhatsApp, where people are offline most of the time.

Active attacks
--------------

Let's talk about the second problem with Diffie-Hellman. And for that, let's switch back to the
traditional version without pre-keys. If you look at this protocol, there is nothing guaranteeing
that Diana is really talking to Martin, or that Martin is really talking to Diana. They could be
talking to an impostor!

<em class="stagedir">(Sam picks up card S2 (the one with the photos). Showing the side with Martin's
photo, he walks up to Diana and shakes her hand.)</em> For example, Sam could pretend to be Martin
when he is talking to Diana... <em class="stagedir">(Sam walks over to Martin, turning around the
card to show the side with Diana's photo, and shakes Martin's hand.)</em> and he could pretend to be
Diana when he is talking to Martin. By doing this, he can intercept the messages we are sending to
each other. This is called a "man-in-the-middle" attack.

<a href="https://www.flickr.com/photos/strangeloop2016/29910646195/in/album-72157673243990730/"><img src="/2016/12/01/acting03.jpg" width="550" height="367"></a>

Let's go through the protocol to see what this means in more detail. As before, Diana wants to send
a message to Martin, using a Diffie-Hellman key exchange. As before, she sends her g<sup>x</sup>
over the network. <em class="stagedir">(Diana raises her card D6: "x,&nbsp;g", folded over so the
other side is not visible. She also takes card D7: "g<sup>x</sup>" and hands it to Sam, who places
it on a stand in front of him.)</em>

<img src="/2016/12/01/slide21.png" width="550" height="412">

However, this time, Sam is not being an honest network. Instead of delivering g<sup>x</sup> to
Martin, he pretends to be Martin! He randomly generates his own number, let's call it w, and
calculates g<sup>w</sup>.  <em class="stagedir">(Sam picks up his card S3: "w,&nbsp;g", folded over
so the other side is not visible, shows it, and places it on the second stand. He then picks up the
two cards S4: "g<sup>w</sup>".)</em> Then he has to deliver something to Martin -- but instead of
delivering Diana's g<sup>x</sup>, he delivers his own g<sup>w</sup>. <em class="stagedir">(Sam hands
one copy of S4: "g<sup>w</sup>" to Martin.)</em>

Martin thinks that request actually came from Diana, so he chooses his y and sends g<sup>y</sup>
over the network in response. <em class="stagedir">(Martin raises his card M4: "y,&nbsp;g", folded
over so the other side is not visible. Martin also picks up card M5: "g<sup>y</sup>" card and gives
it to Sam, who places it next to D7: "g<sup>x</sup>" on the first stand.)</em> Based on the
g<sup>w</sup> he received from Sam, Martin can now calculate a key k2 and he thinks he shares this
key with Diana, but actually Sam is the other person who knows k2. <em class="stagedir">(Martin
unfolds his M4: "y,&nbsp;g" card to show k2.)</em>

Sam can now send his g<sup>w</sup> to Diana as if it were Martin responding. Using this
g<sup>w</sup>, Diana will calculate her secret k1, which she thinks is shared with Martin, but is
actually shared with Sam. <em class="stagedir">(Sam gives the other S4: "g<sup>w</sup>" card to
Diana, and Diana unfolds her D6: "x,&nbsp;g" card to show the key k1.)</em> Now Sam can decrypt any
messages between us, since he knows both k1 and k2. <em class="stagedir">(Sam gleefully unfolds his
S3: "w,&nbsp;g" card to show k1 and k2, then places the card back on the stand.)</em>

<a href="https://www.flickr.com/photos/strangeloop2016/29910480885/in/album-72157673243990730/"><img src="/2016/12/01/acting04.jpg" width="550" height="367"></a>

So when Diana sends a message encrypted with key k1, Sam decrypts it and re-encrypts it with key k2
to send it to Martin. <em class="stagedir">(Diana picks up card D8: "E<sub>k1</sub>(msg)" and passes
it to Sam. Sam swaps it for his own card S5: "E<sub>k2</sub>(msg)" and delivers the latter to
Martin.)</em> In the process Sam can read the content of the message and even change it! We can see
that Diffie-Hellman provides secrecy against attackers who only passively listen to messages, but it
breaks down if a man in the middle can actively interfere with the messages that are passed back and
forth. In the rest of this talk we will talk more about *authentication*, which can prevent such
active attacks.

That's the end of our live demo. Please can we all say a big thankyou to Sam for being our evil
man-in-the-middle! <em class="stagedir">(Sam gets a round of applause and exits.)</em>

<img src="/2016/12/01/slide22.png" width="550" height="412">

**Diana:**

Let's talk about methods for authentication in a cryptographic protocol. When we talked about PGP
earlier, we saw an example of authentication: when I sent a message to Martin, I took a hash of the
message and raised it to the power of my private key Dprv. We call that a *digital signature*: only
I, or someone who has my private key, could create that signature. Martin could check that it came
from me by raising it to the power of my public key, and calculating the same hash of the message,
and checking that he got the same result.

<img src="/2016/12/01/slide23.png" width="550" height="412">

Therefore, this is an actual cryptographic proof that I, owner of Dprv authored the message that was
signed, so Martin can be sure that Sam didn't tamper with the message.

<img src="/2016/12/01/slide24.png" width="550" height="412">

So if the problem with Diffie-Hellman is that a man-in-the-middle can interfere with our messages,
then how about we add signatures to Diffie-Hellman? For example, here is a first attempt. Note this
algorithm is actually broken, so please don't try this at home. But for the sake of argument, let's
say we add a PGP-style signature to the message. Martin could then check the signature using my
public key. Would that do the job?

Actually, adding the signature here doesn't help much, because Sam could still do a
man-in-the-middle attack on the key exchange. But there is another problem that is a bit more
subtle. It comes down to the question of what precisely we mean with *authentication*.

Deniability
-----------

It may seem counterintuitive, but with authentication in secure messaging we want both a way to
cryptographically prove that Diana authored a certain message to the chat participants, and also
have deniability to the outside world. How can that be? Lets look a bit at how we, as people
communicate.

<img src="/2016/12/01/slide25.png" width="550" height="412">

Right now, the two of us are standing here on stage, communicating some ideas about information
security to all of you. We're being live-captioned and recorded on video. Every word we say will be
public on the internet: we are *on the record*. Therefore, we obviously need to choose our words
carefully. We don't want to offend anyone, and we want to make sure everything we say is accurate
and fair. Everything we say will be publicly attributed to us, so we think very hard about what we
say.

On the other hand, if you talk to us tonight at the bar, perhaps we will be a bit more open and
frank, discussing unvarnished opinions, perhaps saying something stupid. We can feel more relaxed in
that environment because we know it's not being recorded; it's not permanently on the public record.
If you turn up with a video camera and start recording our conversation at the bar, we will not be
pleased, because it's supposed to be an off-the-record environment.

Of course, one of you could overhear what we're saying and tell your friends -- but without a
recording, you wouldn't be able to prove to your friends that we really said that. You might have
just made it up, and your friends cannot know for sure whether you really overheard us or if you're
telling lies.

The same is true in cryptographic protocols. When Diana sent me that message over PGP, she signed it
with her private key. That means not only I can verify that it came from her, but anyone else now
also has cryptographic proof that it was Diana who sent this message.

<img src="/2016/12/01/slide26.png" width="550" height="412">

Now, if the message is a *contract*, then we absolutely do want a digital signature: we want anybody
to be able to check that it was indeed Diana who signed this message, and we want that proof to be
permanent. However, if the message is part of an informal chat, we don't want that kind of proof. If
one of us accidentally says something stupid, we don't want to leave a permanent cryptographic audit
trail; we want the freedom to deny it and claim "no, I never said that!"

Real-life informal conversations have this *deniability* property: you can claim that I said
something, but if it was off the record, you can't prove that I really said it. Can we do the same
with cryptography?

<img src="/2016/12/01/slide27.png" width="550" height="412">

We talked earlier about the importance of authentication -- to make sure you're talking to the right
person, not a man in the middle. It seems like there's a contradiction here: we want to be able to
know who we're talking to, but be confident that what we say won't leave the room. For this purpose
we use *message authentication codes* (or *MACs*). As the name suggests these MACs are
cryptographically generated codes that are valid only for a particular message and attest that one
of the parties that hold the symmetric key has written that message. The subtlety is actually that
that's all an outsider can know, either Diana or Martin wrote the offending message, but there is no
way to really prove who actually wrote it, even if one of us turns evil and tries to pretend the
other wrote it. Inside the encryption though, when Martin receives a message signed with a MAC from
Diana, he can be sure that it was actually her who wrote it, because he knows that he didn't write
it himself. Note that for hash-MACs we hash the message with the key twice because only doing so
once would leave us open to certain attacks.

<img src="/2016/12/01/slide28.png" width="550" height="412">

When Diana wants to send a message to Martin, she puts the actual message through a HMAC calculator,
that uses a symmetric secure key to authenticate the message. She then appends the MAC to the
message and sends it to Martin.

On his end, Martin takes the message and computes the MAC on his own using the symmetric key and
then checks that the two MACs actually match.

<img src="/2016/12/01/slide29.png" width="550" height="412">

So, with HMACs we can achieve both authentication and deniability, since the sender of the HMAC
proves they know the shared secret k and it can only be checked by those who also know the shared
secret k. Deniability works just like the word of mouth example mentioned earlier. If Diana turns
over the communication between herself and Martin, there is no way for her to prove that it was
Martin and not Diana who wrote the offending message.

<img src="/2016/12/01/slide30.png" width="550" height="412">

**Martin:**

So now that we have this new primitive called HMAC, we can use it to authenticate messages in our
protocol. Here Diana would calculate the HMAC of the ciphertext using the shared secret k and Martin
can check it since he also knows k. However, both the encryption and the authentication now rely on
Diana and Martin really sharing this secret k and nobody else having k. We saw earlier that DH can
be used to establish this kind of secret but that it is vulnerable to man-in-the-middle attacks.
What we need is something like DH but with authentication to prevent active attacks.

Authenticated key exchange (SIGMA)
----------------------------------

I'll briefly show an example of such an authenticated key exchange protocol. This one is called
SIGMA, which stands for SIGn and MAc and which is used in the OTR chat protocol and IPSec VPNs for
example.

<img src="/2016/12/01/slide31.png" width="550" height="412">

We start in the familiar way as we've seen before, Diana chooses a random x and sends g to the power
of x to Martin. Martin similarly chooses a random y and calculates a shared key k by hashing g to
the power xy. So far this is all the familiar DH exchange that we've seen before. Now comes the
interesting bit. Martin doesn't just send g<sup>y</sup> but he also sends his public key Mpub and
this complicated looking signature. The construction of the signature is a bit subtle and I won't go
into detail of why it is structured this way, but you can see that you take first the two
exponentials of g and also my public key, then compute HMAC using the shared secret k that we just
derived. Finally I calculate a signature using my private key Mprv, written here as an RSA signature
by calculating the HMAC to the power Mprv. Diana does the same thing using her public and private
key. The end result, after Diana and Martin have checked all the signatures and HMACs is that
g<sup>xy</sup> is a shared secret between Diana and Martin and they can be sure that there has not
been any man-in-the-middle because all of the key exchange was authenticated using their private
keys.

<img src="/2016/12/01/slide32.png" width="550" height="412">

All of the above assumes that Diana and Martin already know the public keys for each other. That's
the requirement: the protocol only ensures that the other side owns the corresponding private key,
but if you don't know which public key belongs to which actual person, you can still be tricked by a
MITM. That means we need some way of ensuring that Diana really does have the correct public key for
Martin and vice-versa.

<img src="/2016/12/01/slide33.png" width="550" height="412">

This is not a new problem. The usual way of handling it is using a public key infrastructure. If you
have ever set up an SSL cert for a domain, you've seen the PKI in action. The purpose of the
certificate is to bind your server's public key to the domain name.

<img src="/2016/12/01/slide34.png" width="550" height="412">

The issue of binding a public key to an identity is of course not limited to websites. We could just
as well look at Diana as an identity. She's identified by several human-readable names, such as an
email address or a phone number. Moreover, she may have one or more public keys for example one for
her phone and another for her laptop. If i want to communicate securely with Diana, I set up a
communication channel with one of those email addr or phone numbers, but the actual cryptographic
authentication will happen with one of those public keys. Therefore we need to know exactly which
keys correspond to which phone numbers and email addresses.

<img src="/2016/12/01/slide35.png" width="550" height="412">

Broadly there are three approaches you can take for maintaining these bindings. In the case of SSL
certificates for websites, as discussed, there is a certificate authority that checks whether you
own a particular domain name and then issues a certificate, which is a signed statement that your
public key belongs to your domain name. Certificate authorities are sometimes also used to identify
people, for example through government id cards.

Secondly, several messaging services rely on key directories, for example imessage, signal and
whatsapp, all have databases that you can query for an email address or phone number and get back
the public key for that user. Thirdly, there is always the option of manually checking fingerprints
and signing other users keys to create a web of trust. Although, it seems pretty unlikely that
anyone aside from a small group of geeky users will end up doing this.

<img src="/2016/12/01/slide36.png" width="550" height="412">

An issue with certificate authorities and key directories is that we have to trust them to correctly
associate names and public keys. If they allow an attacker to register the attacker's public key for
someone else's name, the whole system becomes vulnerable. For domain names, Google has been pushing
an excellent effort called certificate transparency, which is a cryptographically auditable
append-only log of all the certificates that the certificate authorities have issued. People are
experimenting with other approaches, for example keybase binds public keys to social media user
names and Diana is researching use of gossip protocols to disseminate key material.

<img src="/2016/12/01/slide37.png" width="550" height="412">

This brings us to the end of our little exploration of cryptographic protocols. Let me quickly recap
the things that we have talked about. We started with PGP, which is the old-school approach to
making email encrypted end-to-end. Besides its usability issues, we saw that a major problem with it
is that if a private key is ever leaked, an attacker becomes able to decrypt all past and future
messages encrypted to that key. To fix this we want forward and backward secrecy and we saw how to
implement this using the DH key exchange. In the standard description of DH, it has the problem that
the recipient needs to be online in order for the sender to send an encrypted message, but we saw
that this can be fixed quite easily using pre-keys. This approach is used by Signal and whatsapp.
The bigger problem with DH is that it is vulnerable to MITM attacks and we saw the SIGMA protocol as
an alternative that authenticates the key exchange using private identity keys for the participants.
This brings us to the problem of knowing the correct public key for the person you want to
communicate with, which requires a PKI, such as cert authorities or key directories. Of course, PGP
has this problem as well. Current approaches for PKI are not exactly brilliant, but fixing PKI will
have to be a subject for another talk another time.
