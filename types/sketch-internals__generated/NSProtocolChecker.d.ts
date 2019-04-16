interface NSProtocolCheckerUninitialized<InitializedType = NSProtocolChecker> extends NSProxyUninitialized<NSProtocolChecker> {
  initWithTarget_protocol(anObject: NSObject, aProtocol: Protocol): InitializedType;
}

interface NSProtocolChecker extends NSProxy {

  protocol(): Protocol;
  target(): NSObject;
}

declare const NSProtocolChecker: {
  alloc(): NSProtocolCheckerUninitialized;
  class(): NSProtocolChecker;
  protocolCheckerWithTarget_protocol(anObject: NSObject, aProtocol: Protocol): NSProtocolChecker;
  alloc(): any;
  class(): any;
  respondsToSelector(aSelector: string): boolean;
}

