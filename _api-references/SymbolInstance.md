---
title: Symbol Instance
order: 210
section: components
---

```javascript
var SymbolInstance = sketch.SymbolInstance
```

```javascript
import { SymbolInstance } from 'sketch-api'
```

A [Symbol](https://www.sketchapp.com/docs/symbols/) instance. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties | type                           | Description                                                                                               |
| ---------- | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| id         | string                         | The unique ID of the Symbol Instance object (not to be confused with `symbolId`).                         |
| name       | string                         | The name of the Symbol Instance                                                                           |
| parent     | [Group](#group)                | The group the Symbol Instance is in.                                                                      |
| frame      | [Rectangle](#rectangle)        | The frame of the Symbol Instance. This is given in coordinates that are local to the parent of the layer. |
| symbolId   | String                         | The unique ID of the Symbol that the instance and its master share.                                       |
| master     | [SymbolMaster](#symbol-master) | The Symbol master that the instance is linked to.                                                         |
| overrides  | [Override](#symbol-override)[] | The array of the overrides to modify the instance.                                                        |

## Creating a new Symbol Instance

```javascript
var instance = new SymbolInstance({
  name: 'my symbol instance',
  symbolId: symbolId,
})
```

## Creating a new Symbol Instance from a Symbol Master

```javascript
var instance = master.createNewInstance()
```

Creates a new [SymbolInstance](#symbol-instance) linked to this master, ready for inserting in the document.

### Returns

A new SymbolInstance

## detach

```javascript
var group = instance.detach()
```

Replaces a group that contains a copy of the Symbol this instance refers to. Returns `null` if the master contains no layers instead of inserting an empty group

### Returns

A new [Group](#group) or `null`

## setOverrideValue

```javascript
instance.setOverrideValue(instance.overrides[0], 'overridden')
```

Change the value of the override.

| Parameter             | type                         | Description                                                                                                      |
| --------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| override _(required)_ | [Override](#symbol-override) | The override to change.                                                                                          |
| value _(required)_    | String / NSImage             | The value of override to set. Can be a string or an NSImage or a symbolId depending on the type of the override. |

### Returns

The current Symbol instance (useful if you want to chain the calls).
