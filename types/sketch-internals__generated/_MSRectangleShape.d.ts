interface _MSRectangleShapeUninitialized<InitializedType = _MSRectangleShape> extends MSShapePathLayerUninitialized<_MSRectangleShape> {}
interface _MSRectangleShape extends MSShapePathLayer {

  fixedRadius(): CGFloat;
  setFixedRadius(fixedRadius: CGFloat): void;
  hasConvertedToNewRoundCorners(): boolean;
  setHasConvertedToNewRoundCorners(hasConvertedToNewRoundCorners: boolean): void;
}
declare const _MSRectangleShape: {
  alloc(): _MSRectangleShapeUninitialized;
  class(): _MSRectangleShape;
}

