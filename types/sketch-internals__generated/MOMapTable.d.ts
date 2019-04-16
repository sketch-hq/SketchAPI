interface MOMapTableUninitialized<InitializedType = MOMapTable> extends NSObjectUninitialized<MOMapTable> {}

interface MOMapTable extends NSObject, INSFastEnumeration {
  keyEnumerator(): NSEnumerator<any>;
  objectEnumerator(): NSEnumerator<any>;
  count(): NSUInteger;
  allKeys(): NSArray<any>;
  allObjects(): NSArray<any>;
  objectForKey(key: any): any;
  setObject_forKey(value: any, key: any): void;
  removeObjectForKey(key: any): void;
  removeAllObjects(): void;
  countByEnumeratingWithState_objects_count(state: NSFastEnumerationState, buffer: any[], len: NSUInteger): NSUInteger;
}

declare const MOMapTable: {
  alloc(): MOMapTableUninitialized;
  class(): MOMapTable;
  mapTableWithStrongToStrongObjects(): MOMapTable;
  mapTableWithStrongToUnretainedObjects(): MOMapTable;
  mapTableWithUnretainedToStrongObjects(): MOMapTable;
  mapTableWithUnretainedToUnretainedObjects(): MOMapTable;
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

