---
layout: paper
type: conference
title: "Kintsugi: Decentralized E2EE Key Recovery"
authors: Emilie Ma and Martin Kleppmann
venue: 29th International Workshop on Security Protocols
place: Cambridge, UK
award: Best Presentation Award
venue_url: https://www.cl.cam.ac.uk/events/spw/2025/
---

Abstract
--------

Kintsugi is a protocol for key recovery, allowing a user to regain access to end-to-end encrypted
data after they have lost their device, but still have their (potentially low-entropy) password.
Existing E2EE key recovery methods, such as those deployed by Signal and WhatsApp, centralize trust
by relying on servers administered by a single provider. Kintsugi is decentralized, distributing
trust over multiple recovery nodes, which could be servers run by independent parties, or end user
devices in a peer-to-peer setting. To recover a user's keys, a threshold _t_ + 1 of recovery nodes
must assist the user in decrypting a shared backup. Kintsugi is password-authenticated and protects
against offline brute-force password guessing without requiring any specialized secure hardware.
