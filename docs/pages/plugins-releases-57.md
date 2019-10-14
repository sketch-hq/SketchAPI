---
title: New in Sketch 57
section: plugins
chapter: JavaScript API Updates
permalink: /plugins/updates/new-in-sketch-57

order: 497
excerpt: Summary of the public API changes introduced with Sketch 57
---

Released 14 August, 2019 – [_read release notes_](https://www.sketch.com/updates/#version-57)

## Changes

### Exposed `PointType` enum on `ShapePath`

#### More details
- Quick refresher, `PointType` is referring to how the Bezier handles behave at a point.
![Point types in sketch](https://github.com/KevinGutowski/Sketch-Updates/blob/master/Sketch%2057/imgs/pointtype.png?raw=true)
-  This enum makes it easier to figure out what the different options for `PointType` are.

[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/561)

#### Usage
```javascript
let sketch = require('sketch')
let ShapePath = sketch.ShapePath

console.log(ShapePath.PointType)
/* { Undefined: 'Undefined',
	Straight: 'Straight',
	Mirrored: 'Mirrored',
	Asymmetric: 'Asymmetric',
  	Disconnected: 'Disconnected' } */

let PointType = ShapePath.PointType
let straight = PointType.Straight

let myLine = new sketch.ShapePath({
  name: 'myLine',
  frame: {x: 10, y: 0, width: 40, height: 100},
  style: { borders: ['#FF0000'] },
  points: [{ point: { x: 0, y: 0 }, pointType: straight}, { point: { x: 1, y: 1 }, pointType: straight}],
  closed: false
})

console.log(myLine.points[0].pointType)
// 'Straight'
```

### Fixed `centerOnLayer` for nested layers

#### More details
- `centerOnLayer` now properly repositions the viewport over a nested layer.


[_GitHub pull request_](https://github.com/BohemianCoding/SketchAPI/pull/562)

## Related resources

- [API reference](/reference/api)
- [New in Sketch 55](/plugins/updates/new-in-sketch-55)
