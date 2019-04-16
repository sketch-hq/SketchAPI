interface NSXMLDTDUninitialized<InitializedType = NSXMLDTD> extends NSXMLNodeUninitialized<NSXMLDTD> {
  initWithContentsOfURL_options_error(url: NSURL, mask: NSXMLNodeOptions, error: MOPointer<NSError>): InitializedType;
  initWithData_options_error(data: NSData, mask: NSXMLNodeOptions, error: MOPointer<NSError>): InitializedType;
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
  class(): NSXMLDTD;
  predefinedEntityDeclarationForName(name: NSString | string): NSXMLDTDNode;
  document(): any;
  documentWithRootElement(element: NSXMLElement): any;
  elementWithName(name: NSString | string): any;
  elementWithName_URI(name: NSString | string, URI: NSString | string): any;
  elementWithName_stringValue(name: NSString | string, string: NSString | string): any;
  elementWithName_children_attributes(name: NSString | string, children: NSArray<any> | any[] | null, attributes: NSArray<any> | any[] | null): any;
  attributeWithName_stringValue(name: NSString | string, stringValue: NSString | string): any;
  attributeWithName_URI_stringValue(name: NSString | string, URI: NSString | string, stringValue: NSString | string): any;
  namespaceWithName_stringValue(name: NSString | string, stringValue: NSString | string): any;
  processingInstructionWithName_stringValue(name: NSString | string, stringValue: NSString | string): any;
  commentWithStringValue(stringValue: NSString | string): any;
  textWithStringValue(stringValue: NSString | string): any;
  DTDNodeWithXMLString(string: NSString | string): any;
  localNameForName(name: NSString | string): NSString;
  prefixForName(name: NSString | string): NSString;
  predefinedNamespaceForPrefix(name: NSString | string): NSXMLNode;
  doubleFromString_scale(string: NSString | string, scale: CGFloat): number;
  numberFromString_scale(string: NSString | string, scale: CGFloat): NSNumber;
  numbersFromString_scale(string: NSString | string, scale: CGFloat): NSArray<any>;
  attributeWithName_pixelValue(name: NSString | string, value: CGFloat): any;
  attributeWithName_numberValue(name: NSString | string, value: CGFloat): any;
  attributeWithName_percentageValue(name: NSString | string, value: CGFloat): any;
  attributeWithName_percentageFractionalValue(name: NSString | string, value: CGFloat): any;
}

