interface NSXMLElementUninitialized<InitializedType = NSXMLElement> extends NSXMLNodeUninitialized<NSXMLElement> {
  initWithName(name: NSString | string): InitializedType;
  initWithName_URI(name: NSString | string, URI: NSString | string | null): InitializedType;
  initWithName_stringValue(name: NSString | string, string: NSString | string | null): InitializedType;
  initWithXMLString_error(string: NSString | string, error: MOPointer<NSError>): InitializedType;
}

interface NSXMLElement extends NSXMLNode {
  elementsForName(name: NSString | string): NSArray<any>;
  elementsForLocalName_URI(localName: NSString | string, URI: NSString | string | null): NSArray<any>;
  addAttribute(attribute: NSXMLNode): void;
  removeAttributeForName(name: NSString | string): void;
  setAttributesWithDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): void;
  attributeForName(name: NSString | string): NSXMLNode;
  attributeForLocalName_URI(localName: NSString | string, URI: NSString | string | null): NSXMLNode;
  addNamespace(aNamespace: NSXMLNode): void;
  removeNamespaceForPrefix(name: NSString | string): void;
  namespaceForPrefix(name: NSString | string): NSXMLNode;
  resolveNamespaceForName(name: NSString | string): NSXMLNode;
  resolvePrefixForNamespaceURI(namespaceURI: NSString | string): NSString;
  insertChild_atIndex(child: NSXMLNode, index: NSUInteger): void;
  insertChildren_atIndex(children: NSArray<any> | any[], index: NSUInteger): void;
  removeChildAtIndex(index: NSUInteger): void;
  setChildren(children: NSArray<any> | any[] | null): void;
  addChild(child: NSXMLNode): void;
  replaceChildAtIndex_withNode(index: NSUInteger, node: NSXMLNode): void;
  normalizeAdjacentTextNodesPreservingCDATA(preserve: boolean): void;
  setAttributesAsDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): void;
  gotAttributeWithName(name: NSString | string): boolean;
  doubleValueFromAttributeWithName(name: NSString | string): number;
  doubleValueFromAttributeWithName_scale(name: NSString | string, scale: CGFloat): number;
  doubleValueFromAttributeWithName_orDefault(name: NSString | string, def: number): number;
  doubleValueFromPercentageAttributeWithName(name: NSString | string): number;
  doubleValueFromPercentageAttributeWithName_orDefault(name: NSString | string, def: number): number;
  doubleValueFromAttributeWithName_alternate(name: NSString | string, alternate: NSString | string): number;
  doubleValueFromPercentageAttributeWithName_alternate(name: NSString | string, alternate: NSString | string): number;
  numberFromAttributeWithName(name: NSString | string): NSNumber;
  numberFromAttributeWithName_scale(name: NSString | string, scale: CGFloat): NSNumber;
  numbersFromAttributeWithName(name: NSString | string): NSArray<any>;
  numbersFromAttributeWithName_scale(name: NSString | string, scale: CGFloat): NSArray<any>;
  intValueFromAttributeWithName(name: NSString | string): NSInteger;
  rectValueFromAttributeWithName(name: NSString | string): NSRect;
  rectValue(): NSRect;
  rectValueWithXScale_yScale(xScale: CGFloat, yScale: CGFloat): NSRect;
  colorFromAttributeWithName(name: NSString | string): MSImmutableColor;
  stringFromAttributeWithName(name: NSString | string): NSString;
  stringFromAttributeWithName_orDefault(name: NSString | string, def: NSString | string): NSString;
  stringForHREFLink(): NSString;
  nodeOrParentNodeWithName(name: NSString | string): NSXMLNode;
  attributesWithStyleMergedDefaults(defaults: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  simplifyAttributesIgnoringElements_attributes(elementsToIgnore: NSArray<any> | any[], attributesToIgnore: NSArray<any> | any[]): NSArray<any>;
  urlLink(): NSString;
  localLink(): NSString;
  cssClassNamesWithBase(base: NSString | string): NSArray<any>;
  addAttributeWithName_stringValue(name: NSString | string, value: NSString | string): void;
  addAttributeWithName_pixelValue(name: NSString | string, value: CGFloat): void;
  addAttributeWithName_numberValue(name: NSString | string, value: CGFloat): void;
  addAttributeWithName_percentageValue(name: NSString | string, value: CGFloat): void;
  addAttributeWithName_percentageFractionalValue(name: NSString | string, value: CGFloat): void;

  attributes(): NSArray<any>;
  setAttributes(attributes: NSArray<any> | any[]): void;
  namespaces(): NSArray<any>;
  setNamespaces(namespaces: NSArray<any> | any[]): void;
}

declare const NSXMLElement: {
  alloc(): NSXMLElementUninitialized;
  class(): NSXMLElement;
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

