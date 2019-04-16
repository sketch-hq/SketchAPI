interface NSNetServiceBrowserUninitialized<InitializedType = NSNetServiceBrowser> extends NSObjectUninitialized<NSNetServiceBrowser> {
  init(): InitializedType;
}
interface NSNetServiceBrowser extends NSObject {
  scheduleInRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeFromRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  searchForBrowsableDomains(): void;
  searchForRegistrationDomains(): void;
  searchForServicesOfType_inDomain(type: NSString | string, domainString: NSString | string): void;
  stop(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  includesPeerToPeer(): boolean;
  setIncludesPeerToPeer(includesPeerToPeer: boolean): void;
}
declare const NSNetServiceBrowser: {
  alloc(): NSNetServiceBrowserUninitialized;
  class(): NSNetServiceBrowser;
}

