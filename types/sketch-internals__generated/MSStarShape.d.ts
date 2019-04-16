interface MSStarShapeUninitialized<InitializedType = MSStarShape> extends _MSStarShapeUninitialized<MSStarShape> {}
interface MSStarShape extends _MSStarShape {
}
declare const MSStarShape: {
  alloc(): MSStarShapeUninitialized;
  class(): MSStarShape;
}

