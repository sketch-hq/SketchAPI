interface MSVerticallyCenteredTextFieldCellUninitialized<InitializedType = MSVerticallyCenteredTextFieldCell> extends NSTextFieldCellUninitialized<MSVerticallyCenteredTextFieldCell> {}

interface MSVerticallyCenteredTextFieldCell extends NSTextFieldCell {
}

declare const MSVerticallyCenteredTextFieldCell: {
  alloc(): MSVerticallyCenteredTextFieldCellUninitialized;
  class(): MSVerticallyCenteredTextFieldCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

