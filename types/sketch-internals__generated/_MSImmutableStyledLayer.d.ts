interface _MSImmutableStyledLayerUninitialized<InitializedType = _MSImmutableStyledLayer> extends MSImmutableLayerUninitialized<_MSImmutableStyledLayer> {}

interface _MSImmutableStyledLayer extends MSImmutableLayer {

  clippingMaskMode(): NSInteger;
  hasClippingMask(): boolean;
  sharedStyleID(): NSString;
  style(): MSImmutableStyle;
}

declare const _MSImmutableStyledLayer: {
  alloc(): _MSImmutableStyledLayerUninitialized;
  class(): _MSImmutableStyledLayer;
}

