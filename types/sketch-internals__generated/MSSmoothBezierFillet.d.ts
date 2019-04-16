interface MSSmoothBezierFilletUninitialized<InitializedType = MSSmoothBezierFillet> extends MSBezierFilletUninitialized<MSSmoothBezierFillet> {}

interface MSSmoothBezierFillet extends MSBezierFillet {
}

declare const MSSmoothBezierFillet: {
  alloc(): MSSmoothBezierFilletUninitialized;
  class(): MSSmoothBezierFillet;
  smoothBezierFilletWithLineSegment1_lineSegment2_filletRadius(segment1: MSBezierSegment, segment2: MSBezierSegment, filletRadius: CGFloat): MSSmoothBezierFillet;
  bezierFilletWithSegment1_segment2_segment1Offset(segment1: MSBezierSegment, segment2: MSBezierSegment, segment1Offset: CGFloat): MSSmoothBezierFillet;
  bezierFilletWithSegment1_segment2_filletRadius(segment1: MSBezierSegment, segment2: MSBezierSegment, filletRadius: CGFloat): MSSmoothBezierFillet;
  zeroRadiusFilletWithSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): MSSmoothBezierFillet;
  accessInstanceVariablesDirectly(): boolean;

}

