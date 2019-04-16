interface NSTableHeaderCellUninitialized<InitializedType = NSTableHeaderCell> extends NSTextFieldCellUninitialized<NSTableHeaderCell> {}
interface NSTableHeaderCell extends NSTextFieldCell {
  drawSortIndicatorWithFrame_inView_ascending_priority(cellFrame: NSRect, controlView: NSView, ascending: boolean, priority: NSInteger): void;
  sortIndicatorRectForBounds(rect: NSRect): NSRect;
}
declare const NSTableHeaderCell: {
  alloc(): NSTableHeaderCellUninitialized;
  class(): NSTableHeaderCell;
}

