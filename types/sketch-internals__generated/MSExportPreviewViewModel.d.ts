interface MSExportPreviewViewModelUninitialized<InitializedType = MSExportPreviewViewModel> extends NSObjectUninitialized<MSExportPreviewViewModel> {
  initWithPreviewImage_cachedExportRequest_ancestry(previewImage: NSImage, cachedExportRequest: MSExportRequest, ancestry: MSImmutableLayerAncestry): InitializedType;
}
interface MSExportPreviewViewModel extends NSObject {
  imageDataInFormat(fileFormat: NSString | string): NSData;
  exportDataInFormat_toURL(fileFormat: NSString | string, url: NSURL): void;

  previewImage(): NSImage;
  cachedExportRequest(): MSExportRequest;
  layerName(): NSString;
  defaultExportFormat(): NSString;
  isVectorFormat(): boolean;
  previewFrame(): NSRect;
  setPreviewFrame(previewFrame: NSRect): void;
}
declare const MSExportPreviewViewModel: {
  alloc(): MSExportPreviewViewModelUninitialized;
  class(): MSExportPreviewViewModel;
}

