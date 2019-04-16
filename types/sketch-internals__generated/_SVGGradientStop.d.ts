interface _SVGGradientStopUninitialized<InitializedType = _SVGGradientStop> extends SVGElementUninitialized<_SVGGradientStop> {}

interface _SVGGradientStop extends SVGElement {

  color(): MSImmutableColor;
  setColor(color: MSImmutableColor): void;
  position(): number;
  setPosition(position: number): void;
}

declare const _SVGGradientStop: {
  alloc(): _SVGGradientStopUninitialized;
  class(): _SVGGradientStop;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
  elementOfType_xml_importer_parent(type: NSString | string, xml: NSXMLElement, importer: SVGImporter, parent: SVGElement): SVGElement;
}

