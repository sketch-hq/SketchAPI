interface _MSStyleFillUninitialized<InitializedType = _MSStyleFill> extends MSStyleBasicFillUninitialized<_MSStyleFill> {}
interface _MSStyleFill extends MSStyleBasicFill {

  image(): MSImageData;
  setImage(image: MSImageData): void;
  noiseIndex(): NSInteger;
  setNoiseIndex(noiseIndex: NSInteger): void;
  noiseIntensity(): CGFloat;
  setNoiseIntensity(noiseIntensity: CGFloat): void;
  patternFillType(): MSPatternFillType;
  setPatternFillType(patternFillType: MSPatternFillType): void;
  patternTileScale(): CGFloat;
  setPatternTileScale(patternTileScale: CGFloat): void;
}
declare const _MSStyleFill: {
  alloc(): _MSStyleFillUninitialized;
  class(): _MSStyleFill;
}

