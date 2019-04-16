interface MSAssetLibraryTableViewUninitialized<InitializedType = MSAssetLibraryTableView> extends BCKeyEventActionTableViewUninitialized<MSAssetLibraryTableView> {}
interface MSAssetLibraryTableView extends BCKeyEventActionTableView {
}
declare const MSAssetLibraryTableView: {
  alloc(): MSAssetLibraryTableViewUninitialized;
  class(): MSAssetLibraryTableView;
}

