interface MSWelcomeCollectionImageViewUninitialized<InitializedType = MSWelcomeCollectionImageView> extends NSImageViewUninitialized<MSWelcomeCollectionImageView> {}

interface MSWelcomeCollectionImageView extends NSImageView {

  doubleClickAction(): string;
  setDoubleClickAction(doubleClickAction: string): void;
  imageInterpolation(): NSImageInterpolation;
  setImageInterpolation(imageInterpolation: NSImageInterpolation): void;
  selected(): boolean;
  setSelected(selected: boolean): void;
}

declare const MSWelcomeCollectionImageView: {
  alloc(): MSWelcomeCollectionImageViewUninitialized;
  class(): MSWelcomeCollectionImageView;
  imageViewWithImage(image: NSImage): MSWelcomeCollectionImageView;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

