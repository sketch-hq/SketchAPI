interface BCJSONZippedEncoderUninitialized<InitializedType = BCJSONZippedEncoder> extends BCJSONEncoderUninitialized<BCJSONZippedEncoder> {}

interface BCJSONZippedEncoder extends BCJSONEncoder {
  encodeObject_toSubpath_error(root: NSObject, path: NSString | string, error: NSError): boolean;
  encodeRawData_toSubpath_error(data: NSData, path: NSString | string, error: NSError): boolean;
  finishEncodingError(error: NSError): boolean;
}

declare const BCJSONZippedEncoder: {
  alloc(): BCJSONZippedEncoderUninitialized;
  class(): BCJSONZippedEncoder;
  zipEncoderForWritingAtURL(url: NSURL): BCJSONZippedEncoder;
  encoderForWritingToMutableData(data: NSMutableData): BCJSONEncoder;
  encodeObjectAsData_error(root: NSObject, error: NSError): NSData;
  setAliasName_forClass(codedName: NSString | string | null, className: any): void;
  encoderForWritingToFile(file: NSFileHandle): BCJSONEncoder;
  encodeObject_toFile_error(root: NSObject, file: NSFileHandle, error: NSError): boolean;
  encoderForWritingToURL(url: NSURL): BCJSONEncoder;
  encodeObject_toURL_error(root: NSObject, url: NSURL, error: NSError): boolean;
  encodeObjectAsString_error(root: NSObject, error: NSError): NSString;
  accessInstanceVariablesDirectly(): boolean;

}

