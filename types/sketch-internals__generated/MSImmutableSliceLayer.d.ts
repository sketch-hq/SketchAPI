interface MSImmutableSliceLayerUninitialized<InitializedType = MSImmutableSliceLayer> extends _MSImmutableSliceLayerUninitialized<MSImmutableSliceLayer> {}
interface MSImmutableSliceLayer extends _MSImmutableSliceLayer, IMSLayerWithBackgroundColor {
}
declare const MSImmutableSliceLayer: {
  alloc(): MSImmutableSliceLayerUninitialized;
  class(): MSImmutableSliceLayer;
}

