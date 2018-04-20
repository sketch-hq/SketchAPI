import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { toArray } from '../utils'
import { Types } from '../enums'

const ArrowheadMap = {
  None: 0,
  OpenArrow: 1,
  ClosedArrow: 2,
  Line: 3,
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

export class BorderOptions extends WrappedObject {
  static updateNative(s, borderOptions) {
    if (typeof borderOptions.startArrowhead !== 'undefined') {
      s.setStartDecorationType(
        ArrowheadMap[borderOptions.startArrowhead] ||
          borderOptions.startArrowhead
      )
    }
    if (typeof borderOptions.endArrowhead !== 'undefined') {
      s.setEndDecorationType(
        ArrowheadMap[borderOptions.endArrowhead] || borderOptions.endArrowhead
      )
    }
    if (typeof borderOptions.dashPattern !== 'undefined') {
      s.borderOptions().setDashPattern(borderOptions.dashPattern)
    }
    if (typeof borderOptions.lineEnd !== 'undefined') {
      s
        .borderOptions()
        .setLineCapStyle(
          LineEndMap[borderOptions.lineEnd] || borderOptions.lineEnd
        )
    }
    if (typeof borderOptions.lineJoin !== 'undefined') {
      s
        .borderOptions()
        .setLineJoinStyle(
          LineJoinMap[borderOptions.lineJoin] || borderOptions.lineJoin
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
    this._object.setStartDecorationType(ArrowheadMap[arrowhead] || arrowhead)
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
    this._object.setEndDecorationType(ArrowheadMap[arrowhead] || arrowhead)
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
    this._object.borderOptions().setLineCapStyle(LineEndMap[lineEnd] || lineEnd)
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
    this._object
      .borderOptions()
      .setLineJoinStyle(LineJoinMap[lineJoin] || lineJoin)
  },
})
