interface MSImmutableHotspotLayerUninitialized<InitializedType = MSImmutableHotspotLayer> extends _MSImmutableHotspotLayerUninitialized<MSImmutableHotspotLayer> {}

interface MSImmutableHotspotLayer extends _MSImmutableHotspotLayer {
}

declare const MSImmutableHotspotLayer: {
  alloc(): MSImmutableHotspotLayerUninitialized;
  class(): MSImmutableHotspotLayer;
}

