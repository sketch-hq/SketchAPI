interface MSColorHexFieldCellUninitialized<InitializedType = MSColorHexFieldCell> extends MSInlineUpDownTextFieldCellUninitialized<MSColorHexFieldCell> {}
interface MSColorHexFieldCell extends MSInlineUpDownTextFieldCell {
}
declare const MSColorHexFieldCell: {
  alloc(): MSColorHexFieldCellUninitialized;
  class(): MSColorHexFieldCell;
}

