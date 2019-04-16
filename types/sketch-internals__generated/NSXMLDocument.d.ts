interface NSXMLDocumentUninitialized<InitializedType = NSXMLDocument> extends NSXMLNodeUninitialized<NSXMLDocument> {
  initWithXMLString_options_error(string: NSString | string, mask: NSXMLNodeOptions, error: NSError): InitializedType;
  initWithContentsOfURL_options_error(url: NSURL, mask: NSXMLNodeOptions, error: NSError): InitializedType;
  initWithData_options_error(data: NSData, mask: NSXMLNodeOptions, error: NSError): InitializedType;
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
  objectByApplyingXSLT_arguments_error(xslt: NSData, arguments: NSDictionary<any, any> | {[key: string]: any} | null, error: NSError): any;
  objectByApplyingXSLTString_arguments_error(xslt: NSString | string, arguments: NSDictionary<any, any> | {[key: string]: any} | null, error: NSError): any;
  objectByApplyingXSLTAtURL_arguments_error(xsltURL: NSURL, argument: NSDictionary<any, any> | {[key: string]: any} | null, error: NSError): any;
  validateAndReturnError(error: NSError): boolean;
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
  class(): NSXMLDocument;  replacementClassForClass(cls: any): any;
  SVGDocumentWithBezierPath(bezierPath: NSBezierPath): any;

}

