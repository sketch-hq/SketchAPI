interface SVGFillUninitialized<InitializedType = SVGFill> extends _SVGFillUninitialized<SVGFill> {}

interface SVGFill extends _SVGFill {
}

declare const SVGFill: {
  alloc(): SVGFillUninitialized;
  class(): SVGFill;
  fillForXML_element_parent(xml: NSXMLElement, element: SVGElement, parent: SVGDrawableElement): SVGFill;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

