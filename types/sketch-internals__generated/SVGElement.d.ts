interface SVGElementUninitialized<InitializedType = SVGElement> extends _SVGElementUninitialized<SVGElement> {
  initWithImporter_xml(importer: SVGImporter, xml: NSXMLElement): InitializedType;
}
interface SVGElement extends _SVGElement {
  elementOfType_xml_parent(type: NSString | string, xml: NSXMLElement, parent: SVGElement): SVGElement;
  process(): void;
  processSelf(xml: NSXMLElement): void;
  processIdentifier(xml: NSXMLElement): void;
  processStyles(): void;
  processChildren(xml: NSXMLElement): void;
  processChildren_startingAtIndex(xml: NSXMLElement, index: NSUInteger): void;
  processChild_index(xml: NSXMLElement, index: NSUInteger): NSUInteger;
  svgDescription(): NSString;
  svgAttributesDescription(): NSString;
  addReferenceToIdentifier_type_property(identifier: NSString | string, type: NSString | string, property: NSString | string): void;
  resolvedValue_forProperty(value: SVGElement, property: NSString | string): void;
  name(): NSString;
  containsDrawables(): boolean;
  drawableParent(): SVGDrawableElement;
  clippingParent(): SVGDrawableElement;
  relativeURLForLink(link: NSString | string): NSURL;
  styleAttributesForElement_defaults(xml: NSXMLElement, defaults: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  isDescendantOf(element: SVGElement): boolean;
  makeLayerWithParentLayer_progress(parentLayer: MSLayerGroup, progress: BCVoidBlock): MSLayer;
  nameLayer(layer: MSLayer): void;
  adjustSizeForChildrenOfLayer(layer: MSLayer): void;

  xml(): NSXMLElement;
  setXml(xml: NSXMLElement): void;
  importer(): SVGImporter;
  effectiveLayerName(): NSString;
}
declare const SVGElement: {
  alloc(): SVGElementUninitialized;
  class(): SVGElement;  elementOfType_xml_importer_parent(type: NSString | string, xml: NSXMLElement, importer: SVGImporter, parent: SVGElement): SVGElement;

}

