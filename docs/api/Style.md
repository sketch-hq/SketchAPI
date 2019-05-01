---
title: Style
order: 204
section: models
---

```javascript
var Style = require('sketch/dom').Style
```

```javascript
var shape = new Shape({
  style: {
    borders: [{ color: '#c0ffee' }],
  },
})

shape.style.fills = [
  {
    color: '#c0ffee',
    fillType: Style.FillType.Color,
  },
]

text.style.textUnderline = 'double dash-dot'
```

The style of a Layer.

| Properties                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| opacity<span class="arg-type">number</span>                                                                                                                                                                                                       | The opacity of a Layer, between 0 (transparent) and 1 (opaque).                                                                                                                                                                                                                          |
| blendingMode<span class="arg-type">[BlendingMode](#styleblendingMode)</span>                                                                                                                                                                      | The opacity of a Layer, between 0 (transparent) and 1 (opaque).                                                                                                                                                                                                                          |
| blur<span class="arg-type">[Blur](#blur)</span>                                                                                                                                                                                                   | The blur applied to the Layer.                                                                                                                                                                                                                                                           |
| fills<span class="arg-type">[Fill](#fill)[]</span>                                                                                                                                                                                                | The fills of a Layer.                                                                                                                                                                                                                                                                    |
| borders<span class="arg-type">[Border](#border)[]</span>                                                                                                                                                                                          | The borders of a Layer.                                                                                                                                                                                                                                                                  |
| borderOptions<span class="arg-type">[BorderOptions](#borderoptions)</span>                                                                                                                                                                        | The options that the borders share.                                                                                                                                                                                                                                                      |
| shadows<span class="arg-type">[Shadow](#shadow)[]</span>                                                                                                                                                                                          | The shadows of a Layer.                                                                                                                                                                                                                                                                  |
| innerShadows<span class="arg-type">[Shadow](#shadow)[]</span>                                                                                                                                                                                     | The inner shadows of a Layer.                                                                                                                                                                                                                                                            |
| alignment<span class="arg-type">[Alignment](#textalignment)</span>                                                                                                                                                                                | The horizontal alignment of the text of a Text Layer                                                                                                                                                                                                                                     |
| verticalAlignment<span class="arg-type">[VerticalAlignment](#textverticalalignment)</span>                                                                                                                                                        | The vertical alignment of the text of a Text Layer                                                                                                                                                                                                                                       |
| kerning<span class="arg-type">number / null</span>                                                                                                                                                                                                | The kerning between letters of a Text Layer. `null` means that the kerning will be the one defined by the font.                                                                                                                                                                          |
| lineHeight<span class="arg-type">number / null</span>                                                                                                                                                                                             | The height of a line of text in a Text Layer. `null` means "automatic".                                                                                                                                                                                                                  |
| paragraphSpacing<span class="arg-type">number</span>                                                                                                                                                                                              | The space between 2 paragraphs of text in a Text Layer.                                                                                                                                                                                                                                  |
| textColor<span class="arg-type">string</span>                                                                                                                                                                                                     | A rgba hex-string (`#000000ff` is opaque black) of the color of the text in a Text Layer.                                                                                                                                                                                                |
| fontSize<span class="arg-type">number</span>                                                                                                                                                                                                      | The size of the font in a Text Layer.                                                                                                                                                                                                                                                    |
| textTransform<span class="arg-type">'none' / 'uppercase' / 'lowercase'</span>                                                                                                                                                                     | The transform applied to the text of a Text Layer.                                                                                                                                                                                                                                       |
| fontFamily<span class="arg-type">string</span>                                                                                                                                                                                                    | The name of the font family of a Text Layer. `'system'` means the font family of the OS (`'.SF NS Text'` on macOS 10.14).                                                                                                                                                                |
| fontWeight<span class="arg-type">number</span>                                                                                                                                                                                                    | The weight of the font of a Text Layer. Goes from 0 to 12, 0 being the thinest and 12 being the boldest. Not every weight are available for every fonts. When setting a font weight that does not exist for the current font family, the closest weight that exists will be set instead. |
| fontStyle<span class="arg-type">'italic' / undefined</span>                                                                                                                                                                                       | The style of the font of a Text Layer.                                                                                                                                                                                                                                                   |
| fontVariant<span class="arg-type">'small-caps' / undefined</span>                                                                                                                                                                                 | The variant of the font of a Text Layer.                                                                                                                                                                                                                                                 |
| fontStretch<span class="arg-type">'compressed' / 'condensed' / 'narrow' / 'expanded' / 'poster' / undefined</span>                                                                                                                                | The size variant of the font of a Text Layer.                                                                                                                                                                                                                                            |
| textUnderline<span class="arg-type">string: `<line-style> [<line-pattern>] ['by-word']` / undefined where `<line-style>` can be `single` / `thick` / `double` and `<line-pattern>` can be `dot` / `dash` / `dash-dot` / `dash-dot-dot`</span>     | The underline decoration of a Text Layer.                                                                                                                                                                                                                                                |
| textStrikethrough<span class="arg-type">string: `<line-style> [<line-pattern>] ['by-word']` / undefined where `<line-style>` can be `single` / `thick` / `double` and `<line-pattern>` can be `dot` / `dash` / `dash-dot` / `dash-dot-dot`</span> | The strikethrough decoration of a Text Layer.                                                                                                                                                                                                                                            |

## Get the default line height

```javascript
var defaultlineHeight = style.getDefaultLineHeight()
```

When no line height is specified, `style.lineHeight` will be `undefined`. You can get the default line height of the font using `style.getDefaultLineHeight()`.

### Returns

A number if the layer is a Text layer or `undefined`.

## Check if the Style is in sync with a Shared Style

```javascript
var isOutOfSync = style.isOutOfSyncWithSharedStyle(sharedStyle)
```

### Returns

Whether the Style has some differences with a [Shared Style](#shared-style).

## Sync the Style with a Shared Style

```javascript
style.syncWithSharedStyle(sharedStyle)
```

The style instance will be updated with the value of the Shared Style.

```javascript
var sharedStyle = styledLayer.sharedStyle
sharedStyle.style = style
```

The Shared Style value will be updated with the style.

## `Style.BlendingMode`

```javascript
Style.BlendingMode.Darken
```

Enumeration of the blending mode.

| Value        |
| ------------ |
| `Normal`     |
| `Darken`     |
| `Multiply`   |
| `ColorBurn`  |
| `Lighten`    |
| `Screen`     |
| `ColorDodge` |
| `Overlay`    |
| `SoftLight`  |
| `HardLight`  |
| `Difference` |
| `Exclusion`  |
| `Hue`        |
| `Saturation` |
| `Color`      |
| `Luminosity` |

## Blur

```javascript
shape.style.blur = {
  center: {
    x: 10,
    y: 20,
  },
  type: Style.BlurType.Motion,
  motionAngle: 10,
}
```

An object that represent the blur of the layer.

| Properties                                                       |                                                                   |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| blurType<span class="arg-type">[BlurType](#styleblurtype)</span> | The type of the blur.                                             |
| radius<span class="arg-type">number</span>                       | The radius of the blur.                                           |
| motionAngle<span class="arg-type">number</span>                  | The angle of the blur (only used when the blur type is `Motion`). |
| center<span class="arg-type">object</span>                       | The center of the blur (only used when the blur type is `Zoom`.   |
| center.x<span class="arg-type">number</span>                     | The horizontal coordinate of the center of the blur.              |
| center.y<span class="arg-type">number</span>                     | The vertical coordinate of the center of the blur.                |
| enabled<span class="arg-type">boolean</span>                     | Whether the fill is active or not.                                |

## `Style.BlurType`

```javascript
Style.BlurType.Background
```

Enumeration of the type of a blur.

| Value        |                                                                 |
| ------------ | --------------------------------------------------------------- |
| `Gaussian`   | A common blur type that will accurately blur in all directions. |
| `Motion`     | Blur only in one direction, giving the illusion of motion.      |
| `Zoom`       | Will blur from one particular point out.                        |
| `Background` | This will blur any content that appears behind the layer.       |

## Fill

```javascript
shape.style.fills = [
  {
    color: '#c0ffee',
    fillType: Style.FillType.Color,
  },
]
```

An object that represent a Fill. `color`, `gradient` and `pattern` will always be defined regardless of the type of the fill.

| Properties                                                                                |                                                  |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------ |
| fillType<span class="arg-type">[FillType](#stylefilltype)</span>                          | The type of the fill.                            |
| color<span class="arg-type">string</span>                                                 | A rgba hex-string (`#000000ff` is opaque black). |
| gradient<span class="arg-type">[Gradient](#gradient)</span>                               | The gradient of the fill.                        |
| pattern<span class="arg-type">object</span>                                               | The pattern of the fill.                         |
| pattern.patternType<span class="arg-type">[PatternFillType](#stylepatternfilltype)</span> | How the pattern should fill the layer.           |
| pattern.image<span class="arg-type">[ImageData](#imagedata) / null</span>                 | The image of tile of the pattern.                |
| pattern.tileScale<span class="arg-type">number</span>                                     | The scale applied to the tile of the pattern.    |
| enabled<span class="arg-type">boolean</span>                                              | Whether the fill is active or not.               |

## `Style.FillType`

```javascript
Style.FillType.Color
```

Enumeration of the types of fill.

| Value      |
| ---------- |
| `Color`    |
| `Gradient` |
| `Pattern`  |

## `Style.PatternFillType`

```javascript
Style.PatternFillType.Fit
```

Enumeration of the types of pattern fill.

| Value     |
| --------- |
| `Tile`    |
| `Fill`    |
| `Stretch` |
| `Fit`     |

## Border

```javascript
shape.style.borders = [
  {
    color: '#c0ffee',
    fillType: Style.FillType.Color,
    position: Style.BorderPosition.Inside,
  },
]
```

An object that represent a Border.

| Properties                                                                   |                                                  |
| ---------------------------------------------------------------------------- | ------------------------------------------------ |
| fillType<span class="arg-type">[FillType](#stylefilltype)</span>             | The type of the fill of the border.              |
| color<span class="arg-type">string</span>                                    | A rgba hex-string (`#000000ff` is opaque black). |
| gradient<span class="arg-type">[Gradient](#gradient)</span>                  | The gradient of the fill.                        |
| enabled<span class="arg-type">boolean</span>                                 | Whether the border is active or not.             |
| position<span class="arg-type">[BorderPosition](#styleborderposition)</span> | The position of the border.                      |
| thickness<span class="arg-type">number</span>                                | The thickness of the border.                     |

## `Style.BorderPosition`

```javascript
Style.BorderPosition.Center
```

Enumeration of the positions of a border.

| Value     |
| --------- |
| `Center`  |
| `Inside`  |
| `Outside` |

## BorderOptions

```javascript
shape.style.borderOptions = {
  dashPattern: [20, 5, 20, 5],
}
```

An object that represent the options that the Borders of the Layer share.

| Properties                                                               |                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| startArrowhead<span class="arg-type">[Arrowhead](#stylearrowhead)</span> | The type of the arrow head for the start of the path.                                                                                                                                                                                                                                              |
| endArrowhead<span class="arg-type">[Arrowhead](#stylearrowhead)</span>   | The type of the arrow head for the start of the path.                                                                                                                                                                                                                                              |
| dashPattern<span class="arg-type">number[]</span>                        | The dash pattern of the borders. For example, a dash pattern of 4-2 will draw the stroke for four pixels, put a two pixel gap, draw four more pixels and then so on. A dashed pattern of 5-4-3-2 will draw a stroke of 5 px, a gap of 4 px, then a stroke of 3 px, a gap of 2 px, and then repeat. |
| lineEnd<span class="arg-type">[LineEnd](#stylelineend)</span>            | The type of the border ends (if visible).                                                                                                                                                                                                                                                          |
| lineJoin<span class="arg-type">[LineJoin](#stylelinejoin)</span>         | The type of the border joins (if any).                                                                                                                                                                                                                                                             |

## `Style.Arrowheads`

```javascript
Style.Arrowheads.OpenArrow
```

Enumeration of the type of the Arrowheads for line layers.

| Value          |
| -------------- |
| `None`         |
| `OpenArrow`    |
| `FilledArrow`  |
| `Line`         |
| `OpenCircle`   |
| `FilledCircle` |
| `OpenSquare`   |
| `FilledSquare` |

## `Style.LineEnd`

```javascript
Style.LineEnd.Round
```

Enumeration of the positions of a border.

| Value        |                                                                                    |
| ------------ | ---------------------------------------------------------------------------------- |
| `Butt`       | This is the default option that’ll draw the border right to the vector point.      |
| `Round`      | Creates a rounded, semi-circular end to a path that extends past the vector point. |
| `Projecting` | Similar to the rounded cap, but with a straight edges.                             |

## `Style.LineJoin`

```javascript
Style.LineJoin.Miter
```

Enumeration of the positions of a border.

| Value   |                                                                                          |
| ------- | ---------------------------------------------------------------------------------------- |
| `Miter` | This will simply create an angled, or pointy join. The default setting.                  |
| `Round` | Creates a rounded corner for the border. The radius is relative to the border thickness. |
| `Bevel` | This will create a chamfered edge on the border corner.                                  |

## Shadow

```javascript
shape.style.shadows = [
  {
    color: '#c0ffee',
    blur: 3,
  },
]
```

```javascript
shape.style.innerShadows = [
  {
    color: '#c0ffee',
    blur: 3,
  },
]
```

An object that represent a Shadow.

| Properties                                   |                                                  |
| -------------------------------------------- | ------------------------------------------------ |
| color<span class="arg-type">string</span>    | A rgba hex-string (`#000000ff` is opaque black). |
| blur<span class="arg-type">number</span>     | The blur radius of the shadow.                   |
| x<span class="arg-type">number</span>        | The horizontal offset of the shadow.             |
| y<span class="arg-type">number</span>        | The vertical offset of the shadow.               |
| spread<span class="arg-type">number</span>   | The spread of the shadow.                        |
| enabled<span class="arg-type">boolean</span> | Whether the fill is active or not.               |

## Gradient

```javascript
shape.style.fills = [
  {
    fillType: Style.FillType.Gradient,
    gradient: {
      gradientType: Style.GradientType.Linear,
      from: {
        x: 0,
        y: 0,
      },
      to: {
        x: 50,
        y: 50,
      },
      stops: [
        {
          position: 0,
          color: '#c0ffee',
        },
        {
          position: 0.5,
          color: '#0ff1ce',
        },
        {
          position: 1,
          color: '#bada55',
        },
      ],
    },
  },
]
```

An object that represent a Gradient.

| Properties                                                                   |                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gradientType<span class="arg-type">[GradientType](#stylegradienttype)</span> | The type of the Gradient.                                                                                                                                                                                              |
| from<span class="arg-type">[Point](#point)</span>                            | The position of the start of the Gradient                                                                                                                                                                              |
| to<span class="arg-type">[Point](#point)</span>                              | The position of the end of the Gradient.                                                                                                                                                                               |
| aspectRatio<span class="arg-type">number</span>                              | When the gradient is `Radial`, the from and to points makes one axis of the ellipse of the gradient while the aspect ratio determine the length of the orthogonal axis (`aspectRatio === 1` means that it's a circle). |
| stops<span class="arg-type">[GradientStop](#gradientstop)[]</span>           | The different stops of the Gradient                                                                                                                                                                                    |

## `Style.GradientType`

```javascript
Style.GradientType.Radial
```

Enumeration of the type of a Gradient.

| Value     |                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Linear`  | Linear gradients tend to be the most common, where two colors will appear at opposite points of an object and will blend, or transition into each other.      |
| `Radial`  | A radial gradient will create an effect where the transition between color stops will be in a circular pattern.                                               |
| `Angular` | This effect allows you to create gradients that sweep around the circumference (measured by the maximum width or height of a layer) in a clockwise direction. |

## Gradient Stops

An object that represent a Gradient Stop. Each of colors of a Gradient are represented by a Stop. A Gradient can have as many Stops as you'd like.

| Properties                                   |                                                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| position<span class="arg-type">number</span> | The position of the Stop. `0` represents the start of the gradient while `1` represent the end. |
| color<span class="arg-type">string</span>    | The color of the Stop                                                                           |
