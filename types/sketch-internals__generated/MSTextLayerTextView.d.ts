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
  registerForServices(): void;
  scrollableTextView(): NSScrollView;
  fieldEditor(): MSTextLayerTextView;
  scrollableDocumentContentTextView(): NSScrollView;
  scrollablePlainDocumentContentTextView(): NSScrollView;
  stronglyReferencesTextStorage(): boolean;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

