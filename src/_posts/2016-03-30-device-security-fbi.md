---
layout: ync-post
title: Device security and the FBI
---

*This article was originally [published on The Conversation][original] under the title
"FBI backs off from its day in court with Apple this time – but there will be others".*

After a [very public stand-off][apple-fbi] over an encrypted terrorist’s smartphone, the FBI has
[backed down][fbi-withdraw] in its court case against Apple, stating that an “outside party”
– rumoured to be [an Israeli mobile forensics company][cellebrite] – has found a way of accessing
the data on the phone.

The exact method is not known. Forensics experts [have speculated][nand] that it involves tricking
the hardware into not recording how many passcode combinations have been tried, which would allow
all 10,000 possible four-digit passcodes to be tried within a fairly short time. This technique
would apply to the iPhone 5C in question, but not newer models, which have stronger hardware
protection through the so-called [secure enclave][ios-security], a chip that performs
security-critical operations in hardware. The FBI has denied that the technique involves
[copying storage chips][copying-chips].

So while the details of the technique [remain classified][classified], it’s reasonable to assume
that [any security technology can be broken][bullshit] given sufficient resources. In fact, the
technology industry’s dirty secret is that most products are frighteningly insecure.

Even when security technologies are carefully designed and reviewed by experts, mistakes happen. For
example, researchers recently found a way of [breaking the encryption of Apple’s iMessage
service][imessage], one of the most prominent examples of end-to-end encryption (which ensures that
even the service provider cannot read the messages travelling via its network).

Most products have a much worse security record, as they are not designed by security experts, and
often contain flaws that are easily found by attackers. For example, [internet-connected baby
monitors][babymon1] that could be hacked and allow strangers to [talk to their child][babymon2] at
night. Insecure cars that [could be controlled via an internet connection][jeep] while being driven.
Drug infusion pumps at US hospitals that could be hacked by an attacker to [manipulate drug dosage
levels][drug-dosage].

Even national infrastructure is vulnerable, with software weaknesses exploited to cause serious
damage at a [German steel mill][steel-mill], bring down parts of the [Ukrainian power
grid][ukraine-grid], and [alter the mix of chemicals added to drinking water][water-treatment].
While our lives depend more and more on “smart” devices, they are frequently designed in incredibly
stupid ways.


Insecure by design
------------------

The conflict between Apple and the FBI was particularly jarring to security experts, seen as an
attempt to deliberately make technology less secure and win legal precedent to gain access to other
devices in the future. Smartphones are becoming increasingly ubiquitous, and we know from the
Snowden files that the NSA can [turn on a phone’s microphone][remote-microphone] remotely without
the owner’s knowledge. We are heading towards a state in which every inhabited space contains
a microphone (and a camera) that is connected to the internet and which might be recording anything
you say. This is not even a paranoid exaggeration.

So, in a world in which we are constantly struggling to make things more secure, the FBI’s desire to
create a backdoor to provide it access is like pouring gasoline on the fire.

The problem with security weaknesses is that it is impossible to control who can use them.
Responsible researchers report them to the vendor so that they can be fixed, and sometimes receive
a [bug bounty][bug-bounties] in return. But those who want to make more money may [secretly sell the
knowledge to the highest bidder][zerodays]. Customers of this [dark trade in
vulnerabilities][zeroday-trade] often include [governments with repressive human rights
records][hackingteam].

If the FBI has found a means of getting data off a locked phone, that means the intelligence
services of other countries have probably independently developed the same technique – or been sold
it by someone who has. So if an American citizen has data on their phone that is of intelligence
interest to another country that data is at risk if the phone is lost or stolen.

Most people will never be of intelligence interest of course, so perhaps such fears are overblown.
But the push from governments, for example through the pending [Investigatory Powers Bill][ipbill]
in the UK, to allow the security services to hack devices in bulk – even if the devices belong to
people who are not suspected of any crime – cannot be ignored.

Bulk hacking powers, taken together with insecure, internet-connected microphones and cameras in
every room, are a worrying combination. It is a cliche to conjure up Nineteen Eighty-Four, but the
picture it paints is something very much like Orwell’s telescreens.

<iframe width="440" height="260" src="https://www.youtube.com/embed/CCfW6HFP5cI?wmode=transparent&amp;start=0" frameborder="0" allowfullscreen></iframe>


Used by one, used by all
------------------------

To some extent law enforcement has historically benefited from poor computer security, as hacking
a poorly secured digital device is easier and cheaper than planting a microphone in someone’s house
or rifling their physical belongings. No wonder that the former CIA director [loves the Internet of
Things][petraeus].

This convenience often tempts governments to deliberately weaken device security – the FBI’s case
against Apple is just one example. In the UK, the proposed Investigatory Powers Bill allows the
secretary of state to issue “[technical capability notices][capability]”, which are secret
government orders to demand manufacturers make a device or service deliberately less secure than it
could be. GCHQ’s new MIKEY-SAKKE standard for encrypted phone calls is also [deliberately
weakened][mikey-sakke] to allow easier surveillance.

But a security flaw that can be used by one can be used by all, whether legitimate police
investigations or hostile foreign intelligence services or organised crime. The fears of [criminals
and terrorists “going dark” are overblown][going-dark], but the risk to life from insecure
infrastructure is real: fixing these weaknesses should be our priority, not striving to make devices
less secure for the sake of law enforcement.

[original]: https://theconversation.com/fbi-backs-off-from-its-day-in-court-with-apple-this-time-but-there-will-be-others-56932
[apple-fbi]: https://theconversation.com/why-apple-is-making-a-stand-against-the-fbi-54925
[fbi-withdraw]: http://www.theguardian.com/technology/2016/mar/21/fbi-apple-court-hearing-postpone-unlock-terrorist-iphone
[cellebrite]: https://www.rt.com/usa/336948-fbi-israel-crack-iphone/
[nand]: http://www.zdziarski.com/blog/?p=5966
[ios-security]: https://www.apple.com/business/docs/iOS_Security_Guide.pdf
[copying-chips]: https://www.washingtonpost.com/world/national-security/the-fbi-is-testing-a-code-based-way-to-get-into-the-san-bernardino-iphone/2016/03/24/bc79cd14-f1dc-11e5-a61f-e9c95c06edca_story.html
[classified]: http://www.theguardian.com/technology/2016/mar/22/apple-fbi-san-bernardino-iphone-method-for-cracking
[bullshit]: https://theintercept.com/2016/03/08/snowden-fbi-claim-that-only-apple-can-unlock-phone-is-bullshit/
[imessage]: http://blog.cryptographyengineering.com/2016/03/attack-of-week-apple-imessage.html
[babymon1]: http://boingboing.net/2016/01/19/griefer-hacks-baby-monitor-te.html
[babymon2]: http://sfglobe.com/2016/01/06/stranger-hacks-familys-baby-monitor-and-talks-to-child-at-night/
[jeep]: https://theconversation.com/auto-industry-must-tackle-its-software-problems-to-stop-hacks-as-cars-go-online-45325
[drug-dosage]: https://www.boxer.senate.gov/?p=release&id=3254
[steel-mill]: http://www.bbc.co.uk/news/technology-30575104
[ukraine-grid]: https://theconversation.com/the-cyberattack-on-ukraines-power-grid-is-a-warning-of-whats-to-come-52832
[water-treatment]: http://news.softpedia.com/news/hackers-modify-water-treatment-parameters-by-accident-502043.shtml
[remote-microphone]: http://www.theguardian.com/world/2014/feb/01/edward-snowden-intelligence-leak-nsa-contractor-extract
[bug-bounties]: http://www.tripwire.com/state-of-security/vulnerability-management/11-essential-bug-bounty-programs-of-2015/
[zerodays]: http://www.wired.com/2015/11/heres-a-spy-firms-price-list-for-secret-hacker-techniques/
[zeroday-trade]: https://theconversation.com/trusting-hackers-with-your-security-youd-better-be-able-to-sort-the-whitehats-from-the-blackhats-44477
[hackingteam]: https://citizenlab.org/2015/08/hacking-team-leak-highlights-citizen-lab-research/
[ipbill]: https://theconversation.com/us/topics/investigatory-powers-bill
[petraeus]: http://www.wired.com/2012/03/petraeus-tv-remote/
[capability]: http://www.theguardian.com/technology/2015/nov/09/tech-firms-snoopers-charter-end-strong-encryption-britain-ip-bill
[mikey-sakke]: https://www.benthamsgaze.org/2016/01/19/insecure-by-design-protocols-for-encrypted-phone-calls/
[going-dark]: https://cyber.law.harvard.edu/pubrelease/dont-panic/Dont_Panic_Making_Progress_on_Going_Dark_Debate.pdf
