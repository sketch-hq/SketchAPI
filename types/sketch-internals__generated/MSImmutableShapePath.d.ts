interface MSImmutableShapePathUninitialized<InitializedType = MSImmutableShapePath> extends _MSImmutableShapePathUninitialized<MSImmutableShapePath> {}

interface MSImmutableShapePath extends _MSImmutableShapePath {
}

declare const MSImmutableShapePath: {
  alloc(): MSImmutableShapePathUninitialized;
  class(): MSImmutableShapePath;
}

