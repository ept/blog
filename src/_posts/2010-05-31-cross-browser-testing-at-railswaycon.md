---
layout: talk
title: "Cross-browser testing in the real world"
venue: RailsWayCon
lanyrd_url: http://lanyrd.com/2010/railswaycon/
place: Berlin, Germany
slides_url: http://www.slideshare.net/martinkleppmann/crossbrowser-testing-in-the-real-world
---

<iframe src="//www.slideshare.net/slideshow/embed_code/4373652" width="425" height="355" frameborder="0" marginwidth="0"
marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

Abstract
--------

Most Rails applications must work correctly on many different browser versions. But how do you best
automate your browser-level tests? In this talk, Martin compares Selenium, WebDriver and Watir,
shares his experience of automated browser tests on hundreds of different sites, and talks about
latest developments in open source functional testing tools.

Selenium, WebDriver and Watir are the most popular open source tools today for automated testing in
the browser. They can be used by themselves or in conjunction with Cucumber, Celerity and various
other tools. I will explain the differences between the tools, their relative advantages, and share
latest news from these projects. Recently the Selenium and WebDriver projects decided to merge, and
are working towards Selenium 2.0, a hybrid release, by the end of 2010. This merge will combine the
best of both tools and makes them suitable for a wider range of applications.

I would like to briefly introduce these open source tools for those attendees who have not worked
with them before, and show how to use them with Ruby. I will then move on to best practices I have
learnt from working with Selenium on many different sites. In particular, I will cover:

- how to avoid wasting time when tests break due to UI changes;
- how to scale your test suite by running it in parallel, and reduce testing time;
- managing virtual machines for the test environment;
- common pitfalls and issues in working with browser-level tests.
