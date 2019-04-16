interface SCKDocumentUploadMultipartSpecsUninitialized<InitializedType = SCKDocumentUploadMultipartSpecs> extends NSObjectUninitialized<SCKDocumentUploadMultipartSpecs> {
  initWithDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}
interface SCKDocumentUploadMultipartSpecs extends NSObject {
  uploadRequestCompletionBodyWithSize(size: NSUInteger): NSDictionary<any, any>;

  uploadID(): NSString;
  uploadKey(): NSString;
  partSize(): NSUInteger;
  uploadURLs(): NSArray<any>;
  pendingRetryAttempts(): NSUInteger;
  setPendingRetryAttempts(pendingRetryAttempts: NSUInteger): void;
}
declare const SCKDocumentUploadMultipartSpecs: {
  alloc(): SCKDocumentUploadMultipartSpecsUninitialized;
  class(): SCKDocumentUploadMultipartSpecs;
}

