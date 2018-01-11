---
title: fromNative
order: 403
section: Utils
---

```javascript
var document = sketch.fromNative(context.document)
```

```javascript
import { fromNative } from 'sketch-api'
```

A utility function to get a wrapped object from a native Sketch model object.

| Properties | type                 | Description                             |
| ---------- | -------------------- | --------------------------------------- |
| object     | Native Sketch Object | The native Sketch model object to wrap. |

### Return

The wrapped object of the right type (you can check is type with `wrappedObject.type`), eg. a native document will be wrapped as a [Document](#document) while a native text layer will be wrapped as a [Text](#text).
