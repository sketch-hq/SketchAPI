interface SVGStyleUninitialized<InitializedType = SVGStyle> extends SVGElementUninitialized<SVGStyle> {}
interface SVGStyle extends SVGElement {
}
declare const SVGStyle: {
  alloc(): SVGStyleUninitialized;
  class(): SVGStyle;
}

