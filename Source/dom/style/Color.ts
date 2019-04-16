import { isNativeObject } from 'util'
import { isKindOfClass } from '../utils'

/**
 * Given a string description of a color, return an MSImmutableColor.
 */
export function colorFromString(value: string) {
  return MSImmutableColor.colorWithSVGString(value)
}

/**
 * Given a MSColor, return string description of a color.
 */
export function colorToString(value: MSColor | MSImmutableColor) {
  function toHex(v: number) {
    // eslint-disable-next-line
    return (Math.round(v * 255) | (1 << 8)).toString(16).slice(1)
  }
  const red = toHex(value.red())
  const green = toHex(value.green())
  const blue = toHex(value.blue())
  const alpha = toHex(value.alpha())
  return `#${red}${green}${blue}${alpha}`
}

export class Color {
  private _object: MSImmutableColor

  constructor(nativeColor: MSImmutableColor) {
    this._object = nativeColor
  }

  static from(object: MSColor | MSImmutableColor | NSColor | string) {
    if (!object) {
      return undefined
    }
    let nativeColor: MSImmutableColor
    if (isNativeObject(object)) {
      if (isKindOfClass(object, MSColor.class())) {
        nativeColor = MSImmutableColor.alloc().initWithMutableModelObject(
          object
        )
      } else if (isKindOfClass(object, MSImmutableColor.class())) {
        nativeColor = object
      } else if (isKindOfClass(object, NSColor.class())) {
        nativeColor = MSImmutableColor.colorWithNSColor(object)
      } else {
        throw new Error(
          `Cannot create a color from a ${String(object.class())}`
        )
      }
    } else if (typeof object === 'string') {
      nativeColor = colorFromString(object)
    } else {
      throw new Error('`color` needs to be a string')
    }

    return new Color(nativeColor)
  }

  toString() {
    return colorToString(this._object)
  }

  toMSColor(): MSColor {
    return this._object.newMutableCounterpart()
  }

  toMSImmutableColor() {
    return this._object
  }
}
