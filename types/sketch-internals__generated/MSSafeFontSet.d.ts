interface MSSafeFontSetUninitialized<InitializedType = MSSafeFontSet> extends NSObjectUninitialized<MSSafeFontSet> {}
interface MSSafeFontSet extends NSObject {
  isFontSafe(postscriptFontName: NSString | string): boolean;
}
declare const MSSafeFontSet: {
  alloc(): MSSafeFontSetUninitialized;
  class(): MSSafeFontSet;  sharedSet(): MSSafeFontSet;

}

