import { toArray } from 'util'
import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapNativeObject, wrapObject } from '../wrapNativeObject'
import { SmartLayout } from '../models/SmartLayout'

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
    if (!group.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      group.sketchObject = Factory.createNative(Group)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(group)
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
    this._object.legacyFixGeometryWithOptions(0)
    return this
  }
}

Group.type = Types.Group
Group[DefinedPropertiesKey] = { ...StyledLayer[DefinedPropertiesKey] }
Factory.registerClass(Group, MSLayerGroup)
Factory.registerClass(Group, MSImmutableLayerGroup)

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
    return toArray(this._object.layers()).map(wrapNativeObject)
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
  return Object.keys(GroupBehavior).find(
    (key) => GroupBehavior[key] === value
  )
}
