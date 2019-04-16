interface NSDrawerUninitialized<InitializedType = NSDrawer> extends NSResponderUninitialized<NSDrawer> {
  initWithContentSize_preferredEdge(contentSize: NSSize, edge: NSRectEdge): InitializedType;
}
interface NSDrawer extends NSResponder, INSAccessibilityElement, INSAccessibility {
  open(): void;
  openOnEdge(edge: NSRectEdge): void;
  close(): void;
  open(sender: any | null): void;
  close(sender: any | null): void;
  toggle(sender: any | null): void;

  parentWindow(): NSWindow;
  setParentWindow(parentWindow: NSWindow): void;
  contentView(): NSView;
  setContentView(contentView: NSView): void;
  preferredEdge(): NSRectEdge;
  setPreferredEdge(preferredEdge: NSRectEdge): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  state(): NSInteger;
  edge(): NSRectEdge;
  contentSize(): NSSize;
  setContentSize(contentSize: NSSize): void;
  minContentSize(): NSSize;
  setMinContentSize(minContentSize: NSSize): void;
  maxContentSize(): NSSize;
  setMaxContentSize(maxContentSize: NSSize): void;
  leadingOffset(): CGFloat;
  setLeadingOffset(leadingOffset: CGFloat): void;
  trailingOffset(): CGFloat;
  setTrailingOffset(trailingOffset: CGFloat): void;
}
declare const NSDrawer: {
  alloc(): NSDrawerUninitialized;
  class(): NSDrawer;
}

