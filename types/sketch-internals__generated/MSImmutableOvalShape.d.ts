interface MSImmutableOvalShapeUninitialized<InitializedType = MSImmutableOvalShape> extends _MSImmutableOvalShapeUninitialized<MSImmutableOvalShape> {}

interface MSImmutableOvalShape extends _MSImmutableOvalShape {
}

declare const MSImmutableOvalShape: {
  alloc(): MSImmutableOvalShapeUninitialized;
  class(): MSImmutableOvalShape;
}

