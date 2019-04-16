interface NSHTTPCookieUninitialized<InitializedType = NSHTTPCookie> extends NSObjectUninitialized<NSHTTPCookie> {
  initWithProperties(properties: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}
interface NSHTTPCookie extends NSObject {

  properties(): NSDictionary<any, any>;
  version(): NSUInteger;
  name(): NSString;
  value(): NSString;
  expiresDate(): NSDate;
  sessionOnly(): boolean;
  domain(): NSString;
  path(): NSString;
  secure(): boolean;
  HTTPOnly(): boolean;
  comment(): NSString;
  commentURL(): NSURL;
  portList(): NSArray<any>;
}
declare const NSHTTPCookie: {
  alloc(): NSHTTPCookieUninitialized;
  class(): NSHTTPCookie;  cookieWithProperties(properties: NSDictionary<any, any> | {[key: string]: any}): NSHTTPCookie;
  requestHeaderFieldsWithCookies(cookies: NSArray<any> | any[]): NSDictionary<any, any>;
  cookiesWithResponseHeaderFields_forURL(headerFields: NSDictionary<any, any> | {[key: string]: any}, URL: NSURL): NSArray<any>;

}

