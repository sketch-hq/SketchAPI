---
title: Symbol Master
order: 209
section: components
---

```javascript
var SymbolMaster = sketch.SymbolMaster
```

```javascript
import { SymbolMaster } from 'sketch-api'
```

A [Symbol](https://www.sketchapp.com/docs/symbols/) master. It is an instance of [Artboard](#artboard) (hence of [Layer](#layer) and [Group](#group)) so all the methods defined there are available.

| Properties | type                    | Description                                                                                             |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| id         | string                  | The unique ID of the Symbol Master object (not to be confused with `symbolId`).                         |
| name       | string                  | The name of the Symbol Master                                                                           |
| parent     | [Group](#group)         | The group the Symbol Master is in.                                                                      |
| frame      | [Rectangle](#rectangle) | The frame of the Symbol Master. This is given in coordinates that are local to the parent of the layer. |
| symbolId   | String                  | The unique ID of the Symbol that the master and its instances share.                                    |

## Creating a new Symbol Master

```javascript
var master = new SymbolMaster({
  name: 'my symbol master',
})
```

## Creating a new Symbol Master from an Artboard

```javascript
var master = SymbolMaster.fromArtboard(artboard)
```

Replace the artboard with a symbol master.

| Parameter             | type                  | Description                             |
| --------------------- | --------------------- | --------------------------------------- |
| artboard _(required)_ | [Artboard](#artboard) | The artboard to create the master from. |

### Returns

A new SymbolMaster

## toArtboard

```javascript
var artboard = master.toArtboard()
```

Replace the symbol master with an artboard and detach all its instances converting them into groups.

### Returns

A new [Artboard](#artboard)

## createNewInstance

```javascript
var instance = master.createNewInstance()
```

Creates a new [SymbolInstance](#symbol-instance) linked to this master, ready for inserting in the document.

### Returns

A new [SymbolInstance](#symbol-instance)

## getAllInstances

```javascript
var instances = master.getAllInstances()
```

Returns an array of all instances of the symbol in the document, on all pages.
