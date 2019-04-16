interface SVGImporterUninitialized<InitializedType = SVGImporter> extends NSObjectUninitialized<SVGImporter> {
  initWithURL(url: NSURL): InitializedType;
  initWithData(data: NSData): InitializedType;
  initWithXMLString(string: NSString | string): InitializedType;
}
interface SVGImporter extends NSObject {
  importObjectGraph(): SVGElement;
  addedDrawableElement(element: SVGDrawableElement): void;
  drawableElementCount(): NSUInteger;
  elementOfType_xml_parent(type: NSString | string, xml: NSXMLElement, parent: SVGElement): SVGElement;
  registerElementWithIdentifier_type_element(identifier: NSString | string, type: NSString | string, element: SVGElement): void;
  addReferenceToIdentifier_type_target_property(identifier: NSString | string, type: NSString | string, target: any, property: NSString | string): void;
  relativeURLForLink(link: NSString | string): NSURL;
  registerStylesheet(stylesheet: NSString | string): void;
  styleAttributesForElement_defaults(xml: NSXMLElement, defaults: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;

  documentWidth(): CGFloat;
  documentHeight(): CGFloat;
  scaleValue(): CGFloat;
  setScaleValue(scaleValue: CGFloat): void;
}
declare const SVGImporter: {
  alloc(): SVGImporterUninitialized;
  class(): SVGImporter;
}

