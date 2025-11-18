import { isNativeObject } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Color, colorToString } from './Color'
import { Types } from '../enums'
import { Swatch } from '../assets'
import { isWrappedObject } from '../utils'

export class GradientStop extends WrappedObject {
  static from(object) {
    if (!object) {
      return undefined
    }
    if (isWrappedObject(object) && object.type === Types.GradientStop) {
      return object
    }
    let nativeStop
    if (isNativeObject(object)) {
      if (
        object.isKindOfClass(MSGradientStop) ||
        object.isKindOfClass(MSImmutableGradientStop)
      ) {
        nativeStop = object
      } else {
        throw new Error(
          `Cannot create a gradient from a ${String(object.class())}`
        )
      }
    } else {
      nativeStop = MSGradientStop.stopWithPosition_color(
        object.position || 0,
        typeof object.swatch !== 'undefined'
          ? Swatch.from(object.swatch).referencingColor ||
              Color.from(object.color || '#000000FF').toMSColor()
          : Color.from(object.color || '#000000FF').toMSColor()
      )
    }

    return GradientStop.fromNative(nativeStop)
  }
}

GradientStop.type = Types.GradientStop
GradientStop[DefinedPropertiesKey] = {}

GradientStop.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object
  },
})

GradientStop.define('position', {
  get() {
    return Number(this._object.position())
  },
  set(position) {
    this._object.setPosition(position)
  },
})

GradientStop.define('color', {
  get() {
    return colorToString(this._object.color())
  },
  set(_color) {
    const color = Color.from(_color)
    this._object.color = color.toMSColor()
  },
})

GradientStop.define('swatch', {
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

GradientStop.define('alpha', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object.color().alpha()
  },
})
