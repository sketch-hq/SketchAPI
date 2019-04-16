interface MSInspectorSmallCheckmarkCellUninitialized<InitializedType = MSInspectorSmallCheckmarkCell> extends MSInspectorCheckmarkCellUninitialized<MSInspectorSmallCheckmarkCell> {}

interface MSInspectorSmallCheckmarkCell extends MSInspectorCheckmarkCell {
}

declare const MSInspectorSmallCheckmarkCell: {
  alloc(): MSInspectorSmallCheckmarkCellUninitialized;
  class(): MSInspectorSmallCheckmarkCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

