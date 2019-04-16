interface _MSStyledLayerUninitialized<InitializedType = _MSStyledLayer> extends MSLayerUninitialized<_MSStyledLayer> {}
interface _MSStyledLayer extends MSLayer {

  clippingMaskMode(): NSInteger;
  setClippingMaskMode(clippingMaskMode: NSInteger): void;
  hasClippingMask(): boolean;
  setHasClippingMask(hasClippingMask: boolean): void;
  sharedStyleID(): NSString;
  setSharedStyleID(sharedStyleID: NSString | string): void;
  style(): MSStyle;
  setStyle(style: MSStyle): void;
}
declare const _MSStyledLayer: {
  alloc(): _MSStyledLayerUninitialized;
  class(): _MSStyledLayer;
}

