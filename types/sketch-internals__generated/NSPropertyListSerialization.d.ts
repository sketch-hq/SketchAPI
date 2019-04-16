interface NSPropertyListSerializationUninitialized<InitializedType = NSPropertyListSerialization> extends NSObjectUninitialized<NSPropertyListSerialization> {}
interface NSPropertyListSerialization extends NSObject {
}
declare const NSPropertyListSerialization: {
  alloc(): NSPropertyListSerializationUninitialized;
  class(): NSPropertyListSerialization;  propertyList_isValidForFormat(plist: any, format: NSPropertyListFormat): boolean;
  dataWithPropertyList_format_options_error(plist: any, format: NSPropertyListFormat, opt: NSPropertyListWriteOptions, error: NSError): NSData;
  writePropertyList_toStream_format_options_error(plist: any, stream: NSOutputStream, format: NSPropertyListFormat, opt: NSPropertyListWriteOptions, error: NSError): NSInteger;
  propertyListWithData_options_format_error(data: NSData, opt: NSPropertyListReadOptions, format: NSPropertyListFormat | null, error: NSError): any;
  propertyListWithStream_options_format_error(stream: NSInputStream, opt: NSPropertyListReadOptions, format: NSPropertyListFormat | null, error: NSError): any;
  dataFromPropertyList_format_errorDescription(plist: any, format: NSPropertyListFormat, errorString: NSString | string): NSData;
  propertyListFromData_mutabilityOption_format_errorDescription(data: NSData, opt: NSPropertyListMutabilityOptions, format: NSPropertyListFormat | null, errorString: NSString | string): any;

}

