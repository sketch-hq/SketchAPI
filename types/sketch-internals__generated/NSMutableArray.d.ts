interface NSMutableArrayUninitialized<ObjectType, InitializedType = NSMutableArray<ObjectType>> extends NSArrayUninitialized<ObjectType, NSMutableArray<ObjectType>> {
  initWithCapacity(numItems: NSUInteger): InitializedType;
}
interface NSMutableArray<ObjectType> extends NSArray<ObjectType> {
  addObject(anObject: ObjectType): void;
  insertObject_atIndex(anObject: ObjectType, index: NSUInteger): void;
  removeLastObject(): void;
  removeObjectAtIndex(index: NSUInteger): void;
  replaceObjectAtIndex_withObject(index: NSUInteger, anObject: ObjectType): void;
  addObjectsFromArray(otherArray: NSArray<any> | any[]): void;
  exchangeObjectAtIndex_withObjectAtIndex(idx1: NSUInteger, idx2: NSUInteger): void;
  removeAllObjects(): void;
  removeObject_inRange(anObject: ObjectType, range: NSRange): void;
  removeObject(anObject: ObjectType): void;
  removeObjectIdenticalTo_inRange(anObject: ObjectType, range: NSRange): void;
  removeObjectIdenticalTo(anObject: ObjectType): void;
  removeObjectsFromIndices_numIndices(indices: NSUInteger, cnt: NSUInteger): void;
  removeObjectsInArray(otherArray: NSArray<any> | any[]): void;
  removeObjectsInRange(range: NSRange): void;
  replaceObjectsInRange_withObjectsFromArray_range(range: NSRange, otherArray: NSArray<any> | any[], otherRange: NSRange): void;
  replaceObjectsInRange_withObjectsFromArray(range: NSRange, otherArray: NSArray<any> | any[]): void;
  setArray(otherArray: NSArray<any> | any[]): void;
  sortUsingSelector(comparator: string): void;
  insertObjects_atIndexes(objects: NSArray<any> | any[], indexes: NSIndexSet): void;
  removeObjectsAtIndexes(indexes: NSIndexSet): void;
  replaceObjectsAtIndexes_withObjects(indexes: NSIndexSet, objects: NSArray<any> | any[]): void;
  setObject_atIndexedSubscript(obj: ObjectType, idx: NSUInteger): void;
  sortUsingComparator(cmptr: NSComparator): void;
  sortWithOptions_usingComparator(opts: NSSortOptions, cmptr: NSComparator): void;
  filterUsingPredicate(predicate: NSPredicate): void;
  sortUsingDescriptors(sortDescriptors: NSArray<any> | any[]): void;
  removeObjectsPassingTest(predicate: Block): void;
  addObjectIfNotNil(obj: any | null): void;
  removeFirstObject(): void;
  replaceObject_withObject(obj1: any, obj2: any): void;
  sortUsingKey_selector(key: NSString | string, action: string): void;
  mo_setObject_forIndexedSubscript(obj: any, idx: NSUInteger): void;
  indexOfAttributeWithName(name: NSString | string): NSUInteger;
  addAttributeForID(identifier: NSString | string): void;
  addAttributeWithName_stringValue(name: NSString | string, value: NSString | string): void;
  addAttributeWithName_pixelValue(name: NSString | string, value: CGFloat): void;
  addAttributeWithName_numberValue(name: NSString | string, value: CGFloat): void;
  addAttributeWithName_percentageValue(name: NSString | string, value: CGFloat): void;
  addAttributeWithName_percentageFractionalValue(name: NSString | string, value: CGFloat): void;
  removeAttributeWithName(name: NSString | string): void;
}
declare const NSMutableArray: {
  alloc<ObjectType>(): NSMutableArrayUninitialized<ObjectType>;
  class(): NSMutableArray;  arrayWithCapacity<ObjectType>(numItems: NSUInteger): NSMutableArray<ObjectType>;
  arrayWithContentsOfFile(path: NSString | string): NSMutableArray<any>;
  arrayWithContentsOfURL(url: NSURL): NSMutableArray<any>;
  arrayWithCapacity_fill(count: NSUInteger, block: Block): any;

}

