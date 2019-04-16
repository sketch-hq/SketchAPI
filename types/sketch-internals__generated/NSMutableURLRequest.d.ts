interface NSMutableURLRequestUninitialized<InitializedType = NSMutableURLRequest> extends NSURLRequestUninitialized<NSMutableURLRequest> {}

interface NSMutableURLRequest extends NSURLRequest {
  setValue_forHTTPHeaderField(value: NSString | string | null, field: NSString | string): void;
  addValue_forHTTPHeaderField(value: NSString | string, field: NSString | string): void;

  URL(): NSURL;
  setURL(URL: NSURL): void;
  cachePolicy(): NSURLRequestCachePolicy;
  setCachePolicy(cachePolicy: NSURLRequestCachePolicy): void;
  timeoutInterval(): NSTimeInterval;
  setTimeoutInterval(timeoutInterval: NSTimeInterval): void;
  mainDocumentURL(): NSURL;
  setMainDocumentURL(mainDocumentURL: NSURL): void;
  networkServiceType(): NSURLRequestNetworkServiceType;
  setNetworkServiceType(networkServiceType: NSURLRequestNetworkServiceType): void;
  allowsCellularAccess(): boolean;
  setAllowsCellularAccess(allowsCellularAccess: boolean): void;
  HTTPMethod(): NSString;
  setHTTPMethod(HTTPMethod: NSString | string): void;
  allHTTPHeaderFields(): NSDictionary<any, any>;
  setAllHTTPHeaderFields(allHTTPHeaderFields: NSDictionary<any, any> | {[key: string]: any}): void;
  HTTPBody(): NSData;
  setHTTPBody(HTTPBody: NSData): void;
  HTTPBodyStream(): NSInputStream;
  setHTTPBodyStream(HTTPBodyStream: NSInputStream): void;
  HTTPShouldHandleCookies(): boolean;
  setHTTPShouldHandleCookies(HTTPShouldHandleCookies: boolean): void;
  HTTPShouldUsePipelining(): boolean;
  setHTTPShouldUsePipelining(HTTPShouldUsePipelining: boolean): void;
}

declare const NSMutableURLRequest: {
  alloc(): NSMutableURLRequestUninitialized;
  class(): NSMutableURLRequest;
  requestWithURL(URL: NSURL): NSMutableURLRequest;
  requestWithURL_cachePolicy_timeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: NSTimeInterval): NSMutableURLRequest;
  registerRequestWithLicenseKey_applicationID(licenseKey: NSString | string, applicationID: NSString | string): NSMutableURLRequest;
  refreshRequestForLicense_applicationID(license: any, applicationID: NSString | string): NSMutableURLRequest;
  trialRequestWithApplicationID(applicationID: NSString | string): NSMutableURLRequest;
  unregisterRequestForLicense_applicationID(license: any, applicationID: NSString | string): NSMutableURLRequest;
  metadataRequestForLicense(license: any | null): NSMutableURLRequest;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

