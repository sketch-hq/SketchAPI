interface MSPasteboardFileDataProviderUninitialized<InitializedType = MSPasteboardFileDataProvider> extends NSObjectUninitialized<MSPasteboardFileDataProvider> {}
interface MSPasteboardFileDataProvider extends NSObject {
}
declare const MSPasteboardFileDataProvider: {
  alloc(): MSPasteboardFileDataProviderUninitialized;
  class(): MSPasteboardFileDataProvider;  addLayers_toPasteboard(layers: NSArray<any> | any[], pboard: NSPasteboard): void;
  exportLayers_toFolder(layers: NSArray<any> | any[], folder: NSURL): NSArray<any>;

}

