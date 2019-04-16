interface _MSBitmapLayerUninitialized<InitializedType = _MSBitmapLayer> extends MSStyledLayerUninitialized<_MSBitmapLayer> {}
interface _MSBitmapLayer extends MSStyledLayer {

  clippingMask(): NSRect;
  setClippingMask(clippingMask: NSRect): void;
  fillReplacesImage(): boolean;
  setFillReplacesImage(fillReplacesImage: boolean): void;
  image(): MSImageData;
  setImage(image: MSImageData): void;
  intendedDPI(): NSInteger;
  setIntendedDPI(intendedDPI: NSInteger): void;
}
declare const _MSBitmapLayer: {
  alloc(): _MSBitmapLayerUninitialized;
  class(): _MSBitmapLayer;
}

