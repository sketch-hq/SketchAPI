---
title: More on KVO
---

In his previous post, Pieter mentioned that originally we were using KVO registration as a generic mechanism to support Undo in our model.

Essentially what happened here was that any model object registered to observe itself, and then used the change notifications that it received to record actions with the Undo manager.

The advantage of this KVO system was that it was nice and generic. It avoided us having to write repetitious code in every model class to do essentially the same thing.

The disadvantage was the other side of the same coin. By being generic, the code had to do more work than a custom setter would need to do, particular for properties with primitive values. Let’s take the example of a simple CGFloat property like cornerRadius.

A custom setCornerRadius: setter could simply register an invocation with the Undo manager, calling itself to set corner radius back to its old value - which it can read before it obliterates it with the new one. Job done.

A generic solution going through KVO has to deliver everything through the observeValueForKeyPath:ofObject:change:context: method. The old and/or new values have to be delivered in a dictionary, which for primitive types like CGFloat means that they also have to be boxed up as NSNumbers. Additionally, the same method serves as a point of entry for every change to every property, so the property name has to be delivered as a string (the key path). KVO also potentially calls all sorts of other associated methods, such as willChange/didChange, again adding overhead. Finally, the actual KVO registration has to be done at some point, which clearly does a bit more fiddling behind the scenes - a little bit more overhead.

Now all of this isn’t onerous most of the time, and when used in the way that it’s intended, KVO is a brilliant solution for a number of tasks.

### Problems

Using it in the way we were though, we had some problems. These were at least partially design issues in our code, but their effect was to make KVO not the most efficient way to do Undo.

The biggest problem was that in our design, KVO registration was done too early, essentially when we created objects. This meant that creating a new cluster of objects to form a part of the graph - for example when loading a file from disk - was incurring all of this Undo related overhead, even though we were never going to need to “undo” the loading.

Similarly, when importing an SVG or PDF file, I found that the code that I was writing to create the layers and set up their properties was spending quite a lot of its time doing unnecessary work relating to the KVO/Undo system.

In addition, there *are* times in the normal usage of Sketch where changes are made to a lot of objects at once - for example if the user does Select All and then drags things around. In this situation there are a number of problems to contend with, but losing extra performance to KVO isn’t that helpful…

Finally, I should actually mention here that the KVO code did more than just Undo registration, it also kept track of which objects in the graph had changed - information that was required by our rendering once it became a bit more sophisticated and asynchronous (more of that in a later post, perhaps).

For various reasons, we couldn’t address every one of our design problems simultaneously, but we did need to improve the performance.

### Solutions

The upshot of all of this is that we moved away from KVO as a generic solution, and back towards something a bit more hand-coded.

Rather than actually hand-coding every setter however, we decided to write a code generator to do the work for us - something like [Mogenerator](https://github.com/rentzsch/mogenerator), but not tied to Core Data.

The basic idea here is to describe our model classes, and then have a generator create all the boilerplate code for us. This can tackle Undo registration, but also encoding, decoding, and anything else where we want to apply a generic solution across a range of model classes.

Not only does this give us a bit more performance (or a lot more, in some cases), it gives us some future-proofing.

We have essentially a large body of boilerplate code for each model object, but when we need to make a design change, all we have to do is edit our code templates and recompile.

This gives us the agility to work through some more fundamental design issues one at a time, safe in the knowledge that we aren’t going to have a horrible block of manual changes to make for each one.

This code generation tool is called Coma by the way, and it’s open source. Right now it’s pretty undocumented, and only for the brave. I’m planning a follow-up post on it though…

### One More Thing…

One other thing that I think is worth saying on this topic, from a more conceptual or philosophical point of view.

Code grows and evolves over time, and particularly when you have a shipping product, sometimes you end up somewhere that you didn’t quite intend to be.

I’m far from convinced that things like Undo registration and change tracking should be in any way entangled into the model in the first place. There are many times that we might want to manipulate an object graph, and only some of those times require Undo registration.

This stuff feels like controller code to me (in the MVC sense), and I think that it should live in a separate layer. Code that needs Undo registration, or needs to know what has changed when some action occurs, should ask this “model manipulation” layer to perform model changes, rather than doing them directly.

There are a number of ways this could be implemented: KVC, proxy objects that stand in for the actual model objects, or some other custom protocol. The actual technical solution isn’t as important to me as the conceptual separation. The problem with the naive KVO approach, or with custom setters on the model classes themselves, is that there is no separation, and you actually have to code in special ways to turn off Undo registration when you don’t want it (which feels like doing things the wrong way round, and tends to involve nasty globals or non thread-safe hacks).

As I hinted above, this stuff is something that we’re still working through with Sketch. We have the code working the way it currently does as the result of lots of logical decisions that made perfect sense at the time, but now we want to change track slightly. This sort of thing happens all the time in a code base of any significance. We don’t have the luxury of disappearing into a darkened room and emerging a year or two later with a complete rewrite, and we are old enough (and hopefully wise enough) to know how that often ends.

Instead, what we’re doing is building up good suites of unit tests, and slowly whittling away at the design, whilst keeping the product shipping.

This can feel agonisingly slow at times, when the temptation is there to just dive in a rip everything apart. It’s the right way to do it though, and it can actually be immensely satisfying to watch the design and code slowly shift, oil-tanker like, onto its new heading…

(For comments, I’m [@samdeane](https://twitter.com/samdeane) on Twitter)