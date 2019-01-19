import { isNativeObject } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Color, colorToString } from '../style/Color'

export class ColorAsset extends WrappedObject {
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

ColorAsset.define('name', {
  get() {
    return this._object.name()
  },
  set(name) {
    this._object.name = name
  },
})

ColorAsset.define('color', {
  get() {
    return colorToString(this._object.color())
  },
})
