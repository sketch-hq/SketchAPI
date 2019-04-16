interface MSImageLayerImporterUninitialized<InitializedType = MSImageLayerImporter> extends NSObjectUninitialized<MSImageLayerImporter> {}
interface MSImageLayerImporter extends NSObject {
}
declare const MSImageLayerImporter: {
  alloc(): MSImageLayerImporterUninitialized;
  class(): MSImageLayerImporter;  layerWithContentsOfPath_mode(fileURL: NSURL, importPreference: MSPasteboardImagePreferMode): MSLayer;

}

