interface NSHTTPURLResponseUninitialized<InitializedType = NSHTTPURLResponse> extends NSURLResponseUninitialized<NSHTTPURLResponse> {
  initWithURL_statusCode_HTTPVersion_headerFields(url: NSURL, statusCode: NSInteger, HTTPVersion: NSString | string | null, headerFields: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}

interface NSHTTPURLResponse extends NSURLResponse {

  statusCode(): NSInteger;
  allHeaderFields(): NSDictionary<any, any>;
}

declare const NSHTTPURLResponse: {
  alloc(): NSHTTPURLResponseUninitialized;
  class(): NSHTTPURLResponse;
  localizedStringForStatusCode(statusCode: NSInteger): NSString;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

