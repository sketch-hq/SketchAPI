interface NSGroupTouchBarItemUninitialized<InitializedType = NSGroupTouchBarItem> extends NSTouchBarItemUninitialized<NSGroupTouchBarItem> {}

interface NSGroupTouchBarItem extends NSTouchBarItem {

  groupTouchBar(): NSTouchBar;
  setGroupTouchBar(groupTouchBar: NSTouchBar): void;
  customizationLabel(): NSString;
  setCustomizationLabel(customizationLabel: NSString | string): void;
  groupUserInterfaceLayoutDirection(): NSUserInterfaceLayoutDirection;
  setGroupUserInterfaceLayoutDirection(groupUserInterfaceLayoutDirection: NSUserInterfaceLayoutDirection): void;
  prefersEqualWidths(): boolean;
  setPrefersEqualWidths(prefersEqualWidths: boolean): void;
  preferredItemWidth(): CGFloat;
  setPreferredItemWidth(preferredItemWidth: CGFloat): void;
  effectiveCompressionOptions(): NSUserInterfaceCompressionOptions;
  prioritizedCompressionOptions(): NSArray<any>;
  setPrioritizedCompressionOptions(prioritizedCompressionOptions: NSArray<any> | any[]): void;
}

declare const NSGroupTouchBarItem: {
  alloc(): NSGroupTouchBarItemUninitialized;
  class(): NSGroupTouchBarItem;
  groupItemWithIdentifier_items(identifier: NSTouchBarItemIdentifier, items: NSArray<any> | any[]): NSGroupTouchBarItem;
  groupItemWithIdentifier_items_allowedCompressionOptions(identifier: NSTouchBarItemIdentifier, items: NSArray<any> | any[], allowedCompressionOptions: NSUserInterfaceCompressionOptions): NSGroupTouchBarItem;
  alertStyleGroupItemWithIdentifier(identifier: NSTouchBarItemIdentifier): NSGroupTouchBarItem;
}

