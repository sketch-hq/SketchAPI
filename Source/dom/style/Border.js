import { isNativeObject } from 'util'
import { Color, colorToString } from './Color'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Gradient } from './Gradient'
import { FillTypeMap } from './Fill'
import { Types } from '../enums'
import { isWrappedObject } from '../utils'
import { BlendingModeMap } from '../models/BlendingMode'
import { Swatch } from '../assets'
import { BorderSides } from './BorderSides'

const BorderPositionMap = {
  Center: 0,
  Inside: 1,
  Outside: 2,
  Both: 3, // This is Sketch internal option - don't use it.
}

export const BorderPosition = {
  Center: 'Center',
  Inside: 'Inside',
  Outside: 'Outside',
  Both: 'Both', // This is Sketch internal option - don't use it.
}

export class Border extends WrappedObject {
  static toNative(value) {
    if (isNativeObject(value)) {
      return value
    }
    if (isWrappedObject(value)) {
      return value.sketchObject
    }
    const border = MSStyleBorder.new()
    const color =
      typeof value === 'string' ? Color.from(value) : Color.from(value.color)
    const gradient = Gradient.from(value.gradient)

    if (color) {
      border.color = color.toMSColor()
    }

    // A swatch property takes precedence over a plain color
    if (value.swatch) {
      const swatch = Swatch.from(value.swatch)
      if (swatch) {
        border.color = swatch.referencingColor
      }
    }

    if (gradient) {
      border.gradient = gradient._object
    }

    if (typeof value.thickness !== 'undefined') {
      border.thickness = value.thickness
    }

    if (typeof value.position !== 'undefined') {
      const position = BorderPositionMap[value.position]
      border.position =
        typeof position !== 'undefined' ? position : value.position
    }

    const fillType = FillTypeMap[value.fillType]
    border.fillType =
      typeof fillType !== 'undefined'
        ? fillType
        : value.fillType || FillTypeMap.Color

    if (typeof value.enabled === 'undefined') {
      border.isEnabled = true
    } else {
      border.isEnabled = value.enabled
    }

    if (value.blendingMode) {
      const blendingMode = BlendingModeMap[value.blendingMode]
      if (typeof blendingMode !== 'undefined') {
        border.contextSettings().setBlendMode(blendingMode)
      }
    }

    if (value.sides && typeof value.sides === 'object') {
      const sides = new BorderSides({
        border: Border.fromNative(border),
      })
      sides.update(value.sides)
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
      Object.keys(FillTypeMap).find(
        (key) => FillTypeMap[key] === this._object.fillType()
      ) || this._object.fillType()
    )
  },
  set(fillType) {
    const fillTypeMapped = FillTypeMap[fillType]
    this._object.fillType =
      typeof fillTypeMapped !== 'undefined'
        ? fillTypeMapped
        : fillType || FillTypeMap.Color
  },
})

Border.define('position', {
  get() {
    return (
      Object.keys(BorderPositionMap).find(
        (key) => BorderPositionMap[key] === this._object.position()
      ) || this._object.position()
    )
  },
  set(position) {
    const positionMapped = BorderPositionMap[position]
    this._object.position =
      typeof positionMapped !== 'undefined' ? positionMapped : position
  },
})

Border.define('color', {
  get() {
    return colorToString(this._object.color())
  },
  set(_color) {
    const color = Color.from(_color)
    this._object.color = color.toMSColor()
  },
})

Border.define('swatch', {
  get() {
    const swatchID = this._object.color?.()?.swatchID?.()
    if (!swatchID) {
      return undefined
    }
    return Swatch.instantiate(swatchID, this)
  },
  set(newSwatch) {
    this.color = Swatch.from(newSwatch).referencingColor
  },
})

Border.define('gradient', {
  get() {
    return Gradient.from(this._object.gradient())
  },
  set(gradient) {
    this._object.setGradient(Gradient.from(gradient).sketchObject)
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
    return !!this._object.isEnabled()
  },
  set(enabled) {
    this._object.isEnabled = enabled
  },
})

Border.define('blendingMode', {
  get() {
    const mode = this._object.contextSettings().blendMode()
    return (
      Object.keys(BlendingModeMap).find(
        (key) => BlendingModeMap[key] === mode
      ) || mode
    )
  },
  set(mode) {
    const blendingMode = BlendingModeMap[mode]
    this._object
      .contextSettings()
      .setBlendMode(typeof blendingMode !== 'undefined' ? blendingMode : mode)
  },
})

Border.define(`hasIndividualSides`, {
  get() {
    return !!this._object.sides()
  },
})

// N.B. `Border.defineObject('sides', ...)` doesn't work here because we want
// users to be able to nullify the sides via `border.sides = null`
Border.define(`sides`, {
  get() {
    return new BorderSides({ border: this })
  },
  set(newValue) {
    // Make sure to reset all existing sides prior to assigning new ones
    this._object.setSides(null)
    if (!newValue || typeof newValue !== 'object') {
      return
    }
    const newSides = new BorderSides({ border: this })
    newSides.update(newValue)
  },
})
