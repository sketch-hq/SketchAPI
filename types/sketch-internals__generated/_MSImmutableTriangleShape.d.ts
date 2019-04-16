interface _MSImmutableTriangleShapeUninitialized<InitializedType = _MSImmutableTriangleShape> extends MSImmutableShapePathLayerUninitialized<_MSImmutableTriangleShape> {}
interface _MSImmutableTriangleShape extends MSImmutableShapePathLayer {

  isEquilateral(): boolean;
}
declare const _MSImmutableTriangleShape: {
  alloc(): _MSImmutableTriangleShapeUninitialized;
  class(): _MSImmutableTriangleShape;
}

