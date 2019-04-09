---
title: Group
order: 302
section: layers
---

```javascript
var Group = require('sketch/dom').Group
```

A group of layers. It is also an instance of [Layer](#layer) so all the methods defined there are available.

| Properties                                                                  |                                                                                                 |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                                      | The unique ID of the Group.                                                                     |
| name<span class="arg-type">string</span>                                    | The name of the Group                                                                           |
| parent<span class="arg-type">[Group](#group)</span>                         | The group the Group is in.                                                                      |
| locked<span class="arg-type">boolean</span>                                 | If the group is locked.                                                                         |
| hidden<span class="arg-type">boolean</span>                                 | If the group is hidden.                                                                         |
| frame<span class="arg-type">[Rectangle](#rectangle)</span>                  | The frame of the Group. This is given in coordinates that are local to the parent of the layer. |
| selected<span class="arg-type">boolean</span>                               | If the Group is selected.                                                                       |
| flow<span class="arg-type">[Flow](#flow)</span>                             | The prototyping action associated with the Group.                                               |
| exportFormats<span class="arg-type">[ExportFormat](#export-format)[]</span> | The export formats of the Group.                                                                |
| transform<span class="arg-type">object</span>                               | The transformation applied to the Group.                                                        |
| transform.rotation<span class="arg-type">number</span>                      | The rotation of the Group in degrees, clock-wise.                                               |
| transform.flippedHorizontally<span class="arg-type">boolean</span>          | If the Group is horizontally flipped.                                                           |
| transform.flippedVertically<span class="arg-type">boolean</span>            | If the Group is vertically flipped.                                                             |
| style<span class="arg-type">[Style](#style)</span>                          | The style of the Group.                                                                         |
| sharedStyleId<span class="arg-type">string / null</span>                    | The ID of the [SharedStyle](#shared-style) this Group is linked to if any.                      |
| layers<span class="arg-type">[Layer](#layer)[]</span>                       | The layers that this component groups together.                                                 |

## Create a new Group

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

## Adjust to fit its children

```javascript
group.adjustToFit()
```

Adjust the group to fit its children.

### Returns

The current group (useful if you want to chain the calls).
