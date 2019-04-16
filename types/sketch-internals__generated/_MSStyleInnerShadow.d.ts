interface _MSStyleInnerShadowUninitialized<InitializedType = _MSStyleInnerShadow> extends MSStyleShadowUninitialized<_MSStyleInnerShadow> {}

interface _MSStyleInnerShadow extends MSStyleShadow {
}

declare const _MSStyleInnerShadow: {
  alloc(): _MSStyleInnerShadowUninitialized;
  class(): _MSStyleInnerShadow;
}

