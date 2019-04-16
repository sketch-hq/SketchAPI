interface MSInspectorTemplatePreviewPopupButtonCellUninitialized<InitializedType = MSInspectorTemplatePreviewPopupButtonCell> extends MSInspectorPreviewPopupButtonCellUninitialized<MSInspectorTemplatePreviewPopupButtonCell> {}

interface MSInspectorTemplatePreviewPopupButtonCell extends MSInspectorPreviewPopupButtonCell {
}

declare const MSInspectorTemplatePreviewPopupButtonCell: {
  alloc(): MSInspectorTemplatePreviewPopupButtonCellUninitialized;
  class(): MSInspectorTemplatePreviewPopupButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

