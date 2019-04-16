interface NSMenuViewUninitialized<InitializedType = NSMenuView> extends NSViewUninitialized<NSMenuView> {
  initAsTearOff(): InitializedType;
}
interface NSMenuView extends NSView {
  setMenu(menu: NSMenu): void;
  menu(): NSMenu;
  itemChanged(notification: NSNotification): void;
  itemAdded(notification: NSNotification): void;
  itemRemoved(notification: NSNotification): void;
  update(): void;
  setHorizontal(flag: boolean): void;
  isHorizontal(): boolean;
  setFont(font: NSFont): void;
  font(): NSFont;
  innerRect(): NSRect;
  rectOfItemAtIndex(index: NSInteger): NSRect;
  indexOfItemAtPoint(point: NSPoint): NSInteger;
  setNeedsDisplayForItemAtIndex(index: NSInteger): void;
  setHighlightedItemIndex(index: NSInteger): void;
  highlightedItemIndex(): NSInteger;
  stateImageOffset(): CGFloat;
  stateImageWidth(): CGFloat;
  imageAndTitleOffset(): CGFloat;
  imageAndTitleWidth(): CGFloat;
  keyEquivalentOffset(): CGFloat;
  keyEquivalentWidth(): CGFloat;
  setMenuItemCell_forItemAtIndex(cell: NSMenuItemCell, index: NSInteger): void;
  menuItemCellForItemAtIndex(index: NSInteger): NSMenuItemCell;
  attachedMenuView(): NSMenuView;
  setNeedsSizing(flag: boolean): void;
  needsSizing(): boolean;
  sizeToFit(): void;
  attachedMenu(): NSMenu;
  isAttached(): boolean;
  isTornOff(): boolean;
  locationForSubmenu(submenu: NSMenu): NSPoint;
  setWindowFrameForAttachingToRect_onScreen_preferredEdge_popUpSelectedItem(screenRect: NSRect, screen: NSScreen, edge: NSRectEdge, selectedItemIndex: NSInteger): void;
  detachSubmenu(): void;
  attachSubmenuForItemAtIndex(index: NSInteger): void;
  performActionWithHighlightingForItemAtIndex(index: NSInteger): void;
  trackWithEvent(event: NSEvent): boolean;
  horizontalEdgePadding(): CGFloat;
  setHorizontalEdgePadding(pad: CGFloat): void;
}
declare const NSMenuView: {
  alloc(): NSMenuViewUninitialized;
  class(): NSMenuView;  menuBarHeight(): CGFloat;

}

