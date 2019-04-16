interface NSMapTableUninitialized<KeyType, ObjectType, InitializedType = NSMapTable<KeyType, ObjectType>> extends NSObjectUninitialized<NSMapTable<KeyType, ObjectType>> {
  initWithKeyOptions_valueOptions_capacity(keyOptions: NSPointerFunctionsOptions, valueOptions: NSPointerFunctionsOptions, initialCapacity: NSUInteger): InitializedType;
  initWithKeyPointerFunctions_valuePointerFunctions_capacity(keyFunctions: NSPointerFunctions, valueFunctions: NSPointerFunctions, initialCapacity: NSUInteger): InitializedType;
}

interface NSMapTable<KeyType, ObjectType> extends NSObject, INSCopying, INSSecureCoding, INSFastEnumeration {
  objectForKey(aKey: KeyType | null): ObjectType;
  removeObjectForKey(aKey: KeyType | null): void;
  setObject_forKey(anObject: ObjectType | null, aKey: KeyType | null): void;
  keyEnumerator(): NSEnumerator<any>;
  objectEnumerator(): NSEnumerator<any>;
  removeAllObjects(): void;
  dictionaryRepresentation(): NSDictionary<any, any>;
  enumerateKeysAndObjectsUsingBlock(block: Block): void;
  enumerateKeysUsingBlock(block: Block): void;
  enumerateObjectsUsingBlock(block: Block): void;
  objectForKeyedSubscript(key: any): any;
  setObject_forKeyedSubscript(obj: any, key: any): void;
  filter(block: BCMapTableFilterBlock): NSMapTable<any, any>;
  copyWithZone(zone: NSZone | null): any;
  countByEnumeratingWithState_objects_count(state: NSFastEnumerationState, buffer: any[], len: NSUInteger): NSUInteger;

  keyPointerFunctions(): NSPointerFunctions;
  valuePointerFunctions(): NSPointerFunctions;
  count(): NSUInteger;
}

declare const NSMapTable: {
  alloc<KeyType, ObjectType>(): NSMapTableUninitialized<KeyType, ObjectType>;
  class(): NSMapTable;
  mapTableWithKeyOptions_valueOptions(keyOptions: NSPointerFunctionsOptions, valueOptions: NSPointerFunctionsOptions): NSMapTable<any, any>;
  mapTableWithStrongToStrongObjects(): any;
  mapTableWithWeakToStrongObjects(): any;
  mapTableWithStrongToWeakObjects(): any;
  mapTableWithWeakToWeakObjects(): any;
  strongToStrongObjectsMapTable(): NSMapTable<any, any>;
  weakToStrongObjectsMapTable(): NSMapTable<any, any>;
  strongToWeakObjectsMapTable(): NSMapTable<any, any>;
  weakToWeakObjectsMapTable(): NSMapTable<any, any>;
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

