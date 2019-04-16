interface SVGFontUninitialized<InitializedType = SVGFont> extends _SVGFontUninitialized<SVGFont> {}

interface SVGFont extends _SVGFont {
  representedFont(): NSFont;
}

declare const SVGFont: {
  alloc(): SVGFontUninitialized;
  class(): SVGFont;
  fontForXML_element_parent(xml: NSXMLElement, element: SVGElement, parent: SVGDrawableElement): SVGFont;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
}

