interface MSStyleFillUninitialized<InitializedType = MSStyleFill> extends _MSStyleFillUninitialized<MSStyleFill> {}
interface MSStyleFill extends _MSStyleFill, IMSImageOwner {
  CSSAttributeString(): NSString;
  hasOpacity(): boolean;
  setOpacity(opacity: CGFloat): void;
  NSImage(): NSImage;

  interfaceOpacity(): CGFloat;
  setInterfaceOpacity(interfaceOpacity: CGFloat): void;
}
declare const MSStyleFill: {
  alloc(): MSStyleFillUninitialized;
  class(): MSStyleFill;
}

