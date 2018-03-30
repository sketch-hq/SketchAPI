import { Color, colorToString } from './Color'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Gradient } from './Gradient'
import { FillType } from './Fill'
import { Types } from '../enums'

export const BorderPosition = {
  Center: 0,
  Inside: 1,
  Outside: 2,
  Both: 3, // This is Sketch internal option - don't use it.
}

export class Border extends WrappedObject {
  static toNative(value) {
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
    return border
  }
}

Border.type = Types.Border
Border[DefinedPropertiesKey] = {}

Border.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object
  },
})

Border.define('fillType', {
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

Border.define('position', {
  get() {
    return (
      Object.keys(BorderPosition).find(
        key => BorderPosition[key] === this._object.position()
      ) || this._object.position()
    )
  },
  set(position) {
    this._object.position = BorderPosition[position] || position
  },
})

Border.define('color', {
  get() {
    return colorToString(this._object.color())
  },
  set(_color) {
    const color = Color.from(_color)
    this._object.color = color._object
  },
})

Border.define('gradient', {
  get() {
    return Gradient.from(this._object.gradient())
  },
  set(_gradient) {
    const gradient = Gradient.from(_gradient)
    this._object.gradient = gradient
  },
})

Border.define('thickness', {
  get() {
    return Number(this._object.thickness())
  },
  set(thickness) {
    this._object.thickness = thickness
  },
})

Border.define('enabled', {
  get() {
    return !!this._object.enabled
  },
  set(enabled) {
    this._object.enabled = enabled
  },
})
