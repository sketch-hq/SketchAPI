interface NSMutableSetUninitialized<ObjectType, InitializedType = NSMutableSet<ObjectType>> extends NSSetUninitialized<ObjectType, NSMutableSet<ObjectType>> {
  initWithCapacity(numItems: NSUInteger): InitializedType;
}
interface NSMutableSet<ObjectType> extends NSSet<ObjectType> {
  filterUsingPredicate(predicate: NSPredicate): void;
  addObject(object: ObjectType): void;
  removeObject(object: ObjectType): void;
  addObjectsFromArray(array: NSArray<any> | any[]): void;
  intersectSet(otherSet: NSSet<any>): void;
  minusSet(otherSet: NSSet<any>): void;
  removeAllObjects(): void;
  unionSet(otherSet: NSSet<any>): void;
  setSet(otherSet: NSSet<any>): void;
  addObjectIfNotNil(anObject: any | null): void;
}
declare const NSMutableSet: {
  alloc<ObjectType>(): NSMutableSetUninitialized<ObjectType>;
  class(): NSMutableSet;  setWithCapacity<ObjectType>(numItems: NSUInteger): NSMutableSet<ObjectType>;

}

