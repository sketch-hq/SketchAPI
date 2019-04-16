interface MSSwitchModeButtonCellUninitialized<InitializedType = MSSwitchModeButtonCell> extends NSButtonCellUninitialized<MSSwitchModeButtonCell> {}

interface MSSwitchModeButtonCell extends NSButtonCell {
}

declare const MSSwitchModeButtonCell: {
  alloc(): MSSwitchModeButtonCellUninitialized;
  class(): MSSwitchModeButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

