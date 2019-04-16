interface MSWelcomeCollectionViewUninitialized<InitializedType = MSWelcomeCollectionView> extends NSCollectionViewUninitialized<MSWelcomeCollectionView> {}

interface MSWelcomeCollectionView extends NSCollectionView {
}

declare const MSWelcomeCollectionView: {
  alloc(): MSWelcomeCollectionViewUninitialized;
  class(): MSWelcomeCollectionView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

