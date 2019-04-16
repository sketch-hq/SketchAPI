interface SVGTitleUninitialized<InitializedType = SVGTitle> extends SVGElementUninitialized<SVGTitle> {}

interface SVGTitle extends SVGElement {
}

declare const SVGTitle: {
  alloc(): SVGTitleUninitialized;
  class(): SVGTitle;
  elementOfType_xml_importer_parent(type: NSString | string, xml: NSXMLElement, importer: SVGImporter, parent: SVGElement): SVGElement;
  accessInstanceVariablesDirectly(): boolean;

}

