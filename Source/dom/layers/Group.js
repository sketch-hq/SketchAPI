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
import { VariantProperty } from '../models/VariantProperty'
import { parseEnumValue } from '../utils'

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
      // User didn't provide an explicit background configuration
      !group.background &&
      // User didn't provide any explicit fills
      !group.style?.fills &&
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

  /**
   * Turns this container into a plain Group, matching the Layer Type popup in the app.
   *
   * A no-op for a container whose type is fixed: a symbol source (which must be a Frame or a
   * Graphic), an empty group (plain groups can't be empty), and a variant set (see
   * {@link Group#convertToFrame}).
   *
   * @returns {boolean} Whether the container was converted.
   */
  convertToGroup() {
    if (this.isImmutable()) {
      return false
    }
    return Boolean(this._object.convertToGroup())
  }

  /**
   * Turns this container into a Frame, matching the Layer Type popup in the app.
   *
   * A no-op for a variant set: variant sets have a fixed container type, and the app's
   * Layer Type popup leaves them out for the same reason. Converting a variant set would also
   * lose its variant state — use the app's Remove Component to dismantle one.
   *
   * @returns {boolean} Whether the container was converted.
   */
  convertToFrame() {
    if (this.isImmutable()) {
      return false
    }
    return Boolean(this._object.convertToFrame())
  }

  /**
   * Turns this container into a Graphic, matching the Layer Type popup in the app.
   *
   * A no-op for a variant set — see {@link Group#convertToFrame}.
   *
   * @returns {boolean} Whether the container was converted.
   */
  convertToGraphic() {
    if (this.isImmutable()) {
      return false
    }
    return Boolean(this._object.convertToGraphic())
  }

  /**
   * Turns this container into a Section, matching the Layer Type popup in the app.
   *
   * A no-op for a container whose type is fixed (see {@link Group#convertToGroup}),
   * or a container whose parent cannot contain a section.
   *
   * @returns {boolean} Whether the container was converted.
   */
  convertToSection() {
    if (this.isImmutable()) {
      return false
    }
    return Boolean(this._object.convertToSection())
  }

  ungroup() {
    if (this.isImmutable()) {
      return [this]
    }
    return toArray(this._object.ungroup()).map(wrapObject)
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

/**
 * A section: a layer group (with the section trait) that acts as a top-level container between the
 * page and its frames. Sections have a fixed size, can be nested in other sections, and can only be
 * placed on a page or inside another section.
 *
 * Like {@link Group.Frame}, this is a creation-only flavor of `Group`, not a distinct type: it
 * makes a well-formed section, but a section read back from the document is a plain {@link Group}.
 * Recognize one with `group.isSection`, and find the enclosing one with `layer.getParentSection()`.
 *
 * Note that a {@link Group.VariantSet} also carries the section trait, so it reports
 * `isSection === true`. Check `isVariantSet` first when the distinction matters.
 */
Group.Section = class Section extends Group {
  /**
   * Makes a new, well-formed section — empty, or wrapping the given `layers`.
   *
   * Like `new Group({ layers })`, the section comes back with no parent: wrapping layers doesn't
   * decide where the section belongs, and a section may only sit on a page or inside another
   * section. Pass `parent`, or set it afterwards, to place it.
   */
  constructor(group = {}) {
    if (!group.sketchObject) {
      const { layers, ...rest } = group
      // Build through the native factory rather than letting the `layers` setter in `super()` add
      // them afterwards: `MSLayerGroup.makeSectionWithLayers_insertingIntoSourceParent` also sizes the section to fit its contents.
      // The factory sizes the section to fit its layers, which the `layers` setter in `super()`
      // wouldn't. It's told not to insert the section next to them: a section may only sit on a
      // page or inside another section, so where its contents lived isn't necessarily somewhere it
      // may go. Like `new Group({ layers })`, it comes back unparented for the caller to place —
      // `super()` still honors an explicit `parent`.
      const sketchObject = layers
        ? MSLayerGroup.makeSectionWithLayers_insertingIntoSourceParent(
            toArray(layers).map((layer) => wrapObject(layer).sketchObject),
            false
          )
        : MSLayerGroup.makeSectionWithFrame(
            new Rectangle(0, 0, 100, 100).asCGRect()
          )
      super({ ...rest, sketchObject })
      return
    }
    super(group)
  }
}

Group.VariantSet = class VariantSet extends Group {
  constructor(group = {}) {
    const name = group.name || ''
    if (!group.sketchObject) {
      const layers = group.layers?.map(wrapObject) || []
      const allLayersAreMasters = layers.every((layer) => {
        return layer.type === Types.SymbolMaster
      })
      if (allLayersAreMasters) {
        // Pass symbol masters to the specialized constructor directly, bypassing
        // the normal `layers` setter in super()
        // Pass symbol masters to the specialized constructor directly, bypassing the normal
        // `layers` setter in super(): it also constrains them as variants and derives the set's
        // properties from their names. It's told not to insert the set next to them — a variant
        // set carries the section trait, so where its masters lived isn't necessarily somewhere it
        // may go. Like `new Group({ layers })`, it comes back unparented for the caller to place.
        delete group.layers
        group.sketchObject = MSLayerGroup.makeVariantSetFromSources_withName_insertingIntoSourceParent(
          layers.map((layer) => layer.sketchObject),
          name,
          false
        )
      } else {
        // Create an empty variant set, then let the `layers` setter deal with
        // adding children layers in super()
        group.sketchObject = MSLayerGroup.makeVariantSetFromSources_withName_insertingIntoSourceParent(
          [],
          name,
          false
        )
      }
    }

    super(group)
  }

  getBestVariantMasterForConfiguration(configuration) {
    if (this.isImmutable()) {
      return undefined
    }

    if (typeof configuration !== 'object') {
      throw Error('Expected `configuration` to be an object')
    }
    for (const [propertyName, valueName] of Object.entries(configuration)) {
      const property = this.variantProperties.find(
        (p) => p.name === propertyName
      )
      if (!property) {
        throw Error(
          `Unknown variant property ${propertyName}. Available properties: ${this.variantProperties.map(
            (p) => p.name
          )}`
        )
      }

      if (!property.values.includes(valueName)) {
        throw Error(
          `Unknown value ${valueName} for the variant property <${propertyName}>. Available values: ${property.values}`
        )
      }
    }

    const nativeVariantMaster = this._object.bestVariantMasterForConfiguration(
      configuration
    )
    return wrapObject(nativeVariantMaster, Types.SymbolMaster)
  }
}

Group.VariantSet[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }

Group.VariantSet.define('defaultVariantMaster', {
  exportable: false,
  importable: false,
  enumerable: false,
  get() {
    if (this.isImmutable()) {
      return undefined
    }
    return wrapObject(this._object.defaultVariantMaster(), Types.SymbolMaster)
  },
})

Group.VariantSet.define('variantProperties', {
  array: true,
  get() {
    return toArray(this._object.variantProperties()).map((nativeProperty) => {
      return VariantProperty.fromNative(nativeProperty)
    })
  },
  set(rawVariantProperties) {
    if (this.isImmutable()) {
      return
    }
    const currentProperties = this.variantProperties
    const proposedProperties = rawVariantProperties.map((raw) => {
      return Factory.create(VariantProperty, raw)
    })
    // We match variant properties by their names only
    const toAdd = proposedProperties.filter((prop) => {
      return !currentProperties.some((current) => current.name === prop.name)
    })
    const toRemove = currentProperties.filter((prop) => {
      return !proposedProperties.some((proposed) => proposed.name === prop.name)
    })
    const toUpdate = currentProperties.filter((prop) => {
      return proposedProperties.some((proposed) => proposed.name === prop.name)
    })

    toAdd.forEach((prop) => {
      this._object.addVariantProperty(prop._object)
    })
    toRemove.forEach((prop) => {
      this._object.removeVariantProperty(prop._object)
    })
    toUpdate.forEach((prop) => {
      const updated = proposedProperties.find(
        (proposed) => proposed.name === prop.name
      )
      if (updated && Array.isArray(updated.values)) {
        prop.values = updated.values
      }
    })
  },
  insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined
    }
    const newProperty = wrapObject(item, Types.VariantProperty)
    this._object.insertVariantProperty_atIndex(newProperty._object, index)
    return newProperty
  },
  removeItem(index) {
    if (this.isImmutable()) {
      return undefined
    }
    this._object.removeVariantPropertyAtIndex(index)
  },
})

Group.define('groupBehavior', {
  enumerable: false,
  exportable: false,
  get() {
    console.warn(
      'Group.groupBehavior is deprecated. Use Group.isFrame, Group.isGraphicFrame, or Group.isVariantSet instead.'
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

    const desiredBehavior = parseEnumValue(
      value,
      GroupBehavior,
      'Group.groupBehavior'
    )
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
    item.remove()
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

Group.define('isVariantSet', {
  importable: false,
  get() {
    return Boolean(this._object.hasVariantSetTrait())
  },
})

Group.define('isVariant', {
  importable: false,
  get() {
    if (this.isImmutable()) {
      return false
    }
    return Boolean(this._object.isVariant())
  },
})

/**
 * Whether this group is a section. Mirrors the native trait, so a variant set — which carries the
 * section trait too — also reports `true`. Check `isVariantSet` first when the distinction matters.
 */
Group.define('isSection', {
  importable: false,
  get() {
    return Boolean(this._object.isSection())
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
  /**
   * Whether this group is a prototype start point.
   *
   * Making a section one throws, and a variant set carries the section trait too, so it is
   * rejected the same way. Clearing the flag is always allowed. The app only ever sets this on
   * a canvas Frame, but we don't require one here: a Frame is commonly created with this
   * property before it is given a parent, and only then becomes a canvas Frame.
   */
  set(isFlowStartHome) {
    if (this.isImmutable()) {
      return
    }
    if (isFlowStartHome && this.isSection) {
      throw new Error("Can't make a Section a prototype start point")
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
          this._parent.isFrame && !!this._object.style?.().firstEnabledFill?.()
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
