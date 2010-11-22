---
layout: ync-post
title: "The most boring topic in the world (except for the Terry Pratchett references)"
---

Invoicing, finances, bookkeeping, accounts and payments. It has surely got to be the most boring
topic in the world.

Unfortunately, it's not going to go away, no matter how hard we try to forget.
Death and taxes, the two most certain things, and also the most wished-away. So although we
technology people can't do too much about death (although a healthy diet and exercise probably
help), at least we should be making the tedious parts of taxes and finance as automated as possible,
so that we have to worry about them as little as possible.

Say, for example, you're a small web
technology business. If you're a consultancy, it's ok -- you just have a handful of clients, you
prepare invoices in a spreadsheet and email them out at the end of the month. Now and then you look
at your online banking to see whether they've paid yet. But if you have lots of small customers,
it's a different matter. You quickly get into a rather large number of small-value invoices and
payments flying around, and you really don't want to be processing them manually. It's a waste of
time, error-prone, and will bore you to death.

Given that we automate so many things with scripts,
how come we're still sending invoices as PDFs by email, so that the recipient has to manually type
the numbers into their bookkeeping software? It seems so obviously wasteful.

Of course I'm not the
first to realise this, but the solutions are not very mainstream yet, maybe because many developers
find this topic so dull that they refuse to work on it. So I did a bit of research into formats and
APIs for business transactions, and it turns out that the open standards organisation
[OASIS](http://www.oasis-open.org/) has spent a long time thinking about XML schemas for describing
invoices and related things, and the result is called the
[Universal Business Language or UBL](http://www.oasis-open.org/committees/ubl/).

The problem with
standards can be that they are written in formal language ('standardese') and cover lots of bizarre
cases, so they can seem overly complicated and unappealing, leading to lots of people independently
inventing simpler ad-hoc alternatives, and a resulting mess of incompatible formats. I feared the
UBL (in all its Universality) may be a case like this; but I wanted to give it the benefit of the
doubt and see how a simple invoice would look using UBL. (Why has nobody published simple examples
to get people started?) Therefore, by trawling through the XML Schema definitions and with the help
of a schema-aware XML editor, I constructed an example...

Say, for example, you're
[Mustrum Ridcully](http://wiki.lspace.org/wiki/Mustrum_Ridcully) at the Unseen University, and a
large London-based bank has just ordered a Magic Anteater from you to help sort out their liquidity
problems. (Not sure why anteaters help, but they do.) So you send off the anteater, as requested,
and now you want to charge them for it. To do that, you ask your Bursar to perform a RESTful HTTP
POST to a URL on the bank's servers (probably over SSL and authenticated in some sensible way), with
an XML document as payload. That document can then automatically be processed by the bank, so that
(hopefully) they can pay on time, and both the bank and the Unseen University can automagically
calculate their taxes.

That XML document, if based on the UBL 2.0 Invoice schema, would have the following form:

    Invoice:
        ID: 147815
        IssueDate: 2008-11-09

        AccountingSupplierParty:
            PartyName: Name: The Unseen University
            PostalAddress:
                BuildingName: The Tower of Art
                CityName: Ankh-Morpork
                Country Name: Discworld

        AccountingCustomerParty:
            PartyName: The Big Bank
            PostalAddress:
                StreetName: Paved With Gold Street
                CityName: London
                PostalZone: E14 5HQ
                Country IdentificationCode: GB

        TaxTotal:
            TaxAmount (currencyID: GBP): 16.00

        LegalMonetaryTotal:
            TaxExclusiveAmount (currencyID: GBP): 159.95
            PayableAmount (currencyID: GBP): 175.95

        InvoiceLine:
            ID: Anteater_8
            LineExtensionAmount (currencyID: GBP): 175.95
            Item Description: One Magic Anteater

And that, ladies and gentlemen, is really not that bad. Ok, I've simplified it a little;
I have left out the XML namespaces and the angle brackets to make it more readable.
[Here is the UBL 2.0 Invoice example XML file](/2008/11/invoice.xml)
which validates fully against the schema.

This is of course
just a basic example; the schema goes much further still, so you can give a machine-readable
definition of payment terms, or properties of the goods (e.g. 5 kegs of beer at 3.7% alcohol by
volume, since UBL supports
[a huge variety of units](http://twitter.com/martinkl/status/997815268)), or the transit route of
shipping; in principle you could then automatically validate that everything matches the purchase
order and agreed supplier contract. But you don't have to; even the simple bit of data above would
already make our lives easier if our bookkeeping software supported it.

Why is this a big deal?
Because it's a standard which is actually in use out there! For instance,
[if you want to sell anything to any public institution in Denmark, you've got to use the UBL schema](http://www.idealliance.org/proceedings/xtech05/papers/03-05-02/).
Governments and enterprises are more likely to use these formats at first, because they deal with millions of
invoices each year, and automating such quantities translates into very substantial cost savings.
But I think that even for small businesses, we have a lot to gain in terms of interoperability.
