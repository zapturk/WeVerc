# WeVerc
WeVerc addresses this problem with a system that allows publishers to deliver both videos and programs to watchers on browsers. A WeVerc program is a sequence of videos. Publishers can edit other publisher videos, in which case we need to know the publishers chain. Publishers can assert how much they trust other publishers using the Publisher Trust Publisher (PTP) metric. A watcher can verify the identity of the publisher of a particular program or video. A WeVerc watcher should be able to play a program, and the player should present information on it.

Videos are served from existing online sources called providers (e.g., YouTube, Twitter, etc.).
We don’t trust providers to verify identity. We don’t even trust the blue checkmark on Twitter for identity, which I know is shocking. We will trust the providers to protect the content. That is, if the publisher gives a URL for a video, we’ll trust it is the publisher’s video. Of course, we may not trust the publisher.
Video locations, publishers, publisher chains, PTP, etc., should be maintained by Hyperledger.
Watchers can maintain a local list of publishers and how much they trust each publisher.
A program is defined by a .verk file containing the list of videos. It can (and should) contain lots more. The specifics are up to you.
The system should support robustness (i.e., the survival of failure of services, removal of videos, repository poisoning, etc.).
A program should be played in a browser.
You can implement your system by providing a local HTTP “proxy” that plays out the program and verifies the publisher's trust.