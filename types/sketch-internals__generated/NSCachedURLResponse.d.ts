interface NSCachedURLResponseUninitialized<InitializedType = NSCachedURLResponse> extends NSObjectUninitialized<NSCachedURLResponse> {
  initWithResponse_data(response: NSURLResponse, data: NSData): InitializedType;
  initWithResponse_data_userInfo_storagePolicy(response: NSURLResponse, data: NSData, userInfo: NSDictionary<any, any> | {[key: string]: any} | null, storagePolicy: NSURLCacheStoragePolicy): InitializedType;
}

interface NSCachedURLResponse extends NSObject, INSSecureCoding, INSCopying {
  copyWithZone(zone: NSZone | null): any;

  response(): NSURLResponse;
  data(): NSData;
  userInfo(): NSDictionary<any, any>;
  storagePolicy(): NSURLCacheStoragePolicy;
}

declare const NSCachedURLResponse: {
  alloc(): NSCachedURLResponseUninitialized;
  class(): NSCachedURLResponse;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

