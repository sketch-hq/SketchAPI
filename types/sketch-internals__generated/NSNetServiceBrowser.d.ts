interface NSNetServiceBrowserUninitialized<InitializedType = NSNetServiceBrowser> extends NSObjectUninitialized<NSNetServiceBrowser> {}

interface NSNetServiceBrowser extends NSObject {
  scheduleInRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeFromRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  searchForBrowsableDomains(): void;
  searchForRegistrationDomains(): void;
  searchForServicesOfType_inDomain(type: NSString | string, domainString: NSString | string): void;
  stop(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  includesPeerToPeer(): boolean;
  setIncludesPeerToPeer(includesPeerToPeer: boolean): void;
}

declare const NSNetServiceBrowser: {
  alloc(): NSNetServiceBrowserUninitialized;
  class(): NSNetServiceBrowser;
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

