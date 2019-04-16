interface _SVGGradientUninitialized<InitializedType = _SVGGradient> extends SVGElementUninitialized<_SVGGradient> {}

interface _SVGGradient extends SVGElement {
  primitiveAddLinkedFromObject(object: any): void;
  primitiveRemoveLinkedFromObject(object: any): void;
  primitiveSetLinkedTo(linkedTo: any): void;
  primitiveAddUsedByFillsObject(object: any): void;
  primitiveRemoveUsedByFillsObject(object: any): void;
  primitiveAddUsedByStrokesObject(object: any): void;
  primitiveRemoveUsedByStrokesObject(object: any): void;

  fromX(): number;
  setFromX(fromX: number): void;
  fromY(): number;
  setFromY(fromY: number): void;
  radial(): boolean;
  setRadial(radial: boolean): void;
  toX(): number;
  setToX(toX: number): void;
  toY(): number;
  setToY(toY: number): void;
  transform(): NSAffineTransform;
  setTransform(transform: NSAffineTransform): void;
  linkedFrom(): NSSet<any>;
  setLinkedFrom(linkedFrom: NSSet<any>): void;
  linkedTo(): SVGGradient;
  setLinkedTo(linkedTo: SVGGradient): void;
  usedByFills(): NSSet<any>;
  setUsedByFills(usedByFills: NSSet<any>): void;
  usedByStrokes(): NSSet<any>;
  setUsedByStrokes(usedByStrokes: NSSet<any>): void;
}

declare const _SVGGradient: {
  alloc(): _SVGGradientUninitialized;
  class(): _SVGGradient;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
  elementOfType_xml_importer_parent(type: NSString | string, xml: NSXMLElement, importer: SVGImporter, parent: SVGElement): SVGElement;
}

