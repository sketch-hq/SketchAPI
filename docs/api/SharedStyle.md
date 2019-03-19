---
title: Shared Style
order: 205
section: models
---

```javascript
var SharedStyle = require('sketch/dom').SharedStyle
```

```javascript
document.sharedTextStyles.push({
  name: 'Header 1',
  style: text.style,
})
```

A shared style (either a layer style or a text style).

| Properties                                                                            |                                    |
| ------------------------------------------------------------------------------------- | ---------------------------------- |
| id<span class="arg-type">string</span>                                                | The unique ID of the Shared Style. |
| styleType<span class="arg-type">[SharedStyle.StyleType](#sharedstylestyletype)</span> | The type of the Shared Style.      |
| name<span class="arg-type">string</span>                                              | The name of the Shared Style.      |
| style<span class="arg-type">[Style](#style)</span>                                    | The Style value that is shared.    |

## Create a new Shared Style from a Style

```javascript
const newSharedStyle = SharedStyle.fromStyle({
  name: 'Header 1',
  style: layer.style,
  document: document,
})

// you can also push to the shared styles arrays directly
document.sharedTextStyles.push({
  name: 'Header 1',
  style: text.style,
})
```

Create a new Shared Style with a specific name in a specific Document.

> ⚠️You can only insert local shared styles (eg. not linked to a Library). `document.sharedLayerStyles` returns the foreign shared styles (eg. linked to a Library) concatenated with the local shared styles. So if you try to insert a new Shared Style at the beginning (using `unshift` for example), it will end up at the beginning of the local Shared Styles but that might not be the beginning of all the shared styles if there are some foreign.

## Get all the Instances

```javascript
var styles = sharedStyle.getAllInstances()
```

Returns an array of all instances of the Shared Style in the document, on all pages.

### Returns

A [Style](#style) array.

## Get all the Instances' Layers

```javascript
var layers = sharedStyle.getAllInstancesLayers()
```

Returns an array of all layers with a Style which is an instance of the Shared Style in the document, on all pages.

### Returns

A [Layer](#layer) array.

## Get the Library it was defined in

```javascript
var originLibrary = sharedStyle.getLibrary()
```

If the SharedStyle was imported from a library, the method can be used to:

- know about it
- get the library back

### Returns

The [Library](#library) the Shared Style was defined in, or `null` if it is a local shared style.

## Sync the local reference with the library version

```javascript
const success = sharedStyle.syncWithLibrary()
```

If a [Library](#library) has some updates, you can synchronize the local Shared Style with the Library's version and bypass the panel where the user chooses the updates to bring.

### Returns

`true` if it succeeded.

## Unlink the local reference from the library

```javascript
const success = sharedStyle.unlinkFromLibrary()
```

You can unlink a Shared Style from the Library it comes from and make it a local Shared Style instead.

### Returns

`true` if it succeeded.

## `SharedStyle.StyleType`

```javascript
SharedStyle.StyleType.Text
```

Enumeration of the type of Shared Style. `Unknown` indicates the object is broken and Sketch can't determine the style type.

| Value     |
| --------- |
| `Text`    |
| `Layer`   |
| `Unknown` |
