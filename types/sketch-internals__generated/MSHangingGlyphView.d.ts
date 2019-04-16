interface MSHangingGlyphViewUninitialized<InitializedType = MSHangingGlyphView> extends NSViewUninitialized<MSHangingGlyphView> {}

interface MSHangingGlyphView extends NSView {

  textView(): NSTextView;
  setTextView(textView: NSTextView): void;
}

declare const MSHangingGlyphView: {
  alloc(): MSHangingGlyphViewUninitialized;
  class(): MSHangingGlyphView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

