interface NSURLHandleUninitialized<InitializedType = NSURLHandle> {}
interface NSURLHandle {
  status(): NSURLHandleStatus;
  failureReason(): NSString;
  addClient(client: any): void;
  removeClient(client: any): void;
  loadInBackground(): void;
  cancelLoadInBackground(): void;
  resourceData(): NSData;
  availableResourceData(): NSData;
  expectedResourceDataSize(): number;
  flushCachedData(): void;
  backgroundLoadDidFailWithReason(reason: NSString | string): void;
  didLoadBytes_loadComplete(newBytes: NSData, yorn: boolean): void;
  propertyForKey(propertyKey: NSString | string): any;
  propertyForKeyIfAvailable(propertyKey: NSString | string): any;
  writeProperty_forKey(propertyValue: any, propertyKey: NSString | string): boolean;
  writeData(data: NSData): boolean;
  loadInForeground(): NSData;
  beginLoadInBackground(): void;
  endLoadInBackground(): void;
}
declare const NSURLHandle: {
  alloc(): NSURLHandleUninitialized;
  class(): NSURLHandle;  registerURLHandleClass(anURLHandleSubclass: any): void;
  URLHandleClassForURL(anURL: NSURL): any;
  canInitWithURL(anURL: NSURL): boolean;
  cachedHandleForURL(anURL: NSURL): NSURLHandle;

}

