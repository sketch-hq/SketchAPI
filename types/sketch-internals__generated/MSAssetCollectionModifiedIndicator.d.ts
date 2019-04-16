interface MSAssetCollectionModifiedIndicatorUninitialized<InitializedType = MSAssetCollectionModifiedIndicator> extends NSViewUninitialized<MSAssetCollectionModifiedIndicator> {}

interface MSAssetCollectionModifiedIndicator extends NSView {
}

declare const MSAssetCollectionModifiedIndicator: {
  alloc(): MSAssetCollectionModifiedIndicatorUninitialized;
  class(): MSAssetCollectionModifiedIndicator;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

