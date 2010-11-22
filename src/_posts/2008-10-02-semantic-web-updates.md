---
layout: ync-post
title: "Semantic web updates"
---

A few weeks ago I
[noted down some links to current developments of the semantic web](/2008/09/07/barcamp-brighton-notes.html). After hearing
[Tom Morris](http://tommorris.org/) speak again on "The State of the Semantic Web" at
[BarCampLondon5](http://barcamp.org/BarCampLondon5), here are some
more:

* [Getting started with the Semantic Web - Get Semantic Wiki](http://www.getsemantic.com/wiki/Get_Started_with_the_Semantic_Web)
* [Freebase Parallax](http://mqlx.com/~david/parallax/), a new user interface for browsing
  [Freebase](http://www.freebase.com/)
* BBC programmes use RDF: e.g. [Doctor Who](http://www.bbc.co.uk/programmes/b0074f9p) -
  [in RDF](http://www.bbc.co.uk/programmes/b0074f9p.rdf)
* [SIOC (Semantically-Interlinked Online Communities)](http://sioc-project.org/) is an ontology/vocabulary for expressing social links
* [FOAF project](http://www.foaf-project.org/)
* Searching semantic web data sources: [Sindice](http://sindice.com/)
* [SPARQL/Update](http://jena.hpl.hp.com/~afs/SPARQL-Update.html)
  or SPARUL - for modifying RDF data stores
* [POWDER](http://www.w3.org/2007/powder/) - define sets of URLs?
* [Simple Knowledge Organization System](http://www.w3.org/2004/02/skos/) (SKOS) -
  simpler than ontologies, without inference?
* [Rule Interchange Format](http://www.w3.org/2005/rules/) (RIF) - define inference rules

(OMG mad W3C acronyms!)

I also heard Sian Clark of Yahoo speak about
[SearchMonkey](http://developer.yahoo.com/searchmonkey/) at
[BCS Search Solutions 2008](http://irsg.bcs.org/SearchSolutions/2008/sse2008.php). This is a very
interesting development, allowing site owners to annotate their pages with structured information
(using
[RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/) or
[Microformats](http://microformats.org/)), allowing them to be presented more meaningfully in the
search results. A great idea I think!

This move by Yahoo starts giving a first convincing answer to
the chicken-and-egg problem of the semantic web: *"why would anybody bother to annotate their data
in a machine-readable way?"* There has got to be some reward attached to it, and doing search engine
optimisation (SEO) for Yahoo is a very good reason for creating some semantic metadata! (It's
unlikely to really fly until Google also adopts the idea, but surely that's just a matter of
time.)

What I wonder about: what attempts will there be to parse structured data out of
unstructured data sources? There are a few companies doing more or less this, for example
[Globrix](http://www.globrix.com/) extracts structured information about properties (rent or buy,
location, price, number of bedrooms and bathrooms, etc.) from plain text descriptions on estate
agents' websites, and
[Mydeco](http://mydeco.com/) extracts structured information about furniture (type of item, colour,
width/depth/height, weight, retailer's location, etc.) from similar unstructured text. There is no
technical reason why they couldn't release that information in a machine-readable RDF format,
although there may well be commercial reasons for them wanting to keep it to themselves.
