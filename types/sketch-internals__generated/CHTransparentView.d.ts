interface CHTransparentViewUninitialized<InitializedType = CHTransparentView> extends NSViewUninitialized<CHTransparentView> {}
interface CHTransparentView extends NSView {

  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
}
declare const CHTransparentView: {
  alloc(): CHTransparentViewUninitialized;
  class(): CHTransparentView;
}

