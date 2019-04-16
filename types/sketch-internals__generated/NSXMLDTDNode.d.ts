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

