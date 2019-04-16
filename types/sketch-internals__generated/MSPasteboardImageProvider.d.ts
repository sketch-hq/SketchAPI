interface MSPasteboardImageProviderUninitialized<InitializedType = MSPasteboardImageProvider> extends NSObjectUninitialized<MSPasteboardImageProvider> {}
interface MSPasteboardImageProvider extends NSObject {
}
declare const MSPasteboardImageProvider: {
  alloc(): MSPasteboardImageProviderUninitialized;
  class(): MSPasteboardImageProvider;  preparePasteboard_withExportRequest(pboard: NSPasteboard, request: MSExportRequest): void;

}

