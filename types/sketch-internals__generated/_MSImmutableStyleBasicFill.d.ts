interface _MSImmutableStyleBasicFillUninitialized<InitializedType = _MSImmutableStyleBasicFill> extends MSImmutableStylePartUninitialized<_MSImmutableStyleBasicFill> {}
interface _MSImmutableStyleBasicFill extends MSImmutableStylePart {

  fillType(): BCFillType;
  color(): MSImmutableColor;
  contextSettings(): MSImmutableGraphicsContextSettings;
  gradient(): MSImmutableGradient;
}
declare const _MSImmutableStyleBasicFill: {
  alloc(): _MSImmutableStyleBasicFillUninitialized;
  class(): _MSImmutableStyleBasicFill;
}

