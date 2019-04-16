interface MSHangingGlyphViewUninitialized<InitializedType = MSHangingGlyphView> extends NSViewUninitialized<MSHangingGlyphView> {}
interface MSHangingGlyphView extends NSView {

  textView(): NSTextView;
  setTextView(textView: NSTextView): void;
}
declare const MSHangingGlyphView: {
  alloc(): MSHangingGlyphViewUninitialized;
  class(): MSHangingGlyphView;
}

