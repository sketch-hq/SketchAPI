interface BCPopoverWindowUninitialized<InitializedType = BCPopoverWindow> extends NSWindowUninitialized<BCPopoverWindow> {}
interface BCPopoverWindow extends NSWindow {

  arrowEdge(): NSRectEdge;
  setArrowEdge(arrowEdge: NSRectEdge): void;
  arrowPosition(): CGFloat;
  setArrowPosition(arrowPosition: CGFloat): void;
}
declare const BCPopoverWindow: {
  alloc(): BCPopoverWindowUninitialized;
  class(): BCPopoverWindow;  attachedWindowWithView(aView: NSView): BCPopoverWindow;

}

