import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { isWrappedObject, parseEnumValue } from '../utils'
import { isNativeObject } from 'util'
import { Point } from '../models/Point'
import { Types } from '../enums'
import { Gradient } from './Gradient'
import { StylePartType } from './StylePartType'

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

export class Blur extends WrappedObject {
  static toNative(value, parentStyle) {
    if (isNativeObject(value)) {
      return value
    }
    if (isWrappedObject(value)) {
      return value.sketchObject
    }
    const nativeBlur = parentStyle._object.defaultStylePartOfType(
      StylePartType.Blur
    )
    this.updateNative(nativeBlur, value)
    return nativeBlur
  }

  static updateNative(nativeBlur, blur) {
    if (typeof blur.center !== 'undefined') {
      nativeBlur.setCenter(CGPointMake(blur.center.x, blur.center.y))
    }
    if (typeof blur.motionAngle !== 'undefined') {
      nativeBlur.setMotionAngle(blur.motionAngle)
    }
    if (typeof blur.radius !== 'undefined') {
      nativeBlur.setRadius(blur.radius)
    }
    if (typeof blur.saturation !== 'undefined') {
      nativeBlur.setSaturation(blur.saturation)
    }
    if (typeof blur.blurType !== 'undefined') {
      const blurType = parseEnumValue(
        blur.blurType,
        BlurTypeMap,
        'Blur.blurType'
      )
      if (blurType !== undefined) {
        nativeBlur.setType(blurType)
      }
    }
    if (typeof blur.enabled !== 'undefined') {
      nativeBlur.isEnabled = blur.enabled // eslint-disable-line
    }
    if (typeof blur.progressive !== 'undefined') {
      nativeBlur.setIsProgressive(blur.progressive)
    }
    if (typeof blur.gradient !== 'undefined') {
      nativeBlur.setGradient(Gradient.from(blur.gradient).sketchObject)
    }
    if (typeof blur.brightness !== 'undefined') {
      nativeBlur.setBrightness(blur.brightness)
    }
    if (typeof blur.distortion !== 'undefined') {
      nativeBlur.setDistortion(blur.distortion)
    }
    if (typeof blur.depth !== 'undefined') {
      nativeBlur.setDepth(blur.depth)
    }
    if (typeof blur.chromaticAberration !== 'undefined') {
      nativeBlur.setChromaticAberrationMultiplier(blur.chromaticAberration)
    }
    if (typeof blur.hasSpecularHighlights !== 'undefined') {
      nativeBlur.setSkipLightingEffects(!blur.hasSpecularHighlights)
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
    const blurType = parseEnumValue(type, BlurTypeMap, 'Blur.blurType')
    if (blurType !== undefined) {
      this._object.setType(blurType)
    }
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
