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

  keyPointerFunctions(): NSPointerFunctions;
  valuePointerFunctions(): NSPointerFunctions;
  count(): NSUInteger;
}
declare const NSMapTable: {
  alloc<KeyType, ObjectType>(): NSMapTableUninitialized<KeyType, ObjectType>;
  class(): NSMapTable;  mapTableWithKeyOptions_valueOptions(keyOptions: NSPointerFunctionsOptions, valueOptions: NSPointerFunctionsOptions): NSMapTable<any, any>;
  mapTableWithStrongToStrongObjects(): any;
  mapTableWithWeakToStrongObjects(): any;
  mapTableWithStrongToWeakObjects(): any;
  mapTableWithWeakToWeakObjects(): any;
  strongToStrongObjectsMapTable(): NSMapTable<any, any>;
  weakToStrongObjectsMapTable(): NSMapTable<any, any>;
  strongToWeakObjectsMapTable(): NSMapTable<any, any>;
  weakToWeakObjectsMapTable(): NSMapTable<any, any>;

}

