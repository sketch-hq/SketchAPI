import { toArray } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'
import { parseEnumValue } from '../utils'

const ArrowheadMap = {
  None: 0,
  OpenArrow: 1,
  FilledArrow: 2,
  Line: 3,
  OpenCircle: 4,
  FilledCircle: 5,
  OpenSquare: 6,
  FilledSquare: 7,
}

export const Arrowhead = {
  None: 'None',
  OpenArrow: 'OpenArrow',
  FilledArrow: 'FilledArrow',
  ClosedArrow: 'FilledArrow', // deprecated
  Line: 'Line',
  OpenCircle: 'OpenCircle',
  FilledCircle: 'FilledCircle',
  OpenSquare: 'OpenSquare',
  FilledSquare: 'FilledSquare',
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
  Miter: 'Miter',
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
      const startArrowhead = parseEnumValue(
        optionsWithDefault.startArrowhead,
        ArrowheadMap,
        'BorderOptions.startArrowhead'
      )
      if (startArrowhead !== undefined) {
        s.setStartMarkerType(startArrowhead)
      }
    }
    if (typeof optionsWithDefault.endArrowhead !== 'undefined') {
      const endArrowhead = parseEnumValue(
        optionsWithDefault.endArrowhead,
        ArrowheadMap,
        'BorderOptions.endArrowhead'
      )
      if (endArrowhead !== undefined) {
        s.setEndMarkerType(endArrowhead)
      }
    }
    if (typeof optionsWithDefault.dashPattern !== 'undefined') {
      s.borderOptions().setDashPattern(optionsWithDefault.dashPattern)
    }
    if (typeof optionsWithDefault.lineEnd !== 'undefined') {
      const lineEnd = parseEnumValue(
        optionsWithDefault.lineEnd,
        LineEndMap,
        'BorderOptions.lineEnd'
      )
      if (lineEnd !== undefined) {
        s.borderOptions().setLineCapStyle(lineEnd)
      }
    }
    if (typeof optionsWithDefault.lineJoin !== 'undefined') {
      const lineJoin = parseEnumValue(
        optionsWithDefault.lineJoin,
        LineJoinMap,
        'BorderOptions.lineJoin'
      )
      if (lineJoin !== undefined) {
        s.borderOptions().setLineJoinStyle(lineJoin)
      }
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
    const startType = this._object.startMarkerType()
    return (
      Object.keys(ArrowheadMap).find(
        (key) => ArrowheadMap[key] === startType
      ) || startType
    )
  },
  set(arrowhead) {
    const arrowheadMapped = parseEnumValue(
      arrowhead,
      ArrowheadMap,
      'BorderOptions.startArrowhead'
    )
    if (arrowheadMapped !== undefined) {
      this._object.setStartMarkerType(arrowheadMapped)
    }
  },
})

BorderOptions.define('endArrowhead', {
  get() {
    const endType = this._object.endMarkerType()
    return (
      Object.keys(ArrowheadMap).find((key) => ArrowheadMap[key] === endType) ||
      endType
    )
  },
  set(arrowhead) {
    const arrowheadMapped = parseEnumValue(
      arrowhead,
      ArrowheadMap,
      'BorderOptions.endArrowhead'
    )
    if (arrowheadMapped !== undefined) {
      this._object.setEndMarkerType(arrowheadMapped)
    }
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
      Object.keys(LineEndMap).find((key) => LineEndMap[key] === lineCap) ||
      lineCap
    )
  },
  set(lineEnd) {
    const lineEndMapped = parseEnumValue(
      lineEnd,
      LineEndMap,
      'BorderOptions.lineEnd'
    )
    if (lineEndMapped !== undefined) {
      this._object.borderOptions().setLineCapStyle(lineEndMapped)
    }
  },
})

BorderOptions.define('lineJoin', {
  get() {
    const lineJoin = this._object.borderOptions().lineJoinStyle()
    return (
      Object.keys(LineJoinMap).find((key) => LineJoinMap[key] === lineJoin) ||
      lineJoin
    )
  },
  set(lineJoin) {
    const lineJoinMapped = parseEnumValue(
      lineJoin,
      LineJoinMap,
      'BorderOptions.lineJoin'
    )
    if (lineJoinMapped !== undefined) {
      this._object.borderOptions().setLineJoinStyle(lineJoinMapped)
    }
  },
})
