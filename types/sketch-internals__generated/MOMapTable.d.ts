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
}
declare const MOMapTable: {
  alloc(): MOMapTableUninitialized;
  class(): MOMapTable;  mapTableWithStrongToStrongObjects(): MOMapTable;
  mapTableWithStrongToUnretainedObjects(): MOMapTable;
  mapTableWithUnretainedToStrongObjects(): MOMapTable;
  mapTableWithUnretainedToUnretainedObjects(): MOMapTable;

}

