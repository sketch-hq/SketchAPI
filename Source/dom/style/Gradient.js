import { toArray, isNativeObject } from '../utils'
import { GradientStop } from './GradientStop'

export const GradientType = {
  Linear: 0,
  Radial: 1,
  Angular: 2,
}

export class Gradient {
  constructor(nativeGradient) {
    this._object = nativeGradient
  }

  static from(object) {
    if (!object) {
      return undefined
    }
    let nativeGradient
    if (isNativeObject(object)) {
      const className = String(object.class())
      if (className === 'MSGradient') {
        nativeGradient = object
      } else {
        throw new Error(`Cannot create a gradient from a ${className}`)
      }
    } else {
      nativeGradient = MSGradient.alloc().initBlankGradient()
      if (object.gradientType) {
        nativeGradient.setGradientType(
          GradientType[object.gradientType] || object.gradientType
        )
      }
      if (object.from) {
        nativeGradient.setFrom(
          CGPointMake(object.from.x || 0.5, object.from.y || 0)
        )
      }
      if (object.to) {
        nativeGradient.setTo(CGPointMake(object.to.x || 0.5, object.to.y || 1))
      }
      if (object.stops) {
        nativeGradient.setStops(
          object.stops.map(GradientStop.from).map(g => g._object)
        )
      }
    }

    return new Gradient(nativeGradient)
  }

  toJSON() {
    return {
      gradientType:
        Object.keys(GradientType).find(
          key => GradientType[key] === this._object.gradientType()
        ) || this._object.gradientType(),
      from: {
        x: Number(this._object.from().x),
        y: Number(this._object.from().y),
      },
      to: {
        x: Number(this._object.to().x),
        y: Number(this._object.to().y),
      },
      stops: toArray(this._object.stops())
        .map(GradientStop.from)
        .map(g => g.toJSON()),
    }
  }
}
