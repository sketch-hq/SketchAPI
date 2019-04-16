interface NSProxyUninitialized<InitializedType = NSProxy> {}

interface NSProxy {
  forwardInvocation(invocation: NSInvocation): void;
  methodSignatureForSelector(sel: string): NSMethodSignature;
  dealloc(): void;
  finalize(): void;

  description(): NSString;
  debugDescription(): NSString;
}

declare const NSProxy: {
  alloc(): NSProxyUninitialized;
  class(): NSProxy;
  alloc(): any;
  class(): any;
  respondsToSelector(aSelector: string): boolean;
}

