interface NSHashTableUninitialized<ObjectType, InitializedType = NSHashTable<ObjectType>> extends NSObjectUninitialized<NSHashTable<ObjectType>> {
  initWithOptions_capacity(options: NSPointerFunctionsOptions, initialCapacity: NSUInteger): InitializedType;
  initWithPointerFunctions_capacity(functions: NSPointerFunctions, initialCapacity: NSUInteger): InitializedType;
}

interface NSHashTable<ObjectType> extends NSObject, INSCopying, INSSecureCoding, INSFastEnumeration {
  member(object: ObjectType | null): ObjectType;
  objectEnumerator(): NSEnumerator<any>;
  addObject(object: ObjectType | null): void;
  removeObject(object: ObjectType | null): void;
  removeAllObjects(): void;
  containsObject(anObject: ObjectType | null): boolean;
  intersectsHashTable(other: NSHashTable<any>): boolean;
  isEqualToHashTable(other: NSHashTable<any>): boolean;
  isSubsetOfHashTable(other: NSHashTable<any>): boolean;
  intersectHashTable(other: NSHashTable<any>): void;
  unionHashTable(other: NSHashTable<any>): void;
  minusHashTable(other: NSHashTable<any>): void;
  copyWithZone(zone: NSZone | null): any;
  countByEnumeratingWithState_objects_count(state: NSFastEnumerationState, buffer: any[], len: NSUInteger): NSUInteger;

  pointerFunctions(): NSPointerFunctions;
  count(): NSUInteger;
  allObjects(): NSArray<any>;
  anyObject(): ObjectType;
  setRepresentation(): NSSet<any>;
}

declare const NSHashTable: {
  alloc<ObjectType>(): NSHashTableUninitialized<ObjectType>;
  class(): NSHashTable;
  hashTableWithOptions(options: NSPointerFunctionsOptions): NSHashTable<any>;
  hashTableWithWeakObjects(): any;
  weakObjectsHashTable(): NSHashTable<any>;
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

