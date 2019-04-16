interface MSWelcomeCollectionTextFieldCellUninitialized<InitializedType = MSWelcomeCollectionTextFieldCell> extends NSTextFieldCellUninitialized<MSWelcomeCollectionTextFieldCell> {}

interface MSWelcomeCollectionTextFieldCell extends NSTextFieldCell {
}

declare const MSWelcomeCollectionTextFieldCell: {
  alloc(): MSWelcomeCollectionTextFieldCellUninitialized;
  class(): MSWelcomeCollectionTextFieldCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

