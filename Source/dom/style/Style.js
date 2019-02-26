import { toArray } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { GradientType } from './Gradient'
import { colorFromString, colorToString } from './Color'
import { Shadow } from './Shadow'
import { BorderOptions, Arrowhead, LineEnd, LineJoin } from './BorderOptions'
import { Blur, BlurType } from './Blur'
import { Fill, FillType, PatternFillType, NoiseType } from './Fill'
import { Border, BorderPosition } from './Border'
import { defineTextStyleProperties } from './Text'

const BlendingModeMap = {
  Normal: 0,
  Darken: 1,
  Multiply: 2,
  ColorBurn: 3,
  Lighten: 4,
  Screen: 5,
  ColorDodge: 6,
  Overlay: 7,
  SoftLight: 8,
  HardLight: 9,
  Difference: 10,
  Exclusion: 11,
  Hue: 12,
  Saturation: 13,
  Color: 14,
  Luminosity: 15,
}

const BlendingMode = {
  Normal: 'Normal',
  Darken: 'Darken',
  Multiply: 'Multiply',
  ColorBurn: 'ColorBurn',
  Lighten: 'Lighten',
  Screen: 'Screen',
  ColorDodge: 'ColorDodge',
  Overlay: 'Overlay',
  SoftLight: 'SoftLight',
  HardLight: 'HardLight',
  Difference: 'Difference',
  Exclusion: 'Exclusion',
  Hue: 'Hue',
  Saturation: 'Saturation',
  Color: 'Color',
  Luminosity: 'Luminosity',
}

const DEFAULT_STYLE = {
  fills: [],
}

export const StyleTypeMap = {
  1: 'Layer',
  2: 'Text',
  3: 'Unknown',
}
export const StyleType = {
  Layer: 'Layer',
  Text: 'Text',
  Unknown: 'Unknown',
}

/**
 * Represents a Sketch layer style.
 */

export class Style extends WrappedObject {
  /**
   * Make a new style object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(style = {}) {
    if (!style.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      style = Object.assign({}, DEFAULT_STYLE, style)
      // eslint-disable-next-line no-param-reassign
      style.sketchObject = MSDefaultStyle.defaultStyle()
    }

    super(style)
  }

  static colorFromString(color) {
    return colorFromString(color)
  }

  static colorToString(value) {
    return colorToString(value)
  }

  isOutOfSyncWithSharedStyle(sharedStyle) {
    return !!wrapObject(sharedStyle).sketchObject.isOutOfSyncWithInstance(
      this._object
    )
  }

  syncWithSharedStyle(sharedStyle) {
    this._object.syncWithTemplateInstance(
      wrapObject(sharedStyle).style.sketchObject
    )
  }

  getParentLayer() {
    if (this._object.parentLayer) {
      return wrapObject(this._object.parentLayer())
    }
    return null
  }

  getDefaultLineHeight() {
    if (!this._object.parentLayer) {
      return undefined
    }
    const layer = this._object.parentLayer()
    if (!layer) {
      return undefined
    }
    const className = String(layer.class())
    if (className !== 'MSTextLayer' && className !== 'MSImmutableTextLayer') {
      return undefined
    }
    const immutableLayer =
      className === 'MSImmutableTextLayer'
        ? layer
        : layer.immutableModelObject()

    const storage = immutableLayer.createTextStorage()
    const layoutManager = storage.layoutManagers().firstObject()

    return Number(immutableLayer.defaultLineHeight(layoutManager))
  }
}

Style.type = Types.Style
Style[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Style, MSStyle)

Style.GradientType = GradientType

Style.define('opacity', {
  get() {
    return this._object.contextSettings().opacity()
  },
  set(opacity) {
    this._object.contextSettings().setOpacity(Math.min(Math.max(opacity, 0), 1))
  },
})

Style.BlendingMode = BlendingMode
Style.define('blendingMode', {
  get() {
    const mode = this._object.contextSettings().blendMode()
    return (
      Object.keys(BlendingModeMap).find(key => BlendingModeMap[key] === mode) ||
      mode
    )
  },
  set(mode) {
    const blendingMode = BlendingModeMap[mode]
    this._object
      .contextSettings()
      .setBlendMode(typeof blendingMode !== 'undefined' ? blendingMode : mode)
  },
})

Style.Arrowhead = Arrowhead
Style.LineEnd = LineEnd
Style.LineJoin = LineJoin
Style.define('borderOptions', {
  get() {
    return BorderOptions.fromNative(this._object)
  },
  set(borderOptions) {
    BorderOptions.updateNative(this._object, borderOptions)
  },
})

Style.BlurType = BlurType
Style.define('blur', {
  get() {
    return Blur.fromNative(this._object.blur())
  },
  set(blur) {
    Blur.updateNative(this._object.blur(), blur)
  },
})

Style.FillType = FillType
Style.PatternFillType = PatternFillType
Style.NoiseType = NoiseType
Style.define('fills', {
  array: true,
  get() {
    const fills = toArray(this._object.fills())
    return fills.map(Fill.fromNative.bind(Fill))
  },
  set(values) {
    const objects = values.map(Fill.toNative.bind(Fill))
    this._object.setFills(objects)
  },
  insertItem(item, index) {
    const arr = toArray(this._object.fills())
    arr.splice(index, 0, item)
    this.fills = arr
    return Fill.fromNative(Fill.toNative(item))
  },
  removeItem(index) {
    const arr = toArray(this._object.fills())
    const removed = arr.splice(index, 1)
    this.fills = arr
    return Fill.fromNative(removed[0])
  },
})

Style.BorderPosition = BorderPosition
Style.define('borders', {
  array: true,
  get() {
    const borders = toArray(this._object.borders())
    return borders.map(Border.fromNative.bind(Border))
  },
  set(values) {
    const objects = values.map(Border.toNative.bind(Border))
    this._object.setBorders(objects)
  },
  insertItem(item, index) {
    const arr = toArray(this._object.borders())
    arr.splice(index, 0, item)
    this.borders = arr
    return Border.fromNative(Border.toNative(item))
  },
  removeItem(index) {
    const arr = toArray(this._object.borders())
    const removed = arr.splice(index, 1)
    this.borders = arr
    return Border.fromNative(removed[0])
  },
})

Style.define('shadows', {
  array: true,
  get() {
    return toArray(this._object.shadows()).map(Shadow.fromNative.bind(Shadow))
  },
  set(values) {
    const objects = values.map(Shadow.toNative.bind(Shadow, MSStyleShadow))
    this._object.setShadows(objects)
  },
  insertItem(item, index) {
    const arr = toArray(this._object.shadows())
    arr.splice(index, 0, item)
    this.shadows = arr
    return Shadow.fromNative(Shadow.toNative(MSStyleShadow, item))
  },
  removeItem(index) {
    const arr = toArray(this._object.shadows())
    const removed = arr.splice(index, 1)
    this.shadows = arr
    return Shadow.fromNative(removed[0])
  },
})

Style.define('innerShadows', {
  array: true,
  get() {
    return toArray(this._object.innerShadows()).map(
      Shadow.fromNative.bind(Shadow)
    )
  },
  set(values) {
    const objects = values.map(Shadow.toNative.bind(Shadow, MSStyleInnerShadow))
    this._object.setInnerShadows(objects)
  },
  insertItem(item, index) {
    const arr = toArray(this._object.innerShadows())
    arr.splice(index, 0, item)
    this.innerShadows = arr
    return Shadow.fromNative(Shadow.toNative(MSStyleInnerShadow, item))
  },
  removeItem(index) {
    const arr = toArray(this._object.innerShadows())
    const removed = arr.splice(index, 1)
    this.innerShadows = arr
    return Shadow.fromNative(removed[0])
  },
})

Style.StyleType = StyleType
Style.define('styleType', {
  get() {
    return this._object.textStyle() &&
      this._object.textStyle().attributes()[NSFontAttributeName]
      ? StyleType.Text
      : StyleType.Layer
  },
})

defineTextStyleProperties(Style)
