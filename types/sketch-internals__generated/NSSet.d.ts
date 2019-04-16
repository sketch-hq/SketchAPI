interface NSSetUninitialized<ObjectType, InitializedType = NSSet<ObjectType>> extends NSObjectUninitialized<NSSet<ObjectType>> {
  initWithObjects_count(objects: ObjectType[], cnt: NSUInteger): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
  initWithObjects(firstObj: ObjectType, ...args: any[]): InitializedType;
  initWithSet(set: NSSet<any>): InitializedType;
  initWithSet_copyItems(set: NSSet<any>, flag: boolean): InitializedType;
  initWithArray(array: NSArray<any> | any[]): InitializedType;
}

interface NSSet<ObjectType> extends NSObject, INSCopying, INSMutableCopying, INSSecureCoding, INSFastEnumeration {
  valueForKey(key: NSString | string): any;
  setValue_forKey(value: any | null, key: NSString | string): void;
  addObserver_forKeyPath_options_context(observer: NSObject, keyPath: NSString | string, options: NSKeyValueObservingOptions, context: void | null): void;
  removeObserver_forKeyPath_context(observer: NSObject, keyPath: NSString | string, context: void | null): void;
  removeObserver_forKeyPath(observer: NSObject, keyPath: NSString | string): void;
  filteredSetUsingPredicate(predicate: NSPredicate): NSSet<any>;
  member(object: ObjectType): ObjectType;
  objectEnumerator(): NSEnumerator<any>;
  anyObject(): ObjectType;
  containsObject(anObject: ObjectType): boolean;
  descriptionWithLocale(locale: any | null): NSString;
  intersectsSet(otherSet: NSSet<any>): boolean;
  isEqualToSet(otherSet: NSSet<any>): boolean;
  isSubsetOfSet(otherSet: NSSet<any>): boolean;
  makeObjectsPerformSelector(aSelector: string): void;
  makeObjectsPerformSelector_withObject(aSelector: string, argument: any | null): void;
  setByAddingObject(anObject: ObjectType): NSSet<any>;
  setByAddingObjectsFromSet(other: NSSet<any>): NSSet<any>;
  setByAddingObjectsFromArray(other: NSArray<any> | any[]): NSSet<any>;
  enumerateObjectsUsingBlock(block: Block): void;
  enumerateObjectsWithOptions_usingBlock(opts: NSEnumerationOptions, block: Block): void;
  objectsPassingTest(predicate: Block): NSSet<any>;
  objectsWithOptions_passingTest(opts: NSEnumerationOptions, predicate: Block): NSSet<any>;
  sortedArrayUsingDescriptors(sortDescriptors: NSArray<any> | any[]): NSArray<any>;
  enumerateIndexPathsWithOptions_usingBlock(opts: NSEnumerationOptions, block: Block): void;
  each(block: Block): void;
  map(block: Block): NSSet<ObjectType>;
  containsObjectPassingTest(predicate: Block): boolean;
  isEquivalentToArray_bc(array: NSArray<any> | any[]): boolean;
  sortedArrayUsingKey(key: NSString | string): NSArray<any>;
  setMinusSet(otherSet: NSSet<any>): NSSet<any>;
  compactMap(block: Block | null): NSSet<any>;
  sortedOffsets_ms(): NSArray<any>;
  offsetsInBezierInterval_ms(): NSSet<any>;
  sortedOffsetsInBezierInterval_ms(): NSArray<any>;
  firstOffsetInBezierInterval_ms(): NSNumber;
  lastOffsetInBezierInterval_ms(): NSNumber;
  copyWithZone(zone: NSZone | null): any;
  mutableCopyWithZone(zone: NSZone | null): any;
  countByEnumeratingWithState_objects_count(state: NSFastEnumerationState, buffer: any[], len: NSUInteger): NSUInteger;

  count(): NSUInteger;
  allObjects(): NSArray<any>;
  description(): NSString;
}

declare const NSSet: {
  alloc<ObjectType>(): NSSetUninitialized<ObjectType>;
  class(): NSSet;
  set<ObjectType>(): NSSet<ObjectType>;
  setWithObject<ObjectType>(object: ObjectType): NSSet<ObjectType>;
  setWithObjects_count<ObjectType>(objects: ObjectType[], cnt: NSUInteger): NSSet<ObjectType>;
  setWithObjects<ObjectType>(firstObj: ObjectType, ...args: any[]): NSSet<ObjectType>;
  setWithSet<ObjectType>(set: NSSet<any>): NSSet<ObjectType>;
  setWithArray<ObjectType>(array: NSArray<any> | any[]): NSSet<ObjectType>;
  setWithCollectionViewIndexPath<ObjectType>(indexPath: NSIndexPath): NSSet<ObjectType>;
  setWithCollectionViewIndexPaths<ObjectType>(indexPaths: NSArray<any> | any[]): NSSet<ObjectType>;
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

