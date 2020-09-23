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
      try {
        if (object.isKindOfClass(MSSwatch)) {
          nativeAsset = object
        } else if (object.isKindOfClass(MSImmutableColor) || object.isKindOfClass(MSColor)){
          const c = Color.from(object).toMSColor()
          const name = colorToString(c).slice(0,7)
          nativeAsset = MSSwatch.alloc().initWithName_color(name, c)
        } else if (object.isKindOfClass(NSColor)) {
          const c = MSColor.colorWithNSColor(object)
          const name = colorToString(c).slice(0,7)
          nativeAsset = MSSwatch.alloc().initWithName_color(name, c)
        }
      } catch (error) {
        throw new Error(
          `Cannot create a color asset from a ${String(object.class())}`
        )
      }
    } else if (typeof object == 'object') {
      const { color, name } = object
      const c = Color.from(color).toMSColor()
      nativeAsset = MSSwatch.alloc().initWithName_color(name || color, c)
    } else {
      const c = Color.from(object).toMSColor()
      nativeAsset = MSSwatch.alloc().initWithName_color(object, c)
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
Swatch.define('referencingColor', {
  get() {
    return this._object.makeReferencingColor()
  },
})
