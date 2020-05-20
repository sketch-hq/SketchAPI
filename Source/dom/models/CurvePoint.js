import { toArray } from 'util'
import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Point } from './Point'

const PointTypeMap = {
  Undefined: 0,
  Straight: 1,
  Mirrored: 2,
  Asymmetric: 3,
  Disconnected: 4,
  Rounded: 5,
}

export const PointType = {
  Undefined: 'Undefined',
  Straight: 'Straight',
  Mirrored: 'Mirrored',
  Asymmetric: 'Asymmetric',
  Disconnected: 'Disconnected',
}

export class CurvePoint extends WrappedObject {
  constructor(curvePoint = {}) {
    if (!curvePoint.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      curvePoint.sketchObject = MSCurvePoint.new()
    }

    super(curvePoint)

    Object.defineProperty(this, '_parent', {
      enumerable: false,
      writable: true,
    })
  }

  isSelected() {
    const documentData = this._object.documentData()
    if (!documentData) {
      return false
    }
    const document = documentData.delegate()
    if (!document) {
      return false
    }
    const eventHandler = document.eventHandlerManager().currentHandler()
    if (!eventHandler || !eventHandler.isKindOfClass(MSShapeEventHandler)) {
      return false
    }
    const selectedPoints = toArray(
      eventHandler.pathController().selectedObjects()
    )

    return selectedPoints.some((selectedPoint) => selectedPoint == this._object)
  }
}

CurvePoint.type = Types.CurvePoint
CurvePoint[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(CurvePoint, MSCurvePoint)

delete CurvePoint[DefinedPropertiesKey].id

CurvePoint.define('cornerRadius', {
  get() {
    return parseFloat(this._object.cornerRadius())
  },
  set(cornerRadius) {
    this._object.setCornerRadius(cornerRadius)
    if (this._parent) {
      this._parent.setEdited(true)
      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true)
    }
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
    if (this._parent) {
      this._parent.setEdited(true)
      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true)
    }
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
    if (this._parent) {
      this._parent.setEdited(true)
      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true)
    }
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
    if (this._parent) {
      this._parent.setEdited(true)
      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true)
    }
  },
})

CurvePoint.PointType = PointType
CurvePoint.define('pointType', {
  get() {
    const mode = this._object.curveMode()
    return (
      Object.keys(PointTypeMap).find((key) => PointTypeMap[key] === mode) ||
      mode
    )
  },
  set(_mode) {
    if (!_mode) {
      this._object.changeCurveModeTo_usingPoint(0, 0)
    } else {
      const mode = PointTypeMap[_mode]
      this._object.changeCurveModeTo_usingPoint(
        typeof mode !== 'undefined' ? mode : _mode,
        0
      )
    }

    if (this._parent) {
      this._parent.setEdited(true)
      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true)
    }
  },
})
