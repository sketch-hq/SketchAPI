interface MSCollectionViewUninitialized<InitializedType = MSCollectionView> extends NSCollectionViewUninitialized<MSCollectionView> {}

interface MSCollectionView extends NSCollectionView {
}

declare const MSCollectionView: {
  alloc(): MSCollectionViewUninitialized;
  class(): MSCollectionView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

