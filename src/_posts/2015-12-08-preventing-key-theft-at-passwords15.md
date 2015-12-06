---
layout: paper
title: Strengthening public key authentication against key theft
authors: Martin Kleppmann and Conrad Irwin
venue: 9th International Conference on Passwords (Passwords15)
place: Cambridge, UK
venue_url: http://www.cl.cam.ac.uk/events/passwords2015/
paper_url: /papers/mrsa-pass15.pdf
---

Abstract
--------

Authentication protocols based on an asymmetric keypair provide strong authentication as long as the
private key remains secret, but may fail catastrophically if the private key is lost or stolen. Even
when encrypted with a password, stolen key material is susceptible to offline brute-force attacks.
In this paper we demonstrate a method for rate-limiting password guesses on stolen key material,
without requiring special hardware or changes to servers. By slowing down offline attacks and
enabling easy key revocation our algorithm reduces the risk of key compromise, even if a low-entropy
password is used.
