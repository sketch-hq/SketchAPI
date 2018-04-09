import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Point } from '../Point'
import { Types } from '../enums'

export const BlurType = {
  Gaussian: 0,
  Motion: 1,
  Zoom: 2,
  Background: 3,
}

export class Blur extends WrappedObject {
  static updateNative(s, blur) {
    if (typeof blur.center !== 'undefined') {
      s.setCenter(CGPointMake(blur.center.x, blur.center.y))
    }
    if (typeof blur.motionAngle !== 'undefined') {
      s.setMotionAngle(blur.motionAngle)
    }
    if (typeof blur.radius !== 'undefined') {
      s.setRadius(blur.radius)
    }
    if (typeof blur.blurType !== 'undefined') {
      s.setType(BlurType[blur.blurType] || blur.blurType)
    }
    if (typeof blur.enabled !== 'undefined') {
      s.enabled = blur.enabled // eslint-disable-line
    }
  }
}

Blur.type = Types.Blur
Blur[DefinedPropertiesKey] = {}

Blur.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object
  },
})

Blur.define('center', {
  get() {
    const center = new Point(this._object.center().x, this._object.center().y)
    center._parent = this
    center._parentKey = 'center'
    return center
  },
  set(center) {
    this._object.setCenter(CGPointMake(center.x, center.y))
  },
})

Blur.define('motionAngle', {
  get() {
    return Number(this._object.motionAngle())
  },
  set(angle) {
    this._object.setMotionAngle(angle)
  },
})

Blur.define('radius', {
  get() {
    return Number(this._object.radius())
  },
  set(radius) {
    this._object.setRadius(radius)
  },
})

Blur.define('enabled', {
  get() {
    return !!this._object.enabled
  },
  set(enabled) {
    this._object.enabled = enabled
  },
})

Blur.define('blurType', {
  get() {
    const blurType = this._object.type()
    return (
      Object.keys(BlurType).find(key => BlurType[key] === blurType) || blurType
    )
  },
  set(type) {
    this._object.setType(BlurType[type] || type)
  },
})
