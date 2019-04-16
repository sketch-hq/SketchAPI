interface NSWindowTabGroupUninitialized<InitializedType = NSWindowTabGroup> extends NSObjectUninitialized<NSWindowTabGroup> {}
interface NSWindowTabGroup extends NSObject {
  addWindow(window: NSWindow): void;
  insertWindow_atIndex(window: NSWindow, index: NSInteger): void;
  removeWindow(window: NSWindow): void;

  identifier(): NSWindowTabbingIdentifier;
  windows(): NSArray<any>;
  overviewVisible(): boolean;
  setOverviewVisible(overviewVisible: boolean): void;
  tabBarVisible(): boolean;
  selectedWindow(): NSWindow;
  setSelectedWindow(selectedWindow: NSWindow): void;
}
declare const NSWindowTabGroup: {
  alloc(): NSWindowTabGroupUninitialized;
  class(): NSWindowTabGroup;
}

