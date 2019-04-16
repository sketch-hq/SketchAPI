interface NSMutableOrderedSetUninitialized<ObjectType, InitializedType = NSMutableOrderedSet<ObjectType>> extends NSOrderedSetUninitialized<ObjectType, NSMutableOrderedSet<ObjectType>> {
  initWithCapacity(numItems: NSUInteger): InitializedType;
}
interface NSMutableOrderedSet<ObjectType> extends NSOrderedSet<ObjectType> {
  insertObject_atIndex(object: ObjectType, idx: NSUInteger): void;
  removeObjectAtIndex(idx: NSUInteger): void;
  replaceObjectAtIndex_withObject(idx: NSUInteger, object: ObjectType): void;
  addObject(object: ObjectType): void;
  addObjects_count(objects: ObjectType[], count: NSUInteger): void;
  addObjectsFromArray(array: NSArray<any> | any[]): void;
  exchangeObjectAtIndex_withObjectAtIndex(idx1: NSUInteger, idx2: NSUInteger): void;
  moveObjectsAtIndexes_toIndex(indexes: NSIndexSet, idx: NSUInteger): void;
  insertObjects_atIndexes(objects: NSArray<any> | any[], indexes: NSIndexSet): void;
  setObject_atIndex(obj: ObjectType, idx: NSUInteger): void;
  setObject_atIndexedSubscript(obj: ObjectType, idx: NSUInteger): void;
  replaceObjectsInRange_withObjects_count(range: NSRange, objects: ObjectType[], count: NSUInteger): void;
  replaceObjectsAtIndexes_withObjects(indexes: NSIndexSet, objects: NSArray<any> | any[]): void;
  removeObjectsInRange(range: NSRange): void;
  removeObjectsAtIndexes(indexes: NSIndexSet): void;
  removeAllObjects(): void;
  removeObject(object: ObjectType): void;
  removeObjectsInArray(array: NSArray<any> | any[]): void;
  intersectOrderedSet(other: NSOrderedSet<any>): void;
  minusOrderedSet(other: NSOrderedSet<any>): void;
  unionOrderedSet(other: NSOrderedSet<any>): void;
  intersectSet(other: NSSet<any>): void;
  minusSet(other: NSSet<any>): void;
  unionSet(other: NSSet<any>): void;
  sortUsingComparator(cmptr: NSComparator): void;
  sortWithOptions_usingComparator(opts: NSSortOptions, cmptr: NSComparator): void;
  sortRange_options_usingComparator(range: NSRange, opts: NSSortOptions, cmptr: NSComparator): void;
  filterUsingPredicate(p: NSPredicate): void;
  sortUsingDescriptors(sortDescriptors: NSArray<any> | any[]): void;
  mo_setObject_forIndexedSubscript(obj: any, idx: NSUInteger): void;
}
declare const NSMutableOrderedSet: {
  alloc<ObjectType>(): NSMutableOrderedSetUninitialized<ObjectType>;
  class(): NSMutableOrderedSet;  orderedSetWithCapacity<ObjectType>(numItems: NSUInteger): NSMutableOrderedSet<ObjectType>;

}

