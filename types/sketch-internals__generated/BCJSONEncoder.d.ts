interface BCJSONEncoderUninitialized<InitializedType = BCJSONEncoder> extends NSObjectUninitialized<BCJSONEncoder> {}
interface BCJSONEncoder extends NSObject {
  encodeRootObject_error(root: NSObject | null, error: NSError): boolean;
  encodeObject_forKey(object: NSObject | null, key: NSString | string): void;
  encodeDouble_forKey(value: number, key: NSString | string): void;
  encodeBool_forKey(value: boolean, key: NSString | string): void;
  encodeRect_forKey(rect: CGRect, key: NSString | string): void;
  encodePoint_forKey(point: CGPoint, key: NSString | string): void;
  encodeInteger_forKey(value: NSInteger, key: NSString | string): void;
  encodeSize_forKey(size: CGSize, key: NSString | string): void;

  userInfo(): any;
  setUserInfo(userInfo: any): void;
  error(): NSError;
  setError(error: NSError): void;
  archiver(): MSJSONArchiver;
  setArchiver(archiver: MSJSONArchiver): void;
}
declare const BCJSONEncoder: {
  alloc(): BCJSONEncoderUninitialized;
  class(): BCJSONEncoder;  encoderForWritingToMutableData(data: NSMutableData): BCJSONEncoder;
  encodeObjectAsData_error(root: NSObject, error: NSError): NSData;
  setAliasName_forClass(codedName: NSString | string | null, className: any): void;
  encoderForWritingToFile(file: NSFileHandle): BCJSONEncoder;
  encodeObject_toFile_error(root: NSObject, file: NSFileHandle, error: NSError): boolean;
  encoderForWritingToURL(url: NSURL): BCJSONEncoder;
  encodeObject_toURL_error(root: NSObject, url: NSURL, error: NSError): boolean;
  encodeObjectAsString_error(root: NSObject, error: NSError): NSString;

}

