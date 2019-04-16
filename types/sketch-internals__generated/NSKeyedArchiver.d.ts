interface NSKeyedArchiverUninitialized<InitializedType = NSKeyedArchiver> extends NSCoderUninitialized<NSKeyedArchiver> {
  initRequiringSecureCoding(requiresSecureCoding: boolean): InitializedType;
  init(): InitializedType;
  initForWritingWithMutableData(data: NSMutableData): InitializedType;
}
interface NSKeyedArchiver extends NSCoder {
  finishEncoding(): void;
  setClassName_forClass(codedName: NSString | string | null, cls: any): void;
  classNameForClass(cls: any): NSString;
  encodeObject_forKey(object: any | null, key: NSString | string): void;
  encodeConditionalObject_forKey(object: any | null, key: NSString | string): void;
  encodeBool_forKey(value: boolean, key: NSString | string): void;
  encodeInt_forKey(value: number, key: NSString | string): void;
  encodeInt32_forKey(value: number, key: NSString | string): void;
  encodeInt64_forKey(value: number, key: NSString | string): void;
  encodeFloat_forKey(value: number, key: NSString | string): void;
  encodeDouble_forKey(value: number, key: NSString | string): void;
  encodeBytes_length_forKey(bytes: number | null, length: NSUInteger, key: NSString | string): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  outputFormat(): NSPropertyListFormat;
  setOutputFormat(outputFormat: NSPropertyListFormat): void;
  encodedData(): NSData;
  requiresSecureCoding(): boolean;
  setRequiresSecureCoding(requiresSecureCoding: boolean): void;
}
declare const NSKeyedArchiver: {
  alloc(): NSKeyedArchiverUninitialized;
  class(): NSKeyedArchiver;  archivedDataWithRootObject_requiringSecureCoding_error(object: any, requiresSecureCoding: boolean, error: NSError): NSData;
  archivedDataWithRootObject(rootObject: any): NSData;
  archiveRootObject_toFile(rootObject: any, path: NSString | string): boolean;

}

