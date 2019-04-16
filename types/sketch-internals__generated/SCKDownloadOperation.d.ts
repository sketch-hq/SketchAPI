interface SCKDownloadOperationUninitialized<InitializedType = SCKDownloadOperation> extends BCURLOperationUninitialized<SCKDownloadOperation> {
  initWithRequest(request: NSURLRequest): InitializedType;
}

interface SCKDownloadOperation extends BCURLOperation, INSURLSessionDownloadDelegate {
  URLSession_downloadTask_didFinishDownloadingToURL(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, location: NSURL): void;
  URLSession_downloadTask_didWriteData_totalBytesWritten_totalBytesExpectedToWrite(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;
  URLSession_downloadTask_didResumeAtOffset_expectedTotalBytes(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, fileOffset: number, expectedTotalBytes: number): void;

  request(): NSURLRequest;
  downloadCompletionBlock(): SCKDownloadOperationHandler;
  setDownloadCompletionBlock(downloadCompletionBlock: SCKDownloadOperationHandler): void;
  progress(): NSProgress;
  error(): NSError;
}

declare const SCKDownloadOperation: {
  alloc(): SCKDownloadOperationUninitialized;
  class(): SCKDownloadOperation;
  operationByRequesting_completionHandler(request: NSURLRequest, block: SCKDownloadOperationHandler): SCKDownloadOperation;
  defaultURLSession(): NSURLSession;
  accessInstanceVariablesDirectly(): boolean;

}

