interface MSAssetSyncSheetUninitialized<InitializedType = MSAssetSyncSheet> extends CHSheetControllerUninitialized<MSAssetSyncSheet> {}

interface MSAssetSyncSheet extends CHSheetController {
}

declare const MSAssetSyncSheet: {
  alloc(): MSAssetSyncSheetUninitialized;
  class(): MSAssetSyncSheet;
  runForWindow(window: NSWindow): any;
  runForWindow_withObject(window: NSWindow, obj: any): any;
  accessInstanceVariablesDirectly(): boolean;

}

