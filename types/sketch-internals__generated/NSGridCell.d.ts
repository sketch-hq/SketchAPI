interface NSGridCellUninitialized<InitializedType = NSGridCell> extends NSObjectUninitialized<NSGridCell> {}
interface NSGridCell extends NSObject, INSCoding {

  contentView(): NSView;
  setContentView(contentView: NSView): void;
  row(): NSGridRow;
  column(): NSGridColumn;
  xPlacement(): NSGridCellPlacement;
  setXPlacement(xPlacement: NSGridCellPlacement): void;
  yPlacement(): NSGridCellPlacement;
  setYPlacement(yPlacement: NSGridCellPlacement): void;
  rowAlignment(): NSGridRowAlignment;
  setRowAlignment(rowAlignment: NSGridRowAlignment): void;
  customPlacementConstraints(): NSArray<any>;
  setCustomPlacementConstraints(customPlacementConstraints: NSArray<any> | any[]): void;
}
declare const NSGridCell: {
  alloc(): NSGridCellUninitialized;
  class(): NSGridCell;
  emptyContentView(): NSView;

}

