interface MSAssetSyncSheetHeaderUninitialized<InitializedType = MSAssetSyncSheetHeader> extends NSObjectUninitialized<MSAssetSyncSheetHeader> {}
interface MSAssetSyncSheetHeader extends NSObject, IMSAssetSyncSheetItem {

  modifiedDateString(): NSString;
}
declare const MSAssetSyncSheetHeader: {
  alloc(): MSAssetSyncSheetHeaderUninitialized;
  class(): MSAssetSyncSheetHeader;
}

