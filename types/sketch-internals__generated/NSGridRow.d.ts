interface NSGridRowUninitialized<InitializedType = NSGridRow> extends NSObjectUninitialized<NSGridRow> {}
interface NSGridRow extends NSObject, INSCoding {
  cellAtIndex(index: NSInteger): NSGridCell;
  mergeCellsInRange(range: NSRange): void;

  gridView(): NSGridView;
  numberOfCells(): NSInteger;
  yPlacement(): NSGridCellPlacement;
  setYPlacement(yPlacement: NSGridCellPlacement): void;
  rowAlignment(): NSGridRowAlignment;
  setRowAlignment(rowAlignment: NSGridRowAlignment): void;
  height(): CGFloat;
  setHeight(height: CGFloat): void;
  topPadding(): CGFloat;
  setTopPadding(topPadding: CGFloat): void;
  bottomPadding(): CGFloat;
  setBottomPadding(bottomPadding: CGFloat): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
}
declare const NSGridRow: {
  alloc(): NSGridRowUninitialized;
  class(): NSGridRow;
}

