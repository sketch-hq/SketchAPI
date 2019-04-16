interface _MSOvalShapeUninitialized<InitializedType = _MSOvalShape> extends MSShapePathLayerUninitialized<_MSOvalShape> {}

interface _MSOvalShape extends MSShapePathLayer {
}

declare const _MSOvalShape: {
  alloc(): _MSOvalShapeUninitialized;
  class(): _MSOvalShape;
  layerWithPath(path: MSPath): _MSOvalShape;
  layerWithPath_integralFrame(path: MSPath, makeIntegral: boolean): _MSOvalShape;
  layerWithShapeGroupSubpath(subPath: MSPath): _MSOvalShape;
  shapeWithRect(rect: NSRect): MSRectangleShape;
  performBatchEdits(edits: Block): void;
}

