---
layout: ync-post
title: The complexity of user experience
---

The problem of overly complex software is nothing new; it is almost as old as software itself. Over
and over again, software systems become so complex that they become very difficult to maintain and
very time-consuming and expensive to modify. Most developers hate working on such systems, yet
nevertheless we keep creating new, overly complex systems all the time.

Much has been written about this, including classic papers by Fred Brooks
([No Silver Bullet](http://people.eecs.ku.edu/~saiedian/Teaching/Sp08/816/Papers/Background-Papers/no-silver-bullet.pdf)),
and Ben Moseley and Peter Marks ([Out of the Tar Pit](http://shaffner.us/cs/papers/tarpit.pdf)).
They are much more worth reading than this post, and it is presumptuous of me to think I could add
anything significant to this debate. But I will try nevertheless.

Pretty much everyone agrees that if you have a choice between a simpler software design and a more
complex design, all else being equal, that simpler is better. It is also widely thought to be
worthwhile to deliberately invest in simplicity --- for example, to spend effort refactoring
existing code into a cleaner design --- because the one-off cost of refactoring today is easily
offset by the benefits of easier maintenance tomorrow. Also, much thought by many smart people has
gone into finding ways of breaking down complex systems into manageable parts with manageable
dependencies. I don't wish to dispute any of that.

But there is a subtlety that I have been missing in discussions about software complexity, that I
feel somewhat ambivalent about, and that I think is worth discussing. It concerns the points where
external humans (people outside of the team maintaining the system) touch the system --- as
developers using an API exposed by the system, or as end users interacting with a user interface. I
will concentrate mostly on user interfaces, but much of this discussion applies to APIs too.


What's a user requirement?
--------------------------

Brooks introduced the distinction between **essential complexity** (roughly speaking, performing the
key operations that users care about) and **accidental complexity** (stuff that's just required to
grease the wheels, but isn't visible to users). Paraphrasing Moseley and Marks, the former is
beautiful, pure and typically fairly simple already, whereas the latter is typically messy,
implementation-dependent and should be removed or abstracted away as much as possible.

This distinction hinges crucially on the understanding of what **user problem** is being solved, and
that's where things start getting tricky. When you say that something is essential because it
fulfils a **user requirement** (as opposed to an implementation constraint or a performance
optimisation), that presupposes a very utilitarian view of software. It assumes that the user is
trying to get a job done, and that they are a rational actor. But what if, say, you are taking an
emotional approach and optimising for **user delight**?

What if the user didn't know they had a problem, but you solve it anyway? If you introduce
complexity in the system for the sake of making things a little nicer for the user (but without
providing new core functionality), is that complexity really essential? What if you add a little
detail that is surprising but delightful?

You can try to reduce an emotional decision down to a rational one --- for example, you can say that
when a user plays a game, it is solving the user's problem of boredom by providing distraction. Thus
any feature which substantially contributes towards alleviating boredom may be considered essential.
Such reductionism can sometimes provide useful angles of insight, but I think a lot would be lost by
ignoring the emotional angle.

You can state categorically that "great user experience is an essential feature". But what does that
mean? By itself, that statement is so general that could be used to argue for anything or nothing.
User experience is subjective. What's preferable for one user may be an annoyance for another user,
even if both users are in the application's target segment. Sometimes it just comes down to taste or
fashion. User experience tends to have an emotional angle that makes it hard to fit into a rational
reasoning framework.

What I am trying to get at: there are things in software that introduce a lot of complexity (and
that we should consequently be wary of), and that can't be directly mapped to a bullet point on a
list of user requirements, but that are nevertheless important and valuable. These things do not
necessarily provide important functionality, but they contribute to how the user **feels** about the
application. Their effect may be invisible or subconscious, but that doesn't make them any less
essential.


Examples
--------

Some examples may help (all based on real applications that I have worked on at some point):

* You have an e-commerce site, and need to send out order confirmation emails that explain next
  steps to the customer. Those next steps differ depending on availability, the tax status of the
  product, the location of the customer, the type of account they have, and a myriad other
  parameters. You want the emails to only include the information that is applicable to this
  particular customer's situation, and not burden them with edge cases that don't apply to them. You
  also want the emails to read as coherent prose, not as a bunch of fragmented bullet points
  generated by `if` statements based on the order parameters. So you go and build a natural language
  grammar model for constructing emails based on sentence snippets (providing pluralisation,
  agreement, declension in languages that have it, etc), in such a way that for any one out of 100
  million possible edge cases, the resulting email is grammatically correct and easy to understand.
* You have a multi-step user flow that is used in various different contexts, but ultimatively
  achieves the same thing in each context. (For example, [Rapportive](http://rapportive.com/) has
  several OAuth flows for connecting your account with various social networks, and there are
  several different buttons in different places that all lead into the same user flow.) The simple
  solution is to make the flow generic, and not care how the user got there. But if you want to make
  the user feel good, you need to imagine what state their mind was in when they entered the flow,
  and customise the images, text and structure of the flow in order to match their goal. This means
  you have to keep track of where the user came from, what they were trying to do, and thread that
  context through every step of the flow --- fiddly and time-consuming.
* You have an application that requires some arcane configuration. You could take the stance that
  you will give the user a help page and they will have to figure it out from there. Or you could
  write a sophisticated auto-configuration tool that inspects the user's environment, analyses
  thousands of possible software combinations and configurations (and updates this database as new
  versions of other products in the environment are released), and automatically chooses the correct
  settings --- hopefully without having to ask the user for help. With auto-configuration, the users
  never even know that they were spared a confusing configuration dialog. But somehow, word gets
  around that the product "just works".


Emotional design
----------------

What these examples have in common: as an application developer, you can choose whether to take on
substantial additional complexity in the software in order to simplify or improve the experience for
the user. The increased software complexity actually **reduces** the complexity from the user's
point of view. These examples also illustrate how user experience concerns are not just a matter of
graphic design, but can also have a big impact on how things are engineered.

The features described above do not contribute to the utility of the software --- in the e-commerce
example, orders will be fulfilled whether or not the confirmation emails are grammatical. In that
sense, the complexity is unnecessary. But I would argue that these kind of user experience
improvements are just as important as the utility of the product, because they determine how users
**feel** about it. And how they feel ultimately determines whether they come back, and thus the
success or failure of the product.

One could even argue that the utility of a product is a subset of its user experience: if the
software doesn't do the job that it's supposed to, then that's a pretty bad experience, but there
are many ways to create a bad experience while remaining fully functional from a utilitarian point
of view.

The expression "icing on the cake" usually refers to something that is nice but not essential.
Maybe the cake fulfils its nutritive purpose perfectly well without icing; maybe the icing would
even harm its dietary properties. But if most people choose to buy the cake **with** icing, then
that icing sounds pretty damn essential to me.


Questions
---------

This is as far as my thinking has got: recognising that it is not just the utility of software, but
also its user experience, that determines its essential complexity. But that still leaves me with
some unanswered questions:

* Every budget is finite, so you have to prioritise things, and not everything will get done. When
  you consider building something that improves user experience without strictly adding utility, it
  has to be traded off against features that do add utility (is it better to shave a day off the
  delivery time than to have a nice confirmation email?), and the cost of the increased complexity
  (will that clever email generator be a nightmare to localise when we translate the site into other
  languages?). How do you decide about that kind of trade-offs?
* User experience choices are often emotional and
  [intuitive](http://martin.kleppmann.com/2010/10/30/intuition-has-no-transfer-encoding.html)
  (no number of focus groups and usability tests can replace good taste). That doesn't make them any
  more or less important than rational arguments, but combining emotional and rational arguments can
  be tricky. Emotionally-driven people tend to let emotional choices overrule rational arguments,
  and rationally-driven people vice versa. How do you find the healthy middle ground?
* If you're aiming for a minimum viable product in order to test out a market (as opposed to
  improving a mature product), does that change how you prioritise core utility relative to "icing"?

I suspect that the answers to the questions above are *"it depends"*. More precisely, *"how one
thing is valued relative to another is an aspect of your particular organisation's culture, and
there's no one right answer"*. That would imply that each of us should think about it; you should
have your own personal answers for how you decide these things in your own projects, and be able to
articulate them. But it's difficult --- I don't think hard-and-fast rules have a chance of working
here.

I'd love to hear your thoughts in the comments below.
