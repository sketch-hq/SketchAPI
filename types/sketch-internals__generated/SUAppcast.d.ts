interface SUAppcastUninitialized<InitializedType = SUAppcast> extends NSObjectUninitialized<SUAppcast> {}

interface SUAppcast extends NSObject {
  fetchAppcastFromURL_inBackground_completionBlock(url: NSURL, bg: boolean, err: Block): void;
  copyWithoutDeltaUpdates(): SUAppcast;
  parseAppcastItemsFromXMLFile_error(appcastFile: NSURL, errorp: NSError): NSArray<any>;

  userAgentString(): NSString;
  setUserAgentString(userAgentString: NSString | string): void;
  httpHeaders(): NSDictionary<any, any>;
  setHttpHeaders(httpHeaders: NSDictionary<any, any> | {[key: string]: any}): void;
  items(): NSArray<any>;
}

declare const SUAppcast: {
  alloc(): SUAppcastUninitialized;
  class(): SUAppcast;
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

