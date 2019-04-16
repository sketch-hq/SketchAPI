interface MSPolygonShapeUninitialized<InitializedType = MSPolygonShape> extends _MSPolygonShapeUninitialized<MSPolygonShape> {}

interface MSPolygonShape extends _MSPolygonShape {
}

declare const MSPolygonShape: {
  alloc(): MSPolygonShapeUninitialized;
  class(): MSPolygonShape;
}

