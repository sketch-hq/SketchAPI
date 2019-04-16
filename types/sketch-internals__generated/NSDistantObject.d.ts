interface NSDistantObjectUninitialized<InitializedType = NSDistantObject> extends NSProxyUninitialized<NSDistantObject> {
  initWithTarget_connection(target: any, connection: NSConnection): InitializedType;
  initWithLocal_connection(target: any, connection: NSConnection): InitializedType;
  initWithCoder(inCoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSDistantObject extends NSProxy, INSCoding {
  setProtocolForProxy(proto: Protocol | null): void;
  encodeWithCoder(aCoder: NSCoder): void;

  connectionForProxy(): NSConnection;
}

declare const NSDistantObject: {
  alloc(): NSDistantObjectUninitialized;
  class(): NSDistantObject;
  proxyWithTarget_connection(target: any, connection: NSConnection): any;
  proxyWithLocal_connection(target: any, connection: NSConnection): any;
  alloc(): any;
  class(): any;
  respondsToSelector(aSelector: string): boolean;
}

