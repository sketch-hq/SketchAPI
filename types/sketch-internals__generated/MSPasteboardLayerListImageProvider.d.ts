interface MSPasteboardLayerListImageProviderUninitialized<InitializedType = MSPasteboardLayerListImageProvider> extends NSObjectUninitialized<MSPasteboardLayerListImageProvider> {}
interface MSPasteboardLayerListImageProvider extends NSObject {
}
declare const MSPasteboardLayerListImageProvider: {
  alloc(): MSPasteboardLayerListImageProviderUninitialized;
  class(): MSPasteboardLayerListImageProvider;  addLayer_toPasteboard(layer: MSLayer, pboard: NSPasteboard): void;

}

