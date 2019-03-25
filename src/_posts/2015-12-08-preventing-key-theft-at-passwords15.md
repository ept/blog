---
layout: paper
type: conference
title: Strengthening public key authentication against key theft
authors: Martin Kleppmann and Conrad Irwin
venue: 9th International Conference on Passwords
place: Cambridge, UK
doi: 10.1007/978-3-319-29938-9_9
venue_url: http://www.cl.cam.ac.uk/events/passwords2015/
paper_url: /papers/mrsa-pass15.pdf
slides_url: https://speakerdeck.com/ept/strengthening-public-key-authentication-against-key-theft
video_url: https://www.youtube.com/watch?v=8aENZMoiRZg&index=22&list=PLdIqs92nsIzQvvbTiWLLjZOVE7jPBDomw
---

<script async class="speakerdeck-embed" data-id="2e56aa7d1efa466fb4893ea18b2ed6ca" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

<iframe width="550" height="309" src="https://www.youtube-nocookie.com/embed/8aENZMoiRZg?list=PLdIqs92nsIzQvvbTiWLLjZOVE7jPBDomw" frameborder="0" allowfullscreen></iframe>

Abstract
--------

Authentication protocols based on an asymmetric keypair provide strong authentication as long as the
private key remains secret, but may fail catastrophically if the private key is lost or stolen. Even
when encrypted with a password, stolen key material is susceptible to offline brute-force attacks.
In this paper we demonstrate a method for rate-limiting password guesses on stolen key material,
without requiring special hardware or changes to servers. By slowing down offline attacks and
enabling easy key revocation our algorithm reduces the risk of key compromise, even if a low-entropy
password is used.
