interface BCDownloadManagerUninitialized<InitializedType = BCDownloadManager> {
  initWithSessionConfiguration_delegate_completionHandler(sessionConfiguration: NSURLSessionConfiguration, delegate: any | null, completionHandler: Block | null): InitializedType;
}
interface BCDownloadManager {
  addDownloadTaskWithDownloadRequestURL(downloadRequestURL: NSURL): NSString;
  addDownloadTaskWithDownloadRequest(downloadRequest: NSURLRequest): NSString;
  addDownloadTaskWithDownloadRequest_completionHandler(request: NSURLRequest, completionHandler: Block): NSString;
  removeDownloadTaskWithIdentifier(identifier: NSString | string): boolean;
  resumeDownloadTaskWithIdentifier(identifier: NSString | string): void;
  suspendDownloadTaskWithIdentifier(identifier: NSString | string): void;
  cancelAllTasksAndInvalidate(): void;
  finishTasksAndInvalidate(): void;
  downloadTaskCurrentStateWithIdentifier(identifier: NSString | string): NSDictionary<any, any>;
  cancelTaskWithIdentifier(identifier: NSString | string): void;

  identifier(): NSString;
  hasBeenInvalidated(): boolean;
  canAcceptNewDownloadTasks(): boolean;
  numberOfUnfinishedDownloadTasks(): NSInteger;
  allTasksIdentifiers(): NSArray<any>;
}
declare const BCDownloadManager: {
  alloc(): BCDownloadManagerUninitialized;
  class(): BCDownloadManager;
}

