import { Color, colorToString } from './Color'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Gradient } from './Gradient'
import { Types } from '../enums'

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

export class Fill extends WrappedObject {
  static toNative(value) {
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

    fill.fillType = FillType[value.fillType] || value.fillType || FillType.color

    if (typeof value.enabled === 'undefined') {
      fill.isEnabled = true
    } else {
      fill.isEnabled = value.enabled
    }
    return fill
  }
}

Fill.type = Types.Fill
Fill[DefinedPropertiesKey] = {}

Fill.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object
  },
})

Fill.define('fill', {
  get() {
    return (
      Object.keys(FillType).find(
        key => FillType[key] === this._object.fillType()
      ) || this._object.fillType()
    )
  },
  set(fillType) {
    this._object.fillType = FillType[fillType] || fillType || FillType.color
  },
})

Fill.define('color', {
  get() {
    return colorToString(this._object.color())
  },
  set(_color) {
    const color = Color.from(_color)
    this._object.color = color._object
  },
})

Fill.define('gradient', {
  get() {
    return Gradient.from(this._object.gradient())
  },
  set(_gradient) {
    const gradient = Gradient.from(_gradient)
    this._object.gradient = gradient
  },
})

Fill.define('enabled', {
  get() {
    return !!this._object.isEnabled()
  },
  set(enabled) {
    this._object.isEnabled = enabled
  },
})
