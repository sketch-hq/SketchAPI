interface NSOrderedSetUninitialized<ObjectType, InitializedType = NSOrderedSet<ObjectType>> extends NSObjectUninitialized<NSOrderedSet<ObjectType>> {
  init(): InitializedType;
  initWithObjects_count(objects: ObjectType[], cnt: NSUInteger): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
  initWithObject(object: ObjectType): InitializedType;
  initWithObjects(firstObj: ObjectType, ...args: any[]): InitializedType;
  initWithOrderedSet(set: NSOrderedSet<any>): InitializedType;
  initWithOrderedSet_copyItems(set: NSOrderedSet<any>, flag: boolean): InitializedType;
  initWithOrderedSet_range_copyItems(set: NSOrderedSet<any>, range: NSRange, flag: boolean): InitializedType;
  initWithArray(array: NSArray<any> | any[]): InitializedType;
  initWithArray_copyItems(set: NSArray<any> | any[], flag: boolean): InitializedType;
  initWithArray_range_copyItems(set: NSArray<any> | any[], range: NSRange, flag: boolean): InitializedType;
  initWithSet(set: NSSet<any>): InitializedType;
  initWithSet_copyItems(set: NSSet<any>, flag: boolean): InitializedType;
}
interface NSOrderedSet<ObjectType> extends NSObject, INSCopying, INSMutableCopying, INSSecureCoding, INSFastEnumeration {
  valueForKey(key: NSString | string): any;
  setValue_forKey(value: any | null, key: NSString | string): void;
  addObserver_forKeyPath_options_context(observer: NSObject, keyPath: NSString | string, options: NSKeyValueObservingOptions, context: void | null): void;
  removeObserver_forKeyPath_context(observer: NSObject, keyPath: NSString | string, context: void | null): void;
  removeObserver_forKeyPath(observer: NSObject, keyPath: NSString | string): void;
  objectAtIndex(idx: NSUInteger): ObjectType;
  indexOfObject(object: ObjectType): NSUInteger;
  getObjects_range(objects: ObjectType[], range: NSRange): void;
  objectsAtIndexes(indexes: NSIndexSet): NSArray<any>;
  isEqualToOrderedSet(other: NSOrderedSet<any>): boolean;
  containsObject(object: ObjectType): boolean;
  intersectsOrderedSet(other: NSOrderedSet<any>): boolean;
  intersectsSet(set: NSSet<any>): boolean;
  isSubsetOfOrderedSet(other: NSOrderedSet<any>): boolean;
  isSubsetOfSet(set: NSSet<any>): boolean;
  objectAtIndexedSubscript(idx: NSUInteger): ObjectType;
  objectEnumerator(): NSEnumerator<any>;
  reverseObjectEnumerator(): NSEnumerator<any>;
  enumerateObjectsUsingBlock(block: Block): void;
  enumerateObjectsWithOptions_usingBlock(opts: NSEnumerationOptions, block: Block): void;
  enumerateObjectsAtIndexes_options_usingBlock(s: NSIndexSet, opts: NSEnumerationOptions, block: Block): void;
  indexOfObjectPassingTest(predicate: Block): NSUInteger;
  indexOfObjectWithOptions_passingTest(opts: NSEnumerationOptions, predicate: Block): NSUInteger;
  indexOfObjectAtIndexes_options_passingTest(s: NSIndexSet, opts: NSEnumerationOptions, predicate: Block): NSUInteger;
  indexesOfObjectsPassingTest(predicate: Block): NSIndexSet;
  indexesOfObjectsWithOptions_passingTest(opts: NSEnumerationOptions, predicate: Block): NSIndexSet;
  indexesOfObjectsAtIndexes_options_passingTest(s: NSIndexSet, opts: NSEnumerationOptions, predicate: Block): NSIndexSet;
  indexOfObject_inSortedRange_options_usingComparator(object: ObjectType, range: NSRange, opts: NSBinarySearchingOptions, cmp: NSComparator): NSUInteger;
  sortedArrayUsingComparator(cmptr: NSComparator): NSArray<any>;
  sortedArrayWithOptions_usingComparator(opts: NSSortOptions, cmptr: NSComparator): NSArray<any>;
  descriptionWithLocale(locale: any | null): NSString;
  descriptionWithLocale_indent(locale: any | null, level: NSUInteger): NSString;
  filteredOrderedSetUsingPredicate(p: NSPredicate): NSOrderedSet<any>;
  sortedArrayUsingDescriptors(sortDescriptors: NSArray<any> | any[]): NSArray<any>;
  mo_objectForIndexedSubscript(idx: NSUInteger): any;

  count(): NSUInteger;
  firstObject(): ObjectType;
  lastObject(): ObjectType;
  reversedOrderedSet(): NSOrderedSet<any>;
  array(): NSArray<any>;
  set(): NSSet<any>;
  description(): NSString;
}
declare const NSOrderedSet: {
  alloc<ObjectType>(): NSOrderedSetUninitialized<ObjectType>;
  class(): NSOrderedSet;  orderedSet<ObjectType>(): NSOrderedSet<ObjectType>;
  orderedSetWithObject<ObjectType>(object: ObjectType): NSOrderedSet<ObjectType>;
  orderedSetWithObjects_count<ObjectType>(objects: ObjectType[], cnt: NSUInteger): NSOrderedSet<ObjectType>;
  orderedSetWithObjects<ObjectType>(firstObj: ObjectType, ...args: any[]): NSOrderedSet<ObjectType>;
  orderedSetWithOrderedSet<ObjectType>(set: NSOrderedSet<any>): NSOrderedSet<ObjectType>;
  orderedSetWithOrderedSet_range_copyItems<ObjectType>(set: NSOrderedSet<any>, range: NSRange, flag: boolean): NSOrderedSet<ObjectType>;
  orderedSetWithArray<ObjectType>(array: NSArray<any> | any[]): NSOrderedSet<ObjectType>;
  orderedSetWithArray_range_copyItems<ObjectType>(array: NSArray<any> | any[], range: NSRange, flag: boolean): NSOrderedSet<ObjectType>;
  orderedSetWithSet<ObjectType>(set: NSSet<any>): NSOrderedSet<ObjectType>;
  orderedSetWithSet_copyItems<ObjectType>(set: NSSet<any>, flag: boolean): NSOrderedSet<ObjectType>;

}

