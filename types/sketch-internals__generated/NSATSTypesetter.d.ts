interface NSATSTypesetterUninitialized<InitializedType = NSATSTypesetter> extends NSTypesetterUninitialized<NSATSTypesetter> {}

interface NSATSTypesetter extends NSTypesetter {
  lineFragmentRectForProposedRect_remainingRect(proposedRect: NSRect, remainingRect: NSRectPointer): NSRect;
  substituteFontForFont(originalFont: NSFont): NSFont;
  textTabForGlyphLocation_writingDirection_maxLocation(glyphLocation: CGFloat, direction: NSWritingDirection, maxLocation: CGFloat): NSTextTab;
  setParagraphGlyphRange_separatorGlyphRange(paragraphRange: NSRange, paragraphSeparatorRange: NSRange): void;
  layoutParagraphAtPoint(lineFragmentOrigin: NSPoint): NSUInteger;
  lineSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: NSUInteger, rect: NSRect): CGFloat;
  paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: NSUInteger, rect: NSRect): CGFloat;
  paragraphSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(glyphIndex: NSUInteger, rect: NSRect): CGFloat;
  setHardInvalidation_forGlyphRange(flag: boolean, glyphRange: NSRange): void;
  getLineFragmentRect_usedRect_forParagraphSeparatorGlyphRange_atProposedOrigin(lineFragmentRect: NSRect, lineFragmentUsedRect: NSRect, paragraphSeparatorGlyphRange: NSRange, lineOrigin: NSPoint): void;
  willSetLineFragmentRect_forGlyphRange_usedRect_baselineOffset(lineRect: NSRect, glyphRange: NSRange, usedRect: NSRect, baselineOffset: CGFloat): void;
  shouldBreakLineByWordBeforeCharacterAtIndex(charIndex: NSUInteger): boolean;
  shouldBreakLineByHyphenatingBeforeCharacterAtIndex(charIndex: NSUInteger): boolean;
  hyphenationFactorForGlyphAtIndex(glyphIndex: NSUInteger): number;
  hyphenCharacterForGlyphAtIndex(glyphIndex: NSUInteger): string;
  boundingBoxForControlGlyphAtIndex_forTextContainer_proposedLineFragment_glyphPosition_characterIndex(glyphIndex: NSUInteger, textContainer: NSTextContainer, proposedRect: NSRect, glyphPosition: NSPoint, charIndex: NSUInteger): NSRect;
  getGlyphsInRange_glyphs_characterIndexes_glyphInscriptions_elasticBits(glyphsRange: NSRange, glyphBuffer: NSGlyph, charIndexBuffer: NSUInteger, inscribeBuffer: NSGlyphInscription, elasticBuffer: boolean): NSUInteger;

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
  layoutManager(): NSLayoutManager;
  currentTextContainer(): NSTextContainer;
}

declare const NSATSTypesetter: {
  alloc(): NSATSTypesetterUninitialized;
  class(): NSATSTypesetter;
  printingAdjustmentInLayoutManager_forNominallySpacedGlyphRange_packedGlyphs_count(layoutMgr: NSLayoutManager, nominallySpacedGlyphsRange: NSRange, packedGlyphs: string, packedGlyphsCount: NSUInteger): NSSize;
  sharedSystemTypesetterForBehavior(behavior: NSTypesetterBehavior): any;
  sharedTypesetter(): NSATSTypesetter;
  sharedSystemTypesetter(): NSTypesetter;
  defaultTypesetterBehavior(): NSTypesetterBehavior;

}

