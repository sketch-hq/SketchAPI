interface INSGlyphStorage {
  insertGlyphs_length_forStartingGlyphAtIndex_characterIndex(glyphs: NSGlyph, length: NSUInteger, glyphIndex: NSUInteger, charIndex: NSUInteger): void;
  setIntAttribute_value_forGlyphAtIndex(attributeTag: NSInteger, val: NSInteger, glyphIndex: NSUInteger): void;
  attributedString(): NSAttributedString;
  layoutOptions(): NSUInteger;
}

