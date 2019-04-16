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
  class(): NSHTTPCookie;
  cookieWithProperties(properties: NSDictionary<any, any> | {[key: string]: any}): NSHTTPCookie;
  requestHeaderFieldsWithCookies(cookies: NSArray<any> | any[]): NSDictionary<any, any>;
  cookiesWithResponseHeaderFields_forURL(headerFields: NSDictionary<any, any> | {[key: string]: any}, URL: NSURL): NSArray<any>;
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

