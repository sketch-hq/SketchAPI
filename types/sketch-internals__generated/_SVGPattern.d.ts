interface _SVGPatternUninitialized<InitializedType = _SVGPattern> extends SVGElementUninitialized<_SVGPattern> {}

interface _SVGPattern extends SVGElement {
  primitiveAddUsedByFillsObject(object: any): void;
  primitiveRemoveUsedByFillsObject(object: any): void;
  primitiveAddUsedByStrokesObject(object: any): void;
  primitiveRemoveUsedByStrokesObject(object: any): void;

  height(): number;
  setHeight(height: number): void;
  patternUnits(): NSString;
  setPatternUnits(patternUnits: NSString | string): void;
  width(): number;
  setWidth(width: number): void;
  x(): number;
  setX(x: number): void;
  y(): number;
  setY(y: number): void;
  usedByFills(): NSSet<any>;
  setUsedByFills(usedByFills: NSSet<any>): void;
  usedByStrokes(): NSSet<any>;
  setUsedByStrokes(usedByStrokes: NSSet<any>): void;
}

declare const _SVGPattern: {
  alloc(): _SVGPatternUninitialized;
  class(): _SVGPattern;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
  elementOfType_xml_importer_parent(type: NSString | string, xml: NSXMLElement, importer: SVGImporter, parent: SVGElement): SVGElement;
}

