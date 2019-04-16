interface NSSimpleHorizontalTypesetterUninitialized<InitializedType = NSSimpleHorizontalTypesetter> extends NSTypesetterUninitialized<NSSimpleHorizontalTypesetter> {}

interface NSSimpleHorizontalTypesetter extends NSTypesetter {
  currentLayoutManager(): NSLayoutManager;
  currentContainer(): NSTextContainer;
  currentParagraphStyle(): NSParagraphStyle;
  currentTextStorage(): NSTextStorage;
  baseOfTypesetterGlyphInfo(): NSTypesetterGlyphInfo;
  sizeOfTypesetterGlyphInfo(): NSUInteger;
  capacityOfTypesetterGlyphInfo(): NSUInteger;
  firstGlyphIndexOfCurrentLineFragment(): NSUInteger;
  layoutGlyphsInLayoutManager_startingAtGlyphIndex_maxNumberOfLineFragments_nextGlyphIndex(layoutManager: NSLayoutManager, startGlyphIndex: NSUInteger, maxNumLines: NSUInteger, nextGlyph: NSUInteger): void;
  layoutGlyphsInHorizontalLineFragment_baseline(lineFragmentRect: NSRect, baseline: number): NSLayoutStatus;
  clearGlyphCache(): void;
  fillAttributesCache(): void;
  clearAttributesCache(): void;
  growGlyphCaches_fillGlyphInfo(desiredCapacity: NSUInteger, fillGlyphInfo: boolean): NSUInteger;
  updateCurGlyphOffset(): void;
  insertGlyph_atGlyphIndex_characterIndex(glyph: NSGlyph, glyphIndex: NSUInteger, charIndex: NSUInteger): void;
  layoutControlGlyphForLineFragment(lineFrag: NSRect): NSLayoutStatus;
  layoutTab(): void;
  breakLineAtIndex(location: NSUInteger): void;
  glyphIndexToBreakLineByHyphenatingWordAtIndex(charIndex: NSUInteger): NSUInteger;
  glyphIndexToBreakLineByWordWrappingAtIndex(charIndex: NSUInteger): NSUInteger;
  fullJustifyLineAtGlyphIndex(glyphIndexForLineBreak: NSUInteger): void;
  typesetterLaidOneGlyph(gl: NSTypesetterGlyphInfo): void;
  willSetLineFragmentRect_forGlyphRange_usedRect(rect: NSRect, range: NSRange, bRect: NSRect): void;
}

declare const NSSimpleHorizontalTypesetter: {
  alloc(): NSSimpleHorizontalTypesetterUninitialized;
  class(): NSSimpleHorizontalTypesetter;
  sharedInstance(): any;
  printingAdjustmentInLayoutManager_forNominallySpacedGlyphRange_packedGlyphs_count(layoutMgr: NSLayoutManager, nominallySpacedGlyphsRange: NSRange, packedGlyphs: string, packedGlyphsCount: NSUInteger): NSSize;
  sharedSystemTypesetterForBehavior(behavior: NSTypesetterBehavior): any;
  sharedSystemTypesetter(): NSTypesetter;
  defaultTypesetterBehavior(): NSTypesetterBehavior;

}

