interface NSCustomTouchBarItemUninitialized<InitializedType = NSCustomTouchBarItem> extends NSTouchBarItemUninitialized<NSCustomTouchBarItem> {}
interface NSCustomTouchBarItem extends NSTouchBarItem {

  view(): NSView;
  setView(view: NSView): void;
  viewController(): NSViewController;
  setViewController(viewController: NSViewController): void;
  customizationLabel(): NSString;
  setCustomizationLabel(customizationLabel: NSString | string): void;
}
declare const NSCustomTouchBarItem: {
  alloc(): NSCustomTouchBarItemUninitialized;
  class(): NSCustomTouchBarItem;
}

