interface _MSImmutableSliceLayerUninitialized<InitializedType = _MSImmutableSliceLayer> extends MSImmutableLayerUninitialized<_MSImmutableSliceLayer> {}
interface _MSImmutableSliceLayer extends MSImmutableLayer {

  hasBackgroundColor(): boolean;
  backgroundColor(): MSImmutableColor;
}
declare const _MSImmutableSliceLayer: {
  alloc(): _MSImmutableSliceLayerUninitialized;
  class(): _MSImmutableSliceLayer;
}

