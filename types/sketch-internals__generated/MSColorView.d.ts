interface MSColorViewUninitialized<InitializedType = MSColorView> extends NSViewUninitialized<MSColorView> {}
interface MSColorView extends NSView {

  color(): NSColor;
  setColor(color: NSColor): void;
}
declare const MSColorView: {
  alloc(): MSColorViewUninitialized;
  class(): MSColorView;
}

