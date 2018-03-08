import { isNativeObject } from '../utils'
import { Color, colorToString } from './Color'

export class GradientStop {
  constructor(nativeStop) {
    this._object = nativeStop
  }

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
        Color.from(object.color)._object
      )
    }

    return new GradientStop(nativeStop)
  }

  toJSON() {
    return {
      position: Number(this._object.position()),
      color: colorToString(this._object.color()),
    }
  }
}
