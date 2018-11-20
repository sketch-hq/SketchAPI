import { DefinedPropertiesKey } from '../WrappedObject'
import { Layer } from './Layer'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'

/**
 * Represents a slice.
 */
export class Slice extends Layer {
  constructor(group = {}) {
    if (!group.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      group.sketchObject = Factory.createNative(Slice)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(group)
  }
}

Slice.type = Types.Slice
Slice[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(Slice, MSSliceLayer)
Factory.registerClass(Slice, MSImmutableSliceLayer)

delete Slice[DefinedPropertiesKey].flow
