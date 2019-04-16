interface INSLayoutManagerDelegate {
  layoutManager_shouldGenerateGlyphs_properties_characterIndexes_font_forGlyphRange(layoutManager: NSLayoutManager, glyphs: CGGlyph, props: NSGlyphProperty, charIndexes: NSUInteger, aFont: NSFont, glyphRange: NSRange): NSUInteger;
  layoutManager_lineSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(layoutManager: NSLayoutManager, glyphIndex: NSUInteger, rect: NSRect): CGFloat;
  layoutManager_paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect(layoutManager: NSLayoutManager, glyphIndex: NSUInteger, rect: NSRect): CGFloat;
  layoutManager_paragraphSpacingAfterGlyphAtIndex_withProposedLineFragmentRect(layoutManager: NSLayoutManager, glyphIndex: NSUInteger, rect: NSRect): CGFloat;
  layoutManager_shouldUseAction_forControlCharacterAtIndex(layoutManager: NSLayoutManager, action: NSControlCharacterAction, charIndex: NSUInteger): NSControlCharacterAction;
  layoutManager_shouldBreakLineByWordBeforeCharacterAtIndex(layoutManager: NSLayoutManager, charIndex: NSUInteger): boolean;
  layoutManager_shouldBreakLineByHyphenatingBeforeCharacterAtIndex(layoutManager: NSLayoutManager, charIndex: NSUInteger): boolean;
  layoutManager_boundingBoxForControlGlyphAtIndex_forTextContainer_proposedLineFragment_glyphPosition_characterIndex(layoutManager: NSLayoutManager, glyphIndex: NSUInteger, textContainer: NSTextContainer, proposedRect: NSRect, glyphPosition: NSPoint, charIndex: NSUInteger): NSRect;
  layoutManager_shouldSetLineFragmentRect_lineFragmentUsedRect_baselineOffset_inTextContainer_forGlyphRange(layoutManager: NSLayoutManager, lineFragmentRect: NSRect, lineFragmentUsedRect: NSRect, baselineOffset: CGFloat, textContainer: NSTextContainer, glyphRange: NSRange): boolean;
  layoutManagerDidInvalidateLayout(sender: NSLayoutManager): void;
  layoutManager_didCompleteLayoutForTextContainer_atEnd(layoutManager: NSLayoutManager, textContainer: NSTextContainer | null, layoutFinishedFlag: boolean): void;
  layoutManager_textContainer_didChangeGeometryFromSize(layoutManager: NSLayoutManager, textContainer: NSTextContainer, oldSize: NSSize): void;
  layoutManager_shouldUseTemporaryAttributes_forDrawingToScreen_atCharacterIndex_effectiveRange(layoutManager: NSLayoutManager, attrs: NSDictionary<any, any> | {[key: string]: any}, toScreen: boolean, charIndex: NSUInteger, effectiveCharRange: NSRangePointer | null): NSDictionary<any, any>;
}

