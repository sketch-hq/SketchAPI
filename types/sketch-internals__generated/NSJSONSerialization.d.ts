interface NSJSONSerializationUninitialized<InitializedType = NSJSONSerialization> extends NSObjectUninitialized<NSJSONSerialization> {}
interface NSJSONSerialization extends NSObject {
}
declare const NSJSONSerialization: {
  alloc(): NSJSONSerializationUninitialized;
  class(): NSJSONSerialization;  isValidJSONObject(obj: any): boolean;
  dataWithJSONObject_options_error(obj: any, opt: NSJSONWritingOptions, error: NSError): NSData;
  JSONObjectWithData_options_error(data: NSData, opt: NSJSONReadingOptions, error: NSError): any;
  writeJSONObject_toStream_options_error(obj: any, stream: NSOutputStream, opt: NSJSONWritingOptions, error: NSError): NSInteger;
  JSONObjectWithStream_options_error(stream: NSInputStream, opt: NSJSONReadingOptions, error: NSError): any;

}

