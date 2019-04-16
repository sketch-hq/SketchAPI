interface NSMetadataQueryAttributeValueTupleUninitialized<InitializedType = NSMetadataQueryAttributeValueTuple> extends NSObjectUninitialized<NSMetadataQueryAttributeValueTuple> {}
interface NSMetadataQueryAttributeValueTuple extends NSObject {

  attribute(): NSString;
  value(): any;
  count(): NSUInteger;
}
declare const NSMetadataQueryAttributeValueTuple: {
  alloc(): NSMetadataQueryAttributeValueTupleUninitialized;
  class(): NSMetadataQueryAttributeValueTuple;
}

