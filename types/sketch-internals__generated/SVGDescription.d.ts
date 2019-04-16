interface SVGDescriptionUninitialized<InitializedType = SVGDescription> extends SVGElementUninitialized<SVGDescription> {}

interface SVGDescription extends SVGElement {
}

declare const SVGDescription: {
  alloc(): SVGDescriptionUninitialized;
  class(): SVGDescription;
  elementOfType_xml_importer_parent(type: NSString | string, xml: NSXMLElement, importer: SVGImporter, parent: SVGElement): SVGElement;
  accessInstanceVariablesDirectly(): boolean;

}

