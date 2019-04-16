interface NSPopoverUninitialized<InitializedType = NSPopover> extends NSResponderUninitialized<NSPopover> {}
interface NSPopover extends NSResponder, INSAppearanceCustomization, INSAccessibilityElement, INSAccessibility {
  showRelativeToRect_ofView_preferredEdge(positioningRect: NSRect, positioningView: NSView, preferredEdge: NSRectEdge): void;
  performClose(sender: any | null): IBAction;
  close(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  //   appearance(): NSPopoverAppearance;
  //   setAppearance(appearance: NSPopoverAppearance): void;
  effectiveAppearance(): NSAppearance;
  behavior(): NSPopoverBehavior;
  setBehavior(behavior: NSPopoverBehavior): void;
  animates(): boolean;
  setAnimates(animates: boolean): void;
  contentViewController(): NSViewController;
  setContentViewController(contentViewController: NSViewController): void;
  contentSize(): NSSize;
  setContentSize(contentSize: NSSize): void;
  shown(): boolean;
  detached(): boolean;
  positioningRect(): NSRect;
  setPositioningRect(positioningRect: NSRect): void;
}
declare const NSPopover: {
  alloc(): NSPopoverUninitialized;
  class(): NSPopover;
}

