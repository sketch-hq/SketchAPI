interface MSAssetLibraryTableCellViewUninitialized<InitializedType = MSAssetLibraryTableCellView> extends NSTableCellViewUninitialized<MSAssetLibraryTableCellView> {}

interface MSAssetLibraryTableCellView extends NSTableCellView {
  startDownloading(): void;

  assetPreferenceItem(): MSAssetPreferenceItem;
}

declare const MSAssetLibraryTableCellView: {
  alloc(): MSAssetLibraryTableCellViewUninitialized;
  class(): MSAssetLibraryTableCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

