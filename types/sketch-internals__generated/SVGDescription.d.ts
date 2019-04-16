interface SVGDescriptionUninitialized<InitializedType = SVGDescription> extends SVGElementUninitialized<SVGDescription> {}
interface SVGDescription extends SVGElement {
}
declare const SVGDescription: {
  alloc(): SVGDescriptionUninitialized;
  class(): SVGDescription;
}

