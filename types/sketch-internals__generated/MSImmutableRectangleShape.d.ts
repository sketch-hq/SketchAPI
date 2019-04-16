interface MSImmutableRectangleShapeUninitialized<InitializedType = MSImmutableRectangleShape> extends _MSImmutableRectangleShapeUninitialized<MSImmutableRectangleShape> {}
interface MSImmutableRectangleShape extends _MSImmutableRectangleShape {
}
declare const MSImmutableRectangleShape: {
  alloc(): MSImmutableRectangleShapeUninitialized;
  class(): MSImmutableRectangleShape;
}

