import { DefinedPropertiesKey } from '../WrappedObject'
import { Group } from './Group'
import { Rectangle } from '../Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'

/**
 * A Sketch artboard.
 */
export class Artboard extends Group {
  /**
   * Make a new artboard.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(artboard = {}) {
    if (!artboard.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      artboard.sketchObject = Factory.createNative(Artboard)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }
    super(artboard)
  }

  /**
   * Adjust the Artboard to fit its children.
   * override the group's method
   */
  adjustToFit() {
    this._object.resizeToFitChildren()
    return this
  }
}

Artboard.type = Types.Artboard
Artboard[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }
Factory.registerClass(Artboard, MSArtboardGroup)

delete Artboard[DefinedPropertiesKey].flow
delete Artboard[DefinedPropertiesKey].style

Artboard.define('flowStartPoint', {
  get() {
    return !!this._object.isFlowHome()
  },
  set(isFlowStartHome) {
    this._object.isFlowHome = isFlowStartHome
  },
})
