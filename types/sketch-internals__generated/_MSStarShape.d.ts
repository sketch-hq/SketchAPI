interface _MSStarShapeUninitialized<InitializedType = _MSStarShape> extends MSShapePathLayerUninitialized<_MSStarShape> {}
interface _MSStarShape extends MSShapePathLayer {

  numberOfPoints(): NSInteger;
  setNumberOfPoints(numberOfPoints: NSInteger): void;
  radius(): CGFloat;
  setRadius(radius: CGFloat): void;
}
declare const _MSStarShape: {
  alloc(): _MSStarShapeUninitialized;
  class(): _MSStarShape;
}

