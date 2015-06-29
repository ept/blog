---
layout: talk
title: "Getting data out of databases: a surprisingly tricky problem"
venue: All Your Base
place: London, UK
venue_url: http://allyourbaseconf.com/2015/speakers#martin-kleppmann
---


Abstract
--------

Writing to a database is easy, but getting the data out again is surprisingly hard.

Of course, if you just want to query the database and get some results, that’s fine. But what if you
want a copy of your database contents in some other system — for example, to make it searchable in
Elasticsearch, or to pre-fill caches so that they’re nice and fast, or to load it into a data
warehouse for analytics, or if you want to migrate to a different database technology?

As the data is constantly changing, a one-off snapshot of the database is not enough: you need to
tap into the ongoing stream of writes to the database. This technique is called Change Data Capture
(CDC). At companies like LinkedIn and Facebook, this is how caches and indexes are kept up-to-date.

This talk explains why change data capture is so useful, and how it prevents race conditions and
other ugly problems. Martin will explore the practical details of implementing CDC with PostgreSQL
and Apache Kafka, and discuss the approaches you can use to do the same with various other
databases.
