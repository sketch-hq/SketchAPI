---
title: Group
order: 203
section: components
---

```javascript
var Group = require('sketch/dom').Group
```

A group of layers. It is also an instance of [Layer](#layer) so all the methods defined there are available.

| Properties                                                 |                                                                                                 |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                     | The unique ID of the Group.                                                                     |
| name<span class="arg-type">string</span>                   | The name of the Group                                                                           |
| parent<span class="arg-type">[Group](#group)</span>        | The group the Group is in.                                                                      |
| layers<span class="arg-type">[Layer](#layer)[]</span>      | The layers that this component groups together.                                                 |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the Group. This is given in coordinates that are local to the parent of the layer. |
| flow<span class="arg-type">[Flow](#flow)</span>            | The prototyping action associated with the Group.                                               |

## Create a new group

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

| Parameters                                                           |                          |
| -------------------------------------------------------------------- | ------------------------ |
| rect<span class="arg-type">[Rectangle](#rectangle) - required</span> | The rectangle to convert |

### Returns

A [Rectangle](#rectangle) in local coordinates.

## Adjust to fit its children

```javascript
group.adjustToFit()
```

Adjust the group to fit its children.

### Returns

The current group (useful if you want to chain the calls).
