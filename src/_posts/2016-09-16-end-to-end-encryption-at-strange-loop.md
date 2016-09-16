---
layout: talk
title: "End-to-end encryption: Behind the scenes"
venue: Strange Loop
place: St. Louis, Missouri, USA
venue_url: http://thestrangeloop.com/2016/end-to-end-encryption-behind-the-scenes.html
slides_url: https://speakerdeck.com/ept/end-to-end-encryption-behind-the-scenes
---

This is a joint talk with [Diana Vasile](http://www.cl.cam.ac.uk/~dac53/).

<script async class="speakerdeck-embed" data-id="5060ce99a98c4faa86d8817f59dfbcf6" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

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

We will also look at taking end-to-end encryption to other areas beyond instant messaging. What
would it take to build an end-to-end secure version of Google Docs, for example?

References
----------

1.  David Adrian, Karthikeyan Bhargavan, Zakir Durumeric, et al.:
    “[Imperfect Forward Secrecy: How Diffie-Hellman Fails in Practice][weakdh],”
    at *22nd ACM Conference on Computer and Communications Security* (CCS), October 2015.
2.  Nikita Borisov, Ian Goldberg, and Eric A Brewer:
    “[Off-the-Record Communication, or, Why Not To Use PGP][otr],”
    at *ACM Workshop on Privacy in the Electronic Society* (WPES), October 2004.
3.  Tilman Frosch, Christian Mainka, Christoph Bader, et al.:
    “[How Secure is TextSecure?][textsecure],” at *1st IEEE European Symposium on
    Security and Privacy* (EuroS&P), March 2016.
4.  Christina Garman, Matthew Green, Gabriel Kaptchuk, Ian Miers, and Michael Rushanan:
    “[Dancing on the Lip of the Volcano: Chosen Ciphertext Attacks on Apple iMessage][imessage],”
    at *25th USENIX Security Symposium*, August 2016.
5.  Hugo Krawczyk: “[SIGMA: the “SIGn-and-MAc” Approach to Authenticated Diffie-Hellman
    and its Use in the IKE Protocols][sigma],” at
    *23rd Annual International Cryptology Conference* (CRYPTO), August 2003.
6.  Ben Laurie: “[Certificate Transparency][laurie],” *ACM Queue*, volume 12, number 8, August 2014.
7.  Moxie Marlinspike: “[Advanced cryptographic ratcheting][ratcheting],” 26 November 2013.
8.  Marcela S Melara, Aaron Blankstein, Joseph Bonneau, Edward W Felten, and Michael J Freedman:
    “[CONIKS: Bringing Key Transparency to End Users][coniks],” at
    *24th USENIX Security Symposium*, August 2015.
9.  Wade Trappe and Lawrence C Washington: *Introduction to Cryptography with Coding Theory*,
    2nd edition. Pearson, July 2005. ISBN: 978-0131862395
10. Nik Unger, Sergej Dechand, Joseph Bonneau, et al.:
    “[SoK: Secure Messaging][unger],” at *36th IEEE Symposium on Security and Privacy*, May 2015.
11. “[iOS Security White Paper][ios],” Apple Inc., May 2016.
12. “[WhatsApp Encryption Overview][whatsapp],” WhatsApp Inc., April 2016.

[weakdh]: https://weakdh.org/imperfect-forward-secrecy-ccs15.pdf
[otr]: https://otr.cypherpunks.ca/otr-wpes.pdf
[textsecure]: https://eprint.iacr.org/2014/904
[imessage]: https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/garman
[sigma]: http://iacr.org/archive/crypto2003/27290399/27290399.pdf
[laurie]: http://queue.acm.org/detail.cfm?id=2668154
[ratcheting]: https://whispersystems.org/blog/advanced-ratcheting/
[coniks]: https://www.usenix.org/system/files/conference/usenixsecurity15/sec15-paper-melara.pdf
[unger]: http://cacr.uwaterloo.ca/techreports/2015/cacr2015-02.pdf
[ios]: http://www.apple.com/business/docs/iOS_Security_Guide.pdf
[whatsapp]: https://www.whatsapp.com/security/WhatsApp-Security-Whitepaper.pdf
