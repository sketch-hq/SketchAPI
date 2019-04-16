interface NSURLComponentsUninitialized<InitializedType = NSURLComponents> extends NSObjectUninitialized<NSURLComponents> {
  init(): InitializedType;
  initWithURL_resolvingAgainstBaseURL(url: NSURL, resolve: boolean): InitializedType;
  initWithString(URLString: NSString | string): InitializedType;
}
interface NSURLComponents extends NSObject, INSCopying {
  URLRelativeToURL(baseURL: NSURL | null): NSURL;

  URL(): NSURL;
  string(): NSString;
  scheme(): NSString;
  setScheme(scheme: NSString | string): void;
  user(): NSString;
  setUser(user: NSString | string): void;
  password(): NSString;
  setPassword(password: NSString | string): void;
  host(): NSString;
  setHost(host: NSString | string): void;
  port(): NSNumber;
  setPort(port: NSNumber | number): void;
  path(): NSString;
  setPath(path: NSString | string): void;
  query(): NSString;
  setQuery(query: NSString | string): void;
  fragment(): NSString;
  setFragment(fragment: NSString | string): void;
  percentEncodedUser(): NSString;
  setPercentEncodedUser(percentEncodedUser: NSString | string): void;
  percentEncodedPassword(): NSString;
  setPercentEncodedPassword(percentEncodedPassword: NSString | string): void;
  percentEncodedHost(): NSString;
  setPercentEncodedHost(percentEncodedHost: NSString | string): void;
  percentEncodedPath(): NSString;
  setPercentEncodedPath(percentEncodedPath: NSString | string): void;
  percentEncodedQuery(): NSString;
  setPercentEncodedQuery(percentEncodedQuery: NSString | string): void;
  percentEncodedFragment(): NSString;
  setPercentEncodedFragment(percentEncodedFragment: NSString | string): void;
  rangeOfScheme(): NSRange;
  rangeOfUser(): NSRange;
  rangeOfPassword(): NSRange;
  rangeOfHost(): NSRange;
  rangeOfPort(): NSRange;
  rangeOfPath(): NSRange;
  rangeOfQuery(): NSRange;
  rangeOfFragment(): NSRange;
  queryItems(): NSArray<any>;
  setQueryItems(queryItems: NSArray<any> | any[]): void;
  percentEncodedQueryItems(): NSArray<any>;
  setPercentEncodedQueryItems(percentEncodedQueryItems: NSArray<any> | any[]): void;
}
declare const NSURLComponents: {
  alloc(): NSURLComponentsUninitialized;
  class(): NSURLComponents;  componentsWithURL_resolvingAgainstBaseURL(url: NSURL, resolve: boolean): NSURLComponents;
  componentsWithString(URLString: NSString | string): NSURLComponents;

}

