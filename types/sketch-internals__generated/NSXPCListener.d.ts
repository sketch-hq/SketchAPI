interface NSXPCListenerUninitialized<InitializedType = NSXPCListener> extends NSObjectUninitialized<NSXPCListener> {}
interface NSXPCListener extends NSObject {
  resume(): void;
  suspend(): void;
  invalidate(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  endpoint(): NSXPCListenerEndpoint;
}
declare const NSXPCListener: {
  alloc(): NSXPCListenerUninitialized;
  class(): NSXPCListener;  serviceListener(): NSXPCListener;
  anonymousListener(): NSXPCListener;

}

