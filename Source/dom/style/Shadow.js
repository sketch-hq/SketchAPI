import { isNativeObject } from 'util'
import { Color, colorToString } from './Color'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'
import { isWrappedObject, parseEnumValue } from '../utils'
import { BlendingModeMap } from '../models/BlendingMode'
import { Swatch } from '../assets'
import { StylePartType } from './StylePartType'

export class Shadow extends WrappedObject {
  static toNativeDropShadow(value, parentStyle) {
    if (isNativeObject(value)) {
      return value
    }
    if (isWrappedObject(value)) {
      return value.sketchObject
    }
    const nativeShadow = parentStyle._object.defaultStylePartOfType(
      StylePartType.Shadow
    )
    return this.updateNative(nativeShadow, value)
  }

  static toNativeInnerShadow(value, parentStyle) {
    if (isNativeObject(value)) {
      return value
    }
    if (isWrappedObject(value)) {
      return value.sketchObject
    }
    const nativeShadow = parentStyle._object.defaultStylePartOfType(
      StylePartType.InnerShadow
    )
    return this.updateNative(nativeShadow, value)
  }
  static updateNative(nativeShadow, value) {
    const color =
      typeof value === 'string' ? Color.from(value) : Color.from(value.color)
    if (color) {
      nativeShadow.color = color.toMSColor()
    }
    // A swatch property takes precedence over a plain color
    if (value.swatch) {
      const swatch = Swatch.from(value.swatch)
      if (swatch) {
        nativeShadow.color = swatch.referencingColor
      }
    }
    if (typeof value.blur !== 'undefined') {
      nativeShadow.blurRadius = value.blur
    }
    if (typeof value.x !== 'undefined') {
      nativeShadow.offsetX = value.x
    }
    if (typeof value.y !== 'undefined') {
      nativeShadow.offsetY = value.y
    }
    if (typeof value.spread !== 'undefined') {
      nativeShadow.spread = value.spread
    }
    if (typeof value.enabled === 'undefined') {
      nativeShadow.isEnabled = true
    } else {
      nativeShadow.isEnabled = value.enabled
    }
    if (typeof value.isInnerShadow !== 'undefined') {
      nativeShadow.isInnerShadow = Boolean(value.isInnerShadow)
    }

    if (value.blendingMode) {
      const blendingMode = parseEnumValue(
        value.blendingMode,
        BlendingModeMap,
        'Shadow.blendingMode'
      )
      if (blendingMode !== undefined) {
        nativeShadow.contextSettings().setBlendMode(blendingMode)
      }
    }

    return nativeShadow
  }
}

Shadow.type = Types.Shadow
Shadow[DefinedPropertiesKey] = {}

Shadow.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object
  },
})

Shadow.define('blur', {
  get() {
    return Number(this._object.blurRadius())
  },
  set(x) {
    this._object.blurRadius = x
  },
})

Shadow.define('x', {
  get() {
    return Number(this._object.offsetX())
  },
  set(x) {
    this._object.offsetX = x
  },
})

Shadow.define('y', {
  get() {
    return Number(this._object.offsetY())
  },
  set(x) {
    this._object.offsetY = x
  },
})

Shadow.define('spread', {
  get() {
    return Number(this._object.spread())
  },
  set(x) {
    this._object.spread = x
  },
})

Shadow.define('color', {
  get() {
    return colorToString(this._object.color())
  },
  set(_color) {
    const color = Color.from(_color)
    this._object.color = color.toMSColor()
  },
})

Shadow.define('swatch', {
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

Shadow.define('enabled', {
  get() {
    return !!this._object.isEnabled()
  },
  set(enabled) {
    this._object.isEnabled = enabled
  },
})

Shadow.define('isInnerShadow', {
  get() {
    return this._object.isInnerShadow()
  },
  set(value) {
    this._object.setIsInnerShadow(value)
  },
})

Shadow.define('blendingMode', {
  get() {
    const mode = this._object.contextSettings().blendMode()
    return (
      Object.keys(BlendingModeMap).find(
        (key) => BlendingModeMap[key] === mode
      ) || mode
    )
  },
  set(mode) {
    const blendingMode = parseEnumValue(
      mode,
      BlendingModeMap,
      'Shadow.blendingMode'
    )
    if (blendingMode !== undefined) {
      this._object.contextSettings().setBlendMode(blendingMode)
    }
  },
})
