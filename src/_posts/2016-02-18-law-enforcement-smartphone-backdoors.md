---
layout: ync-post
title: Should law enforcement services have a backdoor into smartphones?
---

*This article was originally supposed to be published on [The Conversation](https://theconversation.com/),
but was dropped because they already had another, very similar article.*

Apple has found itself challenging a judge’s ruling after it [refused to help the FBI][guardian]
break into the secured iPhone of Syed Rizwan Farook, one of the shooters at last year's attack in
San Bernardino, California. As the data on the phone is encrypted and investigators need the
passcode in order to decrypt it they have [demanded that Apple][magistrate-order], as the phone’s
manufacturer, help them.

On the face of it, assisting with the investigation of a terrorist act seems like a very reasonable
demand. Why would Apple refuse it? To understand we have to take a closer look at how smartphone
security works.

Apple’s [iOS operating system security guide][ios-security] explains that the iPhone deliberately
introduces a delay when checking a passcode: it allows at most 12 passcode guesses per second, and
sometimes waits several seconds after an incorrect guess, depending on your settings. This is to
prevent “brute force attacks”, where software tries every possible combination in order to find the
correct passcode.

On recent iPhones, this delay is enforced by the so-called [Secure Enclave][secure-enclave],
a special chip that handles security-critical aspects of the phone – such as encryption and the
fingerprint sensor – in hardware. In the case of Farook's phone, it's an iPhone 5C which [does not
have a Secure Enclave][apple-comply].

The reason Apple develops these security features is not anti-government activism – it is simply
commercial demand. The job of big corporate IT departments is to protect sensitive company data
against industrial espionage by competitors, and against attacks from criminal gangs. In many
industries a compromise of sensitive data would breach compliance with government regulations, and
[risk a heavy fine][data-loss-fine] or even criminal charges. This is not to mention the
reputational damage, as [many firms have found][talktalk]. And the same applies to individuals for
much the same reasons.

So if companies are willing to pay a premium for products that will keep their data safe, they will
happily buy iPhones for their employees, and require them to set a strong passcode. That way, even
if an employee accidentally forgets their phone at a bar, or it is [stolen from the employee's
home][burglary], the IT department can feel confident that whoever picks up the phone won’t be able
to access the sensitive emails and business records that may be stored on it.

For example, even if the phone is picked up by an agent of a hostile foreign intelligence service,
and they take it to their lab and open it up, remove the storage chips and attach them to computer
forensics apparatus – even then, they probably [won’t be able to salvage the data][ios-encryption].
An unlikely scenario for most people, but if you work for a defence contractor or the diplomatic
corps, you have to worry about such things. If companies are willing to pay for security features to
protect against such scenarios, it makes sense for companies such as Apple [to take note of their
wishes][apple-letter].

But what about situations when it might be legitimate for law enforcement to try to access this
data? If the FBI turn up with a warrant signed by a judge, should they not be able to get their
hands on the information?

The problem is that if there is a special method or technique, besides knowing the right passcode,
that grants access to protected data – known as a [backdoor][] – then that method or technique could
be used for both legitimate and illegitimate uses. How do you control who can use that backdoor? If
a phone manufacturer creates a backdoor for police, it [will inevitably be used by criminals as
well][doormats].

For example, imagine the FBI had a special piece of software that would allow them to unlock an
iPhone if authorised by a warrant. It would only take one rogue employee, or one hack of the FBI’s
computer systems, to leak that software onto the internet for any criminal – or foreign spies – to
use. Imagine they had a hardware device that would magically open an iPhone and reveal it’s data:
a few of those devices would end up on the black market very quickly. [Government departments can be
hacked][opm-hack], just like anyone else, and there are always employees looking to make a quick
buck.

Encryption backdoors [deliberately weaken security][eff]. This is fundamentally a bad idea, and can
have many [unforeseen consequences][juniper]. Trying to restrict access to strong encryption, as the
[US government tried and failed to do in the 1990s][crypto-export], is counterproductive and
pointless: [counterproductive][freak] because it only harms innocent people, whereas those its aimed
at will find a way to work around it, and pointless because strong encryption products are [found
throughout the world][schneier]: people will just go somewhere else for their encryption if they
can’t get it at home.

It is understandable that in the wake of a crime or terrorist attack, politicians and law
enforcement need to be seen as “doing something”. However, that does not mean law enforcement should
be able to do everything. It is worth remembering why security mechanisms like encryption exist in
the first place: to protect sensitive medical, legal, journalistic, financial, diplomatic,
commercial or military data from falling into the wrong hands. Trying to weaken those protections
would cause far more harm than good.

[guardian]: http://www.theguardian.com/us-news/2016/feb/17/apple-ordered-to-hack-iphone-of-san-bernardino-shooter-for-fbi
[apple-letter]: http://www.apple.com/customer-letter/
[magistrate-order]: https://www.documentcloud.org/documents/2714001-SB-Shooter-Order-Compelling-Apple-Asst-iPhone.html
[ios-security]: https://www.apple.com/business/docs/iOS_Security_Guide.pdf
[secure-enclave]: http://blog.cryptographyengineering.com/2014/10/why-cant-apple-decrypt-your-iphone.html
[apple-comply]: http://blog.trailofbits.com/2016/02/17/apple-can-comply-with-the-fbi-court-order/
[data-loss-fine]: http://www.theguardian.com/society/2014/aug/26/ministry-justice-fined-180000-losing-hard-drive-sensitive-data-prisoners
[talktalk]: https://theconversation.com/talktalk-hack-perhaps-well-finally-take-cybersecurity-seriously-50144
[burglary]: http://www.bbc.co.uk/news/uk-england-manchester-19960966
[ios-encryption]: http://www.darthnull.org/2014/10/06/ios-encryption
[backdoor]: https://theconversation.com/could-encryption-backdoors-safeguard-privacy-and-fight-terror-online-53419
[doormats]: https://www.cl.cam.ac.uk/~rja14/Papers/doormats.pdf
[opm-hack]: http://www.theguardian.com/technology/2015/jul/09/opm-hack-21-million-personal-information-stolen
[eff]: https://www.eff.org/deeplinks/2016/02/eff-support-apple-encryption-battle
[juniper]: http://blog.cryptographyengineering.com/2015/12/on-juniper-backdoor.html
[crypto-export]: https://en.wikipedia.org/wiki/Export_of_cryptography_from_the_United_States
[freak]: http://blog.cryptographyengineering.com/2015/03/attack-of-week-freak-or-factoring-nsa.html
[schneier]: https://www.schneier.com/cryptography/paperfiles/worldwide-survey-of-encryption-products.pdf
