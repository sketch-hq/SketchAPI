interface MSCloudShareCollectionItemUninitialized<InitializedType = MSCloudShareCollectionItem> extends MSExistingDocumentCollectionItemUninitialized<MSCloudShareCollectionItem> {
  initWithController_cloudShare(controller: MSWelcomeWindowController, share: SCKShare): InitializedType;
}
interface MSCloudShareCollectionItem extends MSExistingDocumentCollectionItem {
  downloadLatestDocument(handler: Block): void;

  cloudShare(): SCKShare;
  latestDocument(): SCKCloudDocument;
  downloadProgress(): NSProgress;
}
declare const MSCloudShareCollectionItem: {
  alloc(): MSCloudShareCollectionItemUninitialized;
  class(): MSCloudShareCollectionItem;
}

