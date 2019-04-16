interface NSCachedURLResponseUninitialized<InitializedType = NSCachedURLResponse> extends NSObjectUninitialized<NSCachedURLResponse> {
  initWithResponse_data(response: NSURLResponse, data: NSData): InitializedType;
  initWithResponse_data_userInfo_storagePolicy(response: NSURLResponse, data: NSData, userInfo: NSDictionary<any, any> | {[key: string]: any} | null, storagePolicy: NSURLCacheStoragePolicy): InitializedType;
}
interface NSCachedURLResponse extends NSObject, INSSecureCoding, INSCopying {

  response(): NSURLResponse;
  data(): NSData;
  userInfo(): NSDictionary<any, any>;
  storagePolicy(): NSURLCacheStoragePolicy;
}
declare const NSCachedURLResponse: {
  alloc(): NSCachedURLResponseUninitialized;
  class(): NSCachedURLResponse;
}

