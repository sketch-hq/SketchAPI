import { DefinedPropertiesKey } from '../WrappedObject'
import { Layer } from './Layer'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'

/**
 * A Sketch HotSpot.
 */
export class HotSpot extends Layer {
  /**
   * Make a new hotspot.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(artboard = {}) {
    if (!artboard.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      artboard.sketchObject = Factory.createNative(HotSpot)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }
    super(artboard)
  }

  static fromLayer(layer) {
    const wrappedObject = wrapObject(layer)
    if (!wrappedObject || !wrappedObject.flow || !wrappedObject.flow.targetId) {
      throw new Error(
        'Can only create a HotSpot from a layer with an existing flow'
      )
    }
    return new HotSpot({
      sketchObject: MSHotspotLayer.hotspotLayerFromLayer(
        wrappedObject.sketchObject
      ),
    })
  }
}

HotSpot.type = Types.HotSpot
HotSpot[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(HotSpot, MSHotspotLayer)
Factory.registerClass(HotSpot, MSImmutableHotspotLayer)

delete HotSpot[DefinedPropertiesKey].exportFormats
delete HotSpot[DefinedPropertiesKey].transform
