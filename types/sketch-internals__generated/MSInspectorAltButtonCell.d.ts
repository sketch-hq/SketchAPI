interface MSInspectorAltButtonCellUninitialized<InitializedType = MSInspectorAltButtonCell> extends MSAltButtonCellUninitialized<MSInspectorAltButtonCell> {}
interface MSInspectorAltButtonCell extends MSAltButtonCell {
}
declare const MSInspectorAltButtonCell: {
  alloc(): MSInspectorAltButtonCellUninitialized;
  class(): MSInspectorAltButtonCell;
}

