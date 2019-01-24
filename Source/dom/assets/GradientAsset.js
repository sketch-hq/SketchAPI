import { isNativeObject } from 'util'
import { Gradient } from '../style/Gradient'
import { isWrappedObject } from '../utils'
import { Types } from '../enums'
import { Asset } from './Asset'
import { Factory } from '../Factory'
import { DefinedPropertiesKey } from '../WrappedObject'

export class GradientAsset extends Asset {
  /**
   * Create a ColorAsset from a varienty of objects
   * - A native MSGradientAsset
   * - An MSGradient
   * - An dictionary of Gradient properties. see Gradient
   *
   * To include a name with one of the gradient objects,
   * use a dictionary with `gradient` and `name`.
   */
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
    let name
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
GradientAsset[DefinedPropertiesKey] = { ...Asset[DefinedPropertiesKey] }
Factory.registerClass(GradientAsset, MSGradientAsset)

GradientAsset.define('gradient', {
  get() {
    return Gradient.from(this._object.gradient())
  },
})
