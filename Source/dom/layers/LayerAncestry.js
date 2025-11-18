import { toArray } from 'util'

export class LayerAncestry {
  constructor(options) {
    if (options.ancestry) {
      this._object = options.ancestry
    } else if (options.layer) {
      this._object = MSImmutableLayerAncestry.alloc().initWithLayers_inDocument(
        [options.layer._object],
        MSImmutableDocumentData.alloc().init()
      )
    } else {
      throw new Error('LayerAncestry requires either ancestry or layer option')
    }
  }

  appending(layer) {
    const newNativeAncestry = this._object.ancestryByAppendingLayer(
      layer._object
    )
    return new LayerAncestry({ ancestry: newNativeAncestry })
  }

  copy() {
    const newNativeAncestry = this._object.copy()
    return new LayerAncestry({ ancestry: newNativeAncestry })
  }

  objectIDs() {
    return toArray(this._object.layerIDs())
  }
}
