interface NSXMLDTDUninitialized<InitializedType = NSXMLDTD> extends NSXMLNodeUninitialized<NSXMLDTD> {
  initWithContentsOfURL_options_error(url: NSURL, mask: NSXMLNodeOptions, error: NSError): InitializedType;
  initWithData_options_error(data: NSData, mask: NSXMLNodeOptions, error: NSError): InitializedType;
}
interface NSXMLDTD extends NSXMLNode {
  insertChild_atIndex(child: NSXMLNode, index: NSUInteger): void;
  insertChildren_atIndex(children: NSArray<any> | any[], index: NSUInteger): void;
  removeChildAtIndex(index: NSUInteger): void;
  setChildren(children: NSArray<any> | any[] | null): void;
  addChild(child: NSXMLNode): void;
  replaceChildAtIndex_withNode(index: NSUInteger, node: NSXMLNode): void;
  entityDeclarationForName(name: NSString | string): NSXMLDTDNode;
  notationDeclarationForName(name: NSString | string): NSXMLDTDNode;
  elementDeclarationForName(name: NSString | string): NSXMLDTDNode;
  attributeDeclarationForName_elementName(name: NSString | string, elementName: NSString | string): NSXMLDTDNode;

  publicID(): NSString;
  setPublicID(publicID: NSString | string): void;
  systemID(): NSString;
  setSystemID(systemID: NSString | string): void;
}
declare const NSXMLDTD: {
  alloc(): NSXMLDTDUninitialized;
  class(): NSXMLDTD;  predefinedEntityDeclarationForName(name: NSString | string): NSXMLDTDNode;

}

