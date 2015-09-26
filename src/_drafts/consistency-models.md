
Causal consistency is a very useful property in practice. For example, imagine you're running
a private social network which promises that postings by a user can only be seen by the user's
friends. Now consider the situation of a user who has just broken up with their romantic partner:
the user removes their ex-partner as a friend, and then posts a message about the break-up to their
other friends (assuming that their ex-partner will not see that message). There is a causal
relationship between those two operations: it is important that the friend removal is processed
before the message posting is processed, otherwise the ex-partner may see the message, violating the
user's privacy expectations.

Another example where causal consistency is useful is in comment threads. If one user replies to
another user's message, then all readers of the thread must see the original message before they see
the reply. It would be confusing for readers to see the reply, but not see the original message to
which it is replying.

Viewed like this, causal consistency seems like an obviously good idea, but surprisingly few systems
actually implement it. Especially in sharded databases, if the two causally related writes (e.g. the
friend removal and the message posting) are sent to two different shards, many databases do not
offer any guarantees about the order in which other clients will observe those writes.
