interface NSXPCListenerEndpointUninitialized<InitializedType = NSXPCListenerEndpoint> extends NSObjectUninitialized<NSXPCListenerEndpoint> {}
interface NSXPCListenerEndpoint extends NSObject, INSSecureCoding {
}
declare const NSXPCListenerEndpoint: {
  alloc(): NSXPCListenerEndpointUninitialized;
  class(): NSXPCListenerEndpoint;
}

