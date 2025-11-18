import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { isWrappedObject } from '../utils'
import { isNativeObject } from 'util'
import { Point } from '../models/Point'
import { Types } from '../enums'
import { Gradient } from './Gradient'

const BlurTypeMap = {
  Gaussian: 0,
  Motion: 1,
  Zoom: 2,
  Background: 3,
  Glass: 4,
}

export const BlurType = {
  Gaussian: 'Gaussian',
  Motion: 'Motion',
  Zoom: 'Zoom',
  Background: 'Background',
  Glass: 'Glass',
}

const DEFAULT_BLUR = {
  center: { x: 0.5, y: 0.5 },
  motionAngle: 0,
  radius: 10,
  enabled: false,
  blurType: BlurType.Gaussian,
  saturation: 1,
}

export class Blur extends WrappedObject {
  static toNative(value) {
    if (isNativeObject(value)) {
      return value
    }
    if (isWrappedObject(value)) {
      return value.sketchObject
    }
    const nativeBlur = MSStyleBlur.new()
    this.updateNative(nativeBlur, value)
    return nativeBlur
  }

  static updateNative(nativeBlur, blur) {
    const blurWithDefault = Object.assign({}, DEFAULT_BLUR, blur)
    if (typeof blurWithDefault.center !== 'undefined') {
      nativeBlur.setCenter(
        CGPointMake(blurWithDefault.center.x, blurWithDefault.center.y)
      )
    }
    if (typeof blurWithDefault.motionAngle !== 'undefined') {
      nativeBlur.setMotionAngle(blurWithDefault.motionAngle)
    }
    if (typeof blurWithDefault.radius !== 'undefined') {
      nativeBlur.setRadius(blurWithDefault.radius)
    }
    if (typeof blurWithDefault.saturation !== 'undefined') {
      nativeBlur.setSaturation(blurWithDefault.saturation)
    }
    if (typeof blurWithDefault.blurType !== 'undefined') {
      const blurType = BlurTypeMap[blurWithDefault.blurType]
      nativeBlur.setType(
        typeof blurType !== 'undefined' ? blurType : blurWithDefault.blurType
      )
    }
    if (typeof blurWithDefault.enabled !== 'undefined') {
      nativeBlur.isEnabled = blurWithDefault.enabled // eslint-disable-line
    }
    if (typeof blurWithDefault.progressive !== 'undefined') {
      nativeBlur.setIsProgressive(blurWithDefault.progressive)
    }
    if (typeof blurWithDefault.gradient !== 'undefined') {
      nativeBlur.setGradient(
        Gradient.from(blurWithDefault.gradient).sketchObject
      )
    }
    if (typeof blurWithDefault.brightness !== 'undefined') {
      nativeBlur.setBrightness(blurWithDefault.brightness)
    }
    if (typeof blurWithDefault.distortion !== 'undefined') {
      nativeBlur.setDistortion(blurWithDefault.distortion)
    }
    if (typeof blurWithDefault.depth !== 'undefined') {
      nativeBlur.setDepth(blurWithDefault.depth)
    }
    if (typeof blurWithDefault.chromaticAberration !== 'undefined') {
      nativeBlur.setChromaticAberrationMultiplier(
        blurWithDefault.chromaticAberration
      )
    }
    if (typeof blurWithDefault.hasSpecularHighlights !== 'undefined') {
      nativeBlur.setSkipLightingEffects(!blurWithDefault.hasSpecularHighlights)
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

Blur.define('saturation', {
  get() {
    return Number(this._object.saturation())
  },
  set(saturation) {
    saturation = Math.max(0, Math.min(2, Number(saturation))) // Clamp to [0, 2]
    this._object.setSaturation(saturation)
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

Blur.define('progressive', {
  get() {
    return Boolean(this._object.isProgressive())
  },
  set(progressive) {
    this._object.setIsProgressive(progressive)
  },
})

Blur.define('gradient', {
  get() {
    const gradient = this._object.gradient()
    if (gradient) {
      return Gradient.from(gradient)
    }
    return undefined
  },
  set(gradient) {
    this._object.setGradient(Gradient.from(gradient).sketchObject)
  },
})

// MARK: - Glass

Blur.define('isCustomGlass', {
  get() {
    return true
  },
  set() {
    console.warn(
      'Blur.isCustomGlass is always `true` in Sketch 2025.3 and later.'
    )
  },
})

Blur.define('brightness', {
  get() {
    return Number(this._object.brightness())
  },
  set(brightness) {
    brightness = Math.max(0, Math.min(2, Number(brightness))) // Clamp to [0, 2]
    this._object.setBrightness(brightness)
  },
})

Blur.define('distortion', {
  get() {
    return Number(this._object.distortion())
  },
  set(distortion) {
    distortion = Math.max(0, Math.min(1, Number(distortion))) // Clamp to [0, 1]
    this._object.setDistortion(distortion)
  },
})

Blur.define('depth', {
  get() {
    return Number(this._object.depth())
  },
  set(depth) {
    depth = Math.max(0, Math.min(1, Number(depth))) // Clamp to [0, 1]
    this._object.setDepth(depth)
  },
})

Blur.define('chromaticAberration', {
  get() {
    return Number(this._object.chromaticAberrationMultiplier())
  },
  set(multiplier) {
    multiplier = Math.max(0, Math.min(1, Number(multiplier))) // Clamp to [0, 1]
    this._object.setChromaticAberrationMultiplier(multiplier)
  },
})

Blur.define('hasSpecularHighlights', {
  get() {
    return Boolean(!this._object.skipLightingEffects())
  },
  set(hasSpecularHighlight) {
    this._object.setSkipLightingEffects(!hasSpecularHighlight)
  },
})
