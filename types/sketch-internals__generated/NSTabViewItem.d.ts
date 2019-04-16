interface NSTabViewItemUninitialized<InitializedType = NSTabViewItem> extends NSObjectUninitialized<NSTabViewItem> {
  initWithIdentifier(identifier: any | null): InitializedType;
}
interface NSTabViewItem extends NSObject, INSCoding {
  drawLabel_inRect(shouldTruncateLabel: boolean, labelRect: NSRect): void;
  sizeOfLabel(computeMin: boolean): NSSize;

  identifier(): any;
  setIdentifier(identifier: any): void;
  color(): NSColor;
  setColor(color: NSColor): void;
  label(): NSString;
  setLabel(label: NSString | string): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  view(): NSView;
  setView(view: NSView): void;
  viewController(): NSViewController;
  setViewController(viewController: NSViewController): void;
  tabState(): NSTabState;
  tabView(): NSTabView;
  initialFirstResponder(): NSView;
  setInitialFirstResponder(initialFirstResponder: NSView): void;
  toolTip(): NSString;
  setToolTip(toolTip: NSString | string): void;
}
declare const NSTabViewItem: {
  alloc(): NSTabViewItemUninitialized;
  class(): NSTabViewItem;  tabViewItemWithViewController(viewController: NSViewController): NSTabViewItem;

}

