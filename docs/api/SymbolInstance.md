---
title: Symbol Instance
order: 310
section: layers
---

```javascript
var SymbolInstance = require('sketch/dom').SymbolInstance
```

A [Symbol](https://sketch.com/docs/symbols/) instance. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties                                                                  |                                                                                                           |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                                      | The unique ID of the Symbol Instance object (not to be confused with `symbolId`).                         |
| name<span class="arg-type">string</span>                                    | The name of the Symbol Instance                                                                           |
| parent<span class="arg-type">[Group](#group)</span>                         | The group the Symbol Instance is in.                                                                      |
| locked<span class="arg-type">boolean</span>                                 | If the Symbol Instance is locked.                                                                         |
| hidden<span class="arg-type">boolean</span>                                 | If the Symbol Instance is hidden.                                                                         |
| frame<span class="arg-type">[Rectangle](#rectangle) </span>                 | The frame of the Symbol Instance. This is given in coordinates that are local to the parent of the layer. |
| flow<span class="arg-type">[Flow](#flow)</span>                             | The prototyping action associated with the Symbol.                                                        |
| selected<span class="arg-type">boolean</span>                               | If the Symbol Instance is selected.                                                                       |
| exportFormats<span class="arg-type">[ExportFormat](#export-format)[]</span> | The export formats of the Symbol Instance.                                                                |
| transform<span class="arg-type">object</span>                               | The transformation applied to the Symbol Instance.                                                        |
| transform.rotation<span class="arg-type">number</span>                      | The rotation of the Symbol Instance in degrees, clock-wise.                                               |
| transform.flippedHorizontally<span class="arg-type">boolean</span>          | If the Symbol Instance is horizontally flipped.                                                           |
| transform.flippedVertically<span class="arg-type">boolean</span>            | If the Symbol Instance is vertically flipped.                                                             |
| style<span class="arg-type">[Style](#style)</span>                          | The style of the Symbol Instance.                                                                         |
| symbolId<span class="arg-type">string</span>                                | The unique ID of the Symbol that the instance and its master share.                                       |
| master<span class="arg-type">[SymbolMaster](#symbol-master)</span>          | The Symbol master that the instance is linked to.                                                         |
| overrides<span class="arg-type">[Override](#symbol-override)[]</span>       | The array of the overrides to modify the instance.                                                        |

## Create a new Symbol Instance

```javascript
var instance = new SymbolInstance({
  name: 'my symbol instance',
  symbolId: symbolId,
})
```

## Create a new Symbol Instance from a Symbol Master

```javascript
var instance = master.createNewInstance()
```

Creates a new [SymbolInstance](#symbol-instance) linked to this master, ready for inserting in the document.

### Returns

A new SymbolInstance

## Detach the instance

```javascript
var group = instance.detach()

var group = instance.detach({
  recursively: true,
})
```

Replaces a group that contains a copy of the Symbol this instance refers to. Returns `null` if the master contains no layers instead of inserting an empty group

| Parameters                                               |                                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------------- |
| options<span class="arg-type">object</span>              | The options to apply when detaching the instance.                   |
| options.recursively<span class="arg-type">boolean</span> | If it should detach the nested symbols as well. Default to `false`. |

### Returns

A new [Group](#group) or `null`

## Set an Override value

```javascript
instance.setOverrideValue(instance.overrides[0], 'overridden')
```

Change the value of the override.

| Parameters                                                                    |                                                                                                                  |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| override<span class="arg-type">[Override](#symbol-override) - required</span> | The override to change.                                                                                          |
| value<span class="arg-type">string / NSImage - required</span>                | The value of override to set. Can be a string or an NSImage or a symbolId depending on the type of the override. |

### Returns

The current Symbol instance (useful if you want to chain the calls).
