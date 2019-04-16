interface MSSymbolPreviewGeneratorUninitialized<InitializedType = MSSymbolPreviewGenerator> extends NSObjectUninitialized<MSSymbolPreviewGenerator> {}
interface MSSymbolPreviewGenerator extends NSObject {
}
declare const MSSymbolPreviewGenerator: {
  alloc(): MSSymbolPreviewGeneratorUninitialized;
  class(): MSSymbolPreviewGenerator;  imageForSymbolAncestry_withSize_colorSpace_trimmed(ancestry: MSImmutableLayerAncestry, size: NSSize, colorSpace: NSColorSpace, trimmed: boolean): NSImage;

}

