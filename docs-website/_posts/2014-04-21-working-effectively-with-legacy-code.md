---
title: Working effectively with Legacy Code
---

Sketch’s codebase is large and many parts of it are quite a few years old, written for simpler times and lower demands. The first parts of the app were written in the time of Mac OS 10.3, when Bindings were the new hotness, and the modern runtime was far away. CoreData did not exist and nor did @property. (Objective-C has come a long way since then. Thanks Apple!)

Sketch started under the name of DrawIt as a very simple drawing application; bezier-paths with fills and strokes. Never since have I a done a ‘grand rewrite’.

It is clear that this has helped make Sketch what it is today, both for good and bad. The good is that there is an extraordinary amount of ‘basic stuff’ that everybody just expects a drawing app to do; the baseline lies very high, and we’ve done that stuff.

The bad is that I’m ‘stuck’ with engineering decisions that were made in the past when the demands were simpler. And you can never write the perfect architecture from the start because you don’t know yet what the future will bring, and overdesigning is a sure way of never shipping.

### The Old Design

The old design was briefly this. Simple hand-coded model objects stored layer, style and path info. The view would change the model based on user-input and mark the view as dirty when it was done.

When AppKit decided it was time to redraw the view it would tell us, and we would walk down the tree drawing all elements into the view. All of this was happening on the main thread.

### The Grand Masterplan

We have this grand masterplan in mind for what we would eventually like Sketch’s architecture to be and we’re continually making small steps to get there. At all times though, we have to keep shipping. We cannot afford do disappear off the radar for a year while we attempt a grand rewrite – which then turns out to take two or three years instead. I’d like to highlight one example from the past to illustrate this.

Originally all model objects in Sketch were direct subclasses of NSObject, each defining its own properties and writing its own initWithCoder/encodeWithCoder methods. As per Apple’s recommendation, we manage undo by having the setter methods register their inverse value before setting the new value.

```objective-c
- (void)setRect:(NSRect)rect {
    [[self undoInvocation] setRect:_rect];
    _rect = rect;
}
```

Needless to say that this doesn’t scale; it’s error-prone and leads to loads of duplicate code. So instead I moved each model object (over the course of multiple point releases) to a new system.

The new system was much like GitHub’s Mantle framework (which did not exist back then). It used KVO on itself to be notified of changes and register undo accordingly. It was a big step forward from the old stuff; undo registration and change management lived in one place, no longer scattered around multiple properties in multiple classes.

All was not well though. We later discovered that the overhead of KVO was too much. 10K objects all observing multiple properties on themselves incurs a serious performance overhead. It seriously slowed down document loading and unloading, importing and even common operations on large sets of objects.

Since Sketch 2.3 we have been using a new system we wrote called Coma. Basically it means that we move the overhead from runtime to compile time by having that system spit out pre-generated base classes, much like [mogenerator](https://github.com/rentzsch/mogenerator).

Fundamentally however, these are not big changes. Undo is still triggered on the setters and there are many cases where this behaviour is undesirable. The long-term plan is that undo should not be living in the model at all but instead reside in a layer above the model. Again, more about that later…

(For comments, I’m [@pieteromvlee](https://twitter.com/pieteromvlee) on Twitter)