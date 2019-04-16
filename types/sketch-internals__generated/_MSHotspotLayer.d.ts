interface _MSHotspotLayerUninitialized<InitializedType = _MSHotspotLayer> extends MSLayerUninitialized<_MSHotspotLayer> {}
interface _MSHotspotLayer extends MSLayer {
}
declare const _MSHotspotLayer: {
  alloc(): _MSHotspotLayerUninitialized;
  class(): _MSHotspotLayer;
}

