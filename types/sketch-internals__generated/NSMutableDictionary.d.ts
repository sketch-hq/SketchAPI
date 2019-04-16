interface NSMutableDictionaryUninitialized<KeyType, ObjectType, InitializedType = NSMutableDictionary<KeyType, ObjectType>> extends NSDictionaryUninitialized<KeyType, ObjectType, NSMutableDictionary<KeyType, ObjectType>> {
  initWithCapacity(numItems: NSUInteger): InitializedType;
}
interface NSMutableDictionary<KeyType, ObjectType> extends NSDictionary<KeyType, ObjectType> {
  removeObjectForKey(aKey: KeyType): void;
  setObject_forKey(anObject: ObjectType, aKey: KeyType): void;
  addEntriesFromDictionary(otherDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  removeAllObjects(): void;
  removeObjectsForKeys(keyArray: NSArray<any> | any[]): void;
  setDictionary(otherDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  setObject_forKeyedSubscript(obj: ObjectType | null, key: KeyType): void;
  setValue_forKey(value: ObjectType | null, key: NSString | string): void;
  objectForKey_orBySettingMissingObject(aKey: NSString | string, anObject: any): any;
  addObject_forKey(anObject: any, aKey: any): void;
  mo_setObject_forKeyedSubscript(obj: any, key: any): void;
  setPoint_forKey(point: CGPoint, key: NSString | string): void;
  setSize_forKey(size: CGSize, key: NSString | string): void;
  setRect_forKey(rect: CGRect, key: NSString | string): void;
  mergeEntriesFromDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  setDate_forKey(date: NSDate | null, key: NSString | string): void;

  outlineViewNodeIdentifier(): NSString;
  visible(): boolean;
  setVisible(visible: boolean): void;
  locked(): boolean;
  setLocked(locked: boolean): void;
  selected(): boolean;
  setSelected(selected: boolean): void;
  hovered(): boolean;
  setHovered(hovered: boolean): void;
  isFlow(): boolean;
  setIsFlow(isFlow: boolean): void;
  isSlice(): boolean;
  setIsSlice(isSlice: boolean): void;
  exportFileName(): NSString;
}
declare const NSMutableDictionary: {
  alloc<KeyType, ObjectType>(): NSMutableDictionaryUninitialized<KeyType, ObjectType>;
  class(): NSMutableDictionary;  dictionaryWithCapacity<KeyType, ObjectType>(numItems: NSUInteger): NSMutableDictionary<KeyType, ObjectType>;
  dictionaryWithContentsOfFile(path: NSString | string): NSMutableDictionary<any, any>;
  dictionaryWithContentsOfURL(url: NSURL): NSMutableDictionary<any, any>;
  dictionaryWithSharedKeySet(keyset: any): NSMutableDictionary<any, any>;

}

