interface MSImageViewUninitialized<InitializedType = MSImageView> extends NSImageViewUninitialized<MSImageView> {}

interface MSImageView extends NSImageView {
}

declare const MSImageView: {
  alloc(): MSImageViewUninitialized;
  class(): MSImageView;
  imageViewWithImage(image: NSImage): MSImageView;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

