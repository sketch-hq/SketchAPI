interface NSURLProtocolUninitialized<InitializedType = NSURLProtocol> extends NSObjectUninitialized<NSURLProtocol> {
  initWithRequest_cachedResponse_client(request: NSURLRequest, cachedResponse: NSCachedURLResponse | null, client: any | null): InitializedType;
  initWithTask_cachedResponse_client(task: NSURLSessionTask, cachedResponse: NSCachedURLResponse | null, client: any | null): InitializedType;
}
interface NSURLProtocol extends NSObject {
  startLoading(): void;
  stopLoading(): void;

  client(): any;
  request(): NSURLRequest;
  cachedResponse(): NSCachedURLResponse;
  task(): NSURLSessionTask;
}
declare const NSURLProtocol: {
  alloc(): NSURLProtocolUninitialized;
  class(): NSURLProtocol;  canInitWithRequest(request: NSURLRequest): boolean;
  canonicalRequestForRequest(request: NSURLRequest): NSURLRequest;
  requestIsCacheEquivalent_toRequest(a: NSURLRequest, b: NSURLRequest): boolean;
  propertyForKey_inRequest(key: NSString | string, request: NSURLRequest): any;
  setProperty_forKey_inRequest(value: any, key: NSString | string, request: NSMutableURLRequest): void;
  removePropertyForKey_inRequest(key: NSString | string, request: NSMutableURLRequest): void;
  registerClass(protocolClass: any): boolean;
  unregisterClass(protocolClass: any): void;
  canInitWithTask(task: NSURLSessionTask): boolean;

}

