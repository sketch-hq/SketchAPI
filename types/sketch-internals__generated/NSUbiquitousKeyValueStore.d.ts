interface NSUbiquitousKeyValueStoreUninitialized<InitializedType = NSUbiquitousKeyValueStore> extends NSObjectUninitialized<NSUbiquitousKeyValueStore> {}
interface NSUbiquitousKeyValueStore extends NSObject {
  objectForKey(aKey: NSString | string): any;
  setObject_forKey(anObject: any | null, aKey: NSString | string): void;
  removeObjectForKey(aKey: NSString | string): void;
  stringForKey(aKey: NSString | string): NSString;
  arrayForKey(aKey: NSString | string): NSArray<any>;
  dictionaryForKey(aKey: NSString | string): NSDictionary<any, any>;
  dataForKey(aKey: NSString | string): NSData;
  longLongForKey(aKey: NSString | string): number;
  doubleForKey(aKey: NSString | string): number;
  boolForKey(aKey: NSString | string): boolean;
  setString_forKey(aString: NSString | string | null, aKey: NSString | string): void;
  setData_forKey(aData: NSData | null, aKey: NSString | string): void;
  setArray_forKey(anArray: NSArray<any> | any[] | null, aKey: NSString | string): void;
  setDictionary_forKey(aDictionary: NSDictionary<any, any> | {[key: string]: any} | null, aKey: NSString | string): void;
  setLongLong_forKey(value: number, aKey: NSString | string): void;
  setDouble_forKey(value: number, aKey: NSString | string): void;
  setBool_forKey(value: boolean, aKey: NSString | string): void;
  synchronize(): boolean;

  dictionaryRepresentation(): NSDictionary<any, any>;
}
declare const NSUbiquitousKeyValueStore: {
  alloc(): NSUbiquitousKeyValueStoreUninitialized;
  class(): NSUbiquitousKeyValueStore;
  defaultStore(): NSUbiquitousKeyValueStore;

}

