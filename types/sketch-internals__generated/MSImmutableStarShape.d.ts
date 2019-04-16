interface MSImmutableStarShapeUninitialized<InitializedType = MSImmutableStarShape> extends _MSImmutableStarShapeUninitialized<MSImmutableStarShape> {}

interface MSImmutableStarShape extends _MSImmutableStarShape {
}

declare const MSImmutableStarShape: {
  alloc(): MSImmutableStarShapeUninitialized;
  class(): MSImmutableStarShape;
}

