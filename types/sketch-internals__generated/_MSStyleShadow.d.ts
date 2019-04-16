interface _MSStyleShadowUninitialized<InitializedType = _MSStyleShadow> extends MSStylePartUninitialized<_MSStyleShadow> {}
interface _MSStyleShadow extends MSStylePart {

  blurRadius(): CGFloat;
  setBlurRadius(blurRadius: CGFloat): void;
  offsetX(): CGFloat;
  setOffsetX(offsetX: CGFloat): void;
  offsetY(): CGFloat;
  setOffsetY(offsetY: CGFloat): void;
  spread(): CGFloat;
  setSpread(spread: CGFloat): void;
  color(): MSColor;
  setColor(color: MSColor): void;
  contextSettings(): MSGraphicsContextSettings;
  setContextSettings(contextSettings: MSGraphicsContextSettings): void;
}
declare const _MSStyleShadow: {
  alloc(): _MSStyleShadowUninitialized;
  class(): _MSStyleShadow;
}

