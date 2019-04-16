interface MSJSONZippedArchiverUninitialized<InitializedType = MSJSONZippedArchiver> extends MSJSONArchiverUninitialized<MSJSONZippedArchiver> {
  initWithURL(url: NSURL): InitializedType;
}
interface MSJSONZippedArchiver extends MSJSONArchiver {
  encodeObject_toSubpath_error(root: NSObject, path: NSString | string, error: NSError): boolean;
  encodeRawData_toSubpath_error(data: NSData, path: NSString | string, error: NSError): boolean;
  finishEncodingError(error: NSError): boolean;
}
declare const MSJSONZippedArchiver: {
  alloc(): MSJSONZippedArchiverUninitialized;
  class(): MSJSONZippedArchiver;
}

