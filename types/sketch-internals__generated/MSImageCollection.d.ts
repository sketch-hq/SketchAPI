interface MSImageCollectionUninitialized<InitializedType = MSImageCollection> extends _MSImageCollectionUninitialized<MSImageCollection> {}

interface MSImageCollection extends _MSImageCollection {
}

declare const MSImageCollection: {
  alloc(): MSImageCollectionUninitialized;
  class(): MSImageCollection;
}

