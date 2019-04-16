interface NSGlyphInfoUninitialized<InitializedType = NSGlyphInfo> extends NSObjectUninitialized<NSGlyphInfo> {}
interface NSGlyphInfo extends NSObject, INSCopying, INSSecureCoding {

  glyphID(): CGGlyph;
  baseString(): NSString;
  glyphName(): NSString;
  characterIdentifier(): NSUInteger;
  characterCollection(): NSCharacterCollection;
}
declare const NSGlyphInfo: {
  alloc(): NSGlyphInfoUninitialized;
  class(): NSGlyphInfo;  glyphInfoWithCGGlyph_forFont_baseString(glyph: CGGlyph, font: NSFont, string: NSString | string): NSGlyphInfo;
  glyphInfoWithGlyphName_forFont_baseString(glyphName: NSString | string, font: NSFont, string: NSString | string): NSGlyphInfo;
  glyphInfoWithGlyph_forFont_baseString(glyph: NSGlyph, font: NSFont, string: NSString | string): NSGlyphInfo;
  glyphInfoWithCharacterIdentifier_collection_baseString(cid: NSUInteger, characterCollection: NSCharacterCollection, string: NSString | string): NSGlyphInfo;

}

