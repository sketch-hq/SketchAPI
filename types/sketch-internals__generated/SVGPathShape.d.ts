interface SVGPathShapeUninitialized<InitializedType = SVGPathShape> extends _SVGPathShapeUninitialized<SVGPathShape> {}
interface SVGPathShape extends _SVGPathShape {
}
declare const SVGPathShape: {
  alloc(): SVGPathShapeUninitialized;
  class(): SVGPathShape;
}

