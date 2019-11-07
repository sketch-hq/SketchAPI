---
title: fromNative
order: 213
section: models
---

```javascript
var sketch = require('sketch/dom')
var document = sketch.fromNative(context.document)
```

A utility function to get a wrapped object from a native Sketch model object.

| Parameters                                               |                                         |
| -------------------------------------------------------- | --------------------------------------- |
| object<span class="arg-type">Native Sketch Object</span> | The native Sketch model object to wrap. |

### Returns

The wrapped object of the right type (you can check is type with `wrappedObject.type`), eg. a native document will be wrapped as a [Document](#document) while a native text layer will be wrapped as a [Text](#text).
