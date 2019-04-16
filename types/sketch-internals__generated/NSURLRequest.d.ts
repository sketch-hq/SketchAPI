interface NSURLRequestUninitialized<InitializedType = NSURLRequest> extends NSObjectUninitialized<NSURLRequest> {
  initWithURL(URL: NSURL): InitializedType;
  initWithURL_cachePolicy_timeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: NSTimeInterval): InitializedType;
}

interface NSURLRequest extends NSObject, INSSecureCoding, INSCopying, INSMutableCopying {
  valueForHTTPHeaderField(field: NSString | string): NSString;
  copyWithZone(zone: NSZone | null): any;
  mutableCopyWithZone(zone: NSZone | null): any;

  URL(): NSURL;
  cachePolicy(): NSURLRequestCachePolicy;
  timeoutInterval(): NSTimeInterval;
  mainDocumentURL(): NSURL;
  networkServiceType(): NSURLRequestNetworkServiceType;
  allowsCellularAccess(): boolean;
  HTTPMethod(): NSString;
  allHTTPHeaderFields(): NSDictionary<any, any>;
  HTTPBody(): NSData;
  HTTPBodyStream(): NSInputStream;
  HTTPShouldHandleCookies(): boolean;
  HTTPShouldUsePipelining(): boolean;
}

declare const NSURLRequest: {
  alloc(): NSURLRequestUninitialized;
  class(): NSURLRequest;
  requestWithURL(URL: NSURL): NSURLRequest;
  requestWithURL_cachePolicy_timeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: NSTimeInterval): NSURLRequest;
  registerRequestWithLicenseKey_applicationID(licenseKey: NSString | string, applicationID: NSString | string): NSURLRequest;
  refreshRequestForLicense_applicationID(license: any, applicationID: NSString | string): NSURLRequest;
  trialRequestWithApplicationID(applicationID: NSString | string): NSURLRequest;
  unregisterRequestForLicense_applicationID(license: any, applicationID: NSString | string): NSURLRequest;
  metadataRequestForLicense(license: any | null): NSURLRequest;
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

