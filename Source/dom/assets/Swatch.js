import { isNativeObject } from 'util'
import { Color, colorToString } from '../style/Color'
import { Factory } from '../Factory'
import { DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'
import { Asset } from './Asset'

export class Swatch extends Asset {
  /**
   * Create a Swatch from a varienty of objects
   * - A native MSSwatch
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
      if (object.isKindOfClass(MSSwatch)) {
        nativeAsset = object
      } else {
        try {
          const c = Color.from(object).toMSColor()
          nativeAsset = MSSwatch.alloc().initWithAsset_name(c, null)
        } catch (error) {
          throw new Error(
            `Cannot create a color asset from a ${String(object.class())}`
          )
        }
      }
    } else if (typeof object == 'object') {
      const { color, name } = object
      const c = Color.from(color).toMSColor()
      nativeAsset = MSSwatch.alloc().initWithName_color(name, c)
    } else {
      const c = Color.from(object).toMSColor()
      nativeAsset = MSSwatch.alloc().initWithName_color(null, c)
    }

    return Swatch.fromNative(nativeAsset)
  }
}

Swatch.type = Types.Swatch
Swatch[DefinedPropertiesKey] = { ...Asset[DefinedPropertiesKey] }
Factory.registerClass(Swatch, MSSwatch)

Swatch.define('color', {
  get() {
    return colorToString(this._object.color())
  },
})
