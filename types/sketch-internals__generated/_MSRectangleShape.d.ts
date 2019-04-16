interface _MSRectangleShapeUninitialized<InitializedType = _MSRectangleShape> extends MSShapePathLayerUninitialized<_MSRectangleShape> {}

interface _MSRectangleShape extends MSShapePathLayer {

  fixedRadius(): CGFloat;
  setFixedRadius(fixedRadius: CGFloat): void;
  hasConvertedToNewRoundCorners(): boolean;
  setHasConvertedToNewRoundCorners(hasConvertedToNewRoundCorners: boolean): void;
}

declare const _MSRectangleShape: {
  alloc(): _MSRectangleShapeUninitialized;
  class(): _MSRectangleShape;
  layerWithPath(path: MSPath): _MSRectangleShape;
  layerWithPath_integralFrame(path: MSPath, makeIntegral: boolean): _MSRectangleShape;
  layerWithShapeGroupSubpath(subPath: MSPath): _MSRectangleShape;
  shapeWithRect(rect: NSRect): MSRectangleShape;
  performBatchEdits(edits: Block): void;
}

