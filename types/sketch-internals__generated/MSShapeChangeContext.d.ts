interface MSShapeChangeContextUninitialized<InitializedType = MSShapeChangeContext> extends NSObjectUninitialized<MSShapeChangeContext> {
  initWithLayers_handleIndexPaths(layers: NSArray<any> | any[], indexPaths: NSArray<any> | any[] | null): InitializedType;
}
interface MSShapeChangeContext extends NSObject, INSCopying {
  enumerateCurvePointsUsingBlock(block: Block): void;
  curvePointAtIndexPath(indexPath: NSIndexPath): MSCurvePoint;
  locationOfHandleAtIndexPath_inCoordinateSpace(indexPath: NSIndexPath, coordinateSpace: any | null): NSPoint;

  layers(): NSArray<any>;
  handleIndexPaths(): NSArray<any>;
  orderedHandleIndexPaths(): NSArray<any>;
}
declare const MSShapeChangeContext: {
  alloc(): MSShapeChangeContextUninitialized;
  class(): MSShapeChangeContext;
}

