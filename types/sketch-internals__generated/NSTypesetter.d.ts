interface NSTypesetterUninitialized<InitializedType = NSTypesetter> extends NSObjectUninitialized<NSTypesetter> {}
interface NSTypesetter extends NSObject {
  substituteFontForFont(originalFont: NSFont): NSFont;
  textTabForGlyphLocation_writingDirection_maxLocation(glyphLocation: CGFloat, direction: NSWritingDirection, maxLocation: CGFloat): NSTextTab;
  setParagraphGlyphRange_separatorGlyphRange(paragraphRange: NSRange, paragraphSeparatorRange: NSRange): void;
  layoutParagraphAtPoint(lineFragmentOrigin: NSPointPointer): NSUInteger;
  beginParagraph(): void;
  endParagraph(): void;
  beginLineWithGlyphAtIndex(glyphIndex: NSUInteger): void;
  endLineWithGlyphRange(lineGlyphRange: NSRange): void;
  lineSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: NSUInteger, rect: NSRect): CGFloat;
  paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: NSUInteger, rect: NSRect): CGFloat;
  paragraphSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: NSUInteger, rect: NSRect): CGFloat;
  getLineFragmentRect_usedRect_forParagraphSeparatorGlyphRange_atProposedOrigin(lineFragmentRect: NSRectPointer, lineFragmentUsedRect: NSRectPointer, paragraphSeparatorGlyphRange: NSRange, lineOrigin: NSPoint): void;
  setHardInvalidation_forGlyphRange(flag: boolean, glyphRange: NSRange): void;
  layoutGlyphsInLayoutManager_startingAtGlyphIndex_maxNumberOfLineFragments_nextGlyphIndex(layoutManager: NSLayoutManager, startGlyphIndex: NSUInteger, maxNumLines: NSUInteger, nextGlyph: NSUInteger): void;
  layoutCharactersInRange_forLayoutManager_maximumNumberOfLineFragments(characterRange: NSRange, layoutManager: NSLayoutManager, maxNumLines: NSUInteger): NSRange;
  baselineOffsetInLayoutManager_glyphIndex(layoutMgr: NSLayoutManager, glyphIndex: NSUInteger): CGFloat;
  willSetLineFragmentRect_forGlyphRange_usedRect_baselineOffset(lineRect: NSRectPointer, glyphRange: NSRange, usedRect: NSRectPointer, baselineOffset: CGFloat): void;
  shouldBreakLineByWordBeforeCharacterAtIndex(charIndex: NSUInteger): boolean;
  shouldBreakLineByHyphenatingBeforeCharacterAtIndex(charIndex: NSUInteger): boolean;
  hyphenationFactorForGlyphAtIndex(glyphIndex: NSUInteger): number;
  hyphenCharacterForGlyphAtIndex(glyphIndex: NSUInteger): string;
  boundingBoxForControlGlyphAtIndex_forTextContainer_proposedLineFragment_glyphPosition_characterIndex(glyphIndex: NSUInteger, textContainer: NSTextContainer, proposedRect: NSRect, glyphPosition: NSPoint, charIndex: NSUInteger): NSRect;
  characterRangeForGlyphRange_actualGlyphRange(glyphRange: NSRange, actualGlyphRange: NSRangePointer | null): NSRange;
  glyphRangeForCharacterRange_actualCharacterRange(charRange: NSRange, actualCharRange: NSRangePointer | null): NSRange;
  getLineFragmentRect_usedRect_remainingRect_forStartingGlyphAtIndex_proposedRect_lineSpacing_paragraphSpacingBefore_paragraphSpacingAfter(lineFragmentRect: NSRectPointer, lineFragmentUsedRect: NSRectPointer, remainingRect: NSRectPointer, startingGlyphIndex: NSUInteger, proposedRect: NSRect, lineSpacing: CGFloat, paragraphSpacingBefore: CGFloat, paragraphSpacingAfter: CGFloat): void;
  setLineFragmentRect_forGlyphRange_usedRect_baselineOffset(fragmentRect: NSRect, glyphRange: NSRange, usedRect: NSRect, baselineOffset: CGFloat): void;
  setNotShownAttribute_forGlyphRange(flag: boolean, glyphRange: NSRange): void;
  setDrawsOutsideLineFragment_forGlyphRange(flag: boolean, glyphRange: NSRange): void;
  setLocation_withAdvancements_forStartOfGlyphRange(location: NSPoint, advancements: CGFloat, glyphRange: NSRange): void;
  setAttachmentSize_forGlyphRange(attachmentSize: NSSize, glyphRange: NSRange): void;
  setBidiLevels_forGlyphRange(levels: number, glyphRange: NSRange): void;
  actionForControlCharacterAtIndex(charIndex: NSUInteger): NSTypesetterControlCharacterAction;
  getGlyphsInRange_glyphs_characterIndexes_glyphInscriptions_elasticBits_bidiLevels(glyphsRange: NSRange, glyphBuffer: NSGlyph, charIndexBuffer: NSUInteger, inscribeBuffer: NSGlyphInscription, elasticBuffer: boolean, bidiLevelBuffer: string): NSUInteger;
  substituteGlyphsInRange_withGlyphs(glyphRange: NSRange, glyphs: NSGlyph): void;
  insertGlyph_atGlyphIndex_characterIndex(glyph: NSGlyph, glyphIndex: NSUInteger, characterIndex: NSUInteger): void;
  deleteGlyphsInRange(glyphRange: NSRange): void;

  usesFontLeading(): boolean;
  setUsesFontLeading(usesFontLeading: boolean): void;
  typesetterBehavior(): NSTypesetterBehavior;
  setTypesetterBehavior(typesetterBehavior: NSTypesetterBehavior): void;
  hyphenationFactor(): number;
  setHyphenationFactor(hyphenationFactor: number): void;
  lineFragmentPadding(): CGFloat;
  setLineFragmentPadding(lineFragmentPadding: CGFloat): void;
  bidiProcessingEnabled(): boolean;
  setBidiProcessingEnabled(bidiProcessingEnabled: boolean): void;
  attributedString(): NSAttributedString;
  setAttributedString(attributedString: NSAttributedString): void;
  paragraphGlyphRange(): NSRange;
  paragraphSeparatorGlyphRange(): NSRange;
  paragraphCharacterRange(): NSRange;
  paragraphSeparatorCharacterRange(): NSRange;
  attributesForExtraLineFragment(): NSDictionary<any, any>;
  layoutManager(): NSLayoutManager;
  textContainers(): NSArray<any>;
  currentTextContainer(): NSTextContainer;
  currentParagraphStyle(): NSParagraphStyle;
}
declare const NSTypesetter: {
  alloc(): NSTypesetterUninitialized;
  class(): NSTypesetter;  printingAdjustmentInLayoutManager_forNominallySpacedGlyphRange_packedGlyphs_count(layoutMgr: NSLayoutManager, nominallySpacedGlyphsRange: NSRange, packedGlyphs: string, packedGlyphsCount: NSUInteger): NSSize;
  sharedSystemTypesetterForBehavior(behavior: NSTypesetterBehavior): any;

  sharedSystemTypesetter(): NSTypesetter;
  defaultTypesetterBehavior(): NSTypesetterBehavior;

}

