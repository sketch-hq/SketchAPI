interface _MSImmutablePolygonShapeUninitialized<InitializedType = _MSImmutablePolygonShape> extends MSImmutableShapePathLayerUninitialized<_MSImmutablePolygonShape> {}

interface _MSImmutablePolygonShape extends MSImmutableShapePathLayer {

  numberOfPoints(): NSInteger;
}

declare const _MSImmutablePolygonShape: {
  alloc(): _MSImmutablePolygonShapeUninitialized;
  class(): _MSImmutablePolygonShape;
}

