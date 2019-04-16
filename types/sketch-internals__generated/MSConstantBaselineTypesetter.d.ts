interface MSConstantBaselineTypesetterUninitialized<InitializedType = MSConstantBaselineTypesetter> extends NSATSTypesetterUninitialized<MSConstantBaselineTypesetter> {}
interface MSConstantBaselineTypesetter extends NSATSTypesetter {
  constantBaselineGlyphRangeForGlyphLocation(location: NSUInteger): NSRange;
  invalidateLayoutFromGlyphLocation(location: NSUInteger): void;
}
declare const MSConstantBaselineTypesetter: {
  alloc(): MSConstantBaselineTypesetterUninitialized;
  class(): MSConstantBaselineTypesetter;
}

