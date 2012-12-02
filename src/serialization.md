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
at different times, without worrying about compatibility.

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

Look exactly at how the binary representation is structured, byte by byte. The person record is just
the concatentation of its fields. Each field starts with a byte that indicates its tag number (the
numbers `1`, `2`, `3` in the schema above), and the type of the field. If the first byte of a field
indicates that the field is a string, it is followed by the number of bytes in the string, and then
the UTF-8 encoding of the string. If the first byte indicates that the field is an integer, a
variable-length encoding of the number follows. There is no array type, but a tag number can appear
multiple times to represent a multi-valued field.

So when thinking about schema evolution in protocol buffers, it's clear that everything hinges on
the tag numbers. You can rename fields, because field names don't exist in the binary serialization,
but you can never change the meaning of a tag number. You can change an optional field to a repeated
field, because the binary representation is the same.

Say you add a field to your record, and give it a new tag. Now you have a writing process that
produces data including the new field, but you have an older consuming process that is still
expecting data in an older version of the schema. What does the consumer do when the newer data
comes in?

When the Protobuf parser sees a tag number that is not defined in its version of the schema, it has
no way of knowing what that field is called. But it *does* roughly know what type it is, because a
3-bit type code is included in the first byte of the field. This means that even though the parser
can't exactly interpret the field, it can figure out how many bytes it needs to skip in order to
find the next field in the record.

This approach of using a tag number to represent each field is simple and effective. But as we'll
see in a minute, it's not the only way of doing things.


Avro
----

Avro schemas can be written in two ways, either in a JSON format:

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

...or in an IDL:

    record Person {
        string               userName;
        union { null, long } favouriteNumber;
        array<string>        interests;
    }

Notice that there are no tag numbers in the schema! So how does it work?

Here is the same example data [encoded](http://avro.apache.org/docs/current/spec.html) in just 32
bytes:

<a href="/2012/12/avro.png"><img src="/2012/12/avro_small.png" width="550" height="259"/></a>

Strings are just a length prefix followed by UTF-8 bytes, but there's nothing in the bytestream that
tells you that it is a string. It could just as well be a variable-length integer, or something else
entirely. The only way you can parse this binary data is by reading it alongside the schema, and the
schema tells you what type to expect next. You need to have the **exact same version** of the schema
as the writer of the data used. If you have the wrong schema, the parser will not be able to make
head or tail of the binary data.

So how does Avro support schema evolution? Well, although you need to know the exact schema with
which the data was written (the writer schema), that doesn't have to be the same as the schema the
consumer is expecting (the reader schema). You can actually give *two different* schemas to the Avro
parser, and it uses
[resolution rules](http://avro.apache.org/docs/1.7.2/api/java/org/apache/avro/io/parsing/doc-files/parsing.html)
to translate data from the writer schema into the reader schema. The fields in the reader and writer
schema are matched by name, which is why no tag numbers are needed in Avro (and you can reorder your
fields however you like, but renaming a field is harder).

This leaves us with the problem of knowing the exact schema with which a given record was written.
The best solution depends on the context in which your data is being used:

* In Hadoop you typically have large files containing millions of records, all encoded with the same
  schema. [Object container files](http://avro.apache.org/docs/1.7.2/spec.html#Object+Container+Files)
  handle this case: they just include the schema once at the beginning of the file, and the rest of
  the file can be decoded with that schema.
* In an RPC context, it's probably too much overhead to send the schema with every request and
  response. But if your RPC framework uses long-lived connections, it can negotiate the schema
  once at the start of the connection, and amortize that overhead over many requests.
* If you're storing records in a database one-by-one, you may end up with different schema versions
  written at different times, and so you have to annotate each record with its schema version. If
  storing the schema itself is too much overhead, you can use a
  [hash](http://avro.apache.org/docs/1.7.2/spec.html#Schema+Fingerprints) of the schema, or a
  sequential schema version number. You then need a
  [schema registry](https://issues.apache.org/jira/browse/AVRO-1124) where you can look up the exact
  schema definition for a given version number.

One way of looking at it: in Protocol Buffers, every field in a record is tagged, whereas in Avro,
the entire record, file or network connection is tagged with a schema version.

At first glance it may seem that Avro's approach suffers from greater complexity, because you need
to go to the additional effort of distributing schemas. However, I am beginning to think that Avro's
approach also has some distinct advantages:

* Object container files are wonderfully self-describing: the writer schema embedded in the file
  contains all the field names and types, and even documentation strings (if the author of the
  schema bothered to write some). This means you can load these files directly into interactive
  tools like [Pig](http://pig.apache.org/), and it Just Works™ without any configuration.
* As Avro schemas are JSON, you can add your own metadata to them, e.g. describing application-level
  semantics for a field. And as you distribute schemas, that metadata automatically gets distributed
  too.
* A schema registry is probably a good thing in any case, serving as
  [documentation](https://github.com/ept/avrodoc) and helping you to find and reuse data. And
  because you simply can't parse Avro data without the schema, the schema registry is guaranteed to
  be up-to-date. Of course you can set up a protobuf schema registry too, but since it's not
  *required* for operation, it'll end up being on a best-effort basis.


Thrift
------

Thrift is a much bigger project than Avro and Protocol Buffers, as it's not just a data
serialization library, but also an entire RPC framework. It also has a somewhat different culture:
whereas Avro and Protobuf standardize a single binary encoding, Thrift
[embraces](http://mail-archives.apache.org/mod_mbox/hadoop-general/200904.mbox/%3CC5FEF47F.90BAC%25cwalter%40microsoft.com%3E)
a whole variety of different serialization formats (which it calls "protocols").

Indeed, Thrift has
[two](https://builds.apache.org//job/Thrift/javadoc/org/apache/thrift/protocol/TJSONProtocol.html)
[different](https://builds.apache.org//job/Thrift/javadoc/org/apache/thrift/protocol/TSimpleJSONProtocol.html)
JSON encodings, and no fewer than three different binary encodings. (However, one of the binary
encodings, DenseProtocol, is
[only supported in the C++ implementation](http://wiki.apache.org/thrift/LibraryFeatures); since
we're interested in cross-language serialization, I will focus on the other two.)

All the encodings share the same schema definition, in Thrift IDL:

    struct Person {
      1: string       userName,
      2: optional i64 favouriteNumber,
      3: list<string> interests
    }

The BinaryProtocol encoding is very straightforward, but also fairly wasteful (it takes 59 bytes to
encode our example record):

<a href="/2012/12/binaryprotocol.png"><img src="/2012/12/binaryprotocol_small.png" width="550" height="269"/></a>

The CompactProtocol encoding is semantically equivalent, but using variable-length integers and bit
packing to reduce the size to 34 bytes:

<a href="/2012/12/compactprotocol.png"><img src="/2012/12/compactprotocol_small.png" width="550" height="276"/></a>

As you can see, Thrift's approach to schema evolution is the same as Protobuf's: each field is
manually assigned a tag in the IDL, and the tags and field types are stored in the binary encoding,
which enables the parser to skip unknown fields. Thrift defines an explicit list type rather than
Protobuf's repeated field approach, but otherwise the two are very similar.

In terms of philosophy, the libraries are very different though. Thrift favours the "one-stop shop"
style that gives you an entire integrated RPC framework and many choices (with
[varying cross-language support](http://wiki.apache.org/thrift/LibraryFeatures)), whereas Protocol
Buffers and Avro appear to follow much more of a
["do one thing and do it well"](http://www.faqs.org/docs/artu/ch01s06.html) style.
