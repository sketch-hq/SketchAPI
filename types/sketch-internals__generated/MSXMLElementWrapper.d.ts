interface MSXMLElementWrapperUninitialized<InitializedType = MSXMLElementWrapper> extends NSObjectUninitialized<MSXMLElementWrapper> {
  initWithName(elementName: NSString | string): InitializedType;
  initWithElement(element: NSXMLElement): InitializedType;
}
interface MSXMLElementWrapper extends NSObject {
  attributeStringForKey(key: NSString | string): NSString;
  setAttributeString_forKey(value: NSString | string, key: NSString | string): void;
  addChild(child: NSXMLNode): void;
  addChildWrapper(child: MSXMLElementWrapper): void;

  element(): NSXMLElement;
  svgId(): NSString;
  setSvgId(svgId: NSString | string): void;
  svgClass(): NSString;
  setSvgClass(svgClass: NSString | string): void;
  style(): NSString;
  setStyle(style: NSString | string): void;
}
declare const MSXMLElementWrapper: {
  alloc(): MSXMLElementWrapperUninitialized;
  class(): MSXMLElementWrapper;  elementName(): NSString;
  element(): MSXMLElementWrapper;

}

