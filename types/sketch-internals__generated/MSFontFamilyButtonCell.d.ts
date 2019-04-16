interface MSFontFamilyButtonCellUninitialized<InitializedType = MSFontFamilyButtonCell> extends NSButtonCellUninitialized<MSFontFamilyButtonCell> {}

interface MSFontFamilyButtonCell extends NSButtonCell {
}

declare const MSFontFamilyButtonCell: {
  alloc(): MSFontFamilyButtonCellUninitialized;
  class(): MSFontFamilyButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

