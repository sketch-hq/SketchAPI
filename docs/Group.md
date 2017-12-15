---
title: Group
order: 203
section: components
---

```javascript
var Group = sketch.Group
```

```javascript
import { Group } from 'sketch-api'
```

A group of layers. It is also an instance of [Layer](#layer) so all the methods defined there are available.

| Properties | type                    | Description                                                                                     |
| ---------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| id         | string                  | The unique ID of the Group.                                                                     |
| name       | string                  | The name of the Group                                                                           |
| parent     | [Group](#group)         | The group the Group is in.                                                                      |
| layers     | [Layer](#layer)         | The layers that this component groups together.                                                 |
| frame      | [Rectangle](#rectangle) | The frame of the Group. This is given in coordinates that are local to the parent of the layer. |

## Creating a new group

```javascript
new Group()
```

```javascript
var group = new Group({
  name: 'my name',
  layers: [
    {
      type: sketch.Types.Text,
      text: 'Hello world',
    },
  ],
})
```

## pageRectToLocalRect

```javascript
var rectDefinedInGroupCoordinates = group.pageRectToLocalRect(
  rectDefinedInPageCoordinates
)
```

Convert a rectangle in page coordinates to one relative to this group's coordinates.

| Parameter         | type                    | Description              |
| ----------------- | ----------------------- | ------------------------ |
| rect _(required)_ | [Rectangle](#rectangle) | The rectangle to convert |

### Returns

A [Rectangle](#rectangle) in local coordinates.

## adjustToFit

```javascript
group.adjustToFit()
```

Adjust the group to fit its children.

### Returns

The current group (useful if you want to chain the calls).
