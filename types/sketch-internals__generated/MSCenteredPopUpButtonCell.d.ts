interface MSCenteredPopUpButtonCellUninitialized<InitializedType = MSCenteredPopUpButtonCell> extends NSPopUpButtonCellUninitialized<MSCenteredPopUpButtonCell> {}

interface MSCenteredPopUpButtonCell extends NSPopUpButtonCell {
}

declare const MSCenteredPopUpButtonCell: {
  alloc(): MSCenteredPopUpButtonCellUninitialized;
  class(): MSCenteredPopUpButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

