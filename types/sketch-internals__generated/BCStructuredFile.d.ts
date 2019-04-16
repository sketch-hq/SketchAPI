interface BCStructuredFileUninitialized<InitializedType = BCStructuredFile> extends NSObjectUninitialized<BCStructuredFile> {
  initWithURL_error(url: NSURL, error: NSError): InitializedType;
}
interface BCStructuredFile extends NSObject {
  metadata(): NSDictionary<any, any>;
  metaDataWithKey(key: NSString | string): any;
  dataWithKey_error(key: NSString | string, error: NSError): NSData;
  close(error: NSError): boolean;
}
declare const BCStructuredFile: {
  alloc(): BCStructuredFileUninitialized;
  class(): BCStructuredFile;
}

