interface BCHighlightColorTextFieldCellUninitialized<InitializedType = BCHighlightColorTextFieldCell> extends NSTextFieldCellUninitialized<BCHighlightColorTextFieldCell> {}
interface BCHighlightColorTextFieldCell extends NSTextFieldCell {

  highlightColor(): NSColor;
  setHighlightColor(highlightColor: NSColor): void;
}
declare const BCHighlightColorTextFieldCell: {
  alloc(): BCHighlightColorTextFieldCellUninitialized;
  class(): BCHighlightColorTextFieldCell;
}

