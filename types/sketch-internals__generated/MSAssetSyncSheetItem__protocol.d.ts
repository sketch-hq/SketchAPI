interface IMSAssetSyncSheetItem {

  type(): MSAssetSyncSheetItemType;
  library(): MSAssetLibrary;
  setLibrary(library: MSAssetLibrary): void;
  displayName(): NSString;
  shouldSync(): boolean;
}

