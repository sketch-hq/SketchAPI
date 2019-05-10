import { isNativeObject } from 'util'
import { Color, colorToString } from '../style/Color'
import { Factory } from '../Factory'
import { DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'
import { Asset } from './Asset'

export class ColorAsset extends Asset {
  /**
   * Create a ColorAsset from a varienty of objects
   * - A native MSColorAsset
   * - An MSColor
   * - An MSImmutableColor
   * - An NSColor
   * - A hex color string
   *
   * To include a name with one of the color objects,
   * use a dictionary with `color` and `name`.
   */
  static from(object) {
    if (!object) {
      return undefined
    }

    let nativeAsset

    if (isNativeObject(object)) {
      if (object.isKindOfClass(MSColorAsset)) {
        nativeAsset = object
      } else {
        try {
          const c = Color.from(object).toMSColor()
          nativeAsset = MSColorAsset.alloc().initWithAsset_name(c, null)
        } catch {
          throw new Error(
            `Cannot create a color asset from a ${String(object.class())}`
          )
        }
      }
    } else if (typeof object == 'object') {
      const { color, name } = object
      const c = Color.from(color).toMSColor()
      nativeAsset = MSColorAsset.alloc().initWithAsset_name(c, name || null)
    } else {
      const c = Color.from(object).toMSColor()
      nativeAsset = MSColorAsset.alloc().initWithAsset_name(c, null)
    }

    return ColorAsset.fromNative(nativeAsset)
  }
}

ColorAsset.type = Types.ColorAsset
ColorAsset[DefinedPropertiesKey] = { ...Asset[DefinedPropertiesKey] }
Factory.registerClass(ColorAsset, MSColorAsset)
Factory.registerClass(ColorAsset, MSImmutableColorAsset)

ColorAsset.define('color', {
  get() {
    return colorToString(this._object.color())
  },
})
