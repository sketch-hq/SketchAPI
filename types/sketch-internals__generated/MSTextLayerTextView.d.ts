interface MSTextLayerTextViewUninitialized<InitializedType = MSTextLayerTextView> extends NSTextViewUninitialized<MSTextLayerTextView> {}
interface MSTextLayerTextView extends NSTextView {
  selectSimilar(sender: any): IBAction;
  rectForSelectedRange(): NSRect;
  changeColorWithColor(color: NSColor): void;

  hangingGlyphView(): MSHangingGlyphView;
  setHangingGlyphView(hangingGlyphView: MSHangingGlyphView): void;
  textLayerTextViewDelegate(): any;
  setTextLayerTextViewDelegate(textLayerTextViewDelegate: any): void;
}
declare const MSTextLayerTextView: {
  alloc(): MSTextLayerTextViewUninitialized;
  class(): MSTextLayerTextView;
}

