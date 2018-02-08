---
title: What's New For Plugins In Sketch 40?
categories: scripting update
---

## Scripting API

With the release of version 40 of Sketch, we're slowly moving towards rolling out our Javascript API as a better way to work with the Sketch model from within your plugins.

As part of this work, we've updated this site to include an [API Reference](/reference/api) section.

The API itself is still under development, and should not be regarded as completely fixed or ready for prime-time.

It's getting there however, and if you're starting to work on new plugins, you may want to consider trying it out.

Over the next few releases we'll be developing the API further, updating all of our existing [plugin examples](/examples/) to use the API, and also adding some new examples.


## NSAppTransportSecurity

With the next version of Sketch, we're planning on fully adopting a change that Apple made a while ago known as App Transport Security. This relates to the security of HTTP connections, and requires that all such requests be made using `https:` and not just plain `http:`.

Until now we've disabled this feature, but soon we will enable it.

Unless your plugin requests content from web pages, it should be unaffected by this change.

If however you *do* fetch data or resources from web pages, you will need to change over to using `https:` in your URLs.

We also suggest that everyone changes to using `https:` for any URLs specified in the plugin's manifest file. Future versions of Sketch may use these URLs.

