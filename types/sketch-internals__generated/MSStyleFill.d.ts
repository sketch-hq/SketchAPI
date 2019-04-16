interface MSStyleFillUninitialized<InitializedType = MSStyleFill> extends _MSStyleFillUninitialized<MSStyleFill> {}

interface MSStyleFill extends _MSStyleFill, IMSImageOwner {
  CSSAttributeString(): NSString;
  hasOpacity(): boolean;
  setOpacity(opacity: CGFloat): void;
  NSImage(): NSImage;
  setReducedImage(image: MSImageData): void;

  interfaceOpacity(): CGFloat;
  setInterfaceOpacity(interfaceOpacity: CGFloat): void;
  image(): MSImageData;
  setImage(image: MSImageData): void;
  targetSizeForReduction(): NSSize;
  canReduceImageSize(): boolean;
}

declare const MSStyleFill: {
  alloc(): MSStyleFillUninitialized;
  class(): MSStyleFill;
}

