import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { toArray, isNativeObject } from '../utils'
import { GradientStop } from './GradientStop'
import { Point } from '../Point'
import { Types } from '../enums'

export const GradientType = {
  Linear: 0,
  Radial: 1,
  Angular: 2,
}

export class Gradient extends WrappedObject {
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

    return Gradient.fromNative(nativeGradient)
  }
}

Gradient.type = Types.Gradient
Gradient[DefinedPropertiesKey] = {}

Gradient.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object
  },
})

Gradient.define('gradientType', {
  get() {
    return (
      Object.keys(GradientType).find(
        key => GradientType[key] === this._object.gradientType()
      ) || this._object.gradientType()
    )
  },
  set(gradientType) {
    this._object.setGradientType(GradientType[gradientType] || gradientType)
  },
})

Gradient.define('from', {
  get() {
    const point = new Point(this._object.from().x, this._object.from().y)
    point._parent = this
    point._parentKey = 'from'
    return point
  },
  set(point) {
    this._object.setFrom(CGPointMake(point.x || 0.5, point.y || 0))
  },
})

Gradient.define('to', {
  get() {
    const point = new Point(this._object.to().x, this._object.to().y)
    point._parent = this
    point._parentKey = 'to'
    return point
  },
  set(point) {
    this._object.setFrom(CGPointMake(point.x || 0.5, point.y || 0))
  },
})

Gradient.define('stops', {
  get() {
    return toArray(this._object.stops()).map(
      GradientStop.from.bind(GradientStop)
    )
  },
  set(stops) {
    this._object.setStops(
      stops.map(GradientStop.from.bind(GradientStop)).map(g => g._object)
    )
  },
})
