interface SVGStyleUninitialized<InitializedType = SVGStyle> extends SVGElementUninitialized<SVGStyle> {}

interface SVGStyle extends SVGElement {
}

declare const SVGStyle: {
  alloc(): SVGStyleUninitialized;
  class(): SVGStyle;
  elementOfType_xml_importer_parent(type: NSString | string, xml: NSXMLElement, importer: SVGImporter, parent: SVGElement): SVGElement;
  accessInstanceVariablesDirectly(): boolean;

}

