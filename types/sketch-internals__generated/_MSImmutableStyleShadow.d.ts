interface _MSImmutableStyleShadowUninitialized<InitializedType = _MSImmutableStyleShadow> extends MSImmutableStylePartUninitialized<_MSImmutableStyleShadow> {}

interface _MSImmutableStyleShadow extends MSImmutableStylePart {

  blurRadius(): CGFloat;
  offsetX(): CGFloat;
  offsetY(): CGFloat;
  spread(): CGFloat;
  color(): MSImmutableColor;
  contextSettings(): MSImmutableGraphicsContextSettings;
}

declare const _MSImmutableStyleShadow: {
  alloc(): _MSImmutableStyleShadowUninitialized;
  class(): _MSImmutableStyleShadow;
}

