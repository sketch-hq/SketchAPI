interface _MSPolygonShapeUninitialized<InitializedType = _MSPolygonShape> extends MSShapePathLayerUninitialized<_MSPolygonShape> {}
interface _MSPolygonShape extends MSShapePathLayer {

  numberOfPoints(): NSInteger;
  setNumberOfPoints(numberOfPoints: NSInteger): void;
}
declare const _MSPolygonShape: {
  alloc(): _MSPolygonShapeUninitialized;
  class(): _MSPolygonShape;
}

