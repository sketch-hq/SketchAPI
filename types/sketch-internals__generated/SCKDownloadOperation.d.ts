interface SCKDownloadOperationUninitialized<InitializedType = SCKDownloadOperation> extends BCURLOperationUninitialized<SCKDownloadOperation> {
  initWithRequest(request: NSURLRequest): InitializedType;
}
interface SCKDownloadOperation extends BCURLOperation, INSURLSessionDownloadDelegate {

  request(): NSURLRequest;
  downloadCompletionBlock(): SCKDownloadOperationHandler;
  setDownloadCompletionBlock(downloadCompletionBlock: SCKDownloadOperationHandler): void;
  progress(): NSProgress;
  error(): NSError;
}
declare const SCKDownloadOperation: {
  alloc(): SCKDownloadOperationUninitialized;
  class(): SCKDownloadOperation;  operationByRequesting_completionHandler(request: NSURLRequest, block: SCKDownloadOperationHandler): SCKDownloadOperation;

}

