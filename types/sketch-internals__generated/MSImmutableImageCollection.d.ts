interface MSImmutableImageCollectionUninitialized<InitializedType = MSImmutableImageCollection> extends _MSImmutableImageCollectionUninitialized<MSImmutableImageCollection> {}

interface MSImmutableImageCollection extends _MSImmutableImageCollection {
  imageWithSHA1(sha1: NSData): MSImageData;
}

declare const MSImmutableImageCollection: {
  alloc(): MSImmutableImageCollectionUninitialized;
  class(): MSImmutableImageCollection;
}

