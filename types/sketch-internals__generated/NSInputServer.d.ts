interface NSInputServerUninitialized<InitializedType = NSInputServer> extends NSObjectUninitialized<NSInputServer> {
  initWithDelegate_name(delegate: any, name: NSString | string): InitializedType;
}
interface NSInputServer extends NSObject, INSInputServiceProvider, INSInputServerMouseTracker {
}
declare const NSInputServer: {
  alloc(): NSInputServerUninitialized;
  class(): NSInputServer;
}

