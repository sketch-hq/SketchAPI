interface NSURLComponentsUninitialized<InitializedType = NSURLComponents> extends NSObjectUninitialized<NSURLComponents> {
  initWithURL_resolvingAgainstBaseURL(url: NSURL, resolve: boolean): InitializedType;
  initWithString(URLString: NSString | string): InitializedType;
}

interface NSURLComponents extends NSObject, INSCopying {
  URLRelativeToURL(baseURL: NSURL | null): NSURL;
  copyWithZone(zone: NSZone | null): any;

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
  class(): NSURLComponents;
  componentsWithURL_resolvingAgainstBaseURL(url: NSURL, resolve: boolean): NSURLComponents;
  componentsWithString(URLString: NSString | string): NSURLComponents;
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

