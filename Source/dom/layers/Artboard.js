import { DefinedPropertiesKey } from '../WrappedObject'
import { Group, GroupBehavior } from './Group'
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
      artboard.sketchObject = Factory.createNative(Group)
        .alloc()
        .initWithFrame_behavior(
          new Rectangle(0, 0, 100, 100).asCGRect(),
          GroupBehavior.Frame
        )
    }
    super(artboard)
    // Mimics behaviour implemented at the controller level where they call
    // `MSLayer.adjustAfterInsert()` which will apply the default styling.
    this.background.enabled = true
    // eslint-enable no-param-reassign
  }

  // eslint-disable-next-line
  getParentArtboard() {
    return undefined
  }
}

Artboard.type = Types.Artboard
Artboard[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }
Factory.registerAlias(Artboard, Group)

delete Artboard[DefinedPropertiesKey].flow
delete Artboard[DefinedPropertiesKey].locked
delete Artboard[DefinedPropertiesKey].hidden
delete Artboard[DefinedPropertiesKey].transform
delete Artboard[DefinedPropertiesKey].smartLayout

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
      return (
        this._object.style &&
        this._object.style().fills &&
        this._object.style().fills().length > 0
      )
    },
    set(enabled) {
      if (this._parent.isImmutable()) {
        return
      }
      const style = this._object.style ? this._object.style() : undefined
      if (!style) {
        return
      }
      if (enabled) {
        const numFills = style.fills ? style.fills().length : 0
        if (numFills === 0) {
          // Create a default fill if enabling and no fills exist
          style.addStylePartOfType(0) // 0 is for fills
        }
      } else {
        // Remove all fills if disabling
        style.removeAllStyleFills()
      }
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
      const firstFill = this._object.style
        ? this._object.style().firstEnabledFill()
        : undefined
      return firstFill ? colorToString(firstFill.color()) : '#00000000'
    },
    set(color) {
      if (this._parent.isImmutable()) {
        return
      }
      if (!this._object.style) {
        return
      }
      if (
        !this._object.style().fills ||
        this._object.style().fills().length === 0
      ) {
        this._object.style().addStylePartOfType(0) // Add a fill if none exists
      }
      const firstFill = this._object.style().firstEnabledFill()
      firstFill.color = Color.from(color).toMSColor()
    },
  },
})
