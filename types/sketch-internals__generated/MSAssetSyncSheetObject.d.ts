interface MSAssetSyncSheetObjectUninitialized<InitializedType = MSAssetSyncSheetObject> extends NSObjectUninitialized<MSAssetSyncSheetObject> {}
interface MSAssetSyncSheetObject extends NSObject, IMSAssetSyncSheetItem {

  foreignObject(): MSForeignObject;
  setForeignObject(foreignObject: MSForeignObject): void;
  libraryMaster(): MSShareableObject;
  setLibraryMaster(libraryMaster: MSShareableObject): void;
  shouldSync(): boolean;
  setShouldSync(shouldSync: boolean): void;
  tooltipForLocal(): NSString;
  tooltipForRemote(): NSString;
}
declare const MSAssetSyncSheetObject: {
  alloc(): MSAssetSyncSheetObjectUninitialized;
  class(): MSAssetSyncSheetObject;
}

