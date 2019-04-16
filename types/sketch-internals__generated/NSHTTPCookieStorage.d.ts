interface NSHTTPCookieStorageUninitialized<InitializedType = NSHTTPCookieStorage> extends NSObjectUninitialized<NSHTTPCookieStorage> {}

interface NSHTTPCookieStorage extends NSObject {
  setCookie(cookie: NSHTTPCookie): void;
  deleteCookie(cookie: NSHTTPCookie): void;
  removeCookiesSinceDate(date: NSDate): void;
  cookiesForURL(URL: NSURL): NSArray<any>;
  setCookies_forURL_mainDocumentURL(cookies: NSArray<any> | any[], URL: NSURL | null, mainDocumentURL: NSURL | null): void;
  sortedCookiesUsingDescriptors(sortOrder: NSArray<any> | any[]): NSArray<any>;
  storeCookies_forTask(cookies: NSArray<any> | any[], task: NSURLSessionTask): void;
  getCookiesForTask_completionHandler(task: NSURLSessionTask, completionHandler: Block): void;

  cookies(): NSArray<any>;
  cookieAcceptPolicy(): NSHTTPCookieAcceptPolicy;
  setCookieAcceptPolicy(cookieAcceptPolicy: NSHTTPCookieAcceptPolicy): void;
}

declare const NSHTTPCookieStorage: {
  alloc(): NSHTTPCookieStorageUninitialized;
  class(): NSHTTPCookieStorage;
  sharedCookieStorageForGroupContainerIdentifier(identifier: NSString | string): NSHTTPCookieStorage;
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
  sharedHTTPCookieStorage(): NSHTTPCookieStorage;
  accessInstanceVariablesDirectly(): boolean;

}

