interface MSFlowSegmentUninitialized<InitializedType = MSFlowSegment> extends NSObjectUninitialized<MSFlowSegment> {
  initWithBezierSegment_startType_endType(segment: MSBezierSegment, startType: MSFlowSegmentEndType, endType: MSFlowSegmentEndType): InitializedType;
}
interface MSFlowSegment extends NSObject {
  segmentsByClippingToRect(rect: CGRect): NSArray<any>;

  startType(): MSFlowSegmentEndType;
  endType(): MSFlowSegmentEndType;
  bezierSegment(): MSBezierSegment;
}
declare const MSFlowSegment: {
  alloc(): MSFlowSegmentUninitialized;
  class(): MSFlowSegment;  segmentWithBezierSegment(segment: MSBezierSegment): MSFlowSegment;
  segmentWithBezierSegment_startType_endType(segment: MSBezierSegment, startType: MSFlowSegmentEndType, endType: MSFlowSegmentEndType): MSFlowSegment;

}

