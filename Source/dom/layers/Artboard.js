import { DefinedPropertiesKey } from '../WrappedObject'
import { Group } from './Group'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Color, colorToString } from '../style/Color'

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

  // eslint-disable-next-line
  getParentArtboard() {
    return undefined
  }
}

Artboard.type = Types.Artboard
Artboard[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }
Factory.registerClass(Artboard, MSArtboardGroup)
Factory.registerClass(Artboard, MSImmutableArtboardGroup)

delete Artboard[DefinedPropertiesKey].flow
delete Artboard[DefinedPropertiesKey].style
delete Artboard[DefinedPropertiesKey].locked
delete Artboard[DefinedPropertiesKey].hidden

Artboard.define('flowStartPoint', {
  get() {
    return !!this._object.isFlowHome()
  },
  set(isFlowStartHome) {
    if (this.isImmutable()) {
      return
    }
    this._object.isFlowHome = isFlowStartHome
  },
})

Artboard.defineObject('background', {
  enabled: {
    get() {
      return Boolean(Number(this._object.hasBackgroundColor()))
    },
    set(enabled) {
      if (this._parent.isImmutable()) {
        return
      }
      this._object.setHasBackgroundColor(enabled)
    },
  },
  includedInExport: {
    get() {
      return Boolean(Number(this._object.includeBackgroundColorInExport()))
    },
    set(included) {
      if (this._parent.isImmutable()) {
        return
      }
      this._object.setIncludeBackgroundColorInExport(included)
    },
  },
  color: {
    get() {
      return colorToString(this._object.backgroundColor())
    },
    set(color) {
      if (this._parent.isImmutable()) {
        return
      }
      this._object.setBackgroundColor(Color.from(color))
    },
  },
})
