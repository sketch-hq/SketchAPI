---
title: Having fun with Undo
---

We have [taken care](/blog/2014-04-22-more-on-kvo/) of the overhead of KVO in the model and things like Undo are now hardcoded and ‘fast’. But let’s have a look at how we can work with undo, and circumvent it when we don’t need it.

Currently in Sketch, each setter method in the model registers its own reverse undo action. It’s a simple concept to understand and it works well for simple object graphs.

Performance is critical in Sketch, and some users create enormous drawings with 10K+ objects in the graph easily. When the graph gets that big, making larger modifications to the tree fast becomes really important.

One example is dragging a complex PDF document into Sketch; after parsing it we might have created a couple thousand new objects. Registering undo actions for all setters called during this process is unnecessary and a big performance overhead.

Fixing this is easy; we just wrap the entire import block in a disable-undo-registration block. But we’re still calling all those methods, copying original object values before the undo manger decides to toss them all away. Not good.

So how shall we fix this? Let’s add a flag to each model object along the lines of ‘shouldRegisterUndo’. But now we have an extra instance variable on every object. That is wasteful and prone to error; we have to keep all these properties in sync somehow.

Let’s try again. We make a static BOOL 'shouldRegisterUndo’ on the root model object instead. Now we run into trouble if we want to do asynchronous importing on a background thread. So we use NSThread’s threadDictionary to hold these values. Yuck.

No, instead let’s have a setX and setPrimitiveX. The former calls the latter but does some extra stuff like undo registration. Importing and other large operations can call setPrimitiveX and everything works. Except that setters may do other things and if those go into setX, we have to remember for each property on each model object whether it has any other side-effects. Ugh.

The word side-effects is probably key here. We should avoid them as much as possible and have setters just be setters. Undo is a task for the controller, one layer level up in our [lasagna stack](http://edgecasesshow.com/085-a-fan-of-ravioli-code.html). It’s important to keep our levels properly separated from each other, each with a clearly defined role.

How exactly we’re going to do that I don’t know yet, but at least it’s clear it doesn’t belong here. To be continued….

(For comments, I’m [@pieteromvlee](https://twitter.com/pieteromvlee) on Twitter)