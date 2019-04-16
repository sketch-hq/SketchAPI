interface NSTableHeaderViewUninitialized<InitializedType = NSTableHeaderView> extends NSViewUninitialized<NSTableHeaderView> {}
interface NSTableHeaderView extends NSView, INSViewToolTipOwner {
  headerRectOfColumn(column: NSInteger): NSRect;
  columnAtPoint(point: NSPoint): NSInteger;

  tableView(): NSTableView;
  setTableView(tableView: NSTableView): void;
  draggedColumn(): NSInteger;
  draggedDistance(): CGFloat;
  resizedColumn(): NSInteger;
}
declare const NSTableHeaderView: {
  alloc(): NSTableHeaderViewUninitialized;
  class(): NSTableHeaderView;
}

