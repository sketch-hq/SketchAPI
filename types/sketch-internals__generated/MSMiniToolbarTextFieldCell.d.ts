interface MSMiniToolbarTextFieldCellUninitialized<InitializedType = MSMiniToolbarTextFieldCell> extends NSTextFieldCellUninitialized<MSMiniToolbarTextFieldCell> {}
interface MSMiniToolbarTextFieldCell extends NSTextFieldCell {
}
declare const MSMiniToolbarTextFieldCell: {
  alloc(): MSMiniToolbarTextFieldCellUninitialized;
  class(): MSMiniToolbarTextFieldCell;
}

