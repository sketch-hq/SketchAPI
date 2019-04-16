interface _MSImmutableBitmapLayerUninitialized<InitializedType = _MSImmutableBitmapLayer> extends MSImmutableStyledLayerUninitialized<_MSImmutableBitmapLayer> {}
interface _MSImmutableBitmapLayer extends MSImmutableStyledLayer {

  clippingMask(): NSRect;
  fillReplacesImage(): boolean;
  image(): MSImageData;
  intendedDPI(): NSInteger;
}
declare const _MSImmutableBitmapLayer: {
  alloc(): _MSImmutableBitmapLayerUninitialized;
  class(): _MSImmutableBitmapLayer;
}

