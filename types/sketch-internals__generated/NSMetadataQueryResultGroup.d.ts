interface NSMetadataQueryResultGroupUninitialized<InitializedType = NSMetadataQueryResultGroup> extends NSObjectUninitialized<NSMetadataQueryResultGroup> {}
interface NSMetadataQueryResultGroup extends NSObject {
  resultAtIndex(idx: NSUInteger): any;

  attribute(): NSString;
  value(): any;
  subgroups(): NSArray<any>;
  resultCount(): NSUInteger;
  results(): NSArray<any>;
}
declare const NSMetadataQueryResultGroup: {
  alloc(): NSMetadataQueryResultGroupUninitialized;
  class(): NSMetadataQueryResultGroup;
}

