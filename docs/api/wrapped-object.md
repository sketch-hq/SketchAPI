---
title: Sketch Components
order: 103
section: topics
---

The approach taken by the API is to wrap the native Sketch model objects inside javascript objects. These are thin wrappers, and contain no state - they just exist as a way to provide a cleaner and more stable coding interface to the underlying model.

Each [Component](#document) follows the same API:

- `Component.fromNative(sketchObject)` returns a wrapped object from a native Sketch model object
- `Component.toJSON()` return a JSON object that represent the component
- `new Component(properties)` creates a new native Sketch model object and returns a wrapped object
- `componentInstance.sketchObject` returns the native Sketch model object.
- `componentInstance.isImmutable()` returns `true` if the component is wrapping an immutable version of a native Sketch model object. If that is the case, you won't be able to mutable the object (setting any property will be a no-op).
- `componentInstance.type` returns a string that represent the type of the component. If it's `undefined`, it means that we couldn't match the native object and that we returned a really lightweight wrapper.
