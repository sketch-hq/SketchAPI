interface NSURLAuthenticationChallengeUninitialized<InitializedType = NSURLAuthenticationChallenge> extends NSObjectUninitialized<NSURLAuthenticationChallenge> {
  initWithProtectionSpace_proposedCredential_previousFailureCount_failureResponse_error_sender(space: NSURLProtectionSpace, credential: NSURLCredential | null, previousFailureCount: NSInteger, response: NSURLResponse | null, error: NSError | null, sender: any): InitializedType;
  initWithAuthenticationChallenge_sender(challenge: NSURLAuthenticationChallenge, sender: any): InitializedType;
}

interface NSURLAuthenticationChallenge extends NSObject, INSSecureCoding {

  protectionSpace(): NSURLProtectionSpace;
  proposedCredential(): NSURLCredential;
  previousFailureCount(): NSInteger;
  failureResponse(): NSURLResponse;
  error(): NSError;
  sender(): any;
}

declare const NSURLAuthenticationChallenge: {
  alloc(): NSURLAuthenticationChallengeUninitialized;
  class(): NSURLAuthenticationChallenge;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

