interface NSMetadataItemUninitialized<InitializedType = NSMetadataItem> extends NSObjectUninitialized<NSMetadataItem> {
  initWithURL(url: NSURL): InitializedType;
}
interface NSMetadataItem extends NSObject {
  valueForAttribute(key: NSString | string): any;
  valuesForAttributes(keys: NSArray<any> | any[]): NSDictionary<any, any>;

  attributes(): NSArray<any>;
}
declare const NSMetadataItem: {
  alloc(): NSMetadataItemUninitialized;
  class(): NSMetadataItem;
}

