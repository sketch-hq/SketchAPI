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
import { StylePartType } from '../style/StylePartType'

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

    // We want to apply a default background to some new Frames, but since the exact
    // default background color depends on whether it's a canvas-level Frame or
    // a nested one, we have to defer applying it until this Frame has a parent
    const needsDefaultFrameBackground =
      createdNewNativeObject &&
      this.isFrame &&
      !group.background &&
      this.type !== Types.SymbolMaster
    Object.defineProperty(
      this,
      '_shouldApplyDefaultFrameBackgroundAfterInsert',
      {
        enumerable: false,
        writable: true,
        value: needsDefaultFrameBackground,
      }
    )
    if (group.parent) {
      // This layer has been created with the parent property like this:
      //     const group = new Group({ parent: someParent })
      // Layer.parent setter calls adjustAfterInsert() automatically but since
      // the _shouldApplyDefaultFrameBackgroundAfterInsert flag is only set after super(),
      // it will be a no-op. Instead, we call adjustAfterInsert() manually here to cover this case
      this.adjustAfterInsert()
    }
  }

  adjustAfterInsert() {
    if (this._shouldApplyDefaultFrameBackgroundAfterInsert) {
      this._object.adjustAfterInsert()
      this._shouldApplyDefaultFrameBackgroundAfterInsert = false
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

  convertToGroup() {
    if (this.isImmutable()) {
      return
    }
    if (this.type === Types.SymbolMaster) {
      // Symbol sources must be Frames or Graphics
      return
    }
    if (this.layers.length === 0) {
      // Plain groups can't be empty
      return
    }
    this._object.convertToGroup()
  }

  convertToFrame() {
    if (this.isImmutable()) {
      return
    }
    this._object.convertToFrame()
  }

  convertToGraphic() {
    if (this.isImmutable()) {
      return
    }
    this._object.convertToGraphic()
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
  enumerable: false,
  exportable: false,
  get() {
    console.warn(
      'Group.groupBehavior *getter* is deprecated. Use Group.isFrame and Group.isGraphicFrame instead.'
    )
    if (this.isGraphicFrame) {
      return GroupBehavior.Graphic
    } else if (this.isFrame) {
      return GroupBehavior.Frame
    }
    return GroupBehavior.Default
  },
  set(value) {
    if (this.isImmutable()) return

    let desiredBehavior
    if (typeof value === 'string') {
      desiredBehavior = GroupBehavior[value]
    } else {
      desiredBehavior = value
    }

    switch (desiredBehavior) {
      case GroupBehavior.Frame:
        this.convertToFrame()
        break
      case GroupBehavior.Graphic:
        this.convertToGraphic()
        break
      case GroupBehavior.Default:
        // This is not really what the "default" behavior means, but since we want
        // container types to be explicit (i.e. either Frame, Graphic, or Group) we
        // have to loose precision here and treat it as "convert to a plain group" request
        this.convertToGroup()
        break
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
    toArray(_layers)
      .map(wrapObject)
      .forEach((layer) => {
        layer.adjustAfterInsert?.()
      })
    this.style.corners.setNeedsUpdateConcentricCorners()
  },
  insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined
    }
    const layer = wrapObject(item)
    const currentParent = wrapObject(layer._object.parentGroup())

    if (currentParent?.isEqual(this)) {
      // This layer is already in the group, we just need to move it to the right index
      const oldIndex = layer.index
      // The proposed new index is clamped to [0...length-1]
      const safeNewIndex = Math.max(
        Math.min(currentParent.layers.length - 1, index),
        0
      )
      if (
        typeof oldIndex !== 'number' ||
        oldIndex === NSNotFound ||
        oldIndex === safeNewIndex
      ) {
        return layer
      }
      this._object.moveLayerFromIndex_toIndex(oldIndex, safeNewIndex)
      return layer
    } else if (currentParent) {
      // This layer belongs to another group, we need to remove it from there first
      layer.remove()
    }
    this._object.insertLayer_atIndex(layer._object, index)
    this.style.corners.setNeedsUpdateConcentricCorners()

    layer.adjustAfterInsert?.()
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
      // Match the app behavior that adjusts the group sizing upon applying a stack layout to it
      layout.adjustParentGroupSizing()
      // We define `padding` on StackLayout itself as a convenient proxy for the corresponding
      // property of its parent group. Because of that we postpone applying a padding value
      // until the stack layout has actually been added to a parent group. The padding itself
      // may be undefined, which will acts as a reset to default (i.e. no padding)
      layout.update({ padding })
    } else {
      this._object.setGroupLayout(MSFreeformGroupLayout.alloc().init())
      // The padding is currently tied to a stack layout, see the comment above
      this._object.setPaddingSelection(0)
      this._object.setTopPadding(0)
    }
  },
})

Group.define('isFrame', {
  importable: false,
  get() {
    return Boolean(this._object.hasFrameTrait())
  },
})

Group.define('isGraphicFrame', {
  importable: false,
  get() {
    return Boolean(this._object.hasGraphicTrait())
  },
})

Group.define('isTemplate', {
  importable: true,
  get() {
    return Boolean(this._object.isTemplate())
  },
  set(isTemplate) {
    if (this.isImmutable()) {
      return
    }
    this._object.setIsTemplate(Boolean(isTemplate))
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

Group.define('clipsContents', {
  get() {
    if (!this.isFrame) {
      return undefined
    }
    return Boolean(Number(this._object.clipsContents()))
  },
  set(value) {
    if (this.isImmutable() || !this.isFrame) {
      return
    }
    // clippingBehavior enum: 0 = default, 1 = clipToBounds, 2 = none
    const newBehavior = value ? 1 : 2
    this._object.setClippingBehavior(newBehavior)
  },
})

Group.defineObject(
  'background',
  {
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
            style.addStylePartOfType(StylePartType.Fill)
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
          this._object.style().fills().length === 0 ||
          !this._object.style().firstEnabledFill?.()
        ) {
          // Add a fill if no suitable candidates exist
          this._object.style().addStylePartOfType(StylePartType.Fill)
        }
        const firstFill = this._object.style().firstEnabledFill()
        firstFill.color = Color.from(color).toMSColor()
      },
    },
  },
  {
    // Only Frames can have a background, so we postpone assignments until a `groupBehavior` is set
    depends: 'groupBehavior',
  }
)

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
