---
layout: ync-post
title: "Ubuntu upgrade woes"
---

This page has been offline for the last 24 hours because I messed up the server on which it was
running (now I've moved it to another one). I officially **hate** system maintenance...

The server
was running Ubuntu Feisty (7.04) which is now getting a bit old and gradually coming towards the end
of its support lifetime. An upgrade would be necessary before too long anyway, so I decided to try
updating it using the
[do-release-upgrade](http://www.howtoforge.com/upgrade-ubuntu-7.04-server-to-7.10) tool. My setup is
pretty sane, using only standard packages, so I thought the tool would be able to handle the upgrade
smoothly.

Unfortunately, no. At some point during the configuration of the new packages, dpkg
started dying by segmentation fault, and from there on everything just went downhill. In the end I
had a system with dozens of broken packages (and no way of fixing them with dpkg segfaulting), and
quite a few daemons dying similarly. Probably some important shared library got replaced with an
incompatible version -- rubbish! Apache, MySQL and OpenVPN were dead, and I set them up on a new
server; fortunately, Bind, Postfix and Dovecot somehow survived, so at least our emails are still
getting through, and I could point the domain names to the new server's IP address. Still, bloody
annoying.

Why is server configuration and maintenance such a crap activity? What I really want is a
sort of version control system for installed packages and configuration file changes. My wish
list:

* The version control should save only modifications to config files (differences from
the package maintainers' versions) so that the same modifications can be merged into the
configuration files for a new version of the packages. This also makes the setup more maintainable,
because it is easier for one admin to see the configuration changes made by another admin.
Elementary software engineering stuff
really.
* I want to be able to generate a functionally identical system by taking a barebones
install, applying the package installations and config file changes from version control, and
copying in the contents of /home and /var/lib. Then I would never ever do an upgrade to a new
release of the distribution; instead I would do a fresh install of the new release, configure it
like the old one, test it thoroughly to make sure that it works, synchronise the contents, and
switch them over in an instant. MUCH less stressful and error-prone.
* It should still be possible to edit the server's config files like on any
other, since all sorts of changes need to be made in day-to-day operation; such changes should be
checked into the version control so that they are recorded and documented.

I have already
built myself a tool for generating
[Amazon EC2](http://aws.amazon.com/ec2) images -- effectively a few Python and Shell scripts which
take a barebones install and configure it completely for a particular application; I keep these
scripts in version control so the build process is completely transparent and reproducible. However,
if I make any modification to the image by hand, I need to remember to enter the same changes into
the scripts, so that they still correctly reflect the build process. Really what I want is that
manual step to go away.

I'm thinking that it oughtn't be too hard to build such a system
configuration management framework by putting /etc in a standard version control system, recording
changes elsewhere in the filesystem, and making clever wrappers for a few standard maintenance tools
such as apt-get (which just remembers somewhere which packages have been installed). Has nobody
built something like that yet?
