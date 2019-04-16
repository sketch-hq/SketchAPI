interface MSPlainButtonCellUninitialized<InitializedType = MSPlainButtonCell> extends MSHoverButtonCellUninitialized<MSPlainButtonCell> {}
interface MSPlainButtonCell extends MSHoverButtonCell {
}
declare const MSPlainButtonCell: {
  alloc(): MSPlainButtonCellUninitialized;
  class(): MSPlainButtonCell;
}

