interface _MSImmutableHotspotLayerUninitialized<InitializedType = _MSImmutableHotspotLayer> extends MSImmutableLayerUninitialized<_MSImmutableHotspotLayer> {}
interface _MSImmutableHotspotLayer extends MSImmutableLayer {
}
declare const _MSImmutableHotspotLayer: {
  alloc(): _MSImmutableHotspotLayerUninitialized;
  class(): _MSImmutableHotspotLayer;
}

