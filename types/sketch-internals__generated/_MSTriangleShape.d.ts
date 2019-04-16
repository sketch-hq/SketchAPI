interface _MSTriangleShapeUninitialized<InitializedType = _MSTriangleShape> extends MSShapePathLayerUninitialized<_MSTriangleShape> {}

interface _MSTriangleShape extends MSShapePathLayer {

  isEquilateral(): boolean;
  setIsEquilateral(isEquilateral: boolean): void;
}

declare const _MSTriangleShape: {
  alloc(): _MSTriangleShapeUninitialized;
  class(): _MSTriangleShape;
  layerWithPath(path: MSPath): _MSTriangleShape;
  layerWithPath_integralFrame(path: MSPath, makeIntegral: boolean): _MSTriangleShape;
  layerWithShapeGroupSubpath(subPath: MSPath): _MSTriangleShape;
  shapeWithRect(rect: NSRect): MSRectangleShape;
  performBatchEdits(edits: Block): void;
}

