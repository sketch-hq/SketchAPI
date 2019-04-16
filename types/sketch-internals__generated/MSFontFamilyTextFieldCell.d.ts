interface MSFontFamilyTextFieldCellUninitialized<InitializedType = MSFontFamilyTextFieldCell> extends NSTextFieldCellUninitialized<MSFontFamilyTextFieldCell> {}

interface MSFontFamilyTextFieldCell extends NSTextFieldCell {
}

declare const MSFontFamilyTextFieldCell: {
  alloc(): MSFontFamilyTextFieldCellUninitialized;
  class(): MSFontFamilyTextFieldCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

