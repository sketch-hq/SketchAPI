# Philosophy

This is a JavaScript API for Sketch. It's still a work in progress (and will always be as the Sketch application is refined over different releases), but the intention is to make something which is:

- an easily understandable subset of the full internals of Sketch
- fully supported by Bohemian between releases (ie. we try not to change it, unlike our internal API which we can and do change whenever we need to)
- idiomatic JavaScript
- allowing you to drop down to our internal API when absolutely necessary
- providing the best possible developer experience

This API is a very core layer which interfaces with Sketch itself. It's intentionally simple, and we want to keep it that way. If you feel like adding some high-level code to it, it’s probably better to add it to a community-maintained library that can be used on top of the API, and keep it separate from the core API effort.

![API layers](https://cloud.githubusercontent.com/assets/206306/19645098/f7d3615c-99ea-11e6-962a-439fb553bf2d.png)

## Non-Goals

Everything that can be built using the existing API (eg. helper functions) is unlikely to be included in the API. In the same spirit, everything that can be built using only Cocoa APIs is unlikely to be included in the API. A good example are the Node.js polyfills. There are implemented in separate repositories and as such, don't bloat the core API. Another good example is the `sketch-module-web-view` which provides a UI which doesn't require any Sketch integration.

There are multiple justifications for this:

- performances: providing a modular approach and avoiding loading everything as soon as someone requires the core API
- while the core API require internal knowledge about Sketch, all those other libraries don't. Hence the community will have a much easier time contributing to them

That does not mean other libraries won't be shipped with Sketch. For example, some Node.js polyfills are shipped with Sketch and allow users to use them without any bundler. It might be possible that a few well-written helper libraries will be shipped with Sketch.

## Backward compatibility

As stated above, we try not to change the API between releases. That means that backward compatibility is extremely important to us. We do not want plugins using the API to break when a new Sketch version is released.

Of course, some breaking will be unavoidable when the underlying Sketch feature completely disappear/change. But we should try to think hard about how Sketch might change in the future and provide an API extensible enough that it could accommodate for the future.

That also mean that technical debt won't easily go away. If we make a mistake in the API, it will stay there. One way we try to mitigate that is to provide a new API method "fixing" the mistake while still providing the old API with a deprecation warning. We still need to maintain the old API (and the tests for it shouldn't be removed) but with the warning + the updated documentation, we can hope that the usage of the old API will slowly disappear.
