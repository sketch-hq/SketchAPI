interface MSStyleShadowUninitialized<InitializedType = MSStyleShadow> extends _MSStyleShadowUninitialized<MSStyleShadow> {}

interface MSStyleShadow extends _MSStyleShadow, IMSColorConvertible {
  CSSAttributeString(): NSString;
  convertColorsUsing(converter: any): void;
}

declare const MSStyleShadow: {
  alloc(): MSStyleShadowUninitialized;
  class(): MSStyleShadow;
}

