interface MSImmutableBitmapLayerUninitialized<InitializedType = MSImmutableBitmapLayer> extends _MSImmutableBitmapLayerUninitialized<MSImmutableBitmapLayer> {}
interface MSImmutableBitmapLayer extends _MSImmutableBitmapLayer {
  NSImage(): NSImage;

  fillReplacesImage(): boolean;
  setFillReplacesImage(fillReplacesImage: boolean): void;
  image(): MSImageData;
  setImage(image: MSImageData): void;
}
declare const MSImmutableBitmapLayer: {
  alloc(): MSImmutableBitmapLayerUninitialized;
  class(): MSImmutableBitmapLayer;
}

