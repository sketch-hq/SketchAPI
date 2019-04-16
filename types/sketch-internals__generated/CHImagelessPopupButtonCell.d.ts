interface CHImagelessPopupButtonCellUninitialized<InitializedType = CHImagelessPopupButtonCell> extends NSPopUpButtonCellUninitialized<CHImagelessPopupButtonCell> {}
interface CHImagelessPopupButtonCell extends NSPopUpButtonCell {
}
declare const CHImagelessPopupButtonCell: {
  alloc(): CHImagelessPopupButtonCellUninitialized;
  class(): CHImagelessPopupButtonCell;
}

