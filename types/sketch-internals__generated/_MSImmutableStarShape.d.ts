interface _MSImmutableStarShapeUninitialized<InitializedType = _MSImmutableStarShape> extends MSImmutableShapePathLayerUninitialized<_MSImmutableStarShape> {}

interface _MSImmutableStarShape extends MSImmutableShapePathLayer {

  numberOfPoints(): NSInteger;
  radius(): CGFloat;
}

declare const _MSImmutableStarShape: {
  alloc(): _MSImmutableStarShapeUninitialized;
  class(): _MSImmutableStarShape;
}

