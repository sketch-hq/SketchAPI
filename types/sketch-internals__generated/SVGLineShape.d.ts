interface SVGLineShapeUninitialized<InitializedType = SVGLineShape> extends _SVGLineShapeUninitialized<SVGLineShape> {}
interface SVGLineShape extends _SVGLineShape {
}
declare const SVGLineShape: {
  alloc(): SVGLineShapeUninitialized;
  class(): SVGLineShape;
}

