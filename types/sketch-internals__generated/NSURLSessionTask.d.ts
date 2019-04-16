interface NSURLSessionTaskUninitialized<InitializedType = NSURLSessionTask> extends NSObjectUninitialized<NSURLSessionTask> {}

interface NSURLSessionTask extends NSObject, INSCopying, INSProgressReporting {
  cancel(): void;
  suspend(): void;
  resume(): void;
  copyWithZone(zone: NSZone | null): any;

  taskIdentifier(): NSUInteger;
  originalRequest(): NSURLRequest;
  currentRequest(): NSURLRequest;
  response(): NSURLResponse;
  progress(): NSProgress;
  earliestBeginDate(): NSDate;
  setEarliestBeginDate(earliestBeginDate: NSDate): void;
  countOfBytesClientExpectsToSend(): number;
  setCountOfBytesClientExpectsToSend(countOfBytesClientExpectsToSend: number): void;
  countOfBytesClientExpectsToReceive(): number;
  setCountOfBytesClientExpectsToReceive(countOfBytesClientExpectsToReceive: number): void;
  countOfBytesReceived(): number;
  countOfBytesSent(): number;
  countOfBytesExpectedToSend(): number;
  countOfBytesExpectedToReceive(): number;
  taskDescription(): NSString;
  setTaskDescription(taskDescription: NSString | string): void;
  state(): NSURLSessionTaskState;
  error(): NSError;
  priority(): number;
  setPriority(priority: number): void;
}

declare const NSURLSessionTask: {
  alloc(): NSURLSessionTaskUninitialized;
  class(): NSURLSessionTask;
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

