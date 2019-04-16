interface MSPreviewImageCacheUninitialized<InitializedType = MSPreviewImageCache> extends NSObjectUninitialized<MSPreviewImageCache> {
  initWithSubdirectoryName(subdirectory: NSString | string): InitializedType;
}
interface MSPreviewImageCache extends NSObject {
  fetchPreviewImageForDocumentAtURL_maximumPixelSize_handler(documentURL: NSURL, maxPixelSize: CGFloat, handler: MSPreviewImageHandler): void;

  directoryURL(): NSURL;
}
declare const MSPreviewImageCache: {
  alloc(): MSPreviewImageCacheUninitialized;
  class(): MSPreviewImageCache;
}

