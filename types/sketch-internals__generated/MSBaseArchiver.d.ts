interface MSBaseArchiverUninitialized<InitializedType = MSBaseArchiver> extends NSObjectUninitialized<MSBaseArchiver> {}
interface MSBaseArchiver extends NSObject {
  archiveRootObject(root: NSObject): void;
  shouldEncodeAsReference(object: NSObject | null): boolean;
  referenceObjectForObject(object: NSObject): NSObject;
  archivedDataWithRootObject_error(root: NSObject, error: NSError): NSData;
  encodeObject_forKey(object: NSObject | null, key: NSString | string): void;
  encodeDouble_forKey(value: number, key: NSString | string): void;
  encodeBool_forKey(value: boolean, key: NSString | string): void;
  encodeRect_forKey(rect: CGRect, key: NSString | string): void;
  encodePoint_forKey(point: CGPoint, key: NSString | string): void;
  encodeInteger_forKey(value: NSInteger, key: NSString | string): void;
  encodeSize_forKey(size: NSSize, key: NSString | string): void;

  archiveObjectIDs(): boolean;
  setArchiveObjectIDs(archiveObjectIDs: boolean): void;
}
declare const MSBaseArchiver: {
  alloc(): MSBaseArchiverUninitialized;
  class(): MSBaseArchiver;  archivedDataWithHeaderAndRootObject(root: NSObject): NSData;

}

