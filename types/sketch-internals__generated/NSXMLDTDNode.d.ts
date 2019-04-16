interface NSXMLDTDNodeUninitialized<InitializedType = NSXMLDTDNode> extends NSXMLNodeUninitialized<NSXMLDTDNode> {
  initWithXMLString(string: NSString | string): InitializedType;
}
interface NSXMLDTDNode extends NSXMLNode {

  DTDKind(): NSXMLDTDNodeKind;
  setDTDKind(DTDKind: NSXMLDTDNodeKind): void;
  external(): boolean;
  publicID(): NSString;
  setPublicID(publicID: NSString | string): void;
  systemID(): NSString;
  setSystemID(systemID: NSString | string): void;
  notationName(): NSString;
  setNotationName(notationName: NSString | string): void;
}
declare const NSXMLDTDNode: {
  alloc(): NSXMLDTDNodeUninitialized;
  class(): NSXMLDTDNode;
}

