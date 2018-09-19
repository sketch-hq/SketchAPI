import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Rectangle } from '../models/Rectangle'

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
      shape.sketchObject = Factory.createNative(ShapePath)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())

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
