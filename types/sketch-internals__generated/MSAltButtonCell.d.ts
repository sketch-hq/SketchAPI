interface MSAltButtonCellUninitialized<InitializedType = MSAltButtonCell> extends MSHoverButtonCellUninitialized<MSAltButtonCell> {}
interface MSAltButtonCell extends MSHoverButtonCell {
}
declare const MSAltButtonCell: {
  alloc(): MSAltButtonCellUninitialized;
  class(): MSAltButtonCell;
}

