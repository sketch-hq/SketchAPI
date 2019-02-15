import { isNativeObject } from 'util'
import { Color, colorToString } from './Color'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Gradient } from './Gradient'
import { Types } from '../enums'
import { ImageData } from '../models/ImageData'
import { isWrappedObject } from '../utils'

export const FillTypeMap = {
  Color: 0, // A solid fill/border.
  Gradient: 1, // A gradient fill/border.
  Pattern: 4, // A pattern fill/border.
  Noise: 5, // A noise fill/border.
}

export const FillType = {
  Color: 'Color', // A solid fill/border.
  Gradient: 'Gradient', // A gradient fill/border.
  Pattern: 'Pattern', // A pattern fill/border.
  Noise: 'Noise', // A noise fill/border.
  /* @deprecated */
  color: 'Color', // A solid fill/border.
  gradient: 'Gradient', // A gradient fill/border.
  pattern: 'Pattern', // A pattern fill/border.
  noise: 'Noise', // A noise fill/border.
}

export const PatternFillTypeMap = {
  Tile: 0, // tile the image to fill the shape
  Fill: 1, // fit the shape inside the image
  Stretch: 2, // stretch the image to fill the shape
  Fit: 3, // fit the image inside the shape
}

export const PatternFillType = {
  Tile: 'Tile',
  Fill: 'Fill',
  Stretch: 'Stretch',
  Fit: 'Fit',
}

export const NoiseTypeMap = {
  Original: 0,
  Black: 1,
  White: 2,
  Color: 3,
}

export const NoiseType = {
  Original: 'Original',
  Black: 'Black',
  White: 'White',
  Color: 'Color',
}

export class Fill extends WrappedObject {
  static toNative(value) {
    if (isNativeObject(value)) {
      return value
    }
    if (isWrappedObject(value)) {
      return value.sketchObject
    }
    const fill = MSStyleFill.new()
    const color =
      typeof value === 'string' ? Color.from(value) : Color.from(value.color)
    const gradient = Gradient.from(value.gradient)

    if (color) {
      fill.color = color.toMSColor()
    }

    if (gradient) {
      fill.gradient = gradient._object
    }

    if (value.noise) {
      if (typeof value.noise.noiseType !== 'undefined') {
        const noiseTypeMapped = NoiseTypeMap[value.noise.noiseType]
        fill.setNoiseIndex(
          typeof noiseTypeMapped !== 'undefined'
            ? noiseTypeMapped
            : value.noise.noiseType || NoiseTypeMap.Original
        )
      }
      if (typeof value.noise.intensity !== 'undefined') {
        fill.setNoiseIntensity(value.noise.intensity)
      }
    }

    if (value.pattern) {
      if (typeof value.pattern.patternType !== 'undefined') {
        const patternTypeMapped = PatternFillTypeMap[value.pattern.patternType]
        fill.setPatternFillType(
          typeof patternTypeMapped !== 'undefined'
            ? patternTypeMapped
            : value.pattern.patternType || PatternFillTypeMap.Tile
        )
      }
      if (typeof value.pattern.tileScale !== 'undefined') {
        fill.setPatternTileScale(value.pattern.tileScale)
      }
      if (typeof value.pattern.image !== 'undefined') {
        const image = ImageData.from(value.pattern.image)
        fill.setImage(image.sketchObject)
      }
    }

    const fillType = FillTypeMap[value.fill]
    fill.fillType =
      typeof fillType !== 'undefined'
        ? fillType
        : value.fillType || FillTypeMap.Color

    if (typeof value.enabled === 'undefined') {
      fill.isEnabled = true
    } else {
      fill.isEnabled = value.enabled
    }
    return fill
  }
}

Fill.type = Types.Fill
Fill[DefinedPropertiesKey] = {}

Fill.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object
  },
})

Fill.define('fill', {
  get() {
    return (
      Object.keys(FillTypeMap).find(
        key => FillTypeMap[key] === this._object.fillType()
      ) || this._object.fillType()
    )
  },
  set(fillType) {
    const fillTypeMapped = FillTypeMap[fillType]
    this._object.fillType =
      typeof fillTypeMapped !== 'undefined'
        ? fillTypeMapped
        : fillType || FillTypeMap.Color
  },
})

Fill.define('color', {
  get() {
    return colorToString(this._object.color())
  },
  set(_color) {
    const color = Color.from(_color)
    this._object.color = color.toMSColor()
  },
})

Fill.define('gradient', {
  get() {
    return Gradient.from(this._object.gradient())
  },
  set(_gradient) {
    const gradient = Gradient.from(_gradient)
    this._object.gradient = gradient
  },
})

Fill.defineObject('pattern', {
  patternType: {
    get() {
      return (
        Object.keys(PatternFillTypeMap).find(
          key => PatternFillTypeMap[key] === this._object.patternFillType()
        ) || this._object.patternFillType()
      )
    },
    set(patternType) {
      const patternTypeMapped = PatternFillTypeMap[patternType]
      this._object.setPatternFillType(
        typeof patternTypeMapped !== 'undefined'
          ? patternTypeMapped
          : patternType || PatternFillTypeMap.Tile
      )
    },
  },
  image: {
    get() {
      return ImageData.fromNative(this._object.image())
    },
    set(image) {
      this._object.setImage(ImageData.from(image).sketchObject)
    },
  },
  tileScale: {
    get() {
      return Number(this._object.patternTileScale())
    },
    set(scale) {
      this._object.setPatternTileScale(scale)
    },
  },
})

Fill.defineObject('noise', {
  noiseType: {
    get() {
      return (
        Object.keys(NoiseTypeMap).find(
          key => NoiseTypeMap[key] === this._object.noiseIndex()
        ) || this._object.noiseIndex()
      )
    },
    set(noiseType) {
      const noiseTypeMapped = NoiseTypeMap[noiseType]
      this._object.setNoiseIndex(
        typeof noiseTypeMapped !== 'undefined'
          ? noiseTypeMapped
          : noiseType || NoiseTypeMap.Original
      )
    },
  },
  intensity: {
    get() {
      return Number(this._object.noiseIntensity())
    },
    set(intensity) {
      this._object.setNoiseIntensity(intensity)
    },
  },
})

Fill.define('enabled', {
  get() {
    return !!this._object.isEnabled()
  },
  set(enabled) {
    this._object.isEnabled = enabled
  },
})
