import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { toArray } from '../utils'
import { Types } from '../enums'
import { Gradient, GradientType } from './Gradient'
import { Color, colorFromString, colorToString } from './Color'

export const FillType = {
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
