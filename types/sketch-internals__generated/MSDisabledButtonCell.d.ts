interface MSDisabledButtonCellUninitialized<InitializedType = MSDisabledButtonCell> extends NSButtonCellUninitialized<MSDisabledButtonCell> {}

interface MSDisabledButtonCell extends NSButtonCell {
}

declare const MSDisabledButtonCell: {
  alloc(): MSDisabledButtonCellUninitialized;
  class(): MSDisabledButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

