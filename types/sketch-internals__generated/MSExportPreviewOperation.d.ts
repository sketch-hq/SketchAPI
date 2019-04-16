interface MSExportPreviewOperationUninitialized<InitializedType = MSExportPreviewOperation> extends NSOperationUninitialized<MSExportPreviewOperation> {
  initWithAncestry_imageSize(ancestry: MSImmutableLayerAncestry, imageSize: NSSize): InitializedType;
}
interface MSExportPreviewOperation extends NSOperation {

  previewViewModel(): MSExportPreviewViewModel;
}
declare const MSExportPreviewOperation: {
  alloc(): MSExportPreviewOperationUninitialized;
  class(): MSExportPreviewOperation;  sharedPreviewRenderQueue(): NSOperationQueue;

}

