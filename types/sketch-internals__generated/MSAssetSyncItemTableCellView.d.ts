interface MSAssetSyncItemTableCellViewUninitialized<InitializedType = MSAssetSyncItemTableCellView> extends NSTableCellViewUninitialized<MSAssetSyncItemTableCellView> {}

interface MSAssetSyncItemTableCellView extends NSTableCellView {
}

declare const MSAssetSyncItemTableCellView: {
  alloc(): MSAssetSyncItemTableCellViewUninitialized;
  class(): MSAssetSyncItemTableCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

