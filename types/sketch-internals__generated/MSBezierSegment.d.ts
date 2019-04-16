interface MSBezierSegmentUninitialized<InitializedType = MSBezierSegment> extends NSObjectUninitialized<MSBezierSegment> {
  initWithEndPoint1_endPoint2(endPoint1: CGPoint, endPoint2: CGPoint): InitializedType;
  initWithEndPoint1_endPoint2_controlPoint(endPoint1: CGPoint, endPoint2: CGPoint, controlPoint: CGPoint): InitializedType;
  initWithEndPoint1_endPoint2_controlPoint1_controlPoint2(endPoint1: CGPoint, endPoint2: CGPoint, controlPoint1: CGPoint, controlPoint2: CGPoint): InitializedType;
}
interface MSBezierSegment extends NSObject, INSCopying {
  segmentWithEndPoint1(endPoint1: CGPoint): MSBezierSegment;
  segmentWithEndPoint2(endPoint2: CGPoint): MSBezierSegment;
  segmentMirroredAtOffset(offset: CGFloat): MSBezierSegment;
  tangent_andPoint_atOffset(tangent: BCLine, point: CGPoint, offset: CGFloat): void;
  tangentAtOffset(offset: CGFloat): BCLine;
  pointAtOffset(offset: CGFloat): CGPoint;
  curvatureAtOffset(offset: CGFloat): CGFloat;
  segmentToOffset(offset: CGFloat): MSBezierSegment;
  segmentFromOffset(offset: CGFloat): MSBezierSegment;
  segmentInRange(range: BCFloatRange): MSBezierSegment;
  segmentByMovingPointAtOffset_toLocation(offset: CGFloat, location: CGPoint): MSBezierSegment;
  segmentWithTransform(transform: CGAffineTransform): MSBezierSegment;
  segmentWithInset(inset: CGFloat): MSBezierSegment;
  segmentsWithFlatness(flatness: CGFloat): NSArray<any>;
  offsetForNormalToPoint(point: CGPoint): CGFloat;
  offsetsOfIntersectionsWithTangent(tangent: BCLine): NSSet<any>;
  intersectionsWithSegment(segment: MSBezierSegment): NSSet<any>;
  intersectionsWithHorizontalLineAt(y: CGFloat): NSSet<any>;
  intersectionsWithVerticalLineAt(x: CGFloat): NSSet<any>;
  lineRepresentation(): MSBezierSegment;
  quadraticRepresentation(): MSBezierSegment;
  quadraticApproximation(): NSArray<any>;
  segmentsByClippingToRect(rect: CGRect): NSArray<any>;
  cubicRepresentation(): MSBezierSegment;
  representationUsingType(type: MSBezierSegmentType): MSBezierSegment;
  reversedSegment(): MSBezierSegment;
  segmentForJoiningWithC1ContinuityToSegment(other: MSBezierSegment): MSBezierSegment;
  isEqualToBezierSegment(object: MSBezierSegment): boolean;
  derivative(): MSBezierSegment;
  bounds(): CGRect;
  controlPointBounds(): CGRect;
  bezierPath(): NSBezierPath;
  FBBezierCurve(): FBBezierCurve;

  segmentType(): MSBezierSegmentType;
  endPoint1(): CGPoint;
  endPoint2(): CGPoint;
  lineLength(): CGFloat;
  arcLength(): CGFloat;
  fromRange(): BCFloatRange;
  controlPoint1(): CGPoint;
  controlPoint2(): CGPoint;
  looksLikeALine(): boolean;
  isAPoint(): boolean;
  lineSegment(): BCLineSegment;
  xAxisRoots(): NSSet<any>;
  yAxisRoots(): NSSet<any>;
  inflectionOffsets(): NSSet<any>;
  curviness(): CGFloat;
  flatness(): CGFloat;
  transformForXAxisAlignment(): CGAffineTransform;
}
declare const MSBezierSegment: {
  alloc(): MSBezierSegmentUninitialized;
  class(): MSBezierSegment;  lineSegmentWithEndPoint1_endPoint2(endPoint1: CGPoint, endPoint2: CGPoint): MSBezierSegment;
  quadraticSegmentWithEndPoint1_endPoint2_controlPoint(endPoint1: CGPoint, endPoint2: CGPoint, controlPoint: CGPoint): MSBezierSegment;
  cubicSegmentWithEndPoint1_endPoint2_controlPoint1_controlPoint2(endPoint1: CGPoint, endPoint2: CGPoint, controlPoint1: CGPoint, controlPoint2: CGPoint): MSBezierSegment;
  segmentWithFBBezierCurve(curve: FBBezierCurve): MSBezierSegment;

}

