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
  defaultFillColor(): NSColor;
  drawBasicFill_colorSpace_enabled_inRect(basicFill: MSStyleBasicFill, colorSpace: NSColorSpace, enabled: boolean, frame: NSRect): void;
  drawCheckerboardBackgroundInRect(r: NSRect): void;
  drawCheckerboardBackgroundInRect_checkerboardSize_forDarkAppearance_backgroundColor(r: NSRect, checkerboardSize: CGFloat, dark: boolean, backgroundColor: NSColor): void;
  drawColor_enabled_inRect(color: NSColor, enabled: boolean, frame: NSRect): void;
  drawColor_enabled_inRect_checkerboardSize_forDarkAppearance(color: NSColor, enabled: boolean, frame: NSRect, checkerboardSize: CGFloat, dark: boolean): void;
}

