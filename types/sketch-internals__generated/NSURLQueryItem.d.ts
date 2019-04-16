interface NSURLQueryItemUninitialized<InitializedType = NSURLQueryItem> extends NSObjectUninitialized<NSURLQueryItem> {
  initWithName_value(name: NSString | string, value: NSString | string | null): InitializedType;
}
interface NSURLQueryItem extends NSObject, INSSecureCoding, INSCopying {

  name(): NSString;
  value(): NSString;
}
declare const NSURLQueryItem: {
  alloc(): NSURLQueryItemUninitialized;
  class(): NSURLQueryItem;  queryItemWithName_value(name: NSString | string, value: NSString | string | null): NSURLQueryItem;

}

