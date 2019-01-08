---
title: Text
order: 308
section: layers
---

```javascript
var Text = require('sketch/dom').Text
```

A text layer. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties                                                                  |                                                                                                |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                                      | The unique ID of the Text.                                                                     |
| name<span class="arg-type">string</span>                                    | The name of the Text                                                                           |
| parent<span class="arg-type">[Group](#group)</span>                         | The group the Text is in.                                                                      |
| locked<span class="arg-type">boolean</span>                                 | If the Text is locked.                                                                         |
| hidden<span class="arg-type">boolean</span>                                 | If the Text is hidden.                                                                         |
| frame<span class="arg-type">[Rectangle](#rectangle)</span>                  | The frame of the Text. This is given in coordinates that are local to the parent of the layer. |
| flow<span class="arg-type">[Flow](#flow)</span>                             | The prototyping action associated with the Text.                                               |
| exportFormats<span class="arg-type">[ExportFormat](#export-format)[]</span> | The export formats of the Symbol Master.                                                       |
| transform<span class="arg-type">object</span>                               | The transformation applied to the Text.                                                        |
| transform.rotation<span class="arg-type">number</span>                      | The rotation of the Text in degrees, clock-wise.                                               |
| transform.flippedHorizontally<span class="arg-type">boolean</span>          | If the Text is horizontally flipped.                                                           |
| transform.flippedVertically<span class="arg-type">boolean</span>            | If the Text is vertically flipped.                                                             |
| style<span class="arg-type">[Style](#style)</span>                          | The style of the Text.                                                                         |
| sharedStyleId<span class="arg-type">string / null</span>                    | The ID of the [SharedStyle](#shared-style) this Text is linked to if any.                      |
| text<span class="arg-type">string</span>                                    | The string value of the text layer.                                                            |
| lineSpacing<span class="arg-type">[LineSpacing](#textlinespacing)</span>    | The line spacing of the layer.                                                                 |
| fixedWidth<span class="arg-type">boolean</span>                             | Whether the layer should have a fixed width or a flexible width.                               |

## Create a new Text

```javascript
var text = new Text({
  text: 'my text',
  alignment: Text.Alignment.center,
})
```

## Adjust to fit its value

```javascript
text.adjustToFit()
```

Adjust the Text to fit its value.

### Returns

The current Text (useful if you want to chain the calls).

## fragments

```javascript
var fragments = text.fragments
```

Returns a array of the text fragments for the text. Each one is a object containing a rectangle, and a baseline offset and the range of the fragment `{rect, baselineOffset, range}`.

## `Text.Alignment`

```javascript
Text.Alignment.center
```

Enumeration of the alignments of the text.

| Value     |                                                                   |
| --------- | ----------------------------------------------------------------- |
| `left`    | Visually left aligned                                             |
| `right`   | Visually right aligned                                            |
| `center`  | Visually centered                                                 |
| `justify` | Fully-justified. The last line in a paragraph is natural-aligned. |

## `Text.VerticalAlignment`

```javascript
Text.VerticalAlignment.center
```

Enumeration of the vertical alignments of the text.

| Value    |                              |
| -------- | ---------------------------- |
| `top`    | Visually top aligned         |
| `center` | Visually vertically centered |
| `bottom` | Visually bottom aligned      |

## `Text.LineSpacing`

```javascript
Text.LineSpacing.constantBaseline
```

Enumeration of the line spacing behaviour for the text.

| Value              |                                                         |
| ------------------ | ------------------------------------------------------- |
| `constantBaseline` | Uses min & max line height on paragraph style           |
| `variable`         | Uses MSConstantBaselineTypesetter for fixed line height |
