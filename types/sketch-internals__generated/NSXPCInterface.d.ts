interface NSXPCInterfaceUninitialized<InitializedType = NSXPCInterface> extends NSObjectUninitialized<NSXPCInterface> {}
interface NSXPCInterface extends NSObject {
  setClasses_forSelector_argumentIndex_ofReply(classes: NSSet<any>, sel: string, arg: NSUInteger, ofReply: boolean): void;
  classesForSelector_argumentIndex_ofReply(sel: string, arg: NSUInteger, ofReply: boolean): NSSet<any>;
  setInterface_forSelector_argumentIndex_ofReply(ifc: NSXPCInterface, sel: string, arg: NSUInteger, ofReply: boolean): void;
  interfaceForSelector_argumentIndex_ofReply(sel: string, arg: NSUInteger, ofReply: boolean): NSXPCInterface;

  protocol(): Protocol;
  setProtocol(protocol: Protocol): void;
}
declare const NSXPCInterface: {
  alloc(): NSXPCInterfaceUninitialized;
  class(): NSXPCInterface;  interfaceWithProtocol(protocol: Protocol): NSXPCInterface;

}

