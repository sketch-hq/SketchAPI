interface MSColorModePickerCellUninitialized<InitializedType = MSColorModePickerCell> extends NSButtonCellUninitialized<MSColorModePickerCell> {}
interface MSColorModePickerCell extends NSButtonCell {
}
declare const MSColorModePickerCell: {
  alloc(): MSColorModePickerCellUninitialized;
  class(): MSColorModePickerCell;
}

