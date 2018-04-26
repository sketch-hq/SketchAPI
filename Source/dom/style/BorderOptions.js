import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { toArray } from '../utils'
import { Types } from '../enums'

const ArrowheadMap = {
  None: 0,
  OpenArrow: 1,
  ClosedArrow: 2,
  Line: 3,
  OpenCircle: 4,
  FilledCircle: 5,
  OpenSquare: 6,
  FilledSquare: 7,
}

export const Arrowhead = {
  None: 'None',
  OpenArrow: 'OpenArrow',
  ClosedArrow: 'ClosedArrow',
  Line: 'Line',
}

const LineEndMap = {
  Butt: 0,
  Round: 1,
  Projecting: 2,
}

export const LineEnd = {
  Butt: 'Butt',
  Round: 'Round',
  Projecting: 'Projecting',
}

const LineJoinMap = {
  Miter: 0,
  Round: 1,
  Bevel: 2,
}

export const LineJoin = {
  Miter: 'Mitter',
  Round: 'Round',
  Bevel: 'Bevel',
}

const BORDER_OPTIONS_DEFAULT = {
  startArrowhead: Arrowhead.None,
  endArrowhead: Arrowhead.None,
  dashPattern: [],
  lineEnd: LineEnd.Butt,
  lineJoin: LineJoin.Miter,
}

export class BorderOptions extends WrappedObject {
  static updateNative(s, borderOptions) {
    const optionsWithDefault = Object.assign(
      {},
      BORDER_OPTIONS_DEFAULT,
      borderOptions
    )
    if (typeof optionsWithDefault.startArrowhead !== 'undefined') {
      const startArrowhead = ArrowheadMap[optionsWithDefault.startArrowhead]
      s.setStartDecorationType(
        typeof startArrowhead !== 'undefined'
          ? startArrowhead
          : optionsWithDefault.startArrowhead
      )
    }
    if (typeof optionsWithDefault.endArrowhead !== 'undefined') {
      const endArrowhead = ArrowheadMap[optionsWithDefault.endArrowhead]
      s.setEndDecorationType(
        typeof endArrowhead !== 'undefined'
          ? endArrowhead
          : optionsWithDefault.endArrowhead
      )
    }
    if (typeof optionsWithDefault.dashPattern !== 'undefined') {
      s.borderOptions().setDashPattern(optionsWithDefault.dashPattern)
    }
    if (typeof optionsWithDefault.lineEnd !== 'undefined') {
      const lineEnd = LineEndMap[optionsWithDefault.lineEnd]
      s
        .borderOptions()
        .setLineCapStyle(
          typeof lineEnd !== 'undefined' ? lineEnd : optionsWithDefault.lineEnd
        )
    }
    if (typeof optionsWithDefault.lineJoin !== 'undefined') {
      const lineJoin = LineJoinMap[optionsWithDefault.lineJoin]
      s
        .borderOptions()
        .setLineJoinStyle(
          typeof lineJoin !== 'undefined'
            ? lineJoin
            : optionsWithDefault.lineJoin
        )
    }
  }
}

BorderOptions.type = Types.BorderOptions
BorderOptions[DefinedPropertiesKey] = {}

BorderOptions.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get() {
    return this._object
  },
})

BorderOptions.define('startArrowhead', {
  get() {
    const startType = this._object.startDecorationType()
    return (
      Object.keys(ArrowheadMap).find(key => ArrowheadMap[key] === startType) ||
      startType
    )
  },
  set(arrowhead) {
    const arrowheadMapped = ArrowheadMap[arrowhead]
    this._object.setStartDecorationType(
      typeof arrowheadMapped !== 'undefined' ? arrowheadMapped : arrowhead
    )
  },
})

BorderOptions.define('endArrowhead', {
  get() {
    const endType = this._object.endDecorationType()
    return (
      Object.keys(ArrowheadMap).find(key => ArrowheadMap[key] === endType) ||
      endType
    )
  },
  set(arrowhead) {
    const arrowheadMapped = ArrowheadMap[arrowhead]
    this._object.setEndDecorationType(
      typeof arrowheadMapped !== 'undefined' ? arrowheadMapped : arrowhead
    )
  },
})

BorderOptions.define('dashPattern', {
  get() {
    return toArray(this._object.borderOptions().dashPattern()).map(Number)
  },
  set(arrowhead) {
    this._object.borderOptions().setDashPattern(arrowhead)
  },
})

BorderOptions.define('lineEnd', {
  get() {
    const lineCap = this._object.borderOptions().lineCapStyle()
    return (
      Object.keys(LineEndMap).find(key => LineEndMap[key] === lineCap) ||
      lineCap
    )
  },
  set(lineEnd) {
    const lineEndMapped = LineEndMap[lineEnd]
    this._object
      .borderOptions()
      .setLineCapStyle(
        typeof lineEndMapped !== 'undefined' ? lineEndMapped : lineEnd
      )
  },
})

BorderOptions.define('lineJoin', {
  get() {
    const lineJoin = this._object.borderOptions().lineJoinStyle()
    return (
      Object.keys(LineJoinMap).find(key => LineJoinMap[key] === lineJoin) ||
      lineJoin
    )
  },
  set(lineJoin) {
    const lineJoinMapped = LineJoinMap[lineJoin]
    this._object
      .borderOptions()
      .setLineJoinStyle(
        typeof lineJoinMapped !== 'undefined' ? lineJoinMapped : lineJoin
      )
  },
})
