interface MSInspectorSectionHeaderLabelCellUninitialized<InitializedType = MSInspectorSectionHeaderLabelCell> extends NSTextFieldCellUninitialized<MSInspectorSectionHeaderLabelCell> {}

interface MSInspectorSectionHeaderLabelCell extends NSTextFieldCell {
}

declare const MSInspectorSectionHeaderLabelCell: {
  alloc(): MSInspectorSectionHeaderLabelCellUninitialized;
  class(): MSInspectorSectionHeaderLabelCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

