interface MSApplicationMetadataUninitialized<InitializedType = MSApplicationMetadata> extends NSObjectUninitialized<MSApplicationMetadata> {}
interface MSApplicationMetadata extends NSObject {
}
declare const MSApplicationMetadata: {
  alloc(): MSApplicationMetadataUninitialized;
  class(): MSApplicationMetadata;  metadata(): NSDictionary<any, any>;
  applicationKeys(): NSArray<any>;

}

