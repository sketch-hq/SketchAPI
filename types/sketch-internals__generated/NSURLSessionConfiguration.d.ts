interface NSURLSessionConfigurationUninitialized<InitializedType = NSURLSessionConfiguration> extends NSObjectUninitialized<NSURLSessionConfiguration> {}

interface NSURLSessionConfiguration extends NSObject, INSCopying {
  copyWithZone(zone: NSZone | null): any;

  identifier(): NSString;
  requestCachePolicy(): NSURLRequestCachePolicy;
  setRequestCachePolicy(requestCachePolicy: NSURLRequestCachePolicy): void;
  timeoutIntervalForRequest(): NSTimeInterval;
  setTimeoutIntervalForRequest(timeoutIntervalForRequest: NSTimeInterval): void;
  timeoutIntervalForResource(): NSTimeInterval;
  setTimeoutIntervalForResource(timeoutIntervalForResource: NSTimeInterval): void;
  networkServiceType(): NSURLRequestNetworkServiceType;
  setNetworkServiceType(networkServiceType: NSURLRequestNetworkServiceType): void;
  allowsCellularAccess(): boolean;
  setAllowsCellularAccess(allowsCellularAccess: boolean): void;
  waitsForConnectivity(): boolean;
  setWaitsForConnectivity(waitsForConnectivity: boolean): void;
  discretionary(): boolean;
  setDiscretionary(discretionary: boolean): void;
  sharedContainerIdentifier(): NSString;
  setSharedContainerIdentifier(sharedContainerIdentifier: NSString | string): void;
  sessionSendsLaunchEvents(): boolean;
  setSessionSendsLaunchEvents(sessionSendsLaunchEvents: boolean): void;
  connectionProxyDictionary(): NSDictionary<any, any>;
  setConnectionProxyDictionary(connectionProxyDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  TLSMinimumSupportedProtocol(): SSLProtocol;
  setTLSMinimumSupportedProtocol(TLSMinimumSupportedProtocol: SSLProtocol): void;
  TLSMaximumSupportedProtocol(): SSLProtocol;
  setTLSMaximumSupportedProtocol(TLSMaximumSupportedProtocol: SSLProtocol): void;
  HTTPShouldUsePipelining(): boolean;
  setHTTPShouldUsePipelining(HTTPShouldUsePipelining: boolean): void;
  HTTPShouldSetCookies(): boolean;
  setHTTPShouldSetCookies(HTTPShouldSetCookies: boolean): void;
  HTTPCookieAcceptPolicy(): NSHTTPCookieAcceptPolicy;
  setHTTPCookieAcceptPolicy(HTTPCookieAcceptPolicy: NSHTTPCookieAcceptPolicy): void;
  HTTPAdditionalHeaders(): NSDictionary<any, any>;
  setHTTPAdditionalHeaders(HTTPAdditionalHeaders: NSDictionary<any, any> | {[key: string]: any}): void;
  HTTPMaximumConnectionsPerHost(): NSInteger;
  setHTTPMaximumConnectionsPerHost(HTTPMaximumConnectionsPerHost: NSInteger): void;
  HTTPCookieStorage(): NSHTTPCookieStorage;
  setHTTPCookieStorage(HTTPCookieStorage: NSHTTPCookieStorage): void;
  URLCredentialStorage(): NSURLCredentialStorage;
  setURLCredentialStorage(URLCredentialStorage: NSURLCredentialStorage): void;
  URLCache(): NSURLCache;
  setURLCache(URLCache: NSURLCache): void;
  shouldUseExtendedBackgroundIdleMode(): boolean;
  setShouldUseExtendedBackgroundIdleMode(shouldUseExtendedBackgroundIdleMode: boolean): void;
  protocolClasses(): NSArray<any>;
  setProtocolClasses(protocolClasses: NSArray<any> | any[]): void;
  multipathServiceType(): NSURLSessionMultipathServiceType;
  setMultipathServiceType(multipathServiceType: NSURLSessionMultipathServiceType): void;
}

declare const NSURLSessionConfiguration: {
  alloc(): NSURLSessionConfigurationUninitialized;
  class(): NSURLSessionConfiguration;
  backgroundSessionConfigurationWithIdentifier(identifier: NSString | string): NSURLSessionConfiguration;
  backgroundSessionConfiguration(identifier: NSString | string): NSURLSessionConfiguration;
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
  defaultSessionConfiguration(): NSURLSessionConfiguration;
  ephemeralSessionConfiguration(): NSURLSessionConfiguration;
  accessInstanceVariablesDirectly(): boolean;

}

