interface NSGridViewUninitialized<InitializedType = NSGridView> extends NSViewUninitialized<NSGridView> {}

interface NSGridView extends NSView {
  rowAtIndex(index: NSInteger): NSGridRow;
  indexOfRow(row: NSGridRow): NSInteger;
  columnAtIndex(index: NSInteger): NSGridColumn;
  indexOfColumn(column: NSGridColumn): NSInteger;
  cellAtColumnIndex_rowIndex(columnIndex: NSInteger, rowIndex: NSInteger): NSGridCell;
  cellForView(view: NSView): NSGridCell;
  addRowWithViews(views: NSArray<any> | any[]): NSGridRow;
  insertRowAtIndex_withViews(index: NSInteger, views: NSArray<any> | any[]): NSGridRow;
  moveRowAtIndex_toIndex(fromIndex: NSInteger, toIndex: NSInteger): void;
  removeRowAtIndex(index: NSInteger): void;
  addColumnWithViews(views: NSArray<any> | any[]): NSGridColumn;
  insertColumnAtIndex_withViews(index: NSInteger, views: NSArray<any> | any[]): NSGridColumn;
  moveColumnAtIndex_toIndex(fromIndex: NSInteger, toIndex: NSInteger): void;
  removeColumnAtIndex(index: NSInteger): void;
  mergeCellsInHorizontalRange_verticalRange(hRange: NSRange, vRange: NSRange): void;

  numberOfRows(): NSInteger;
  numberOfColumns(): NSInteger;
  xPlacement(): NSGridCellPlacement;
  setXPlacement(xPlacement: NSGridCellPlacement): void;
  yPlacement(): NSGridCellPlacement;
  setYPlacement(yPlacement: NSGridCellPlacement): void;
  rowAlignment(): NSGridRowAlignment;
  setRowAlignment(rowAlignment: NSGridRowAlignment): void;
  rowSpacing(): CGFloat;
  setRowSpacing(rowSpacing: CGFloat): void;
  columnSpacing(): CGFloat;
  setColumnSpacing(columnSpacing: CGFloat): void;
}

declare const NSGridView: {
  alloc(): NSGridViewUninitialized;
  class(): NSGridView;
  gridViewWithNumberOfColumns_rows(columnCount: NSInteger, rowCount: NSInteger): NSGridView;
  gridViewWithViews(rows: NSArray<any> | any[]): NSGridView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

