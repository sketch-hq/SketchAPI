interface MSInspectorStrutButtonCellUninitialized<InitializedType = MSInspectorStrutButtonCell> extends MSInspectorToggleImageButtonCellUninitialized<MSInspectorStrutButtonCell> {}

interface MSInspectorStrutButtonCell extends MSInspectorToggleImageButtonCell {
}

declare const MSInspectorStrutButtonCell: {
  alloc(): MSInspectorStrutButtonCellUninitialized;
  class(): MSInspectorStrutButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

