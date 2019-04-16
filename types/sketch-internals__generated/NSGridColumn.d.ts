interface NSGridColumnUninitialized<InitializedType = NSGridColumn> extends NSObjectUninitialized<NSGridColumn> {}
interface NSGridColumn extends NSObject, INSCoding {
  cellAtIndex(index: NSInteger): NSGridCell;
  mergeCellsInRange(range: NSRange): void;

  gridView(): NSGridView;
  numberOfCells(): NSInteger;
  xPlacement(): NSGridCellPlacement;
  setXPlacement(xPlacement: NSGridCellPlacement): void;
  width(): CGFloat;
  setWidth(width: CGFloat): void;
  leadingPadding(): CGFloat;
  setLeadingPadding(leadingPadding: CGFloat): void;
  trailingPadding(): CGFloat;
  setTrailingPadding(trailingPadding: CGFloat): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
}
declare const NSGridColumn: {
  alloc(): NSGridColumnUninitialized;
  class(): NSGridColumn;
}

