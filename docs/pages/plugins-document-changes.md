---
title: Document changes
section: plugins
chapter: JavaScript API
permalink: /plugins/document-changes

order: 301
excerpt: Allow plugins to respond to arbitrary changes in the document
---

Starting with Sketch 59 we're introducing a way for plugin authors to listen to arbitrary changes in the document.

This new API should provide a more scalable and flexible alternative to plugin [Actions](./actions). It provides a mechanism to listen to three types of fundamental change events in documents - changes, removals and additions.

> 🚧 We're releasing this feature early to gather feedback from the community, so the API may change in future. Let us know what you think, [file an issue](https://github.com/BohemianCoding/SketchAPI/issues) for comments, suggestions and bug reports or send an email to [developer@sketch.com](mailto:developer@sketch.com).

> 🚀 Check the [document-change-sketchplugin](https://github.com/BohemianCoding/document-change-sketchplugin) for an example implementation, or keep reading for a quick introduction.

### Change types

The fundamental document change types are:

- **Property changes** e.g. a layer's x/y position changing
- **Object addition**, e.g. adding a new layer to the canvas
- **Object removal**, e.g. deleting a layer

A fourth type of change - an object moving around within the document - can also be trivially derived using the `isMove` flag. See the code examples below for more information.

### Manifest handler

Subscribe to changes via the new `onDocumentChanged` handler defined in the [plugin manifest](./plugin-manifest).

```json
{
  "commands": [
    {
      "script": "command.js",
      "handlers": {
        "onDocumentChanged": "onDocumentChanged"
      }
    }
  ]
}
```

### Handler definition

Similarly to existing handlers, a JavaScript function needs to be defined to handle incoming document change events. The function is called repeatedly by Sketch while the document is being changed.

Changes that happen in quick succession may be batched, therefore your handler will receive an argument containing a set of changes.

```javascript
function onDocumentChanged(context) {
  var changes = context.actionContext
  for (var i = 0; i < changes.length; i++) {
    var change = changes[i]
    var path = change.fullPath() // Path to the affected object or property
    var type = change.type() // Change type, see example below for values
    var obj = change.object() // Reference to the mutable object
    var isMove = change.isMove() // Whether addition/removal is associated with a move
  }
}
```

The following boilerplate illustrates one way to handle each of the change types, including a move.

```javascript
function onDocumentChanged(context) {
  var changes = context.actionContext

  for (var i = 0; i < changes.length; i++) {
    var change = changes[i]
    var type = change.type()
    var isMove = change.isMove()
    switch (type) {
      case 1:
        // Handle property change
        break
      case 2:
        if (!isMove) {
          // Handle deletion
        }
        break
      case 3:
        if (isMove) {
          // Handle move
        } else {
          // Handle addition
        }
        break
    }
  }
}
```
