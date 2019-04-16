interface SCKShareItemUploadOperationUninitialized<InitializedType = SCKShareItemUploadOperation> extends BCOperationUninitialized<SCKShareItemUploadOperation> {}
interface SCKShareItemUploadOperation extends BCOperation, INSURLSessionTaskDelegate, INSProgressReporting {

  urlSession(): NSURLSession;
  setUrlSession(urlSession: NSURLSession): void;
  taskIdentifier(): NSUInteger;
  sourceURL(): NSURL;
  multipartIndex(): NSUInteger;
  setMultipartIndex(multipartIndex: NSUInteger): void;
  documentMultipartSpecs(): SCKDocumentUploadMultipartSpecs;
  setDocumentMultipartSpecs(documentMultipartSpecs: SCKDocumentUploadMultipartSpecs): void;
  item(): SCKFileUploadSpecs;
  progress(): NSProgress;
  additionalRetryAttempts(): NSUInteger;
  setAdditionalRetryAttempts(additionalRetryAttempts: NSUInteger): void;
  error(): NSError;
}
declare const SCKShareItemUploadOperation: {
  alloc(): SCKShareItemUploadOperationUninitialized;
  class(): SCKShareItemUploadOperation;  itemUploadOperationWithItem_fromURL(item: SCKFileUploadSpecs, url: NSURL): SCKShareItemUploadOperation;
  itemUploadOperationWithDocumentUploadURL_fromURL(url: NSURL, localURL: NSURL): SCKShareItemUploadOperation;
  fileSizeOfItemAtURL(url: NSURL): NSUInteger;
  fileSizeOfItemAtURL_multipartIndex_maxChunkSize(url: NSURL, part: NSUInteger, maxSize: NSUInteger): NSUInteger;

}

