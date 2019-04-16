interface NSPopoverTouchBarItemUninitialized<InitializedType = NSPopoverTouchBarItem> extends NSTouchBarItemUninitialized<NSPopoverTouchBarItem> {}

interface NSPopoverTouchBarItem extends NSTouchBarItem {
  showPopover(sender: any | null): void;
  dismissPopover(sender: any | null): void;
  makeStandardActivatePopoverGestureRecognizer(): NSGestureRecognizer;

  popoverTouchBar(): NSTouchBar;
  setPopoverTouchBar(popoverTouchBar: NSTouchBar): void;
  customizationLabel(): NSString;
  setCustomizationLabel(customizationLabel: NSString | string): void;
  collapsedRepresentation(): NSView;
  setCollapsedRepresentation(collapsedRepresentation: NSView): void;
  collapsedRepresentationImage(): NSImage;
  setCollapsedRepresentationImage(collapsedRepresentationImage: NSImage): void;
  collapsedRepresentationLabel(): NSString;
  setCollapsedRepresentationLabel(collapsedRepresentationLabel: NSString | string): void;
  pressAndHoldTouchBar(): NSTouchBar;
  setPressAndHoldTouchBar(pressAndHoldTouchBar: NSTouchBar): void;
  showsCloseButton(): boolean;
  setShowsCloseButton(showsCloseButton: boolean): void;
}

declare const NSPopoverTouchBarItem: {
  alloc(): NSPopoverTouchBarItemUninitialized;
  class(): NSPopoverTouchBarItem;
}

