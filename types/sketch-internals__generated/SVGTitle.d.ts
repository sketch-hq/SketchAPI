interface SVGTitleUninitialized<InitializedType = SVGTitle> extends SVGElementUninitialized<SVGTitle> {}
interface SVGTitle extends SVGElement {
}
declare const SVGTitle: {
  alloc(): SVGTitleUninitialized;
  class(): SVGTitle;
}

