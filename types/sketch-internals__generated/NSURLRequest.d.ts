interface NSURLRequestUninitialized<InitializedType = NSURLRequest> extends NSObjectUninitialized<NSURLRequest> {
  initWithURL(URL: NSURL): InitializedType;
  initWithURL_cachePolicy_timeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: NSTimeInterval): InitializedType;
}
interface NSURLRequest extends NSObject, INSSecureCoding, INSCopying, INSMutableCopying {
  valueForHTTPHeaderField(field: NSString | string): NSString;

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
  class(): NSURLRequest;  requestWithURL(URL: NSURL): NSURLRequest;
  requestWithURL_cachePolicy_timeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: NSTimeInterval): NSURLRequest;
  registerRequestWithLicenseKey_applicationID(licenseKey: NSString | string, applicationID: NSString | string): NSURLRequest;
  refreshRequestForLicense_applicationID(license: any, applicationID: NSString | string): NSURLRequest;
  trialRequestWithApplicationID(applicationID: NSString | string): NSURLRequest;
  unregisterRequestForLicense_applicationID(license: any, applicationID: NSString | string): NSURLRequest;
  metadataRequestForLicense(license: any | null): NSURLRequest;

  supportsSecureCoding(): boolean;

}

