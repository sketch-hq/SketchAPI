---
title: Introduction
order: 101
section: topics
---

> ![api layers](https://user-images.githubusercontent.com/3254314/36788487-bcf76abc-1c96-11e8-813f-d6340a1658c3.png)

This is a prototype Javascript API for Sketch. It's still a work in progress, but the intention is to make something which is:

* native Javascript
* an easily understandable subset of the full internals of Sketch
* fully supported by Bohemian between releases (ie we try not to change it, unlike our internal API which we can and do change whenever we need to)
* still allows you to drop down to our internal API when absolutely necessary.

The idea is to keep this API as lean-and-mean as possible. The main reason for that is that if we (Bohemian) are committing ourselves to making sure that we don't break it, then it's essential that doing so doesn't become an unmanageable task.

Again, this is very much a work in progress, so comments and suggestions for this API are welcome - send them to developers@sketch.com, or open an issue to have a public discussion.
