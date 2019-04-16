interface _MSImmutableRectangleShapeUninitialized<InitializedType = _MSImmutableRectangleShape> extends MSImmutableShapePathLayerUninitialized<_MSImmutableRectangleShape> {}

interface _MSImmutableRectangleShape extends MSImmutableShapePathLayer {

  fixedRadius(): CGFloat;
  hasConvertedToNewRoundCorners(): boolean;
}

declare const _MSImmutableRectangleShape: {
  alloc(): _MSImmutableRectangleShapeUninitialized;
  class(): _MSImmutableRectangleShape;
}

