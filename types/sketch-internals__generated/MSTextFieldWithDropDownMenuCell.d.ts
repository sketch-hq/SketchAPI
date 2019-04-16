interface MSTextFieldWithDropDownMenuCellUninitialized<InitializedType = MSTextFieldWithDropDownMenuCell> extends MSInlineUpDownTextFieldCellUninitialized<MSTextFieldWithDropDownMenuCell> {}
interface MSTextFieldWithDropDownMenuCell extends MSInlineUpDownTextFieldCell {
  drawArrowWithFrame_inView(cellFrame: NSRect, controlView: NSView): void;
}
declare const MSTextFieldWithDropDownMenuCell: {
  alloc(): MSTextFieldWithDropDownMenuCellUninitialized;
  class(): MSTextFieldWithDropDownMenuCell;
}

