interface MSInspectorStylePopUpCellUninitialized<InitializedType = MSInspectorStylePopUpCell> extends MSInspectorPopUpButtonCellUninitialized<MSInspectorStylePopUpCell> {}
interface MSInspectorStylePopUpCell extends MSInspectorPopUpButtonCell {
}
declare const MSInspectorStylePopUpCell: {
  alloc(): MSInspectorStylePopUpCellUninitialized;
  class(): MSInspectorStylePopUpCell;
}

