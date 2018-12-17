import { toArray } from 'util'
import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Rectangle } from '../models/Rectangle'
import { CurvePoint } from '../models/CurvePoint'
import { wrapObject } from '../wrapNativeObject'

const ShapeType = {
  Rectangle: 'Rectangle',
  Oval: 'Oval',
  Polygon: 'Polygon',
  Star: 'Star',
  Triangle: 'Triangle',
  Custom: 'Custom',
}

const ShapeTypeMap = {
  MSRectangleShape: ShapeType.Rectangle,
  MSShapePathLayer: ShapeType.Custom,
  MSImmutableShapePathLayer: ShapeType.Custom,
  MSOvalShape: ShapeType.Oval,
  MSPolygonShape: ShapeType.Polygon,
  MSStarShape: ShapeType.Star,
  MSTriangleShape: ShapeType.Triangle,
  MSImmutableOvalShape: ShapeType.Oval,
  MSImmutablePolygonShape: ShapeType.Polygon,
  MSImmutableRectangleShape: ShapeType.Rectangle,
  MSImmutableStarShape: ShapeType.Star,
  MSImmutableTriangleShape: ShapeType.Triangle,
}

const ShapeTypeMapReverse = {
  Rectangle: MSRectangleShape,
  Oval: MSOvalShape,
  Polygon: MSPolygonShape,
  Star: MSStarShape,
  Triangle: MSTriangleShape,
  Custom: MSRectangleShape, // we are just going to default to Rectangle here
}

// TODO: set and modify path

/**
 * Represents a shape layer (a rectangle, oval, path, etc).
 */
export class ShapePath extends StyledLayer {
  /**
   * Make a new shape object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(shape = {}) {
    if (!shape.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      shape.sketchObject = ShapeTypeMapReverse[
        shape.shapeType || ShapeType.Custom
      ]
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())

      if (
        shape.shapeType === ShapeType.Polygon ||
        shape.shapeType === ShapeType.Star
      ) {
        shape.sketchObject.resetPoints()
      }

      super(shape)
    } else {
      super(shape)
    }
  }
}

ShapePath.type = Types.ShapePath
ShapePath[DefinedPropertiesKey] = { ...StyledLayer[DefinedPropertiesKey] }
Factory.registerClass(ShapePath, MSRectangleShape)
Factory.registerClass(ShapePath, MSShapePathLayer)
Factory.registerClass(ShapePath, MSImmutableShapePathLayer)
Factory.registerClass(ShapePath, MSOvalShape)
Factory.registerClass(ShapePath, MSPolygonShape)
Factory.registerClass(ShapePath, MSStarShape)
Factory.registerClass(ShapePath, MSTriangleShape)
Factory.registerClass(ShapePath, MSImmutableOvalShape)
Factory.registerClass(ShapePath, MSImmutablePolygonShape)
Factory.registerClass(ShapePath, MSImmutableRectangleShape)
Factory.registerClass(ShapePath, MSImmutableStarShape)
Factory.registerClass(ShapePath, MSImmutableTriangleShape)

ShapePath.ShapeType = ShapeType
ShapePath.define('shapeType', {
  get() {
    return ShapeTypeMap[String(this._object.class())]
  },
})

ShapePath.define('points', {
  get() {
    return toArray(this._object.points()).map(p => {
      const point = CurvePoint.fromNative(p)
      point._parent = this._object
      return point
    })
  },
  set(points) {
    if (this.isImmutable()) {
      return
    }
    this._object.setEdited(true)
    this._object.removeAllCurvePoints()

    const curvePoints = points.map(
      p => wrapObject(p, Types.CurvePoint).sketchObject
    )
    this._object.addCurvePoints(curvePoints)
    this._object.adjustFrameAfterEditIntegral_fixAncestors(false, true)
  },
})

ShapePath.define('closed', {
  get() {
    return Boolean(Number(this._object.isClosed()))
  },
  set(closed) {
    if (this.isImmutable()) {
      return
    }
    this._object.setEdited(true)
    this._object.setIsClosed(closed)
    this._object.adjustFrameAfterEditIntegral_fixAncestors(false, true)
  },
})
