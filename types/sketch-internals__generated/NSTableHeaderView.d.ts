interface NSTableHeaderViewUninitialized<InitializedType = NSTableHeaderView> extends NSViewUninitialized<NSTableHeaderView> {}

interface NSTableHeaderView extends NSView, INSViewToolTipOwner {
  headerRectOfColumn(column: NSInteger): NSRect;
  columnAtPoint(point: NSPoint): NSInteger;
  view_stringForToolTip_point_userData(view: NSView, tag: NSToolTipTag, point: NSPoint, data: void | null): NSString;

  tableView(): NSTableView;
  setTableView(tableView: NSTableView): void;
  draggedColumn(): NSInteger;
  draggedDistance(): CGFloat;
  resizedColumn(): NSInteger;
}

declare const NSTableHeaderView: {
  alloc(): NSTableHeaderViewUninitialized;
  class(): NSTableHeaderView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

