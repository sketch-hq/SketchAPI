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

class Background {
  constructor(artboard) {
    Object.defineProperty(this, '_object', {
      enumerable: false,
      value: artboard,
    })

    Object.defineProperty(this, 'enabled', {
      get() {
        return Boolean(Number(this._object.hasBackgroundColor()))
      },
      set(enabled) {
        this._object.setHasBackgroundColor(enabled)
      },
    })

    Object.defineProperty(this, 'includedInExport', {
      get() {
        return Boolean(Number(this._object.includeBackgroundColorInExport()))
      },
      set(included) {
        this._object.setIncludeBackgroundColorInExport(included)
      },
    })

    Object.defineProperty(this, 'color', {
      get() {
        return colorToString(this._object.backgroundColor())
      },
      set(color) {
        this._object.setBackgroundColor(Color.from(color))
      },
    })
  }

  toJSON() {
    return {
      color: this.color,
      enabled: this.enabled,
      includedInExport: this.includedInExport,
    }
  }
}

Artboard.define('background', {
  get() {
    return new Background(this._object)
  },
  set(background) {
    const backgroundProxy = this.background
    Object.keys(background).forEach(k => {
      backgroundProxy[k] = background[k]
    })
  },
})
