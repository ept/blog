---
layout: ync-post
title: Improving the security of your SSH private key files
---

Ever wondered how those key files in `~/.ssh` actually *work*? How secure are they actually?

As you probably do too, I use ssh many times every single day --- every `git fetch` and `git push`,
every deploy, every login to a server. And recently I realised that to me, ssh was just some crypto
voodoo that I had become accustomed to using, but I didn't really understand. That's a shame --- I
like to know how stuff works. So I went on a little journey of discovery, and here are some of the
things I found.

When you start reading about "crypto stuff", you very quickly get buried in an avalanche of
acronyms. I will briefly mention the acronyms as we go along; they don't help you understand the
concepts, but they are useful in case you want to Google for further details.

Quick recap: If you've ever used public key authentication, you probably have a file `~/.ssh/id_rsa`
or `~/.ssh/id_dsa` in your home directory. This is your RSA/DSA private key, and `~/.ssh/id_rsa.pub`
or `~/.ssh/id_dsa.pub` is its public key counterpart. Any machine you want to log in to needs to
have your public key in `~/.ssh/authorized_keys` on that machine. When you try to log in, your SSH
client uses a digital signature to prove that you have the private key; the server checks that the
signature is valid, and that the public key is authorized for your username; if all is well, you are
granted access.

So what is actually inside this private key file?


The unencrypted private key format
----------------------------------

Everyone recommends that you protect your private key with a passphrase (otherwise anybody who
steals the file from you can log into everything you have access to). If you leave the passphrase
blank, the key is not encrypted. Let's look at this unencrypted format first, and consider
passphrase protection later.

A ssh private key file typically looks something like this:

    -----BEGIN RSA PRIVATE KEY-----
    MIIEogIBAAKCAQEArCQG213utzqE5YVjTVF5exGRCkE9OuM7LCp/FOuPdoHrFUXk
    y2MQcwf29J3A4i8zxpES9RdSEU6iIEsow98wIi0x1/Lnfx6jG5Y0/iQsG1NRlNCC
    aydGvGaC+PwwWiwYRc7PtBgV4KOAVXMZdMB5nFRaekQ1ksdH/360KCGgljPtzTNl
    09e97QBwHFIZ3ea5Eih/HireTrRSnvF+ywmwuxX4ubDr0ZeSceuF2S5WLXH2+TV0
       ... etc ... lots of base64 blah blah ...
    -----END RSA PRIVATE KEY-----

The private key is an [ASN.1](http://en.wikipedia.org/wiki/ASN.1) data structure, serialized to a
byte string using [DER](http://en.wikipedia.org/wiki/ASN.1), and then
[Base64](http://tools.ietf.org/html/rfc4648)-encoded. ASN.1 is roughly comparable to JSON (it
supports various data types such as integers, booleans, strings and lists/sequences that can be
nested in a tree structure). It's very widely used for cryptographic purposes, but it has somehow
fallen out of fashion with the web generation (I don't know why, it seems like a pretty decent
format).

To look inside, let's generate a fake RSA key without passphrase using
[ssh-keygen](http://www.openbsd.org/cgi-bin/man.cgi?query=ssh-keygen&sektion=1), and then decode it
using [asn1parse](http://www.openssl.org/docs/apps/asn1parse.html):

    $ ssh-keygen -t rsa -N '' -f test_rsa_key
    $ openssl asn1parse -in test_rsa_key
        0:d=0  hl=4 l=1189 cons: SEQUENCE
        4:d=1  hl=2 l=   1 prim: INTEGER           :00
        7:d=1  hl=4 l= 257 prim: INTEGER           :C36EB2429D429C7768AD9D879F98C...
      268:d=1  hl=2 l=   3 prim: INTEGER           :010001
      273:d=1  hl=4 l= 257 prim: INTEGER           :A27759F60AEA1F4D1D56878901E27...
      534:d=1  hl=3 l= 129 prim: INTEGER           :F9D23EF31A387694F03AD0D050265...
      666:d=1  hl=3 l= 129 prim: INTEGER           :C84415C26A468934F1037F99B6D14...
      798:d=1  hl=3 l= 129 prim: INTEGER           :D0ACED4635B5CA5FB896F88BB9177...
      930:d=1  hl=3 l= 128 prim: INTEGER           :511810DF9AFD590E11126397310A6...
     1061:d=1  hl=3 l= 129 prim: INTEGER           :E3A296AE14E7CAF32F7E493FDF474...

Alternatively, you can paste the Base64 string into Lapo Luchini's excellent
[JavaScript ASN.1 decoder](http://lapo.it/asn1js/). You can see that ASN.1 structure is quite
simple: a sequence of nine integers. Their meaning is defined in
[RFC2313](http://tools.ietf.org/html/rfc2313#section-7.2). The first integer is a version number
(0), and the third number is quite small (65537) -- the public exponent *e*. The two important
numbers are the 2048-bit integers that appear second and fourth in the sequence: the RSA modulus
*n*, and the private exponent *d*. These numbers are used directly in the
[RSA algorithm](http://en.wikipedia.org/wiki/RSA_%28algorithm%29). The remaining five numbers can
be derived from *n* and *d*, and are only cached in the key file to speed up certain operations.

DSA keys are similar, a
[sequence of six integers](http://blog.ngas.ch/archives/2008/10/23/asn_1_for_dsa_public_and_private_keys/index.html):

    $ ssh-keygen -t dsa -N '' -f test_dsa_key
    $ openssl asn1parse -in test_dsa_key
        0:d=0  hl=4 l= 444 cons: SEQUENCE
        4:d=1  hl=2 l=   1 prim: INTEGER           :00
        7:d=1  hl=3 l= 129 prim: INTEGER           :E497DFBFB5610906D18BCFB4C3CCD...
      139:d=1  hl=2 l=  21 prim: INTEGER           :CF2478A96A941FB440C38A86F22CF...
      162:d=1  hl=3 l= 129 prim: INTEGER           :83218C0CA49BA8F11BE40EE1A7C72...
      294:d=1  hl=3 l= 128 prim: INTEGER           :16953EA4012988E914B466B9C37CB...
      425:d=1  hl=2 l=  21 prim: INTEGER           :89A356E922688EDEB1D388258C825...


Passphrase-protected keys
-------------------------

Next, in order to make life harder for an attacker who manages to steal your private key file, you
protect it with a passphrase. How does this actually work?

    $ ssh-keygen -t rsa -N 'super secret passphrase' -f test_rsa_key
    $ cat test_rsa_key
    -----BEGIN RSA PRIVATE KEY-----
    Proc-Type: 4,ENCRYPTED
    DEK-Info: AES-128-CBC,D54228DB5838E32589695E83A22595C7

    3+Mz0A4wqbMuyzrvBIHx1HNc2ZUZU2cPPRagDc3M+rv+XnGJ6PpThbOeMawz4Cbu
    lQX/Ahbx+UadJZOFrTx8aEWyZoI0ltBh9O5+ODov+vc25Hia3jtayE51McVWwSXg
    wYeg2L6U7iZBk78yg+sIKFVijxiWnpA7W2dj2B9QV0X3ILQPxbU/cRAVTd7AVrKT
        ... etc ...
    -----END RSA PRIVATE KEY-----

We've gained two header lines, and if you try to parse that Base64 text, you'll find it's no longer
valid ASN.1. That's because the entire ASN.1 structure we saw above has been encrypted, and the
Base64-encoded text is the output of the encryption. The header tells us the encryption algorithm
that was used: [AES-128](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard) in
[CBC mode](http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation#Cipher-block_chaining_.28CBC.29).
The 128-bit hex string in the `DEK-Info` header is the
[initialization vector](http://en.wikipedia.org/wiki/Initialization_vector) (IV) for the cipher.
This is pretty standard stuff; all common crypto libraries can handle it.

But how do you get from the passphrase to the AES encryption key? I couldn't find it documented
anywhere, so I had to dig through the OpenSSL source to find it:

1. Append the first 8 bytes of the IV to the passphrase, without a separator (serves as a salt).
2. Take the MD5 hash of the resulting string (once).

That's it.  To prove it, let's decrypt the private key manually (using the IV/salt from the
`DEK-Info` header above):

    $ tail -n +4 test_rsa_key | grep -v 'END ' | base64 -D |    # get just the binary blob
      openssl aes-128-cbc -d -iv D54228DB5838E32589695E83A22595C7 -K $(
        ruby -rdigest/md5 -e 'puts Digest::MD5.hexdigest(["super secret passphrase",0xD5,0x42,0x28,0xDB,0x58,0x38,0xE3,0x25].pack("a*cccccccc"))'
      ) |
      openssl asn1parse -inform DER

...which prints out the sequence of integers from the RSA key in the clear. Of course, if you want
to inspect the key, it's much easier to do this:

    $ openssl rsa -text -in test_rsa_key -passin 'pass:super secret passphrase'

but I wanted to demonstrate exactly how the AES key is derived from the password. This is important
because the private key protection has two weaknesses:

* The digest algorithm is hard-coded to be MD5, which means that without changing the format, it's
  not possible to upgrade to another hash function (e.g. SHA-1). This could be a problem if MD5
  turns out not to be good enough.
* The hash function is only applied once --- there is no
  [stretching](http://en.wikipedia.org/wiki/Key_stretching). This is a problem because MD5 and AES
  are both fast to compute, and thus a short passphrase is quite easy to break with brute force.

If your private SSH key ever gets into the wrong hands, e.g. because someone steals your laptop or
your backup hard drive, the attacker can try a huge number of possible passphrases, even with
moderate computing resources. If your passphrase is a dictionary word, it can probably be broken in
a matter of seconds.

That was the bad news: the passphrase on your SSH key isn't as useful as you thought it was.
But there is good news: you can upgrade to a more secure private key format, and everything
continues to work!


Better key protection with PKCS#8
---------------------------------

What we want is to derive a symmetric encryption key from the passphrase, and we want this
derivation to be slow to compute, so that an attacker needs to buy more computing time if they want
to brute-force the passphrase. If you've seen the [use bcrypt](http://codahale.com/how-to-safely-store-a-password/)
meme, this should sound very familiar.

For SSH private keys, there are a few standards with clumsy names (acronym alert!) that can help us out:

* [PKCS #5 (RFC 2898)](http://tools.ietf.org/html/rfc2898#section-5.2) defines
  [PBKDF2](http://en.wikipedia.org/wiki/PBKDF2) (Password-Based Key Derivation Function 2), an
  algorithm for deriving an encryption key from a password by applying a hash function repeatedly.
  PBES2 (Password-Based Encryption Scheme 2) is also defined here; it simply means using a
  PBKDF2-generated key with a symmetric cipher.
* [PKCS #8 (RFC 5208)](http://tools.ietf.org/html/rfc5208) defines a format for storing encrypted
  private keys that supports PBKDF2. OpenSSL transparently supports private keys in PKCS#8 format,
  and OpenSSH uses OpenSSL, so if you're using OpenSSH that means you can swap your traditional SSH
  key files for PKCS#8 files and everything continues to work as normal!

I don't know why `ssh-keygen` still generates keys in SSH's traditional format, even though a better
format has been available for years. Compatibility with servers is not a concern, because the
private key never leaves your machine. Fortunately it's easy enough to
[convert to PKCS#8](http://www.openssl.org/docs/apps/pkcs8.html):

    $ mv test_rsa_key test_rsa_key.old
    $ openssl pkcs8 -topk8 -v2 des3 \
        -in test_rsa_key.old -passin 'pass:super secret passphrase' \
        -out test_rsa_key -passout 'pass:super secret passphrase'

If you try using this new PKCS#8 file with a SSH client, you should find that it works exactly the
same as the file generated by `ssh-keygen`. But what's inside it?

    $ cat test_rsa_key
    -----BEGIN ENCRYPTED PRIVATE KEY-----
    MIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIOu/S2/v547MCAggA
    MBQGCCqGSIb3DQMHBAh4q+o4ELaHnwSCBMjA+ho9K816gN1h9MAof4stq0akPoO0
    CNvXdtqLudIxBq0dNxX0AxvEW6exWxz45bUdLOjQ5miO6Bko0lFoNUrOeOo/Gq4H
    dMyI7Ot1vL9UvZRqLNj51cj/7B/bmfa4msfJXeuFs8jMtDz9J19k6uuCLUGlJscP
        ... etc ...
    -----END ENCRYPTED PRIVATE KEY-----

Notice that the header/footer lines have changed (`BEGIN ENCRYPTED PRIVATE KEY` instead of
`BEGIN RSA PRIVATE KEY`), and the plaintext `Proc-Type` and `DEK-Info` headers have gone. In fact,
the whole key file is once again a ASN.1 structure:

    $ openssl asn1parse -in test_rsa_key
        0:d=0  hl=4 l=1294 cons: SEQUENCE
        4:d=1  hl=2 l=  64 cons: SEQUENCE
        6:d=2  hl=2 l=   9 prim: OBJECT            :PBES2
       17:d=2  hl=2 l=  51 cons: SEQUENCE
       19:d=3  hl=2 l=  27 cons: SEQUENCE
       21:d=4  hl=2 l=   9 prim: OBJECT            :PBKDF2
       32:d=4  hl=2 l=  14 cons: SEQUENCE
       34:d=5  hl=2 l=   8 prim: OCTET STRING      [HEX DUMP]:3AEFD2DBFBF9E3B3
       44:d=5  hl=2 l=   2 prim: INTEGER           :0800
       48:d=3  hl=2 l=  20 cons: SEQUENCE
       50:d=4  hl=2 l=   8 prim: OBJECT            :des-ede3-cbc
       60:d=4  hl=2 l=   8 prim: OCTET STRING      [HEX DUMP]:78ABEA3810B6879F
       70:d=1  hl=4 l=1224 prim: OCTET STRING      [HEX DUMP]:C0FA1A3D2BCD7A80DD61F4C0287F8B2D...

Use Lapo Luchini's [JavaScript ASN.1 decoder](http://lapo.it/asn1js/) to display a nice ASN.1 tree
structure:

    Sequence (2 elements)
    |- Sequence (2 elements)
    |  |- Object identifier: 1.2.840.113549.1.5.13            // using PBES2 from PKCS#5
    |  `- Sequence (2 elements)
    |     |- Sequence (2 elements)
    |     |  |- Object identifier: 1.2.840.113549.1.5.12      // using PBKDF2 -- yay! :)
    |     |  `- Sequence (2 elements)
    |     |     |- Byte string (8 bytes): 3AEFD2DBFBF9E3B3    // salt
    |     |     `- Integer: 2048                              // iteration count
    |     `- Sequence (2 elements)
    |          Object identifier: 1.2.840.113549.3.7          // encrypted with Triple DES, CBC
    |          Byte string (8 bytes): 78ABEA3810B6879F        // initialization vector
    `- Byte string (1224 bytes): C0FA1A3D2BCD7A80DD61F4C0287F8B2DAB46A43E...  // encrypted key blob

The format uses [OIDs](http://en.wikipedia.org/wiki/Object_identifier), numeric codes allocated by a
registration authority to unambiguously refer to algorithms. The OIDs in this key file tell us that
the encryption scheme is [pkcs5PBES2](http://oid-info.com/get/1.2.840.113549.1.5.13), that the key
derivation function is [PBKDF2](http://oid-info.com/get/1.2.840.113549.1.5.12), and that the
encryption is performed using [des-ede3-cbc](http://oid-info.com/get/1.2.840.113549.3.7). The hash
function can be explicitly specified if needed; here it's omitted, which means that it
[defaults](http://tools.ietf.org/html/rfc3370#section-4.4.1) to
[hMAC-SHA1](http://tools.ietf.org/html/rfc2104).

The nice thing about having all those identifiers in the file is that if better algorithms are
invented in future, we can upgrade the key file without having to change the container file format.

You can also see that the key derivation function uses an iteration count of 2,048. Compared to just
one iteration in the traditional SSH key format, that's good --- it means that it's much slower to
brute-force the passphrase. The number 2,048 is currently hard-coded in OpenSSL; I hope that it will
be configurable in future, as you could probably increase it without any noticeable slowdown on a
modern computer.


Conclusion: better protection for your SSH private keys
-------------------------------------------------------

If you already have a strong passphrase on your SSH private key, then converting it from the
traditional private key format to PKCS#8 is roughly comparable to adding two extra keystrokes to
your passphrase, for free. And if you have a weak passphrase, you can take your private key
protection from "easily breakable" to "slightly harder to break".

It's so easy, you can do it right now:

    $ mv ~/.ssh/id_rsa ~/.ssh/id_rsa.old
    $ openssl pkcs8 -topk8 -v2 des3 -in ~/.ssh/id_rsa.old -out ~/.ssh/id_rsa
    $ chmod 600 ~/.ssh/id_rsa
    # Check that the converted key works; if yes, delete the old one:
    $ rm ~/.ssh/id_rsa.old

The `openssl pkcs8` command asks for a passphrase three times: once to unlock your existing private
key, and twice for the passphrase for the new key. It doesn't matter whether you use a new
passphrase for the converted key or keep it the same as the old key.

Not all software can read the PKCS8 format, but that's fine --- only your SSH client needs to be
able to read the private key, after all. From the server's point of view, storing the private key in
a different format changes nothing at all.
