interface _MSTriangleShapeUninitialized<InitializedType = _MSTriangleShape> extends MSShapePathLayerUninitialized<_MSTriangleShape> {}
interface _MSTriangleShape extends MSShapePathLayer {

  isEquilateral(): boolean;
  setIsEquilateral(isEquilateral: boolean): void;
}
declare const _MSTriangleShape: {
  alloc(): _MSTriangleShapeUninitialized;
  class(): _MSTriangleShape;
}

