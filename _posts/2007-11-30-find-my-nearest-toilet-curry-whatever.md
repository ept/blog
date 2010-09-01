---
layout: ync-post
title: "Find my nearest toilet, curry, whatever"
---

Some interesting developments in so-called
[location based services](http://en.wikipedia.org/wiki/Location-based_service) have hit the news in
the last few
days:

* The city of Westminster, London, is running a trial of a system which recommends your
nearest public toilet if you send a text message to a shortcode. The name: "SatLav". ([Telegraph
article](http://www.telegraph.co.uk/news/main.jhtml?xml=/news/2007/11/29/nsatlav129.xml),
[Computing
article](http://www.computing.co.uk/vnunet/news/2204758/satlav-scheme-finds-toilets))
* The
[Google Maps application](http://www.google.com/gmm/) on mobile phones can now
[show your current location](http://www.youtube.com/watch?v=mIG-Dx7kF3Q) on the map at your request.
([Analysis by Steve
Harrop](http://www.vodafonebetavine.net/web/guest/projects/resources/location_enhanced_services))

Although it can undoubtedly be very useful in many circumstances (I can certainly see myself using both the
toilet service and the map service), these developments do raise questions: How do they know where I
am? Does Google now know my location as well as my web searches, emails, contacts, diaries, YouTube
video preferences and everything else? How easy is it for a somebody to track where I am, and can
they do it without me noticing?

In case you were wondering, this is not GPS. There are phones with
in-build GPS, but they are still pretty rare and expensive. The remarkable thing about these
location technologies is that they work pretty well with a far broader range of handsets (although
Google Maps is more accurate if you have GPS).

So how does it work? As far as I know, there are the
following ways of finding your location:

* GPS (only on a few phones such as the Nokia N95)
* Operator-based location lookup ([as offered by MX
Telecom](http://www.mxtelecom.com/uk/lbs), for example) -- this is what SatLav
uses.
* Cell ID and cell location -- this is what Google uses.

GPS I won't discuss
any further: it can be accessed only by applications installed on the phone, which need to be given
permission to do so -- the phone itself controls the information, so the chances of abuse are pretty
low. (But see the Google-related caveat below.)

Operator lookup is a bit more concerning. To find
out somebody's location, you need to know their phone number. You send a location request for that
number to the operator whom you are registered with. The operator sends a text message to the person
you are trying to locate, to ask for their consent. If they agree to release the location, that
information (latitude, longitude and an accuracy value) is sent to you who requested it. (I think
that's how it works anyway -- I've not seen it in action yet, and I can't try it out since I'm on
the only mobile network in the UK which has not yet implemented location requests). The consent is
valid for only one look-up, so you don't need to be concerned about the toilet finder service being
able to track you for the rest of your life just because you needed a loo in Westminster once.

The advantage of operator-based lookup is that it works on any phone, provided that phone's network
supports location lookups. (In the UK, Vodafone, T-Mobile, O2 and Orange all do.) No software needs
to be installed, and it appears to be reasonably secure too. On the downside, the operators charge
for the service -- about £0.10 a go, plus a monthly fee. And if you want to use a location-based
service (for example, to find your nearest xyz shop) you need to give that shop your mobile number,
risking that you may receive unwanted text message advertising from them in future.

Cell location
is a very different beast, and more difficult to understand too. You may know that the mobile phone
network is split into cells, each cell being the area covered by one particular receiver/transmitter
(e.g. on the roof of a building). Cells can be pretty small (a few dozen meters radius) in urban
areas, and much larger (several kilometers radius) in the countryside. A mobile phone is usually
locked onto one particular cell, and each cell has a unique identifier. On many handsets it is
possible for an application running on the phone to find out the identifier of the cell to which it
is connected.

So what does that give us? Only the cell ID is not worth much. But if you have a big
database which contains approximate locations for every cell in the world, you can make a pretty
good guess at where you are (provided you're in a small cell at least). The problem: there does not
seem to be such a database. At least it's not possible for normal people to get hold of it. The
operators (who have built all those cells) know where they are of course, but they won't simply give
away that valuable information.

A number of collaborative projects are attempting to gather
location information of cells by combining many volunteering users' contributions. Among these are
[CellSpotting](http://www.cellspotting.com/),
[GSM Location](http://gsmloc.org/) and
[Navizon](http://www.navizon.com/). The general idea here is: people who have GPS in their handsets
walk/drive around, and every time the phone comes across a new cell, it sends the identifier of that
cell together with the GPS coordinates to the database. Over time, the database gets a pretty good
idea of the range of locations in which you lock onto a particular cell. Then people who don't have
GPS can send their cell ID to the database to get an averaged value of their probable location.

(A
note on the side: people talk a lot in theory about using triangulation -- measuring signal
strengths, angles of directional antennas, signal timings from several adjacent cells and so on. In
principle, these techniques could be used to provide a location which is more accurate than simply
"you are in cell X, and cell X covers this and that area". In practise, I don't think triangulation
is feasible on phones for all sorts of reasons -- software limitations, hardware support etc. The
operator-based location lookup, which uses the cells rather than the handsets to measure timings,
may well use it -- I don't know.)

Now how does Google Maps get its location information for non-GPS
handsets? I have not yet heard a definite answer, but the general suspicion is that they use
precisely one of these databases. They might have bought it off the operators, but that's a bit
unlikely. Chances are they merged together several open source projects, and also drove around in a
car themselves, mapping cells to GPS locations. And now that Google have released the application to
the public, they do exactly the same as Google always does: collect the data from as many users as
possible. Most probably, those people with GPS handsets who use Google Maps are unknowingly helping
to expand Google's cell ID database. When a GPS user encounters a new cell, Google learns both the
location and the cell ID. Over time, their cell coverage and location accuracy will increase for the
benefit of non-GPS users.

So, does Google know where you are? Yes. If you do a location lookup, at
least. They claim to anonymise that data, so you can only hope that they are telling the truth.

One
final note: the mobile web does not come into this at all. That means, if a phone accesses a
website, there is in general no way of telling where that user is located (unless they explicitly
give the site their phone number and the site performs an operator location lookup).
