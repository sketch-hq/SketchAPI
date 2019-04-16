interface MSPatternImageViewUninitialized<InitializedType = MSPatternImageView> extends MSImageViewUninitialized<MSPatternImageView> {}

interface MSPatternImageView extends MSImageView {
}

declare const MSPatternImageView: {
  alloc(): MSPatternImageViewUninitialized;
  class(): MSPatternImageView;
  cellClass(): any;
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

