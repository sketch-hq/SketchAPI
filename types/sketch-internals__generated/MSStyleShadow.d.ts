interface MSStyleShadowUninitialized<InitializedType = MSStyleShadow> extends _MSStyleShadowUninitialized<MSStyleShadow> {}
interface MSStyleShadow extends _MSStyleShadow, IMSColorConvertible {
  CSSAttributeString(): NSString;
}
declare const MSStyleShadow: {
  alloc(): MSStyleShadowUninitialized;
  class(): MSStyleShadow;
}

