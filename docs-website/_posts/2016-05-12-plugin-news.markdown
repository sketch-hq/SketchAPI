---
title: Plugin News
categories: scripting update
---

We've been hard at work over the last few weeks here on some updates to the Plugin system.

Some of these will be rolling out along with the upcoming 3.8 release, [which is now in beta](http://www.sketchapp.com/beta/). Others will come later, but in both cases, we wanted to give everyone in the developer community some early warning.

## Deprecated APIs

As many of you are aware, we quite often have to change the code internally, which sometimes means that APIs which we’ve publicised become deprecated. Until now we’ve tended to just leave the old APIs in the code too, and have them spit out a console message saying that they are deprecated.

Moving forwards, we intend to start actually removing these APIs. We’ll give you a version or two’s notice (so if we deprecate something in 3.7, we won’t remove it until 3.9), but you should be aware that deprecated will no longer mean “you can ignore this” and will now mean “you really should stop using this”.

## Legacy Plugins

On a similar note, back in version 3.3 we introduced a new bundle format for Plugins. It has lots of benefits, but to ease the transition, we continued to support old single-file Plugins.

In order to simplify our code and allow us to add new scripting features, we intend to deprecate and then remove support for old Plugins. Starting with version 3.9, any commands provided by old-style Plugins will be grouped under a “Legacy” heading in the menu.

Following on from that, a later version of Sketch will no longer load old Plugins.

We encourage you to move your Plugins over to the new format now! It’s a pretty simple job, and it will future-proof you.

We're sure that you are completely sold on this change by now, but one more little nudge, just in case: if you want to have your Plugin featured on our website, you'll need to change them to the new format!

## Action API

With 3.8, we are introducing the much-requested ability for Plugins to be able to respond to actions that the user performs in Sketch.

We have posted [some documentation](/reference/action/) and [example Plugins](https://github.com/BohemianCoding/SketchAPI/tree/develop/examples/) for action support.

We want to make it clear at this point that this is version 1.0 of action support, and more will follow. We are aware that there are some inconsistencies with the way it works right now, and not all the things a user can do will be available to begin with. It's also worth saying that some things may never be available as actions, for performance reasons.

Even having said that though, this feature should greatly expand the range of things that Plugins can usefully do, and we look forward to seeing what you do with it. Please [send us feedback](mailto:mail@sketch.com) on how it works for you, and what you’d like to see change.

## Scripting API

As a few of you may have noticed, we made a tentative step in 3.7 towards adding a JavaScript-only API which Plugins can call.

The intention with this is to make a smaller, more stable set of functionality available to Plugins directly from JavaScript. Each time we release a new version of Sketch we will try to ensure that the API continues to work. This should insulate Plugins using the API from the current situation where they are forced to use internal Sketch code, and then get broken when we change that code.

Version 3.8 does contain a slightly updated version of this, but we don’t consider it ready for prime-time, and it isn’t documented properly. The design of the API also definitely isn’t stable at this point, and we don’t recommend using it yet as the names of classes and methods are likely to change.

Consider this an early warning that it is coming, and again, please [send us feedback](mailto:mail@sketch.com) on how you’d like to see it work.
