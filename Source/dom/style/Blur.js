import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Point } from '../models/Point'
import { Types } from '../enums'

const BlurTypeMap = {
  Gaussian: 0,
  Motion: 1,
  Zoom: 2,
  Background: 3,
}

export const BlurType = {
  Gaussian: 'Gaussian',
  Motion: 'Motion',
  Zoom: 'Zoom',
  Background: 'Background',
}

const DEFAULT_BLUR = {
  center: { x: 0.5, y: 0.5 },
  motionAngle: 0,
  radius: 10,
  enabled: false,
  blurType: BlurType.Gaussian,
}

export class Blur extends WrappedObject {
  static updateNative(s, blur) {
    const blurWithDefault = Object.assign({}, DEFAULT_BLUR, blur)
    if (typeof blurWithDefault.center !== 'undefined') {
      s.setCenter(
        CGPointMake(blurWithDefault.center.x, blurWithDefault.center.y)
      )
    }
    if (typeof blurWithDefault.motionAngle !== 'undefined') {
      s.setMotionAngle(blurWithDefault.motionAngle)
    }
    if (typeof blurWithDefault.radius !== 'undefined') {
      s.setRadius(blurWithDefault.radius)
    }
    if (typeof blurWithDefault.blurType !== 'undefined') {
      const blurType = BlurTypeMap[blurWithDefault.blurType]
      s.setType(
        typeof blurType !== 'undefined' ? blurType : blurWithDefault.blurType
      )
    }
    if (typeof blurWithDefault.enabled !== 'undefined') {
      s.isEnabled = blurWithDefault.enabled // eslint-disable-line
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
    return !!this._object.isEnabled()
  },
  set(enabled) {
    this._object.isEnabled = enabled
  },
})

Blur.define('blurType', {
  get() {
    const blurType = this._object.type()
    return (
      Object.keys(BlurTypeMap).find((key) => BlurTypeMap[key] === blurType) ||
      blurType
    )
  },
  set(type) {
    const blurType = BlurTypeMap[type]
    this._object.setType(typeof blurType !== 'undefined' ? blurType : type)
  },
})
