interface ProtocolUninitialized<InitializedType = Protocol> extends NSObjectUninitialized<Protocol> {}
interface Protocol extends NSObject {
  conformsTo_OBJC2_UNAVAILABLE(aProtocolObject: Protocol): boolean;
}
declare const Protocol: {
  alloc(): ProtocolUninitialized;
  class(): Protocol;
}

