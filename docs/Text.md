---
title: Text
order: 208
section: components
---

```javascript
var Text = sketch.Text
```

```javascript
import { Text } from 'sketch-api'
```

A text layer. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties  | type                        | Description                                                                                    |
| ----------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| id          | string                      | The unique ID of the Text.                                                                     |
| name        | string                      | The name of the Text                                                                           |
| parent      | [Group](#group)             | The group the Text is in.                                                                      |
| frame       | [Rectangle](#rectangle)     | The frame of the Text. This is given in coordinates that are local to the parent of the layer. |
| text        | String                      | The string value of the text layer.                                                            |
| alignment   | [Alignment](#alignment)     | The alignment of the layer.                                                                    |
| lineSpacing | [LineSpacing](#linespacing) | The line spacing of the layer.                                                                 |
| fixedWidth  | Boolean                     | Wether the layer should have a fixed width or a flexible width.                                |

## Creating a new Text

```javascript
var text = new Text({
  text: 'my text',
  alignment: Text.Alignment.center,
})
```

## adjustToFit

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

| Parameter         | type   | Description                        |
| ----------------- | ------ | ---------------------------------- |
| font _(required)_ | NSFont | The font to set on the Text layer. |

## systemFontSize

```javascript
text.systemFontSize = 16
```

Set the font of the text layer as the system font of the given size.

| Parameter              | type   | Description                  |
| ---------------------- | ------ | ---------------------------- |
| pointSize _(required)_ | number | The size of the font to set. |

## fragments

```javascript
var fragments = text.fragments
```

Returns a array of the text fragments for the text. Each one is a object containing a rectangle, and a baseline offset `{rect, baselineOffset}`.

## FillType

```javascript
Text.Alignment.center
```

Enumeration of the alignments of the text.

| Value     | description                                                       |
| --------- | ----------------------------------------------------------------- |
| `left`    | Visually left aligned                                             |
| `right`   | Visually right aligned                                            |
| `center`  | Visually centered                                                 |
| `justify` | Fully-justified. The last line in a paragraph is natural-aligned. |
| `natural` | Indicates the default alignment for script                        |

## LineSpacing

```javascript
Text.LineSpacing.constantBaseline
```

Enumeration of the line spacing behaviour for the text.

| Value              | description                                             |
| ------------------ | ------------------------------------------------------- |
| `constantBaseline` | Uses min & max line height on paragraph style           |
| `variable`         | Uses MSConstantBaselineTypesetter for fixed line height |
