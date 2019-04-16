interface MSInspectorToggleButtonCellUninitialized<InitializedType = MSInspectorToggleButtonCell> extends MSInspectorButtonCellUninitialized<MSInspectorToggleButtonCell> {}

interface MSInspectorToggleButtonCell extends MSInspectorButtonCell {
}

declare const MSInspectorToggleButtonCell: {
  alloc(): MSInspectorToggleButtonCellUninitialized;
  class(): MSInspectorToggleButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

