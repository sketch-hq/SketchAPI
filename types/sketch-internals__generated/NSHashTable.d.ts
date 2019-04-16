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

  pointerFunctions(): NSPointerFunctions;
  count(): NSUInteger;
  allObjects(): NSArray<any>;
  anyObject(): ObjectType;
  setRepresentation(): NSSet<any>;
}
declare const NSHashTable: {
  alloc<ObjectType>(): NSHashTableUninitialized<ObjectType>;
  class(): NSHashTable;  hashTableWithOptions(options: NSPointerFunctionsOptions): NSHashTable<any>;
  hashTableWithWeakObjects(): any;
  weakObjectsHashTable(): NSHashTable<any>;

}

