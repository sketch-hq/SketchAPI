interface MSInspectorToggleBackgroundButtonCellUninitialized<InitializedType = MSInspectorToggleBackgroundButtonCell> extends MSInspectorButtonCellUninitialized<MSInspectorToggleBackgroundButtonCell> {}

interface MSInspectorToggleBackgroundButtonCell extends MSInspectorButtonCell {
}

declare const MSInspectorToggleBackgroundButtonCell: {
  alloc(): MSInspectorToggleBackgroundButtonCellUninitialized;
  class(): MSInspectorToggleBackgroundButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

