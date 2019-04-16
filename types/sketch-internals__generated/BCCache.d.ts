interface BCCacheUninitialized<InitializedType = BCCache> extends NSObjectUninitialized<BCCache> {}

interface BCCache extends NSObject {
  cachedObjectForOwner_andKey(owner: any, key: any): NSObject;
  setCachedObject_forOwner_andKey(obj: any | null, owner: any, key: any): void;
  cachedObjectForOwner_andKey_orCreateWithBlock(owner: any, key: any, block: BCCacheCreateObjectBlock): NSObject;
  blockingCachedObjectForOwner_andKey_orCreateWithBlock(owner: any, key: any, block: BCCacheCreateObjectBlock): NSObject;
  populateCacheForObjectWithOwner_andKey_creationBlock(owner: any, key: any, block: BCCacheCreateObjectBlock): NSObject;
  removeCachedObjectForOwner_andKey(owner: any, key: any): void;
  removeCachedObjectsForOwner(owner: any): void;
  removeCachedObjectsExceptForOwners(ownersToKeep: NSSet<any>): void;
  removeAllCachedObjects(): void;

  count(): NSUInteger;
  allOwners(): NSSet<any>;
}

declare const BCCache: {
  alloc(): BCCacheUninitialized;
  class(): BCCache;
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

