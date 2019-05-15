---
title: Overview
section: plugins
chapter: Internal API
permalink: /plugins/internal-api

order: 500
excerpt: For a deeper integration with Sketch, the internal APIs provides access to almost every aspect of the app
---

For a deeper integration with Sketch, the internal APIs provides access to almost every aspect of the app. Use [CocoaScript](/plugins/cocoascript) or Objective-C if you're building plugins loading native frameworks.

> **Important:** New versions of Sketch can introduce breaking changes to the internal API.
>
> Sketch does not provide an API reference nor support for the internal API. If you're using the internal APIs make sure to test your plugin with the [pre-release versions](https://sketch.com/beta) of Sketch.
>
> We recommend using the [JavaScript API](plugins/javascript) where possible. Something is missing? Please [submit feedback and feature requests](https://github.com/BohemianCoding/SketchAPI/issues).

---

> **Note:** Do not use Swift for native frameworks (yet) to avoid problems with Sketch's internal Swift modules. See the official post by the Swift team on [ABI Stability and More](https://swift.org/blog/abi-stability-and-more/).

## Sketch Headers

The [`Sketch-Headers`](https://github.com/abynim/Sketch-Headers) project by [@abynim](https://github.com/abynim) provides regular updates listing declarations for the classes, categories and protocols used within Sketch.

Use [class-dump](http://stevenygard.com/projects/class-dump/) to generate header files yourself.

## Related resources

To learn more about underlying macOS frameworks, see the Apple developer documentation.

- [Foundation](https://developer.apple.com/documentation/foundation)
- [AppKit](https://developer.apple.com/documentation/appkit)
- [CoreGraphics](https://developer.apple.com/documentation/coregraphics)
