---
layout: paper
type: conference
me_presenting: true
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

<iframe width="550" height="309" src="https://www.youtube-nocookie.com/embed/8aENZMoiRZg?list=PLdIqs92nsIzQvvbTiWLLjZOVE7jPBDomw" frameborder="0" allowfullscreen></iframe>

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/2e56aa7d1efa466fb4893ea18b2ed6ca" title="Strengthening public key authentication against key theft" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 550px; height: 314px;" data-ratio="1.78343949044586"></iframe>


Abstract
--------

Authentication protocols based on an asymmetric keypair provide strong authentication as long as the
private key remains secret, but may fail catastrophically if the private key is lost or stolen. Even
when encrypted with a password, stolen key material is susceptible to offline brute-force attacks.
In this paper we demonstrate a method for rate-limiting password guesses on stolen key material,
without requiring special hardware or changes to servers. By slowing down offline attacks and
enabling easy key revocation our algorithm reduces the risk of key compromise, even if a low-entropy
password is used.
