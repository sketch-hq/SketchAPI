import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Point } from './Point'

export class CurvePoint extends WrappedObject {
  constructor(curvePoint = {}) {
    if (!curvePoint.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      curvePoint.sketchObject = MSCurvePoint.new()
    }

    super(curvePoint)
  }
}

CurvePoint.type = Types.ExportFormat
CurvePoint[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(CurvePoint, MSCurvePoint)

delete CurvePoint[DefinedPropertiesKey].id

CurvePoint.define('cornerRadius', {
  get() {
    return parseFloat(this._object.cornerRadius())
  },
  set(cornerRadius) {
    this._object.setCornerRadius(cornerRadius)
  },
})

CurvePoint.define('curveFrom', {
  get() {
    const center = new Point(this._object.curveFrom())
    center._parent = this
    center._parentKey = 'curveFrom'
    return center
  },
  set(curveFrom) {
    this._object.setCurveFrom(NSMakePoint(curveFrom.x, curveFrom.y))
  },
})

CurvePoint.define('curveTo', {
  get() {
    const center = new Point(this._object.curveTo())
    center._parent = this
    center._parentKey = 'curveTo'
    return center
  },
  set(curveTo) {
    this._object.setCurveTo(NSMakePoint(curveTo.x, curveTo.y))
  },
})

CurvePoint.define('point', {
  get() {
    const center = new Point(this._object.point())
    center._parent = this
    center._parentKey = 'point'
    return center
  },
  set(point) {
    this._object.setPoint(NSMakePoint(point.x, point.y))
  },
})
