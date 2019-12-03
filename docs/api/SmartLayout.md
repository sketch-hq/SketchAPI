---
title: SmartLayout
order: 215
section: models
---

The [SmartLayout](#smartlayout) object contains the set of possible Smart Layouts that can be applied to [SymbolMaster](#symbol-master) and [Group](#group) layers.

| Properties         |                                                     |
| ------------------ | --------------------------------------------------- |
| LeftToRight        | Smart Layout flowing left to right                  |
| HorizontallyCenter | Smart Layout expanding horizontally from the center |
| RightToLeft        | Smart Layout flowing right to left                  |
| TopToBottom        | Smart Layout flowing from top to bottom             |
| VerticallyCenter   | Smart Layout expanding verically from the center    |
| BottomToTop        | Smart Layout flowing from bottom to top             |

## Set a Smart Layout

```javascript
const SmartLayout = require('sketch').SmartLayout
layer.smartLayout = SmartLayout.TopToBottom
```

Given a reference to a [SymbolMaster](#symbol-master) or [Group](#group) layer use the `smartLayout` setter to apply one of the Smart Layout values.

## Clear a Smart Layout

Set the `smartLayout` value to `null` to remove the Smart Layout. This is the equivalent of selecting "None" in the Sketch Inspector.

```javascript
symbolMaster.smartLayout = null
```

## Trigger a smart layout

```javascript
const SmartLayout = require('sketch').SmartLayout
symbolMaster.smartLayout = SmartLayout.TopToBottom
symbolInstance.resizeWithSmartLayout()
```

In order to trigger a Smart Layout resize in an instance, for example after changing an override value, call the `resizeWithSmartLayout()` method on the [SymbolInstance](#symbol-instance) layer.
