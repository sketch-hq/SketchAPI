interface SCKCloudDocumentUninitialized<InitializedType = SCKCloudDocument> extends SCKDocumentUninitialized<SCKCloudDocument> {}

interface SCKCloudDocument extends SCKDocument {
  diffComparedTo(object: SCKCloudDocument): SCKCloudDocumentDiff;

  slug(): NSString;
  downloadURL(): NSURL;
  isProcessing(): boolean;
  metaImageURL(): NSURL;
}

declare const SCKCloudDocument: {
  alloc(): SCKCloudDocumentUninitialized;
  class(): SCKCloudDocument;
}

