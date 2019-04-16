interface NSURLSessionConfigurationUninitialized<InitializedType = NSURLSessionConfiguration> extends NSObjectUninitialized<NSURLSessionConfiguration> {}
interface NSURLSessionConfiguration extends NSObject, INSCopying {

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
  class(): NSURLSessionConfiguration;  backgroundSessionConfigurationWithIdentifier(identifier: NSString | string): NSURLSessionConfiguration;
  backgroundSessionConfiguration(identifier: NSString | string): NSURLSessionConfiguration;

  defaultSessionConfiguration(): NSURLSessionConfiguration;
  ephemeralSessionConfiguration(): NSURLSessionConfiguration;

}

