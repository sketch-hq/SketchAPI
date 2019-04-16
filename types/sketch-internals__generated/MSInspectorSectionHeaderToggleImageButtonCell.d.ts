interface MSInspectorSectionHeaderToggleImageButtonCellUninitialized<InitializedType = MSInspectorSectionHeaderToggleImageButtonCell> extends MSInspectorToggleImageButtonCellUninitialized<MSInspectorSectionHeaderToggleImageButtonCell> {}

interface MSInspectorSectionHeaderToggleImageButtonCell extends MSInspectorToggleImageButtonCell {
}

declare const MSInspectorSectionHeaderToggleImageButtonCell: {
  alloc(): MSInspectorSectionHeaderToggleImageButtonCellUninitialized;
  class(): MSInspectorSectionHeaderToggleImageButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

