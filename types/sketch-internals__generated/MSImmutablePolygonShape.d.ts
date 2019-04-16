interface MSImmutablePolygonShapeUninitialized<InitializedType = MSImmutablePolygonShape> extends _MSImmutablePolygonShapeUninitialized<MSImmutablePolygonShape> {}
interface MSImmutablePolygonShape extends _MSImmutablePolygonShape {
}
declare const MSImmutablePolygonShape: {
  alloc(): MSImmutablePolygonShapeUninitialized;
  class(): MSImmutablePolygonShape;
}

