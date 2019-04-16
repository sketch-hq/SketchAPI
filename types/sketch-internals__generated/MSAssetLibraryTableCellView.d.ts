interface MSAssetLibraryTableCellViewUninitialized<InitializedType = MSAssetLibraryTableCellView> extends NSTableCellViewUninitialized<MSAssetLibraryTableCellView> {}
interface MSAssetLibraryTableCellView extends NSTableCellView {
  startDownloading(): void;

  assetPreferenceItem(): MSAssetPreferenceItem;
}
declare const MSAssetLibraryTableCellView: {
  alloc(): MSAssetLibraryTableCellViewUninitialized;
  class(): MSAssetLibraryTableCellView;
}

