interface SVGStrokeUninitialized<InitializedType = SVGStroke> extends _SVGStrokeUninitialized<SVGStroke> {}
interface SVGStroke extends _SVGStroke {
}
declare const SVGStroke: {
  alloc(): SVGStrokeUninitialized;
  class(): SVGStroke;  strokeForXML_element_parent(xml: NSXMLElement, element: SVGElement, parent: SVGDrawableElement): SVGStroke;

}

