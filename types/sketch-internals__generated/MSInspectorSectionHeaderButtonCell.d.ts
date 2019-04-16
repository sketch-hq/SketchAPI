interface MSInspectorSectionHeaderButtonCellUninitialized<InitializedType = MSInspectorSectionHeaderButtonCell> extends MSInspectorToggleButtonCellUninitialized<MSInspectorSectionHeaderButtonCell> {}
interface MSInspectorSectionHeaderButtonCell extends MSInspectorToggleButtonCell {
}
declare const MSInspectorSectionHeaderButtonCell: {
  alloc(): MSInspectorSectionHeaderButtonCellUninitialized;
  class(): MSInspectorSectionHeaderButtonCell;
}

