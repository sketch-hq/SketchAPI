import { toArray } from 'util'
import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapNativeObject, wrapObject } from '../wrapNativeObject'
import { SmartLayout } from '../models/SmartLayout'
import { StackLayout } from '../models/StackLayout'
import { Color, colorToString } from '../style/Color'
import { LayerAncestry } from './LayerAncestry'

/**
 * Represents a group of layers.
 */
export class Group extends StyledLayer {
  /**
   * Make a new group object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(group = {}) {
    let createdNewNativeObject = false
    if (!group.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      group.sketchObject = Factory.createNative(Group)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
      createdNewNativeObject = true
    }

    super(group)

    // Mimics behaviour implemented at the controller level where they call
    // `MSLayer.adjustAfterInsert()` which will apply the default styling.
    if (createdNewNativeObject && this.isFrame) {
      const isCanvasFrame =
        this._object.isCanvasFrame && this._object.isCanvasFrame()
      const isEmptyNestedFrame = !isCanvasFrame && this.layers.length === 0
      const noBackgroundOverride = !group.background
      if ((isCanvasFrame || isEmptyNestedFrame) && noBackgroundOverride) {
        this.background.enabled = true
      }
    }
  }

  // @deprecated
  pageRectToLocalRect(rect) {
    console.warn(
      'Group.pageRectToLocalRect(rect) is deprecated. Use rect.changeBasis({ to: group }) instead'
    )
    return rect.changeBasis({
      to: this,
    })
  }

  /**
   * Adjust the group to fit its children.
   */
  adjustToFit() {
    if (this.isImmutable()) {
      return this
    }
    this._object.resizeToFitChildren()
    return this
  }
}

Group.type = Types.Group
Group[DefinedPropertiesKey] = { ...StyledLayer[DefinedPropertiesKey] }
Factory.registerClass(Group, MSLayerGroup)
Factory.registerClass(Group, MSImmutableLayerGroup)

Group.Frame = class Frame extends Group {
  constructor(group = {}) {
    super({
      ...group,
      groupBehavior: GroupBehavior.Frame,
    })
  }
}

Group.Graphic = class Graphic extends Group {
  constructor(group = {}) {
    super({
      ...group,
      groupBehavior: GroupBehavior.Graphic,
    })
  }
}

Group.define('groupBehavior', {
  get() {
    return this._object.groupBehavior()
  },
  set(value) {
    if (this.isImmutable()) return
    if (typeof value === 'string') {
      this._object.setGroupBehavior(GroupBehavior[value])
    } else {
      this._object.setGroupBehavior(value)
    }
  },
})

Group.define('layers', {
  array: true,
  get() {
    return toArray(this._object.layers()).map((nativeLayer) => {
      let wrapped = wrapNativeObject(nativeLayer)
      // See SymbolInstance.overridesForExpandedLayer() for details
      if (wrapped.isNestedSymbol) {
        wrapped._detachedSymbolAncestry =
          this._detachedSymbolAncestry?.appending(wrapped) ||
          new LayerAncestry({ layer: wrapped })
      } else if (this._detachedSymbolAncestry) {
        wrapped._detachedSymbolAncestry = this._detachedSymbolAncestry.copy()
      }
      return wrapped
    })
  },
  set(_layers) {
    if (this.isImmutable()) {
      return
    }
    // remove the existing layers
    this._object.removeAllLayers()

    const layers = toArray(_layers)
      .map(wrapObject)
      .map((l) => l._object)

    // remove the layers from their parent
    layers.forEach((l) => {
      if (l.parentGroup()) {
        l.removeFromParent()
      }
    })

    this._object.addLayers(layers)
    this.style.corners._applyConcentricCornersOnChildren()
  },
  insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined
    }
    const layer = wrapObject(item)
    if (layer._object.parentGroup()) {
      layer._object.removeFromParent()
    }
    this._object.insertLayer_atIndex(layer._object, index)
    this.style.corners._applyConcentricCornersOnChildren()

    return layer
  },
  removeItem(index) {
    if (this.isImmutable()) {
      return undefined
    }
    const item = wrapNativeObject(this._object.layers()[index])
    this._object.removeLayerAtIndex(index)
    return item
  },
})

Group.define('smartLayout', {
  get() {
    const groupLayout = this._object.groupLayout() || {}
    if (!groupLayout.isKindOfClass(MSInferredGroupLayout)) return null
    // Normalise groupLayout to one of our presets, or return null if there's no match
    for (const key in SmartLayout) {
      if (
        SmartLayout[key].axis === (groupLayout.axis || (() => {}))() &&
        SmartLayout[key].layoutAnchor ===
          (groupLayout.layoutAnchor || (() => {}))()
      ) {
        return SmartLayout[key]
      }
    }
    return null
  },
  set(_smartLayout) {
    if (this.isImmutable()) return
    const smartLayout = _smartLayout || {}
    let layout
    for (const key in SmartLayout) {
      if (
        SmartLayout[key].axis === smartLayout.axis &&
        SmartLayout[key].layoutAnchor === smartLayout.layoutAnchor
      ) {
        layout = SmartLayout[key]
      }
    }
    if (layout) {
      const groupLayout = MSInferredGroupLayout.alloc().init()
      groupLayout.axis = layout.axis
      groupLayout.layoutAnchor = layout.layoutAnchor
      this._object.setGroupLayout(groupLayout)
    } else {
      this._object.setGroupLayout(MSFreeformGroupLayout.alloc().init())
    }
  },
})

Group.define('stackLayout', {
  get() {
    const groupLayout = this._object.groupLayout() || {}
    if (!groupLayout.isKindOfClass(MSFlexGroupLayout)) {
      return null
    }
    return StackLayout.fromNative(groupLayout)
  },
  set(stackLayout) {
    if (this.isImmutable()) {
      return
    }
    if (stackLayout) {
      const padding = stackLayout.padding
      const layout = new StackLayout(stackLayout)
      this._object.setGroupLayout(layout.sketchObject)
      // We define `padding` on StackLayout itself as a convenient proxy for the corresponding
      // property of its parent group. Because of that we postpone applying a padding value
      // until the stack layout has actually been added to a parent group
      if (padding) {
        layout.update({ padding })
      }
      // Match the app behavior that adjusts the group sizing upon applying a stack layout to it
      layout.adjustParentGroupSizing()
    } else {
      this._object.setGroupLayout(MSFreeformGroupLayout.alloc().init())
    }
  },
})

Group.define('isFrame', {
  importable: false,
  exportable: false,
  enumerable: false,
  get() {
    return (
      this.groupBehavior === GroupBehavior.Frame ||
      this.groupBehavior === GroupBehavior.Graphic
    )
  },
})

Group.define('isGraphicFrame', {
  importable: false,
  exportable: false,
  enumerable: false,
  get() {
    return this.groupBehavior === GroupBehavior.Graphic
  },
})

Group.define('flowStartPoint', {
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

Group.defineObject('background', {
  enabled: {
    get() {
      return (
        this._parent.isFrame &&
        this._object.style &&
        this._object.style().fills &&
        this._object.style().fills().length > 0
      )
    },
    set(enabled) {
      if (this._parent.isImmutable() || !this._parent.isFrame) {
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

/**
 * Defines how a Group should behave.
 */
export const GroupBehavior = {
  /**
   * The default behavior according to other properties of the group.
   *
   * Normally, if no other properties influence the behavior, it will behave like a plain group
   * that fits around its children.
   */
  Default: 0,

  /**
   * A frame has fixed size, and the contents can use different constraints to influence how
   * they adjust when the frame is resized.
   */
  Frame: 1,

  /**
   * A graphic gets both the frame trait and the graphic trait.
   *
   * Graphics are much like frames but the contents don't support constraints, and they resize
   * proportionally instead.
   */
  Graphic: 2,
}

/**
 * Returns the name of a GroupBehavior for a given value.
 *
 * @param {number} value The value of the behavior
 * @return {string} The name of the behavior
 */
export function getGroupBehaviorName(value) {
  return Object.keys(GroupBehavior).find((key) => GroupBehavior[key] === value)
}
