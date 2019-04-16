interface MSInspectorButtonCellUninitialized<InitializedType = MSInspectorButtonCell> extends NSButtonCellUninitialized<MSInspectorButtonCell> {}
interface MSInspectorButtonCell extends NSButtonCell {
}
declare const MSInspectorButtonCell: {
  alloc(): MSInspectorButtonCellUninitialized;
  class(): MSInspectorButtonCell;
}

