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
  class(): NSURLSession;
  sessionWithConfiguration(configuration: NSURLSessionConfiguration): NSURLSession;
  sessionWithConfiguration_delegate_delegateQueue(configuration: NSURLSessionConfiguration, delegate: any | null, queue: NSOperationQueue | null): NSURLSession;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  sharedSession(): NSURLSession;
  accessInstanceVariablesDirectly(): boolean;

}

