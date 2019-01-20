import { isNativeObject } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Color, colorToString } from '../style/Color'
import { Gradient } from '../style/Gradient'
import { isWrappedObject } from '../utils'

export class Asset extends WrappedObject {}

Asset.define('name', {
  get() {
    const name = this._object.name()
    if (name) {
      return String(name)
    }
    return null
  },
  set(name) {
    this._object.name = name
  },
})

export class ColorAsset extends Asset {
  static from(object) {
    if (!object) {
      return undefined
    }

    let nativeAsset

    if (isNativeObject(object)) {
      const className = String(object.class())
      if (className === 'MSColorAsset') {
        nativeAsset = object
      } else {
        throw new Error(`Cannot create a color asset from a ${className}`)
      }
    } else if (typeof object == 'object') {
      const { color, name } = object
      const c = Color.from(color)._object.newMutableCounterpart()
      nativeAsset = MSColorAsset.alloc().initWithAsset_name(c, name || null)
    } else {
      const c = Color.from(object)._object.newMutableCounterpart()
      nativeAsset = MSColorAsset.alloc().initWithAsset_name(c, null)
    }

    return ColorAsset.fromNative(nativeAsset)
  }
}

ColorAsset.type = Types.ColorAsset
ColorAsset[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(ColorAsset, MSColorAsset)
delete ColorAsset[DefinedPropertiesKey].id

ColorAsset.define('color', {
  get() {
    return colorToString(this._object.color())
  },
})

export class GradientAsset extends Asset {
  static from(object) {
    if (!object) {
      return undefined
    }

    if (isNativeObject(object)) {
      const className = String(object.class())
      if (className === 'MSGradientAsset') {
        return GradientAsset.fromNative(object)
      }
      if (className === 'MSGradient') {
        const nativeAsset = MSGradientAsset.alloc().initWithAsset_name(
          object,
          null
        )
        return GradientAsset.fromNative(nativeAsset)
      }
      throw new Error(`Cannot create a color asset from a ${className}`)
    }

    let gradient
    let name = null
    if (isWrappedObject(object)) {
      gradient = object
    } else if (typeof object == 'object') {
      if (object.gradient != undefined) {
        ;({ gradient, name } = object)
        if (!isWrappedObject(gradient)) {
          gradient = Gradient.from(gradient)
        }
      } else {
        gradient = Gradient.from(object)
      }
    }

    if (!gradient) {
      throw new Error(`Cannot create a gradient asset without a gradient`)
    } else if (gradient.type !== 'Gradient') {
      throw new Error(`Cannot create a gradient asset from a ${gradient.type}`)
    }
    const nativeAsset = MSGradientAsset.alloc().initWithAsset_name(
      gradient._object,
      name || null
    )
    return GradientAsset.fromNative(nativeAsset)
  }
}

GradientAsset.type = Types.GradientAsset
GradientAsset[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(GradientAsset, MSGradientAsset)
delete GradientAsset[DefinedPropertiesKey].id

GradientAsset.define('gradient', {
  get() {
    return Gradient.from(this._object.gradient())
  },
})
