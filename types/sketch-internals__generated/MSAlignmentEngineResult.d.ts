interface MSAlignmentEngineResultUninitialized<InitializedType = MSAlignmentEngineResult> extends NSObjectUninitialized<MSAlignmentEngineResult> {
  initWithPoint_guides_snappedAxes(point: NSPoint, guides: NSArray<any> | any[], axes: BCAxisMask): InitializedType;
}
interface MSAlignmentEngineResult extends NSObject, INSCopying {
  drawAtZoomValue(zoomValue: CGFloat): void;

  point(): NSPoint;
  guides(): NSArray<any>;
  snappedAxes(): BCAxisMask;
}
declare const MSAlignmentEngineResult: {
  alloc(): MSAlignmentEngineResultUninitialized;
  class(): MSAlignmentEngineResult;  snappingResultWithPoint(point: NSPoint): MSAlignmentEngineResult;

}

