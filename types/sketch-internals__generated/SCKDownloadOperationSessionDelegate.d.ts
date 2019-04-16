interface SCKDownloadOperationSessionDelegateUninitialized<InitializedType = SCKDownloadOperationSessionDelegate> extends NSObjectUninitialized<SCKDownloadOperationSessionDelegate> {}

interface SCKDownloadOperationSessionDelegate extends NSObject, INSURLSessionDownloadDelegate {
  setDownloadTaskDelegate_forTask(delegate: any, task: NSURLSessionTask): void;
  URLSession_downloadTask_didFinishDownloadingToURL(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, location: NSURL): void;
  URLSession_downloadTask_didWriteData_totalBytesWritten_totalBytesExpectedToWrite(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;
  URLSession_downloadTask_didResumeAtOffset_expectedTotalBytes(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, fileOffset: number, expectedTotalBytes: number): void;
}

declare const SCKDownloadOperationSessionDelegate: {
  alloc(): SCKDownloadOperationSessionDelegateUninitialized;
  class(): SCKDownloadOperationSessionDelegate;
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
  accessInstanceVariablesDirectly(): boolean;

}

