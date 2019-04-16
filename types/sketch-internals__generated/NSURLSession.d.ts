interface NSURLSessionUninitialized<InitializedType = NSURLSession> extends NSObjectUninitialized<NSURLSession> {}
interface NSURLSession extends NSObject {
  finishTasksAndInvalidate(): void;
  invalidateAndCancel(): void;
  resetWithCompletionHandler(completionHandler: Block): void;
  flushWithCompletionHandler(completionHandler: Block): void;
  getTasksWithCompletionHandler(completionHandler: Block): void;
  getAllTasksWithCompletionHandler(completionHandler: Block): void;
  dataTaskWithRequest(request: NSURLRequest): NSURLSessionDataTask;
  dataTaskWithURL(url: NSURL): NSURLSessionDataTask;
  uploadTaskWithRequest_fromFile(request: NSURLRequest, fileURL: NSURL): NSURLSessionUploadTask;
  uploadTaskWithRequest_fromData(request: NSURLRequest, bodyData: NSData): NSURLSessionUploadTask;
  uploadTaskWithStreamedRequest(request: NSURLRequest): NSURLSessionUploadTask;
  downloadTaskWithRequest(request: NSURLRequest): NSURLSessionDownloadTask;
  downloadTaskWithURL(url: NSURL): NSURLSessionDownloadTask;
  downloadTaskWithResumeData(resumeData: NSData): NSURLSessionDownloadTask;
  streamTaskWithHostName_port(hostname: NSString | string, port: NSInteger): NSURLSessionStreamTask;
  streamTaskWithNetService___WATCHOS_PROHIBITED(service: NSNetService): NSURLSessionStreamTask;
  dataTaskWithRequest_completionHandler(request: NSURLRequest, completionHandler: Block): NSURLSessionDataTask;
  dataTaskWithURL_completionHandler(url: NSURL, completionHandler: Block): NSURLSessionDataTask;
  uploadTaskWithRequest_fromFile_completionHandler(request: NSURLRequest, fileURL: NSURL, completionHandler: Block): NSURLSessionUploadTask;
  uploadTaskWithRequest_fromData_completionHandler(request: NSURLRequest, bodyData: NSData | null, completionHandler: Block): NSURLSessionUploadTask;
  downloadTaskWithRequest_completionHandler(request: NSURLRequest, completionHandler: Block): NSURLSessionDownloadTask;
  downloadTaskWithURL_completionHandler(url: NSURL, completionHandler: Block): NSURLSessionDownloadTask;
  downloadTaskWithResumeData_completionHandler(resumeData: NSData, completionHandler: Block): NSURLSessionDownloadTask;

  delegateQueue(): NSOperationQueue;
  delegate(): any;
  configuration(): NSURLSessionConfiguration;
  sessionDescription(): NSString;
  setSessionDescription(sessionDescription: NSString | string): void;
}
declare const NSURLSession: {
  alloc(): NSURLSessionUninitialized;
  class(): NSURLSession;  sessionWithConfiguration(configuration: NSURLSessionConfiguration): NSURLSession;
  sessionWithConfiguration_delegate_delegateQueue(configuration: NSURLSessionConfiguration, delegate: any | null, queue: NSOperationQueue | null): NSURLSession;

  sharedSession(): NSURLSession;

}

