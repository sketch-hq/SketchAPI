interface NSXMLDocumentUninitialized<InitializedType = NSXMLDocument> extends NSXMLNodeUninitialized<NSXMLDocument> {
  initWithXMLString_options_error(string: NSString | string, mask: NSXMLNodeOptions, error: MOPointer<NSError>): InitializedType;
  initWithContentsOfURL_options_error(url: NSURL, mask: NSXMLNodeOptions, error: MOPointer<NSError>): InitializedType;
  initWithData_options_error(data: NSData, mask: NSXMLNodeOptions, error: MOPointer<NSError>): InitializedType;
  initWithRootElement(element: NSXMLElement | null): InitializedType;
}

interface NSXMLDocument extends NSXMLNode {
  setRootElement(root: NSXMLElement): void;
  rootElement(): NSXMLElement;
  insertChild_atIndex(child: NSXMLNode, index: NSUInteger): void;
  insertChildren_atIndex(children: NSArray<any> | any[], index: NSUInteger): void;
  removeChildAtIndex(index: NSUInteger): void;
  setChildren(children: NSArray<any> | any[] | null): void;
  addChild(child: NSXMLNode): void;
  replaceChildAtIndex_withNode(index: NSUInteger, node: NSXMLNode): void;
  XMLDataWithOptions(options: NSXMLNodeOptions): NSData;
  objectByApplyingXSLT_arguments_error(xslt: NSData, arguments: NSDictionary<any, any> | {[key: string]: any} | null, error: MOPointer<NSError>): any;
  objectByApplyingXSLTString_arguments_error(xslt: NSString | string, arguments: NSDictionary<any, any> | {[key: string]: any} | null, error: MOPointer<NSError>): any;
  objectByApplyingXSLTAtURL_arguments_error(xsltURL: NSURL, argument: NSDictionary<any, any> | {[key: string]: any} | null, error: MOPointer<NSError>): any;
  validateAndReturnError(error: MOPointer<NSError>): boolean;
  createSVGForBezierPath(bezierPath: NSBezierPath): any;
  bezierPathElement(path: NSBezierPath): NSXMLNode;
  data(): NSData;

  characterEncoding(): NSString;
  setCharacterEncoding(characterEncoding: NSString | string): void;
  version(): NSString;
  setVersion(version: NSString | string): void;
  standalone(): boolean;
  setStandalone(standalone: boolean): void;
  documentContentKind(): NSXMLDocumentContentKind;
  setDocumentContentKind(documentContentKind: NSXMLDocumentContentKind): void;
  MIMEType(): NSString;
  setMIMEType(MIMEType: NSString | string): void;
  DTD(): NSXMLDTD;
  setDTD(DTD: NSXMLDTD): void;
  XMLData(): NSData;
}

declare const NSXMLDocument: {
  alloc(): NSXMLDocumentUninitialized;
  class(): NSXMLDocument;
  replacementClassForClass(cls: any): any;
  SVGDocumentWithBezierPath(bezierPath: NSBezierPath): any;
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

