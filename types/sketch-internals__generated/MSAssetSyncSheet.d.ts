interface MSAssetSyncSheetUninitialized<InitializedType = MSAssetSyncSheet> extends CHSheetControllerUninitialized<MSAssetSyncSheet> {}
interface MSAssetSyncSheet extends CHSheetController {
}
declare const MSAssetSyncSheet: {
  alloc(): MSAssetSyncSheetUninitialized;
  class(): MSAssetSyncSheet;
}

