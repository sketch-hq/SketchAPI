interface NSFontUninitialized<InitializedType = NSFont> extends NSObjectUninitialized<NSFont> {}
interface NSFont extends NSObject, INSCopying, INSSecureCoding {
  boundingRectForCGGlyph(glyph: CGGlyph): NSRect;
  advancementForCGGlyph(glyph: CGGlyph): NSSize;
  getBoundingRects_forCGGlyphs_count(bounds: NSRectArray, glyphs: CGGlyph, glyphCount: NSUInteger): void;
  getAdvancements_forCGGlyphs_count(advancements: NSSizeArray, glyphs: CGGlyph, glyphCount: NSUInteger): void;
  set(): void;
  setInContext(graphicsContext: NSGraphicsContext): void;
  glyphWithName(name: NSString | string): NSGlyph;
  boundingRectForGlyph(glyph: NSGlyph): NSRect;
  advancementForGlyph(glyph: NSGlyph): NSSize;
  getBoundingRects_forGlyphs_count(bounds: NSRectArray, glyphs: NSGlyph, glyphCount: NSUInteger): void;
  getAdvancements_forGlyphs_count(advancements: NSSizeArray, glyphs: NSGlyph, glyphCount: NSUInteger): void;
  getAdvancements_forPackedGlyphs_length(advancements: NSSizeArray, packedGlyphs: void, length: NSUInteger): void;
  screenFontWithRenderingMode(renderingMode: NSFontRenderingMode): NSFont;
  widthOfString(string: NSString | string): CGFloat;
  isBaseFont(): boolean;
  afmDictionary(): NSDictionary<any, any>;
  glyphIsEncoded(glyph: NSGlyph): boolean;
  defaultLineHeightForFont(): CGFloat;
  encodingScheme(): NSString;
  glyphPacking(): NSMultibyteGlyphPacking;
  positionOfGlyph_precededByGlyph_isNominal(glyph: NSGlyph, prevGlyph: NSGlyph, nominal: boolean): NSPoint;
  positionsForCompositeSequence_numberOfGlyphs_pointArray(someGlyphs: NSGlyph, numGlyphs: NSInteger, points: NSPointArray): NSInteger;
  positionOfGlyph_struckOverGlyph_metricsExist(glyph: NSGlyph, prevGlyph: NSGlyph, exist: boolean): NSPoint;
  positionOfGlyph_struckOverRect_metricsExist(glyph: NSGlyph, rect: NSRect, exist: boolean): NSPoint;
  positionOfGlyph_forCharacter_struckOverRect(glyph: NSGlyph, character: unichar, rect: NSRect): NSPoint;
  positionOfGlyph_withRelation_toBaseGlyph_totalAdvancement_metricsExist(thisGlyph: NSGlyph, rel: NSGlyphRelation, baseGlyph: NSGlyph, adv: NSSizePointer, exist: boolean): NSPoint;
  localizedFamilyName(): NSString;
  addSVGAttributes(attributes: NSMutableArray<any> | any[]): void;

  fontName(): NSString;
  pointSize(): CGFloat;
  matrix(): CGFloat;
  familyName(): NSString;
  displayName(): NSString;
  fontDescriptor(): NSFontDescriptor;
  textTransform(): NSAffineTransform;
  numberOfGlyphs(): NSUInteger;
  mostCompatibleStringEncoding(): NSStringEncoding;
  coveredCharacterSet(): NSCharacterSet;
  boundingRectForFont(): NSRect;
  maximumAdvancement(): NSSize;
  ascender(): CGFloat;
  descender(): CGFloat;
  leading(): CGFloat;
  underlinePosition(): CGFloat;
  underlineThickness(): CGFloat;
  italicAngle(): CGFloat;
  capHeight(): CGFloat;
  xHeight(): CGFloat;
  fixedPitch(): boolean;
  verticalFont(): NSFont;
  vertical(): boolean;
  printerFont(): NSFont;
  screenFont(): NSFont;
  renderingMode(): NSFontRenderingMode;
}
declare const NSFont: {
  alloc(): NSFontUninitialized;
  class(): NSFont;  fontWithName_size(fontName: NSString | string, fontSize: CGFloat): NSFont;
  fontWithName_matrix(fontName: NSString | string, fontMatrix: CGFloat): NSFont;
  fontWithDescriptor_size(fontDescriptor: NSFontDescriptor, fontSize: CGFloat): NSFont;
  fontWithDescriptor_textTransform(fontDescriptor: NSFontDescriptor, textTransform: NSAffineTransform | null): NSFont;
  userFontOfSize(fontSize: CGFloat): NSFont;
  userFixedPitchFontOfSize(fontSize: CGFloat): NSFont;
  setUserFont(font: NSFont | null): void;
  setUserFixedPitchFont(font: NSFont | null): void;
  systemFontOfSize(fontSize: CGFloat): NSFont;
  boldSystemFontOfSize(fontSize: CGFloat): NSFont;
  labelFontOfSize(fontSize: CGFloat): NSFont;
  titleBarFontOfSize(fontSize: CGFloat): NSFont;
  menuFontOfSize(fontSize: CGFloat): NSFont;
  menuBarFontOfSize(fontSize: CGFloat): NSFont;
  messageFontOfSize(fontSize: CGFloat): NSFont;
  paletteFontOfSize(fontSize: CGFloat): NSFont;
  toolTipsFontOfSize(fontSize: CGFloat): NSFont;
  controlContentFontOfSize(fontSize: CGFloat): NSFont;
  systemFontOfSize_weight(fontSize: CGFloat, weight: NSFontWeight): NSFont;
  monospacedDigitSystemFontOfSize_weight(fontSize: CGFloat, weight: NSFontWeight): NSFont;
  systemFontSizeForControlSize(controlSize: NSControlSize): CGFloat;
  useFont(fontName: NSString | string): void;
  preferredFontNames(): NSArray<any>;
  setPreferredFontNames(fontNameArray: NSArray<any> | any[]): void;
  preventsAutoActivation_bc(): boolean;
  setPreventsAutoActivation_bc(flag: boolean): void;
  fontWithName_size_bc(fontName: NSString | string, fontSize: CGFloat): NSFont;
  fontPreventingAutoActivationWithName_size_bc(fontName: NSString | string, fontSize: CGFloat): NSFont;

  systemFontSize(): CGFloat;
  smallSystemFontSize(): CGFloat;
  labelFontSize(): CGFloat;

}

