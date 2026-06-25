import { DefinedPropertiesKey } from '../WrappedObject'
import { Group, GroupBehavior } from './Group'
import { Types } from '../enums'
import { Factory } from '../Factory'

/**
 * A backfill for the legacy Artboards. Currently implemented as a Frame.
 * Not to be created directly: use `Group.Frame` or `Group.Graphic` instead.
 */
export class Artboard extends Group {
  constructor(artboard = {}) {
    if (artboard.sketchObject) {
      // We're merely wrapping an existing top-level Frame or Graphic object
      super(artboard)
    } else {
      // We're going to create a new Frame object, which means supplying the right groupBehavior
      super({
        ...artboard,
        groupBehavior: GroupBehavior.Frame,
      })
    }
  }

  getParentArtboard() {
    return undefined
  }
}

Artboard.type = Types.Artboard
Artboard[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }
Factory.registerAlias(Artboard, Group)
