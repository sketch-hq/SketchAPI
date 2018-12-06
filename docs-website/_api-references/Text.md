---
title: Text
order: 307
section: layers
---

```javascript
var Text = require('sketch/dom').Text
```

A text layer. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties                                                               |                                                                                                |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                                   | The unique ID of the Text.                                                                     |
| name<span class="arg-type">string</span>                                 | The name of the Text                                                                           |
| parent<span class="arg-type">[Group](#group)</span>                      | The group the Text is in.                                                                      |
| frame<span class="arg-type">[Rectangle](#rectangle)</span>               | The frame of the Text. This is given in coordinates that are local to the parent of the layer. |
| flow<span class="arg-type">[Flow](#flow)</span>                          | The prototyping action associated with the Text.                                               |
| style<span class="arg-type">[Style](#style)</span>                       | The style of the Text.                                                                         |
| sharedStyleId<span class="arg-type">string / null</span>                 | The ID of the [SharedStyle](#sharedstyle) this Text is linked to if any.                       |
| text<span class="arg-type">string</span>                                 | The string value of the text layer.                                                            |
| alignment<span class="arg-type">[Alignment](#textalignment)</span>       | The alignment of the layer.                                                                    |
| lineSpacing<span class="arg-type">[LineSpacing](#textlinespacing)</span> | The line spacing of the layer.                                                                 |
| fixedWidth<span class="arg-type">boolean</span>                          | Wether the layer should have a fixed width or a flexible width.                                |

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

## font

```javascript
text.font = myNSFont
```

Set the font of the text layer.

| Parameters                                          |                                    |
| --------------------------------------------------- | ---------------------------------- |
| font<span class="arg-type">NSFont - required</span> | The font to set on the Text layer. |

## systemFontSize

```javascript
text.systemFontSize = 16
```

Set the font of the text layer as the system font of the given size.

| Parameters                                               |                              |
| -------------------------------------------------------- | ---------------------------- |
| pointSize<span class="arg-type">number - required</span> | The size of the font to set. |

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
| `natural` | Indicates the default alignment for script                        |

## `Text.LineSpacing`

```javascript
Text.LineSpacing.constantBaseline
```

Enumeration of the line spacing behaviour for the text.

| Value              |                                                         |
| ------------------ | ------------------------------------------------------- |
| `constantBaseline` | Uses min & max line height on paragraph style           |
| `variable`         | Uses MSConstantBaselineTypesetter for fixed line height |
