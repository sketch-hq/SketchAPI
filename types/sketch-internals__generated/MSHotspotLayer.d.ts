interface MSHotspotLayerUninitialized<InitializedType = MSHotspotLayer> extends _MSHotspotLayerUninitialized<MSHotspotLayer> {}

interface MSHotspotLayer extends _MSHotspotLayer {
}

declare const MSHotspotLayer: {
  alloc(): MSHotspotLayerUninitialized;
  class(): MSHotspotLayer;
  hotspotLayerFromLayer(layer: MSLayer): MSHotspotLayer;
}

