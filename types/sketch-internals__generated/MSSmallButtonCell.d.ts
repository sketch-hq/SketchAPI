interface MSSmallButtonCellUninitialized<InitializedType = MSSmallButtonCell> extends NSButtonCellUninitialized<MSSmallButtonCell> {}

interface MSSmallButtonCell extends NSButtonCell {
}

declare const MSSmallButtonCell: {
  alloc(): MSSmallButtonCellUninitialized;
  class(): MSSmallButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

