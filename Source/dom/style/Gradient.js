import { toArray, isNativeObject } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { GradientStop } from './GradientStop'
import { Point } from '../models/Point'
import { Types } from '../enums'
import { parseEnumValue } from '../utils'

const GradientTypeMap = {
  Linear: 0,
  Radial: 1,
  Angular: 2,
}

export const GradientType = {
  Linear: 'Linear',
  Radial: 'Radial',
  Angular: 'Angular',
}

const GradientColorInterpolationMap = {
  RGB: 0,
  Oklab: 1,
  Oklch: 2,
}

export const GradientColorInterpolation = {
  RGB: 'RGB',
  Oklab: 'Oklab',
  Oklch: 'Oklch',
}

export class Gradient extends WrappedObject {
  static from(object) {
    if (!object) {
      return undefined
    }
    let nativeGradient
    if (isNativeObject(object)) {
      if (
        object.isKindOfClass(MSGradient) ||
        object.isKindOfClass(MSImmutableGradient)
      ) {
        nativeGradient = object
      } else {
        throw new Error(
          `Cannot create a gradient from a ${String(object.class())}`
        )
      }
    } else {
      nativeGradient = MSGradient.alloc().initBlankGradient()
      if (typeof object.gradientType !== 'undefined') {
        const type = parseEnumValue(
          object.gradientType,
          GradientTypeMap,
          'Gradient.gradientType'
        )
        if (type !== undefined) {
          nativeGradient.setGradientType(type)
        }
      }
      if (object.from) {
        nativeGradient.setFrom(
          CGPointMake(
            typeof object.from.x !== 'undefined' ? object.from.x : 0.5,
            typeof object.from.y !== 'undefined' ? object.from.y : 0
          )
        )
      }
      if (typeof object.to !== 'undefined') {
        nativeGradient.setTo(
          CGPointMake(
            typeof object.to.x !== 'undefined' ? object.to.x : 0.5,
            typeof object.to.y !== 'undefined' ? object.to.y : 1
          )
        )
      }
      if (typeof object.aspectRatio !== 'undefined') {
        nativeGradient.setElipseLength(object.aspectRatio)
      }
      if (object.stops) {
        nativeGradient.setStops(
          object.stops.map(GradientStop.from).map((g) => g._object)
        )
      }
      if (typeof object.colorInterpolation !== 'undefined') {
        const interpolation = parseEnumValue(
          object.colorInterpolation,
          GradientColorInterpolationMap,
          'Gradient.colorInterpolation'
        )
        if (interpolation !== undefined) {
          nativeGradient.setColorInterpolation(interpolation)
        }
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
      Object.keys(GradientTypeMap).find(
        (key) => GradientTypeMap[key] === this._object.gradientType()
      ) || this._object.gradientType()
    )
  },
  set(gradientType) {
    const type = parseEnumValue(
      gradientType,
      GradientTypeMap,
      'Gradient.gradientType'
    )
    if (type !== undefined) {
      this._object.setGradientType(type)
    }
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
    this._object.setFrom(
      CGPointMake(
        point.x !== 'undefined' ? point.x : 0.5,
        point.y !== 'undefined' ? point.y : 0
      )
    )
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
    this._object.setTo(
      CGPointMake(
        point.x !== 'undefined' ? point.x : 0.5,
        point.y !== 'undefined' ? point.y : 1
      )
    )
  },
})

Gradient.define('aspectRatio', {
  get() {
    return Number(this._object.elipseLength())
  },
  set(length) {
    this._object.setElipseLength(length)
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
      stops.map(GradientStop.from.bind(GradientStop)).map((g) => g._object)
    )
  },
})

Gradient.define('colorInterpolation', {
  get() {
    return (
      Object.keys(GradientColorInterpolationMap).find(
        (key) =>
          GradientColorInterpolationMap[key] ===
          this._object.colorInterpolation()
      ) || this._object.colorInterpolation()
    )
  },
  set(colorInterpolation) {
    const interpolation = parseEnumValue(
      colorInterpolation,
      GradientColorInterpolationMap,
      'Gradient.colorInterpolation'
    )
    if (interpolation !== undefined) {
      this._object.setColorInterpolation(interpolation)
    }
  },
})
