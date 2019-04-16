interface MSDropdownButtonCellUninitialized<InitializedType = MSDropdownButtonCell> extends MSInspectorPushButtonCellUninitialized<MSDropdownButtonCell> {}
interface MSDropdownButtonCell extends MSInspectorPushButtonCell {
}
declare const MSDropdownButtonCell: {
  alloc(): MSDropdownButtonCellUninitialized;
  class(): MSDropdownButtonCell;
}

