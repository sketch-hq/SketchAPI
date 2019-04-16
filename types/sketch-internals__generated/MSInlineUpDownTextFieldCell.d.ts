interface MSInlineUpDownTextFieldCellUninitialized<InitializedType = MSInlineUpDownTextFieldCell> extends NSTextFieldCellUninitialized<MSInlineUpDownTextFieldCell> {}
interface MSInlineUpDownTextFieldCell extends NSTextFieldCell {

  drawOldFashioned(): boolean;
  setDrawOldFashioned(drawOldFashioned: boolean): void;
}
declare const MSInlineUpDownTextFieldCell: {
  alloc(): MSInlineUpDownTextFieldCellUninitialized;
  class(): MSInlineUpDownTextFieldCell;
}

