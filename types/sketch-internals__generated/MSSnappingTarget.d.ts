interface MSSnappingTargetUninitialized<InitializedType = MSSnappingTarget> extends NSObjectUninitialized<MSSnappingTarget> {
  initWithGuideLine(lineSegment: BCLineSegment): InitializedType;
  initWithPosition_onAxis(value: CGFloat, axis: BCAxis): InitializedType;
  initWithPoint_axis_wantsGuide_length(point: NSPoint, axis: BCAxis, showGuide: boolean, length: CGFloat): InitializedType;
  initWithPoint_directionVector_guideType(point: NSPoint, vector: CGVector, guideType: MSSnappingTargetGuideType): InitializedType;
}
interface MSSnappingTarget extends NSObject, INSCopying {

  point(): NSPoint;
  directionVector(): CGVector;
  line(): BCLine;
  lineSegment(): BCLineSegment;
  guideType(): MSSnappingTargetGuideType;
}
declare const MSSnappingTarget: {
  alloc(): MSSnappingTargetUninitialized;
  class(): MSSnappingTarget;  targetsForEdgesOfRect_includeCenter(rect: NSRect, includeCenter: boolean): NSArray<any>;

}

