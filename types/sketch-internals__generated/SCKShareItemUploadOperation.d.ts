interface SCKShareItemUploadOperationUninitialized<InitializedType = SCKShareItemUploadOperation> extends BCOperationUninitialized<SCKShareItemUploadOperation> {}

interface SCKShareItemUploadOperation extends BCOperation, INSURLSessionTaskDelegate, INSProgressReporting {
  URLSession_task_willBeginDelayedRequest_completionHandler(session: NSURLSession, task: NSURLSessionTask, request: NSURLRequest, completionHandler: Block): void;
  URLSession_taskIsWaitingForConnectivity(session: NSURLSession, task: NSURLSessionTask): void;
  URLSession_task_willPerformHTTPRedirection_newRequest_completionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: Block): void;
  URLSession_task_didReceiveChallenge_completionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: Block): void;
  URLSession_task_needNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: Block): void;
  URLSession_task_didSendBodyData_totalBytesSent_totalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;
  URLSession_task_didFinishCollectingMetrics(session: NSURLSession, task: NSURLSessionTask, metrics: NSURLSessionTaskMetrics): void;
  URLSession_task_didCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError | null): void;

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
  class(): SCKShareItemUploadOperation;
  itemUploadOperationWithItem_fromURL(item: SCKFileUploadSpecs, url: NSURL): SCKShareItemUploadOperation;
  itemUploadOperationWithDocumentUploadURL_fromURL(url: NSURL, localURL: NSURL): SCKShareItemUploadOperation;
  fileSizeOfItemAtURL(url: NSURL): NSUInteger;
  fileSizeOfItemAtURL_multipartIndex_maxChunkSize(url: NSURL, part: NSUInteger, maxSize: NSUInteger): NSUInteger;
  accessInstanceVariablesDirectly(): boolean;

}

