interface MSImageOverrideViewCellUninitialized<InitializedType = MSImageOverrideViewCell> extends NSImageCellUninitialized<MSImageOverrideViewCell> {}

interface MSImageOverrideViewCell extends NSImageCell {
}

declare const MSImageOverrideViewCell: {
  alloc(): MSImageOverrideViewCellUninitialized;
  class(): MSImageOverrideViewCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;
  accessInstanceVariablesDirectly(): boolean;

}

