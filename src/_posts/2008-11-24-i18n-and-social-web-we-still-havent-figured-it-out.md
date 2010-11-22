---
layout: ync-post
title: "i18n and social web: We still haven't figured it out"
---

Internationalisation (i18n for short, where 18 represents the 18 letters in the middle of this long
word) is still an unsolved problem.

A lot of things fall under i18n, such as correct handling of
character sets (not everybody uses the Latin alphabet), time zones (not everybody uses PST or GMT),
numbers (not everybody uses the dot as decimal separator), currencies (there is a world outside the
US dollar), writing direction (not everybody writes from left to right) and of course translation
into different languages. Traditionally, i18n has been an issue which software engineers have loved
to ignore, because (a) it's difficult, (b) it's not cool, and (c) if you're in North America, you
can find enough customers in North America for the first few years, so there isn't a strong business
requirement to work internationally.

Now that we have the web, and people from many different
languages and cultures interacting on the web, getting internationalisation right is absolutely
essential. And it's getting better -- I think most developers now appreciate that you've got to use
Unicode, that you've got to store dates and times with timezones, that you need to make text
translatable. Ok, at least that's something. But I think that soon we will get to a point where the
traditional approach to translating applications breaks down.

Let me explain.

The way software
engineers usually make their applications work in multiple languages is to mark every human-readable
bit of text in the program in some particular way, to extract those bits of text, give them to a
translation bureau, and get back an equivalent set of texts to substitute in-place. The result
should hopefully be that the application appears entirely in a new language.

Even this simple form
of translation isn't working everywhere. For example, if you update your Twitter status in a German
web browser, it says that you updated "weniger als 5 Sekunden ago". Here "ago" is an English word,
but the rest is German; to a German-speaker, this reads like "vor less than 5 seconds" reads to an
English-speaker. This is simply a case of some of those bits of text getting forgotten; not a big
problem, and I'm sure they will fix it soon, but enough to make German-speakers uncomfortable using
the application because it's constantly offending against their sense of language.

However, things
get harder once you start building sentences based on variables which may change. The Twitter
message is a simple example of this: the time is a variable, and because it's in the past (not in
the future), we need to stick "ago" on the end, in English at least. The code which does this will
look something like this:

{% highlight ruby %}
time_in_words = distance_of_time_in_words(time_of_last_update, Time.now)
time_in_words = "#{time_in_words} ago" if (time_of_last_update < Time.now)
{% endhighlight %}

To translate this program, make sure that the function
`distance_of_time_in_words` returns words in the right language (e.g. for German, "weniger
als 5 Sekunden" -- Twitter does this correctly), and replace
`"#{time_in_words} ago"` with the right grammatical construction for the target language
(e.g. for German, `"vor #{time_in_words}"` -- this is the bit Twitter has missed out).

The way we use `time_in_words` as a variable we can insert words before or after it to make the right
grammatical construction. Fairly flexible, but is this enough?

Over the past few days I have been developing a Facebook application. It's not even internationalised,
it's just plain English, but nevertheless I have come across a problem of grammatical constructions.
Take for example a message in the news feed, which might look different depending on who looks at it:

* Mike has given John a pat on the shoulder because he has done well. (seen by a bystander)
* Mike has given you a pat on the shoulder because you have done well. (seen by John)
* You have given John a pat on the shoulder because he has done well. (seen by Mike)

First of all, note that the subject (Mike) and object (John) can be either a name,
or 'you'. Facebook offers the facility to do this using the
[`<fb:name>` tag](http://wiki.developers.facebook.com/index.php/Fb:name); as developers, we are
even given the opportunity to say whether we want the "you" to start with a capital letter
(depending on whether it occurs at the beginning or in the middle of the sentence). Next, we use a
pronoun -- "because **he** has done well". This depends on the gender of John, but we know from his
profile that he is male, so it has to be "he" not "she". Facebook does this using the
[`<fb:pronoun>` tag](http://wiki.developers.facebook.com/index.php/Fb:pronoun).

So far, so good. Now note that the verb form changes between second and third person (have/has).
There is no way in Facebook to do this (it was
[requested more than a year ago](http://wiki.developers.facebook.com/index.php/Requested_FBML_Tags#.3Cfb:verb.3E) but
[still hasn't happened](http://bugs.developers.facebook.com/show_bug.cgi?id=514)). In case you ever
wondered why the Facebook news feed is always in the simple past but never in present perfect --
that's because in English, the verb forms for second and third person are the same in simple past,
which is not the case in other tenses! (In "You threw a banana at Bob" and "Alice threw a banana at
you", the verb is "threw" in both cases; in "You have thrown a banana at Bob" and "Alice has thrown
a banana at you", the verb forms "have thrown" and "has thrown" are not the same.)

The part "a pat
on the shoulder" stays the same in all sentences, but that's just because English happens to work
that way -- in other languages or cultures, it may have to be modified depending on e.g. the gender
or even the age of the people involved. Or the verb (have/has given) may have to change depending on
some parameter of the direct object ('a pat on the shoulder'). There may be languages in which the
name of a person changes if it is used as an indirect object. And so on.

You can get up to a
certain point by duplicating text, e.g. providing a separate snippet of text for each possible
combination of values which may occur; then translators can deal with each individually, and ensure
that it is correct. But very quickly you get into a situation where the number of combinations is so
large that this approach just doesn't scale.

The bottom line is that in general you can't build a
grammatically correct sentence by just sticking words together, even if you make the word order
variable. In languages with declension and other grammatical changes to words, or languages where
the word order changes depending on some variable, or languages with separable verbs... well, I
don't know what happens then. It's an unsolved problem.

(There is another subtle point here, which
is that cultural differences may mean that even if you translate something in a grammatically
correct way, it may have the wrong connotations in the reader's culture; for instance, consider a
culture in which patting on the shoulder is considered offensive. But in such cases, it could be
replaced with another gesture which has the desired meaning. I will just concentrate on the
grammatical level for now.)

The only step I've seen so far towards making internationalisable grammar is the
['pluralize'](http://api.rubyonrails.org/classes/ActiveSupport/CoreExtensions/String/Inflections.html#M001044)
function which you find in some frameworks such as Rails. It takes a number (such as 0, 1, 2, 29 or
518514) and a singular noun (such as 'camel') and returns the text in the appropriate singular or
plural form (e.g. "29 camels") -- and it works in a wide selection of languages (e.g. in German,
`pluralize(29, 'Kamel') == '29 Kamele'`).

To illustrate the problem, here is one of the source files from
[Bid for Wine](http://www.bidforwine.co.uk/). It is a very minor feature -- it just creates a short
paragraph of text explaining the purpose of a particular form which a buyer needs to fill in.
However, there can be a lot of different things in that form, depending on the type of auction. This
generated text gets sent out by email (to both the seller and the buyer) and is also displayed on
the website, and few people will ever notice how much effort has gone into building that paragraph
of text.


{% highlight ruby %}
case grammatical_person
when 2
  you_or_they = 'you'
  your_or_their = 'your'
  you_or_them = 'you'
  yourself_or_themselves = 'yourself'
when 3
  you_or_they = 'they'
  your_or_their = 'their'
  you_or_them = 'them'
  yourself_or_themselves = 'themselves'
end

things_to_do = []

if auction.lot.in_bond
  things_to_do << "specify whether #{you_or_they} would like to keep #{your_or_their} wine in bond"
end

if auction.is_consignment_auction?
  things_to_do << "choose if #{you_or_they} would like to have the wine shipped to " +
                  "#{you_or_them} or rather pick it up from the warehouse"

elsif auction.lot.can_be_collected && auction.lot.can_be_shipped
  things_to_do << "choose if #{you_or_they} would like to have the wine shipped to " +
                  "#{you_or_them} or rather collect it #{yourself_or_themselves}"

elsif auction.lot.can_be_collected
  things_to_do << "confirm collection of the wine"

else
  things_to_do << "specify where #{you_or_they} would like the wine to be delivered"
end

things_to_do << "provide a billing address"

if things_to_do.length >= 2
  last_thing = things_to_do.pop
  last_but_one = things_to_do.pop
  things_to_do.push "#{last_but_one}, and #{last_thing}" # Oxford comma
end

"On this form #{you_or_they} can #{things_to_do.join(', ')}."
{% endhighlight %}


And you thought English was simple?
You can even even see the remains of grammatical cases (`you_or_they` vs. `you_or_them`). If this needs
to be translated one day, we will need to duplicate the logic and mess about with the way variables
are inserted into the snippets of text to make the grammar work. It will be horrible to maintain.
But that's the best we can do with the state of the art. Shouldn't there be a better way?
