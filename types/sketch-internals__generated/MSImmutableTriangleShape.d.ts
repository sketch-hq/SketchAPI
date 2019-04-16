interface MSImmutableTriangleShapeUninitialized<InitializedType = MSImmutableTriangleShape> extends _MSImmutableTriangleShapeUninitialized<MSImmutableTriangleShape> {}
interface MSImmutableTriangleShape extends _MSImmutableTriangleShape {
}
declare const MSImmutableTriangleShape: {
  alloc(): MSImmutableTriangleShapeUninitialized;
  class(): MSImmutableTriangleShape;
}

