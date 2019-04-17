import { toArray } from 'util'
import { WrappedObject, DefinedPropertiesKey, define } from '../WrappedObject'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { GradientType } from './Gradient'
import { colorFromString, colorToString } from './Color'
import { Shadow } from './Shadow'
import { BorderOptions, Arrowhead, LineEnd, LineJoin } from './BorderOptions'
import { Blur, BlurType } from './Blur'
import { Fill, FillType, PatternFillType } from './Fill'
import { Border, BorderPosition } from './Border'
import { defineTextStyleProperties } from './Text'
import { SharedStyle } from '../models/SharedStyle'
import { StyledLayer } from '../layers/StyledLayer'
import { isKindOfClass } from '../utils'

const BlendingModeMap: { [key in BlendingMode]: number } = {
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

type BlendingMode =
  | 'Normal'
  | 'Darken'
  | 'Multiply'
  | 'ColorBurn'
  | 'Lighten'
  | 'Screen'
  | 'ColorDodge'
  | 'Overlay'
  | 'SoftLight'
  | 'HardLight'
  | 'Difference'
  | 'Exclusion'
  | 'Hue'
  | 'Saturation'
  | 'Color'
  | 'Luminosity'
const BlendingMode: { [key in BlendingMode]: BlendingMode } = {
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

export type TStyleType = 'Layer' | 'Text' | 'Unknown'
export const StyleType: { [key in TStyleType]: TStyleType } = {
  Layer: 'Layer',
  Text: 'Text',
  Unknown: 'Unknown',
}

/**
 * Represents a Sketch layer style.
 */

export class Style extends WrappedObject<MSStyle> {
  static type = Types.Style
  static GradientType = GradientType
  static BlendingMode = BlendingMode
  static Arrowhead = Arrowhead
  static LineEnd = LineEnd
  static LineJoin = LineJoin
  static BlurType = BlurType
  static FillType = FillType
  static PatternFillType = PatternFillType
  static BorderPosition = BorderPosition
  static StyleType = StyleType

  @define<Style, number>({
    get() {
      return this.sketchObject.contextSettings().opacity()
    },
    set(opacity) {
      this.sketchObject
        .contextSettings()
        .setOpacity(Math.min(Math.max(opacity, 0), 1))
    },
  })
  opacity!: number

  @define<Style, BlendingMode>({
    get() {
      const mode = this.sketchObject.contextSettings().blendMode()
      return (
        Object.keys(BlendingModeMap).find(
          key => BlendingModeMap[key] === mode
        ) || mode
      )
    },
    set(mode) {
      const blendingMode = BlendingModeMap[mode] as MSBlendMode
      this.sketchObject
        .contextSettings()
        .setBlendMode(typeof blendingMode !== 'undefined' ? blendingMode : mode)
    },
  })
  blendingMode!: BlendingMode

  @define<Style, BorderOptions>({
    get() {
      return BorderOptions.fromNative(this.sketchObject)!
    },
    set(borderOptions) {
      BorderOptions.updateNative(this.sketchObject, borderOptions)
    },
  })
  borderOptions!: BorderOptions

  @define<Style, TStyleType>({
    get() {
      return this.sketchObject.textStyle() &&
        this.sketchObject.textStyle().attributes()[NSFontAttributeName]
        ? StyleType.Text
        : StyleType.Layer
    },
  })
  styleType!: TStyleType

  /**
   * Make a new style object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(style: { sketchObject?: MSStyle } = {}, parentType?: Types) {
    if (!style.sketchObject) {
      /* eslint-disable no-param-reassign */
      style = Object.assign({}, DEFAULT_STYLE, style)

      style.sketchObject = MSDefaultStyle.defaultStyle()
      if (parentType === Types.Text) {
        style.sketchObject.setTextStyle(
          MSTextStyle.styleWithAttributes(MSDefaultTextStyle.defaultTextStyle())
        )
      }
      /* eslint-enable no-param-reassign */
    }

    super(style)
  }

  static colorFromString(color: string) {
    return colorFromString(color)
  }

  static colorToString(value: MSColor | MSImmutableColor) {
    return colorToString(value)
  }

  isOutOfSyncWithSharedStyle(sharedStyle: SharedStyle) {
    const wrapped = wrapObject(sharedStyle)
    if (!wrapped || !(wrapped instanceof SharedStyle)) {
      return false
    }
    return !!wrapped.sketchObject.isOutOfSyncWithInstance(this.sketchObject)
  }

  syncWithSharedStyle(sharedStyle: SharedStyle) {
    const wrapped = wrapObject(sharedStyle)
    if (!wrapped || !(wrapped instanceof SharedStyle)) {
      return
    }
    this.sketchObject.syncWithTemplateInstance(wrapped.style.sketchObject)
  }

  getParentLayer(): StyledLayer | null {
    if (this.sketchObject.parentLayer) {
      return wrapObject(this.sketchObject.parentLayer()) || null
    }
    return null
  }

  getDefaultLineHeight() {
    if (!this.sketchObject.parentLayer) {
      return undefined
    }
    const layer = this.sketchObject.parentLayer()
    if (!layer) {
      return undefined
    }

    const isImmutableTextLayer = isKindOfClass(
      layer,
      MSImmutableTextLayer.class()
    )

    if (!isKindOfClass(layer, MSTextLayer.class()) && !isImmutableTextLayer) {
      return undefined
    }
    const immutableLayer: MSImmutableTextLayer = isImmutableTextLayer
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

Style.define('blur', {
  get() {
    return Blur.fromNative(this._object.blur())
  },
  set(blur) {
    Blur.updateNative(this._object.blur(), blur)
  },
})

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

defineTextStyleProperties(Style)
