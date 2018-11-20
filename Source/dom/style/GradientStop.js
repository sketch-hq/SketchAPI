import { isNativeObject } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Color, colorToString } from './Color'
import { Types } from '../enums'

export class GradientStop extends WrappedObject {
  static from(object) {
    if (!object) {
      return undefined
    }
    let nativeStop
    if (isNativeObject(object)) {
      const className = String(object.class())
      if (className === 'MSGradientStop') {
        nativeStop = object
      } else {
        throw new Error(`Cannot create a gradient from a ${className}`)
      }
    } else {
      nativeStop = MSGradientStop.stopWithPosition_color(
        object.position || 0,
        Color.from(object.color || '#000000FF')._object
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
    this._object.color = color._object
  },
})
