interface _SVGStrokeUninitialized<InitializedType = _SVGStroke> extends SVGElementUninitialized<_SVGStroke> {}

interface _SVGStroke extends SVGElement {
  primitiveSetGradient(gradient: any): void;
  primitiveSetPattern(pattern: any): void;
  primitiveAddUsedByObject(object: any): void;
  primitiveRemoveUsedByObject(object: any): void;

  color(): MSImmutableColor;
  setColor(color: MSImmutableColor): void;
  dashes(): NSArray<any>;
  setDashes(dashes: NSArray<any> | any[]): void;
  linecap(): NSString;
  setLinecap(linecap: NSString | string): void;
  linejoin(): NSString;
  setLinejoin(linejoin: NSString | string): void;
  width(): number;
  setWidth(width: number): void;
  gradient(): SVGGradient;
  setGradient(gradient: SVGGradient): void;
  pattern(): SVGPattern;
  setPattern(pattern: SVGPattern): void;
  usedBy(): NSSet<any>;
  setUsedBy(usedBy: NSSet<any>): void;
}

declare const _SVGStroke: {
  alloc(): _SVGStrokeUninitialized;
  class(): _SVGStroke;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
  elementOfType_xml_importer_parent(type: NSString | string, xml: NSXMLElement, importer: SVGImporter, parent: SVGElement): SVGElement;
}

