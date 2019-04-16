interface SVGMaskUninitialized<InitializedType = SVGMask> extends _SVGMaskUninitialized<SVGMask> {}
interface SVGMask extends _SVGMask {
}
declare const SVGMask: {
  alloc(): SVGMaskUninitialized;
  class(): SVGMask;
}

