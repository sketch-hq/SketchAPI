import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { toArray } from '../utils'
import { Types } from '../enums'

export const Arrowhead = {
  None: 0,
  OpenArrow: 1,
  ClosedArrow: 2,
  Line: 3,
  OpenCircle: 4,
  FilledCircle: 5,
  OpenSquare: 6,
  FilledSquare: 7,
}

export const LineEnd = {
  Butt: 0,
  Round: 1,
  Projecting: 2,
}

export const LineJoin = {
  Miter: 0,
  Round: 1,
  Bevel: 2,
}

export class BorderOptions extends WrappedObject {
  static updateNative(s, borderOptions) {
    if (typeof borderOptions.startArrowhead !== 'undefined') {
      s.setStartDecorationType(
        Arrowhead[borderOptions.startArrowhead] || borderOptions.startArrowhead
      )
    }
    if (typeof borderOptions.endArrowhead !== 'undefined') {
      s.setEndDecorationType(
        Arrowhead[borderOptions.endArrowhead] || borderOptions.endArrowhead
      )
    }
    if (typeof borderOptions.dashPattern !== 'undefined') {
      s.borderOptions().setDashPattern(borderOptions.dashPattern)
    }
    if (typeof borderOptions.lineEnd !== 'undefined') {
      s
        .borderOptions()
        .setLineCapStyle(
          LineEnd[borderOptions.lineEnd] || borderOptions.lineEnd
        )
    }
    if (typeof borderOptions.lineJoin !== 'undefined') {
      s
        .borderOptions()
        .setLineJoinStyle(
          LineJoin[borderOptions.lineJoin] || borderOptions.lineJoin
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
      Object.keys(Arrowhead).find(key => Arrowhead[key] === startType) ||
      startType
    )
  },
  set(arrowhead) {
    this._object.setStartDecorationType(Arrowhead[arrowhead] || arrowhead)
  },
})

BorderOptions.define('endArrowhead', {
  get() {
    const endType = this._object.endDecorationType()
    return (
      Object.keys(Arrowhead).find(key => Arrowhead[key] === endType) || endType
    )
  },
  set(arrowhead) {
    this._object.setEndDecorationType(Arrowhead[arrowhead] || arrowhead)
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
    return Object.keys(LineEnd).find(key => LineEnd[key] === lineCap) || lineCap
  },
  set(lineEnd) {
    this._object.borderOptions().setLineCapStyle(LineEnd[lineEnd] || lineEnd)
  },
})

BorderOptions.define('lineJoin', {
  get() {
    const lineJoin = this._object.borderOptions().lineJoinStyle()
    return (
      Object.keys(LineJoin).find(key => LineJoin[key] === lineJoin) || lineJoin
    )
  },
  set(lineJoin) {
    this._object
      .borderOptions()
      .setLineJoinStyle(LineJoin[lineJoin] || lineJoin)
  },
})
