interface MSInspectorPreviewPopupButtonCellUninitialized<InitializedType = MSInspectorPreviewPopupButtonCell> extends MSInspectorPopUpButtonCellUninitialized<MSInspectorPreviewPopupButtonCell> {}
interface MSInspectorPreviewPopupButtonCell extends MSInspectorPopUpButtonCell {

  previewImage(): NSImage;
  setPreviewImage(previewImage: NSImage): void;
}
declare const MSInspectorPreviewPopupButtonCell: {
  alloc(): MSInspectorPreviewPopupButtonCellUninitialized;
  class(): MSInspectorPreviewPopupButtonCell;
}

