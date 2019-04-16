interface BCPopoverContentViewUninitialized<InitializedType = BCPopoverContentView> extends NSViewUninitialized<BCPopoverContentView> {}
interface BCPopoverContentView extends NSView {
  availableContentRect(): NSRect;

  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  arrowEdge(): NSRectEdge;
  setArrowEdge(arrowEdge: NSRectEdge): void;
  arrowPosition(): CGFloat;
  setArrowPosition(arrowPosition: CGFloat): void;
}
declare const BCPopoverContentView: {
  alloc(): BCPopoverContentViewUninitialized;
  class(): BCPopoverContentView;
}

