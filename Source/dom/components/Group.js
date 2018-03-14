import { DefinedPropertiesKey } from '../WrappedObject'
import { Layer } from './Layer'
import { Rectangle } from '../Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { toArray } from '../utils'
import { wrapNativeObject, wrapObject } from '../wrapNativeObject'

/**
 * Represents a group of layers.
 */
export class Group extends Layer {
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
    this._object.resizeToFitChildrenWithOption_(0)
    return this
  }
}

Group.type = Types.Group
Group[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(Group, MSLayerGroup)

Group.define('layers', {
  get() {
    return toArray(this._object.layers()).map(wrapNativeObject)
  },
  set(layers) {
    // remove the existing layers
    toArray(this._object.layers()).forEach(l => l.removeFromParent())

    toArray(layers)
      .map(wrapObject)
      .forEach(layer => {
        layer.parent = this // eslint-disable-line
      })
  },
})
