interface MSRightOffsetHoverButtonCellUninitialized<InitializedType = MSRightOffsetHoverButtonCell> extends MSHoverButtonCellUninitialized<MSRightOffsetHoverButtonCell> {}

interface MSRightOffsetHoverButtonCell extends MSHoverButtonCell {
}

declare const MSRightOffsetHoverButtonCell: {
  alloc(): MSRightOffsetHoverButtonCellUninitialized;
  class(): MSRightOffsetHoverButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

