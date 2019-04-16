interface _MSPolygonShapeUninitialized<InitializedType = _MSPolygonShape> extends MSShapePathLayerUninitialized<_MSPolygonShape> {}

interface _MSPolygonShape extends MSShapePathLayer {

  numberOfPoints(): NSInteger;
  setNumberOfPoints(numberOfPoints: NSInteger): void;
}

declare const _MSPolygonShape: {
  alloc(): _MSPolygonShapeUninitialized;
  class(): _MSPolygonShape;
  layerWithPath(path: MSPath): _MSPolygonShape;
  layerWithPath_integralFrame(path: MSPath, makeIntegral: boolean): _MSPolygonShape;
  layerWithShapeGroupSubpath(subPath: MSPath): _MSPolygonShape;
  shapeWithRect(rect: NSRect): MSRectangleShape;
  performBatchEdits(edits: Block): void;
}

