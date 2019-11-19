---
title: SmartLayout
order: 215
section: models
---

The [SmartLayout](#smartlayout) object contains the set of possible smart layouts that can be applied to [SymbolMaster](#symbol-master) and [Group](#group) layers.

| Properties         |                                                     |
| ------------------ | --------------------------------------------------- |
| LeftToRight        | Smart layout flowing left to right                  |
| HorizontallyCenter | Smart layout expanding horizontally from the center |
| RightToLeft        | Smart layout flowing right to left                  |
| TopToBottom        | Smart layout flowing from top to bottom             |
| VerticallyCenter   | Smart layout expanding verically from the center    |
| BottomToTop        | Smart layout flowing from bottom to top             |

## Set a smart layout

```javascript
const SmartLayout = require('sketch').SmartLayout
layer.smartLayout = SmartLayout.TopToBottom
```

Given a reference to a [SymbolMaster](#symbol-master) or [Group](#group) layer use the `smartLayout` setter to apply one of the smart layout values.

## Clear a smart layout

Set the `smartLayout` value to `null` to remove the smart layout. This is the equivalent of selecting "None" in the UI.

```javascript
symbolMaster.smartLayout = null
```

## Trigger a smart layout

```javascript
const SmartLayout = require('sketch').SmartLayout
symbolMaster.smartLayout = SmartLayout.TopToBottom
symbolInstance.resizeWithSmartLayout()
```

In order to trigger a smart layout resize in an instance, for example after changing an override value, call the `resizeWithSmartLayout()` method on the [SymbolInstance](#symbol-instance) layer.
