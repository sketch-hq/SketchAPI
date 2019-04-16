interface NSURLCacheUninitialized<InitializedType = NSURLCache> extends NSObjectUninitialized<NSURLCache> {
  initWithMemoryCapacity_diskCapacity_diskPath(memoryCapacity: NSUInteger, diskCapacity: NSUInteger, path: NSString | string | null): InitializedType;
}
interface NSURLCache extends NSObject {
  cachedResponseForRequest(request: NSURLRequest): NSCachedURLResponse;
  storeCachedResponse_forRequest(cachedResponse: NSCachedURLResponse, request: NSURLRequest): void;
  removeCachedResponseForRequest(request: NSURLRequest): void;
  removeAllCachedResponses(): void;
  removeCachedResponsesSinceDate(date: NSDate): void;
  storeCachedResponse_forDataTask(cachedResponse: NSCachedURLResponse, dataTask: NSURLSessionDataTask): void;
  getCachedResponseForDataTask_completionHandler(dataTask: NSURLSessionDataTask, completionHandler: Block): void;
  removeCachedResponseForDataTask(dataTask: NSURLSessionDataTask): void;

  memoryCapacity(): NSUInteger;
  setMemoryCapacity(memoryCapacity: NSUInteger): void;
  diskCapacity(): NSUInteger;
  setDiskCapacity(diskCapacity: NSUInteger): void;
  currentMemoryUsage(): NSUInteger;
  currentDiskUsage(): NSUInteger;
}
declare const NSURLCache: {
  alloc(): NSURLCacheUninitialized;
  class(): NSURLCache;
  sharedURLCache(): NSURLCache;
  setSharedURLCache(sharedURLCache: NSURLCache): void;

}

