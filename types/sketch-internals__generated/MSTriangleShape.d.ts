interface MSTriangleShapeUninitialized<InitializedType = MSTriangleShape> extends _MSTriangleShapeUninitialized<MSTriangleShape> {}

interface MSTriangleShape extends _MSTriangleShape {
}

declare const MSTriangleShape: {
  alloc(): MSTriangleShapeUninitialized;
  class(): MSTriangleShape;
}

