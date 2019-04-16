interface MSShapePathUninitialized<InitializedType = MSShapePath> extends _MSShapePathUninitialized<MSShapePath> {}

interface MSShapePath extends _MSShapePath {
}

declare const MSShapePath: {
  alloc(): MSShapePathUninitialized;
  class(): MSShapePath;
}

