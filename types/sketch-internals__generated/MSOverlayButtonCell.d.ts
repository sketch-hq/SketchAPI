interface MSOverlayButtonCellUninitialized<InitializedType = MSOverlayButtonCell> extends NSButtonCellUninitialized<MSOverlayButtonCell> {}

interface MSOverlayButtonCell extends NSButtonCell {
}

declare const MSOverlayButtonCell: {
  alloc(): MSOverlayButtonCellUninitialized;
  class(): MSOverlayButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

