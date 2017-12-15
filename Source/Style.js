import { WrappedObject, DefinedPropertiesKey } from './WrappedObject'
import { toArray } from './utils'

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
   * @param {MSStyle} style The underlying model object from Sketch.
   */
  constructor(style = {}) {
    if (!style.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      style.sketchObject = MSDefaultStyle.defaultStyle()
    }

    super(style)
  }

  /**
   * Given a string description of a color, return an MSColor.
   */
  static colorFromString(value) {
    const immutable = MSImmutableColor.colorWithSVGString_(value)
    return MSColor.alloc().initWithImmutableObject_(immutable)
  }

  /**
   * Given a MSColor, return string description of a color.
   */
  static colorToString(value) {
    function toHex(v) {
      // eslint-disable-next-line
      return (Math.round(v * 255) | (1 << 8)).toString(16).slice(1)
    }
    const red = toHex(value.red)
    const green = toHex(value.green)
    const blue = toHex(value.blue)
    const alpha = toHex(value.alpha)
    return `#${red}${green}${blue}${alpha}`
  }
}

Style[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }

Style.FillType = FillType
Style.define('fills', {
  get() {
    const fills = toArray(this._object.fills())
    return fills.map(f => ({
      color: Style.colorToString(f.color()),
      fill:
        Object.keys(FillType).find(key => FillType[key] === f.fillType()) ||
        f.fillType(),
    }))
  },
  set(values) {
    const objects = []
    values.forEach(value => {
      const fill = MSStyleFill.new()
      let color
      let fillType
      if (typeof value === 'string') {
        color = Style.colorFromString(value)
        fillType = FillType.color
      } else {
        color = Style.colorFromString(value.color)
        fillType = FillType[value.fillType] || value.fillType
      }
      fill.color = color
      fill.fillType = fillType
      fill.enabled = true

      objects.push(fill)
    })
    this._object.setFills_(objects)
  },
})

Style.BorderPosition = BorderPosition
Style.define('borders', {
  get() {
    const borders = toArray(this._object.borders())
    return borders.map(f => ({
      color: Style.colorToString(f.color()),
      fill:
        Object.keys(FillType).find(key => FillType[key] === f.fillType()) ||
        f.fillType(),
      position:
        Object.keys(BorderPosition).find(
          key => BorderPosition[key] === f.position()
        ) || f.position(),
      thickness: 0 + f.thickness(),
    }))
  },
  set(values) {
    const objects = []
    values.forEach(value => {
      const border = MSStyleBorder.new()
      let color
      let fillType
      if (typeof value === 'string') {
        color = Style.colorFromString(value)
        fillType = FillType.color
      } else {
        color = Style.colorFromString(value.color)
        fillType = FillType[value.fillType] || value.fillType
        if (value.thickness) {
          border.thickness = value.thickness
        }
        if (value.position) {
          border.position = BorderPosition[value.position] || value.position
        }
      }
      border.color = color
      border.fillType = fillType
      border.enabled = true

      objects.push(border)
    })
    this._object.setBorders_(objects)
  },
})
