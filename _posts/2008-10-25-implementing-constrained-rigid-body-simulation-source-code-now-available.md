---
layout: ync-post
title: "Implementing constrained rigid body simulation - source code now available"
---

My final-year project at university was on "[Rigid body simulation for 3D character
animation](http://maniation.com/)", which is a very fancy way of saying that I spent a year trying
to make a video of a person falling down a flight of stairs. Without hurting any real people
obviously -- it's all simulated and 3D animated, and most of the content of the project is working
out the maths and the algorithms to calculate how bodies move and rotate in space, how they collide,
and how they react when they are being held together by joints. I started out on that project
thinking it would be fun, and it actually turned out to be fairly hard, so I
[published the results in a technical
report](http://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-683.html) of the University of Cambridge
afterwards.

More importantly,
[here's the video](http://www.youtube.com/watch?v=WJLJlTx0M0E) which was the end result of the
project. It presents several scenes of increasing
complexity:
<ol>
<li>starting with simple pendulums (2 pendulums joined together, as well as 3-part,
8-part and 25-part pendulums -- demonstrating basic rigid body movement and simple joint
constraints),</li>
<li>continuing with
[Newton's Cradle](http://en.wikipedia.org/wiki/Newton's_cradle) (aka Newton's Balls) with both fully
elastic and less ideal
collisions,</li>
<li>followed by a scene of 10 cubes falling, bouncing off a table and off each
other (demonstrating more complex collisions and resting contact between
bodies),</li>
<li>and ending with two scenes in which a human figure (Alfred) falls down a straight
staircase and a spiral staircase (lots of complex joints, collisions and interactions going
on).</li>
</ol>
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="425"
height="350"
codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param
name="src" value="http://www.youtube.com/v/WJLJlTx0M0E"
/><embed type="application/x-shockwave-flash" width="425" height="350"
src="http://www.youtube.com/v/WJLJlTx0M0E"></embed></object>

There's a better quality MPEG download
on
[maniation.com](http://www.maniation.com). Feel free to
[download and read the report](http://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-683.html); it's not
the most exciting read and contains a lot of maths, but it does contain one or two minor new
discoveries. I tried to make it unpretentious and useful by explaining the material in such a way
that it serves as a readable and useful introduction to the topic (mainly because I struggled to
find decent introductory texts myself).

And in fact, in the 2 years since I completed the project I
have had a few people contact me and ask for further details and/or bits of source code for their
own projects. I have not developed it any further and probably won't be doing so anytime soon, but
I'm still keen to hear from anybody who's doing things in this space. And as a help for anybody
working on their own physics engine, I am now releasing some of the source code from my
project.

**SOURCE CODE NOW AVAILABLE**

<p>The code is in Java 5 and covers some of the fundamental
data structures and algorithms which I needed to
implement:
<ul>
<li>A bunch of mathematical datatypes: vectors, matrices, sparse matrices,
quaternions
etc.</li>
<li>Some numerical algorithms: a Runge-Kutta ODE solver and a conjugate gradient solver
for systems of linear equations. These are taken from
[Numerical
Recipes](http://www.nr.com/).</li>
<li>Implementations of a number of different constraint and
collision types, as described in the report. This includes code for the Jacobians, those crazy
matrices which get unbelievably complicated for some of the more tricky types of
constraint.</li>
<li>An implementation of the simulation loop using constraints and collisions,
variable step sizes, and backtracking to find the time of a collision.</li>
</ul>
Note that this is
not elegant, optimised or even particularly robust code; if you're writing a computer game and need
a physics engine, consider using something like the
[Open Dynamics Engine](http://www.ode.org/) (open source),
[Tokamak](http://www.tokamakphysics.com/) (open source) or
[Havok](http://www.havok.com/) (commercial). But if you want to learn how to make a simulation like
this using
[Lagrange multiplier](http://en.wikipedia.org/wiki/Lagrange_multiplier) methods, then maybe this is
for you.</p>

You will quickly notice that the source is not complete. Hell, there's not even a 'main'
method. That's deliberate -- this code is there to help you figure out how this stuff works, it's
not intended to work out of the box. If you want to write an application which uses it, you're
probably going to have read the whole report and some of the papers it references, read all of the
code, think about it for a while, get annoyed about the fact that I didn't put more comments in the
code (sorry), and then start writing some stuff around it.

Nevertheless, I hope it will be useful.
I release it under a
[MIT
license](http://www.opensource.org/licenses/mit-license.php).

[Download the source
code](http://www.maniation.com/maniation.zip)
