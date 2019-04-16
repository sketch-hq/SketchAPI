interface BCJSONZippedEncoderUninitialized<InitializedType = BCJSONZippedEncoder> extends BCJSONEncoderUninitialized<BCJSONZippedEncoder> {}
interface BCJSONZippedEncoder extends BCJSONEncoder {
  encodeObject_toSubpath_error(root: NSObject, path: NSString | string, error: NSError): boolean;
  encodeRawData_toSubpath_error(data: NSData, path: NSString | string, error: NSError): boolean;
  finishEncodingError(error: NSError): boolean;
}
declare const BCJSONZippedEncoder: {
  alloc(): BCJSONZippedEncoderUninitialized;
  class(): BCJSONZippedEncoder;  zipEncoderForWritingAtURL(url: NSURL): BCJSONZippedEncoder;

}

