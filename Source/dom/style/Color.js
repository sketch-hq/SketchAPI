import { isNativeObject } from '../utils'

/**
 * Given a string description of a color, return an MSColor.
 */
export function colorFromString(value) {
  const immutable = MSImmutableColor.colorWithSVGString_(value)
  return MSColor.alloc().initWithImmutableObject_(immutable)
}

/**
 * Given a MSColor, return string description of a color.
 */
export function colorToString(value) {
  function toHex(v) {
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
  constructor(nativeColor) {
    this._object = nativeColor
  }

  static from(object) {
    if (!object) {
      return undefined
    }
    let nativeColor
    if (isNativeObject(object)) {
      const className = String(object.class())
      if (className === 'MSColor') {
        nativeColor = object
      } else {
        throw new Error(`Cannot create a color from a ${className}`)
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
}
