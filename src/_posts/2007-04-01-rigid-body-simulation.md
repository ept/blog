---
layout: paper
title: Simulation of colliding constrained rigid bodies
authors: Martin Kleppmann
venue: University of Cambridge, Computer Laboratory, Tech Report UCAM-CL-TR-683
paper_url: http://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-683.html
---

This technical report is based on the dissertation for my final-year undergraduate project at
university. The dissertation was marked as the best dissertation in its year and was awarded the
AT&T prize. The code relating to the project is [available on Github](https://github.com/ept/maniation).

Abstract
--------

I describe the development of a program to simulate the dynamic behaviour of interacting rigid
bodies. Such a simulation may be used to generate animations of articulated characters in 3D
graphics applications. Bodies may have an arbitrary shape, defined by a triangle mesh, and may be
connected with a variety of different joints. Joints are represented by constraint functions which
are solved at run-time using Lagrange multipliers. The simulation performs collision detection and
prevents penetration of rigid bodies by applying impulses to colliding bodies and reaction forces to
bodies in resting contact.

The simulation is shown to be physically accurate and is tested on several different scenes,
including one of an articulated human character falling down a flight of stairs.

An appendix describes how to derive arbitrary constraint functions for the Lagrange multiplier
method. Collisions and joints are both represented as constraints, which allows them to be handled
with a unified algorithm. The report also includes some results relating to the use of quaternions
in dynamic simulations.
