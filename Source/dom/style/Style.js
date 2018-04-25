import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { toArray } from '../utils'
import { Types } from '../enums'
import { GradientType } from './Gradient'
import { colorFromString, colorToString } from './Color'
import { Shadow } from './Shadow'
import { BorderOptions, Arrowhead, LineEnd, LineJoin } from './BorderOptions'
import { Blur, BlurType } from './Blur'
import { Fill, FillType } from './Fill'
import { Border, BorderPosition } from './Border'

const BlendingModeMap = {
  Normal: 0,
  Darken: 1,
  Multiply: 2,
  ColorBurn: 3,
  Lighten: 4,
  Screen: 5,
  ColorDodge: 6,
  Overlay: 7,
  SoftLight: 8,
  HardLight: 9,
  Difference: 10,
  Exclusion: 11,
  Hue: 12,
  Saturation: 13,
  Color: 14,
  Luminosity: 15,
}

const BlendingMode = {
  Normal: 'Normal',
  Darken: 'Darken',
  Multiply: 'Multiply',
  ColorBurn: 'ColorBurn',
  Lighten: 'Lighten',
  Screen: 'Screen',
  ColorDodge: 'ColorDodge',
  Overlay: 'Overlay',
  SoftLight: 'SoftLight',
  HardLight: 'HardLight',
  Difference: 'Difference',
  Exclusion: 'Exclusion',
  Hue: 'Hue',
  Saturation: 'Saturation',
  Color: 'Color',
  Luminosity: 'Luminosity',
}

const DEFAULT_STYLE = {
  fills: [],
  borders: [],
  opacity: 1,
  blendingMode: BlendingMode.Normal,
  shadows: [],
  innerShadows: [],
  borderOptions: {
    startArrowhead: Arrowhead.None,
    endArrowhead: Arrowhead.None,
    dashPattern: [],
    lineEnd: LineEnd.Butt,
    lineJoin: LineJoin.Miter,
  },
  blur: {
    center: { x: 0.5, y: 0.5 },
    motionAngle: 0,
    radius: 10,
    enabled: false,
    blurType: BlurType.Gaussian,
  },
}

/**
 * Represents a Sketch layer style.
 */

export class Style extends WrappedObject {
  /**
   * Make a new style object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(style = {}) {
    if (!style.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      style = Object.assign({}, DEFAULT_STYLE, style)
      // eslint-disable-next-line no-param-reassign
      style.sketchObject = MSDefaultStyle.defaultStyle()
    }

    super(style)
  }

  static colorFromString(color) {
    return colorFromString(color)
  }

  static colorToString(value) {
    return colorToString(value)
  }
}

Style.type = Types.Style
Style[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }

Style.GradientType = GradientType

Style.define('opacity', {
  get() {
    return this._object.contextSettings().opacity()
  },
  set(opacity) {
    this._object.contextSettings().setOpacity(Math.min(Math.max(opacity, 0), 1))
  },
})

Style.BlendingMode = BlendingMode
Style.define('blendingMode', {
  get() {
    const mode = this._object.contextSettings().blendMode()
    return (
      Object.keys(BlendingModeMap).find(key => BlendingModeMap[key] === mode) ||
      mode
    )
  },
  set(mode) {
    this._object
      .contextSettings()
      .setBlendMode(BlendingModeMap[mode] || mode || BlendingModeMap.Normal)
  },
})

Style.Arrowhead = Arrowhead
Style.LineEnd = LineEnd
Style.LineJoin = LineJoin
Style.define('borderOptions', {
  get() {
    return BorderOptions.fromNative(this._object)
  },
  set(borderOptions) {
    BorderOptions.updateNative(this._object, borderOptions)
  },
})

Style.BlurType = BlurType
Style.define('blur', {
  get() {
    return Blur.fromNative(this._object.blur())
  },
  set(blur) {
    Blur.updateNative(this._object.blur(), blur)
  },
})

Style.FillType = FillType
Style.define('fills', {
  get() {
    const fills = toArray(this._object.fills())
    return fills.map(Fill.fromNative.bind(Fill))
  },
  set(values) {
    const objects = values.map(Fill.toNative.bind(Fill))
    this._object.setFills(objects)
  },
})

Style.BorderPosition = BorderPosition
Style.define('borders', {
  get() {
    const borders = toArray(this._object.borders())
    return borders.map(Border.fromNative.bind(Border))
  },
  set(values) {
    const objects = values.map(Border.toNative.bind(Border))
    this._object.setBorders(objects)
  },
})

Style.define('shadows', {
  get() {
    return toArray(this._object.shadows()).map(Shadow.fromNative.bind(Shadow))
  },
  set(values) {
    const objects = values.map(Shadow.toNative.bind(Shadow, MSStyleShadow))
    this._object.setShadows(objects)
  },
})

Style.define('innerShadows', {
  get() {
    return toArray(this._object.innerShadows()).map(
      Shadow.fromNative.bind(Shadow)
    )
  },
  set(values) {
    const objects = values.map(Shadow.toNative.bind(Shadow, MSStyleInnerShadow))
    this._object.setInnerShadows(objects)
  },
})
