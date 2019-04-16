interface NSSetUninitialized<ObjectType, InitializedType = NSSet<ObjectType>> extends NSObjectUninitialized<NSSet<ObjectType>> {
  init(): InitializedType;
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

  count(): NSUInteger;
  allObjects(): NSArray<any>;
  description(): NSString;
}
declare const NSSet: {
  alloc<ObjectType>(): NSSetUninitialized<ObjectType>;
  class(): NSSet;  set<ObjectType>(): NSSet<ObjectType>;
  setWithObject<ObjectType>(object: ObjectType): NSSet<ObjectType>;
  setWithObjects_count<ObjectType>(objects: ObjectType[], cnt: NSUInteger): NSSet<ObjectType>;
  setWithObjects<ObjectType>(firstObj: ObjectType, ...args: any[]): NSSet<ObjectType>;
  setWithSet<ObjectType>(set: NSSet<any>): NSSet<ObjectType>;
  setWithArray<ObjectType>(array: NSArray<any> | any[]): NSSet<ObjectType>;
  setWithCollectionViewIndexPath<ObjectType>(indexPath: NSIndexPath): NSSet<ObjectType>;
  setWithCollectionViewIndexPaths<ObjectType>(indexPaths: NSArray<any> | any[]): NSSet<ObjectType>;

}

