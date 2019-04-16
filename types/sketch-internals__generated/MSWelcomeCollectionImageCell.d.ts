interface MSWelcomeCollectionImageCellUninitialized<InitializedType = MSWelcomeCollectionImageCell> extends NSImageCellUninitialized<MSWelcomeCollectionImageCell> {}

interface MSWelcomeCollectionImageCell extends NSImageCell {
}

declare const MSWelcomeCollectionImageCell: {
  alloc(): MSWelcomeCollectionImageCellUninitialized;
  class(): MSWelcomeCollectionImageCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;
  accessInstanceVariablesDirectly(): boolean;

}

