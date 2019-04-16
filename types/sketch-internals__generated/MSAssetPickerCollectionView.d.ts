interface MSAssetPickerCollectionViewUninitialized<InitializedType = MSAssetPickerCollectionView> extends NSCollectionViewUninitialized<MSAssetPickerCollectionView> {}

interface MSAssetPickerCollectionView extends NSCollectionView {

  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSAssetPickerCollectionView: {
  alloc(): MSAssetPickerCollectionViewUninitialized;
  class(): MSAssetPickerCollectionView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

