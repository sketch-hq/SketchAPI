interface NSTabViewUninitialized<InitializedType = NSTabView> extends NSViewUninitialized<NSTabView> {}

interface NSTabView extends NSView {
  selectTabViewItem(tabViewItem: NSTabViewItem | null): void;
  selectTabViewItemAtIndex(index: NSInteger): void;
  selectTabViewItemWithIdentifier(identifier: any): void;
  takeSelectedTabViewItemFromSender(sender: any | null): void;
  selectFirstTabViewItem(sender: any | null): void;
  selectLastTabViewItem(sender: any | null): void;
  selectNextTabViewItem(sender: any | null): void;
  selectPreviousTabViewItem(sender: any | null): void;
  addTabViewItem(tabViewItem: NSTabViewItem): void;
  insertTabViewItem_atIndex(tabViewItem: NSTabViewItem, index: NSInteger): void;
  removeTabViewItem(tabViewItem: NSTabViewItem): void;
  tabViewItemAtPoint(point: NSPoint): NSTabViewItem;
  indexOfTabViewItem(tabViewItem: NSTabViewItem): NSInteger;
  tabViewItemAtIndex(index: NSInteger): NSTabViewItem;
  indexOfTabViewItemWithIdentifier(identifier: any): NSInteger;

  selectedTabViewItem(): NSTabViewItem;
  font(): NSFont;
  setFont(font: NSFont): void;
  tabViewType(): NSTabViewType;
  setTabViewType(tabViewType: NSTabViewType): void;
  tabPosition(): NSTabPosition;
  setTabPosition(tabPosition: NSTabPosition): void;
  tabViewBorderType(): NSTabViewBorderType;
  setTabViewBorderType(tabViewBorderType: NSTabViewBorderType): void;
  tabViewItems(): NSArray<any>;
  setTabViewItems(tabViewItems: NSArray<any> | any[]): void;
  allowsTruncatedLabels(): boolean;
  setAllowsTruncatedLabels(allowsTruncatedLabels: boolean): void;
  minimumSize(): NSSize;
  drawsBackground(): boolean;
  setDrawsBackground(drawsBackground: boolean): void;
  controlSize(): NSControlSize;
  setControlSize(controlSize: NSControlSize): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  contentRect(): NSRect;
  numberOfTabViewItems(): NSInteger;
  controlTint(): NSControlTint;
  setControlTint(controlTint: NSControlTint): void;
}

declare const NSTabView: {
  alloc(): NSTabViewUninitialized;
  class(): NSTabView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

