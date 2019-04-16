interface NSGlyphGeneratorUninitialized<InitializedType = NSGlyphGenerator> extends NSObjectUninitialized<NSGlyphGenerator> {}
interface NSGlyphGenerator extends NSObject {
  generateGlyphsForGlyphStorage_desiredNumberOfCharacters_glyphIndex_characterIndex(glyphStorage: any, nChars: NSUInteger, glyphIndex: NSUInteger | null, charIndex: NSUInteger | null): void;
}
declare const NSGlyphGenerator: {
  alloc(): NSGlyphGeneratorUninitialized;
  class(): NSGlyphGenerator;
  sharedGlyphGenerator(): NSGlyphGenerator;

}

