import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { toArray } from '../utils'
import { Types } from '../enums'
import { Gradient, GradientType } from './Gradient'
import { Color, colorFromString, colorToString } from './Color'

export const FillType = {
  Color: 0, // A solid fill/border.
  Gradient: 1, // A gradient fill/border.
  Pattern: 4, // A pattern fill/border.
  Noise: 5, // A noise fill/border.
  /* @deprecated */
  color: 0, // A solid fill/border.
  gradient: 1, // A gradient fill/border.
  pattern: 4, // A pattern fill/border.
  noise: 5, // A noise fill/border.
}
export const BorderPosition = {
  Center: 0,
  Inside: 1,
  Outside: 2,
  Both: 3, // This is Sketch internal option - don't use it.
}

export const Arrowhead = {
  None: 0,
  OpenArrow: 1,
  ClosedArrow: 2,
  Line: 3,
}

export const BlurType = {
  Gaussian: 0,
  Motion: 1,
  Zoom: 2,
  Background: 3,
}

export const BlendingMode = {
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

export const LineEnd = {
  Butt: 0,
  Round: 1,
  Projecting: 2,
}

export const LineJoin = {
  Miter: 0,
  Round: 1,
  Bevel: 2,
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
    this._object.contextSettings().setOpacity(opacity)
  },
})

Style.BlendingMode = BlendingMode
Style.define('blendingMode', {
  get() {
    const mode = this._object.contextSettings().blendMode()
    return (
      Object.keys(BlendingMode).find(key => BlendingMode[key] === mode) || mode
    )
  },
  set(mode) {
    this._object
      .contextSettings()
      .setBlendMode(BlendingMode[mode] || mode || BlendingMode.Normal)
  },
})

Style.Arrowhead = Arrowhead
Style.LineEnd = LineEnd
Style.LineJoin = LineJoin
Style.define('borderOptions', {
  get() {
    const startType = this._object.startDecorationType()
    const endType = this._object.endDecorationType()
    const lineCap = this._object.borderOptions().lineCapStyle()
    const lineJoin = this._object.borderOptions().lineJoinStyle()
    return {
      startArrowhead:
        Object.keys(Arrowhead).find(key => Arrowhead[key] === startType) ||
        startType,
      endArrowhead:
        Object.keys(Arrowhead).find(key => Arrowhead[key] === endType) ||
        endType,
      dashPattern: toArray(this._object.borderOptions().dashPattern()),
      lineEnd:
        Object.keys(LineEnd).find(key => LineEnd[key] === lineCap) || lineCap,
      lineJoin:
        Object.keys(LineJoin).find(key => LineJoin[key] === lineJoin) ||
        lineJoin,
    }
  },
  set(borderOptions) {
    if (typeof borderOptions.startArrowhead !== 'undefined') {
      this._object.setStartDecorationType(
        Arrowhead[borderOptions.startArrowhead] || borderOptions.startArrowhead
      )
    }
    if (typeof borderOptions.endArrowhead !== 'undefined') {
      this._object.setEndDecorationType(
        Arrowhead[borderOptions.endArrowhead] || borderOptions.endArrowhead
      )
    }
    if (typeof borderOptions.dashPattern !== 'undefined') {
      this._object.borderOptions().setDashPattern(borderOptions.dashPattern)
    }
    if (typeof borderOptions.lineEnd !== 'undefined') {
      this._object
        .borderOptions()
        .setLineCapStyle(
          LineEnd[borderOptions.lineEnd] || borderOptions.lineEnd
        )
    }
    if (typeof borderOptions.lineJoin !== 'undefined') {
      this._object
        .borderOptions()
        .setLineJoinStyle(
          LineJoin[borderOptions.lineJoin] || borderOptions.lineJoin
        )
    }
  },
})

Style.BlurType = BlurType
Style.define('blur', {
  get() {
    const blur = this._object.blur()
    const blurType = blur.type()
    return {
      center: {
        x: blur.center().x,
        y: blur.center().y,
      },
      motionAngle: blur.motionAngle(),
      radius: blur.radius(),
      enabled: !!blur.enabled,
      type:
        Object.keys(BlurType).find(key => BlurType[key] === blurType) ||
        blurType,
    }
  },
  set(blur) {
    if (typeof blur.center !== 'undefined') {
      this._object.blur().setCenter(CGPointMake(blur.center.x, blur.center.y))
    }
    if (typeof blur.motionAngle !== 'undefined') {
      this._object.blur().setMotionAngle(blur.motionAngle)
    }
    if (typeof blur.radius !== 'undefined') {
      this._object.blur().setRadius(blur.radius)
    }
    if (typeof blur.type !== 'undefined') {
      this._object.blur().setType(BlurType[blur.type] || blur.type)
    }
  },
})

Style.FillType = FillType
Style.define('fills', {
  get() {
    const fills = toArray(this._object.fills())
    return fills.map(f => {
      const color = Color.from(f.color())
      const gradient = Gradient.from(f.gradient())

      const res = {
        fill:
          Object.keys(FillType).find(key => FillType[key] === f.fillType()) ||
          f.fillType(),
        enabled: !!f.enabled,
      }

      if (color) {
        res.color = color.toString()
      }

      if (gradient) {
        res.gradient = gradient.toJSON()
      }

      return res
    })
  },
  set(values) {
    const objects = []
    values.forEach(value => {
      const fill = MSStyleFill.new()
      const color =
        typeof value === 'string' ? Color.from(value) : Color.from(value.color)
      const gradient = Gradient.from(value.gradient)

      if (color) {
        fill.color = color._object
      }

      if (gradient) {
        fill.gradient = gradient._object
      }

      fill.fillType =
        FillType[value.fillType] || value.fillType || FillType.color

      if (typeof value.enabled === 'undefined') {
        fill.enabled = true
      } else {
        fill.enabled = value.enabled
      }

      objects.push(fill)
    })
    this._object.setFills(objects)
  },
})

Style.BorderPosition = BorderPosition
Style.define('borders', {
  get() {
    const borders = toArray(this._object.borders())
    return borders.map(f => {
      const color = Color.from(f.color())
      const gradient = Gradient.from(f.gradient())

      const res = {
        fillType:
          Object.keys(FillType).find(key => FillType[key] === f.fillType()) ||
          f.fillType(),
        position:
          Object.keys(BorderPosition).find(
            key => BorderPosition[key] === f.position()
          ) || f.position(),
        thickness: 0 + f.thickness(),
        enabled: !!f.enabled,
      }

      if (color) {
        res.color = color.toString()
      }

      if (gradient) {
        res.gradient = gradient.toJSON()
      }

      return res
    })
  },
  set(values) {
    const objects = []
    values.forEach(value => {
      const border = MSStyleBorder.new()
      const color =
        typeof value === 'string' ? Color.from(value) : Color.from(value.color)
      const gradient = Gradient.from(value.gradient)

      if (color) {
        border.color = color._object
      }

      if (gradient) {
        border.gradient = gradient._object
      }

      if (value.thickness) {
        border.thickness = value.thickness
      }

      if (value.position) {
        border.position = BorderPosition[value.position] || value.position
      }

      border.fillType =
        FillType[value.fillType] || value.fillType || FillType.color

      if (typeof value.enabled === 'undefined') {
        border.enabled = true
      } else {
        border.enabled = value.enabled
      }
      objects.push(border)
    })
    this._object.setBorders(objects)
  },
})

Style.define('shadows', {
  get() {
    const shadows = toArray(this._object.shadows())
    return shadows.map(s => ({
      color: colorToString(s.color()),
      blur: Number(s.blurRadius()),
      x: Number(s.offsetX()),
      y: Number(s.offsetY()),
      spread: Number(s.spread()),
      enabled: !!s.enabled(),
    }))
  },
  set(values) {
    const objects = []
    values.forEach(value => {
      const shadow = MSStyleShadow.new()
      const color =
        typeof value === 'string' ? Color.from(value) : Color.from(value.color)
      if (color) {
        shadow.color = color._object
      }
      if (value.blur) {
        shadow.blur = value.blur
      }
      if (value.x) {
        shadow.offsetX = value.x
      }
      if (value.y) {
        shadow.offsetY = value.y
      }
      if (value.spread) {
        shadow.spread = value.spread
      }

      if (typeof value.enabled === 'undefined') {
        shadow.enabled = true
      } else {
        shadow.enabled = value.enabled
      }

      objects.push(shadow)
    })
    this._object.setShadows(objects)
  },
})

Style.define('innerShadows', {
  get() {
    const shadows = toArray(this._object.innerShadows())
    return shadows.map(s => ({
      color: colorToString(s.color()),
      blur: Number(s.blurRadius()),
      x: Number(s.offsetX()),
      y: Number(s.offsetY()),
      spread: Number(s.spread()),
      enabled: !!s.enabled(),
    }))
  },
  set(values) {
    const objects = []
    values.forEach(value => {
      const shadow = MSStyleInnerShadow.new()
      const color =
        typeof value === 'string' ? Color.from(value) : Color.from(value.color)
      if (color) {
        shadow.color = color._object
      }
      if (value.blur) {
        shadow.blur = value.blur
      }
      if (value.x) {
        shadow.offsetX = value.x
      }
      if (value.y) {
        shadow.offsetY = value.y
      }
      if (value.spread) {
        shadow.spread = value.spread
      }

      if (typeof value.enabled === 'undefined') {
        shadow.enabled = true
      } else {
        shadow.enabled = value.enabled
      }

      objects.push(shadow)
    })
    this._object.setInnerShadows(objects)
  },
})
