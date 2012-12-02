---
layout: ync-post
title: Schema evolution in Avro, Protocol Buffers and Thrift
---

So you have some data that you want to store in a file or send over the network. You may find
yourself going through several phases of evolution:

1. Using your programming language's built-in serialization, such as
   [Java serialization](http://docs.oracle.com/javase/6/docs/platform/serialization/spec/serialTOC.html),
   Ruby's [marshal](http://www.ruby-doc.org/core-1.9.3/Marshal.html), or Python's
   [pickle](http://docs.python.org/3.3/library/pickle.html). Or maybe you even invent your own
   format.
2. Then you realise that being locked into one programming language sucks, so you move to using a
   widely supported, language-agnostic format like JSON (or XML if you like to party like it's
   1999).
3. Then you decide that JSON is too verbose and too slow to parse, you're annoyed that it doesn't
   differentiate integers from floating point, and think that you'd quite like binary strings as
   well as Unicode strings. So you invent some sort of binary format that's kinda like JSON, but
   binary ([1](http://msgpack.org/), [2](http://bsonspec.org/), [3](http://ubjson.org/),
   [4](http://bjson.org/),
   [5](http://kaijaeger.com/articles/introducing-bison-binary-interchange-standard.html),
   [6](https://github.com/voldemort/voldemort/wiki/Binary-JSON-Serialization)).
4. Then you find that people are stuffing all sorts of random fields into their objects, using
   inconsistent types, and you'd quite like a **schema** and some **documentation**, thank you very
   much. Perhaps you're also using a statically typed programming language and want to generate
   model classes from a schema. Also you realize that your binary JSON-lookalike actually isn't all
   that compact, because you're still storing field names over and over again; hey, if you had a
   schema, you could avoid storing objects' field names, and you could save some more bytes!

Once you get to the fourth stage, your options are typically [Thrift](http://thrift.apache.org/),
[Protocol Buffers](http://code.google.com/p/protobuf/) or [Avro](http://avro.apache.org/). All three
provide efficient, cross-language serialization of data using a schema, and code generation for the
Java folks.

Plenty of comparisons have been written about them already
([1](http://floatingsun.net/articles/thrift-vs-protocol-buffers/),
[2](http://www.igvita.com/2011/08/01/protocol-buffers-avro-thrift-messagepack/),
[3](http://blog.mirthlab.com/2009/06/01/thrift-vs-protocol-bufffers-vs-json/),
[4](http://tech.puredanger.com/2011/05/27/serialization-comparison/)).
However, many posts overlook a detail that seems mundane at first, but is actually cruicial: **What
happens if the schema changes?**

In real life, data is always in flux. The moment you think you have finalised a schema, someone will
come up with a use case that wasn't anticipated, and wants to "just quickly add a field".
Fortunately Thrift, Protobuf and Avro all support **schema evolution**: you can change the schema,
you can have producers and consumers with different versions of the schema at the same time, and it
all continues to work. That is an extremely valuable feature when you're dealing with a big
production system, because it allows you to update different components of the system independently,
at different times.

Which brings us to the topic of today's post. I would like to explore how Protocol Buffers, Avro and
Thrift actually encode data into bytes --- and this will also help explain how each of them deals
with schema changes. The design choices made by each of the frameworks are intesting, and by
comparing them I think you can become a better engineer (by a little bit).

The example I will use is a little object describing a person. In JSON I would write it like this:

{% highlight js %}
{
    "userName": "Martin",
    "favouriteNumber": 1337,
    "interests": ["daydreaming", "hacking"]
}
{% endhighlight %}

This JSON encoding can be our baseline. If I remove all the whitespace it consumes 82 bytes.


Protocol Buffers
----------------

The Protocol Buffers schema for the person object might look something like this:

    message Person {
        required string user_name        = 1;
        optional int64  favourite_number = 2;
        repeated string interests        = 3;
    }

When we [encode](https://developers.google.com/protocol-buffers/docs/encoding) the data above using
this schema, it uses 33 bytes, as follows:

<a href="/2012/12/protobuf.png"><img src="/2012/12/protobuf_small.png" width="550" height="230"/></a>

                            Field 2<<3|0 (varint)
    Field 1<<3|2 (string)   |        Field 3<<3|2 (string)
    |  'Martin' has 6 bytes |   1337 |  'daydreaming' has 11 bytes
    ↓  ↓  M  a  r  t  i  n  ↓  /   \ ↓  ↓  d  a  y
    0a 06 4d 61 72 74 69 6e 10 b9 0a 1a 0b 64 61 79
    64 72 65 61 6d 69 6e 67 1a 07 68 61 63 6b 69 6e 67
    d  r  e  a  m  i  n  g  ↑  ↑  h  a  c  k  i  n  g
                            |  'hacking' has 7 bytes
                            Field 3<<3|2 (string)


Schemaless (like JSON) but binary:

Avro: http://avro.apache.org/docs/current/spec.html
Proposal/discussion: http://mail-archives.apache.org/mod_mbox/hadoop-general/200904.mbox/browser
Avro is a bit more flexible: supports recursive datatypes (e.g. you can represent trees) and union
types.
Avro schema registry: https://issues.apache.org/jira/browse/AVRO-1124
Advantage of versioning the entire schema, rather than individual fields: you can add extra metadata
to the schema (e.g. describing application-level semantics for a field/record), and the reader will
know exactly which schema version (and hence metadata) the writer was using.

{% highlight js %}
{
    "type": "record",
    "name": "Person",
    "fields": [
        {"name": "userName",        "type": "string"},
        {"name": "favouriteNumber", "type": ["null", "long"]},
        {"name": "interests",       "type": {"type": "array", "items": "string"}}
    ]
}
{% endhighlight %}

    record Person {
        string               userName;
        union { null, long } favouriteNumber;
        array<string>        interests;
    }

                         long, not null
                         |         2 array elements follow
    'Martin' has 6 bytes |   1337  |  'daydreaming' has 11 bytes
    ↓  M  a  r  t  i  n  ↓  /   \  ↓  ↓ d  a  y  d
    0c 4d 61 72 74 69 6e 02 f2 14 04 16 64 61 79 64  .Martin.....dayd
    72 65 61 6d 69 6e 67 0e 68 61 63 6b 69 6e 67 00  reaming.hacking.
    r  e  a  m  i  n  g  ↑  h  a  c  k  i  n  g  ↑
                         'hacking' has 7 bytes   zero to terminate array


Thrift:

* DenseProtocol
* CompactProtocol
* BinaryProtocol

"Thrift fundamentally standardizes an API, not a data format. Avro fundamentally is a data format
specification, like XML."
(http://mail-archives.apache.org/mod_mbox/hadoop-general/200904.mbox/%3C49D6577F.4080307%40apache.org%3E)

    struct Person {
      1: string       userName,
      2: optional i64 favouriteNumber,
      3: list<string> interests
    }


Thrift BinaryProtocol:

             string type                     i64 type
             |  f#1  6 bytes                 |   field #2
             ↓ /   \/BigEndia\ M a r  t i  n ↓  /  \
    0000000: 0b00 0100 0000 064d 6172 7469 6e0a 0002  .......Martin...

                                 list    string items
              ______1337_______  |  f#3  |  2 items
             /                 \ ↓ /   \ ↓ /       \
    0000010: 0000 0000 0000 0539 0f00 030b 0000 0002  .......9........

              11 bytes
             /       \                            /
    0000020: 0000 000b 6461 7964 7265 616d 696e 6700  ....daydreaming.

         ...7 bytes                   end of struct
                   \                  ↓
    0000030: 0000 0768 6163 6b69 6e67 00              ...hacking.


Thrift CompactProtocol:

                                 offset +1<<4|6 (i64)
           field 1<<4|8(string)  |      offset +1<<4|9 (list)
             | 6 bytes           | 1337 |  length 2<<4|8(string)
             ↓ ↓                 ↓ /   \↓  ↓ 11 bytes
    0000000: 1806 4d61 7274 696e 16f2 1419 280b 6461  ..Martin....(.da
                                   7 bytes
    0000010: 7964 7265 616d 696e 6707 6861 636b 696e  ydreaming.hackin
               end of struct
    0000020: 6700


Thrift JSONProtocol:

    0000000: 7b22 3122 3a7b 2273 7472 223a 224d 6172  {"1":{"str":"Mar
    0000010: 7469 6e22 7d2c 2232 223a 7b22 6936 3422  tin"},"2":{"i64"
    0000020: 3a31 3333 377d 2c22 3322 3a7b 226c 7374  :1337},"3":{"lst
    0000030: 223a 5b22 7374 7222 2c32 2c22 6461 7964  ":["str",2,"dayd
    0000040: 7265 616d 696e 6722 2c22 6861 636b 696e  reaming","hackin
    0000050: 6722 5d7d 7d                             g"]}}

Thrift SimpleJSONProtocol:

    0000000: 7b22 7573 6572 4e61 6d65 223a 224d 6172  {"userName":"Mar
    0000010: 7469 6e22 2c22 6661 766f 7572 6974 654e  tin","favouriteN
    0000020: 756d 6265 7222 3a31 3333 372c 2269 6e74  umber":1337,"int
    0000030: 6572 6573 7473 223a 5b22 6461 7964 7265  erests":["daydre
    0000040: 616d 696e 6722 2c22 6861 636b 696e 6722  aming","hacking"
    0000050: 5d7d                                     ]}

Thrift's DenseProtocol is only supported in C++, none of the other languages.

Comparisons between Thrift and Protocol Buffers:
http://floatingsun.net/articles/thrift-vs-protocol-buffers/
http://www.igvita.com/2011/08/01/protocol-buffers-avro-thrift-messagepack/
http://blog.mirthlab.com/2009/06/01/thrift-vs-protocol-bufffers-vs-json/
http://tech.puredanger.com/2011/05/27/serialization-comparison/

Protocol support matrix:
http://wiki.apache.org/thrift/LibraryFeatures
