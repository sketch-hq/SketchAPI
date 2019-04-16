interface MSBezierContourUninitialized<InitializedType = MSBezierContour> extends NSObjectUninitialized<MSBezierContour> {
  initWithSegments_closed(segments: NSArray<any> | any[], isClosed: boolean): InitializedType;
}
interface MSBezierContour extends NSObject {
  reversedContour(): MSBezierContour;
  closedContour(): MSBezierContour;
  contourWithInset(inset: CGFloat): MSBezierContour;
  contourWithInset_joinStrategy(inset: CGFloat, strategy: MSBezierJoinStrategy): MSBezierContour;
  segmentBefore(segment: MSBezierSegment): MSBezierSegment;
  segmentAfter(segment: MSBezierSegment): MSBezierSegment;
  intersectionsWithSegment(segment: MSBezierSegment): NSSet<any>;
  FBBezierContour(): FBBezierContour;

  closed(): boolean;
  clockwise(): boolean;
  segments(): NSArray<any>;
  bounds(): CGRect;
  path(): MSPath;
  isRectangular(): boolean;
}
declare const MSBezierContour: {
  alloc(): MSBezierContourUninitialized;
  class(): MSBezierContour;  contourWithRect(rect: CGRect): MSBezierContour;
  contourWithPolygonAtPoint_radius_sides(center: CGPoint, radius: CGFloat, sides: NSUInteger): MSBezierContour;
  contourWithFBBezierContour(contour: FBBezierContour): MSBezierContour;

}

