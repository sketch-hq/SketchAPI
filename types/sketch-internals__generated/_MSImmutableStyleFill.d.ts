interface _MSImmutableStyleFillUninitialized<InitializedType = _MSImmutableStyleFill> extends MSImmutableStyleBasicFillUninitialized<_MSImmutableStyleFill> {}

interface _MSImmutableStyleFill extends MSImmutableStyleBasicFill {

  image(): MSImageData;
  noiseIndex(): NSInteger;
  noiseIntensity(): CGFloat;
  patternFillType(): MSPatternFillType;
  patternTileScale(): CGFloat;
}

declare const _MSImmutableStyleFill: {
  alloc(): _MSImmutableStyleFillUninitialized;
  class(): _MSImmutableStyleFill;
}

