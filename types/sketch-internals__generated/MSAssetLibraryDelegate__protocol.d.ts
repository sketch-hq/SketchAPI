interface IMSAssetLibraryDelegate {
  assetLibraryChangedOnDisk(library: MSAssetLibrary): void;
  assetLibraryEnableStateChanged(library: MSAssetLibrary): void;
}

