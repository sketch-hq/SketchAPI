---
title: New in Sketch 64
section: plugins
chapter: JavaScript API Updates
permalink: /plugins/updates/new-in-sketch-64

order: 494
excerpt: Summary of the public API changes introduced with Sketch 64
---

Released 23 March, 2020 – [_read release notes_](https://www.sketch.com/updates/#version-64)

## Changes

### Tints

Sketch 64 introduces a new feature: Tints. With Tints, you can change the color of an entire Symbol or group, without relying on complex workarounds and multiple Layer Styles.

Internally, Tints are treated as Color Fills on Symbols and Groups, so you can access and modify them using the existing [Styles API](https://developer.sketch.com/reference/api/#style).

#### Usage

The following code assumes `layer` is a `SymbolInstance` or a `Group`:

```js
// Output the current tint
console.log(layer.style.fills)

// Remove the tint
layer.style.fills = []
​
// Add a new tint
let newTint = {
  fillType: sketch.Style.FillType.Color,
  color: '#ff6600'
}
layer.style.fills = [newTint]
```

## Related resources

- [API reference](/reference/api)
- [New in Sketch 57](/plugins/updates/new-in-sketch-57)
- [New in Sketch 66](/plugins/updates/new-in-sketch-66)
