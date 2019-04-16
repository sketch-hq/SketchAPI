interface MSSmoothBezierFilletUninitialized<InitializedType = MSSmoothBezierFillet> extends MSBezierFilletUninitialized<MSSmoothBezierFillet> {}
interface MSSmoothBezierFillet extends MSBezierFillet {
}
declare const MSSmoothBezierFillet: {
  alloc(): MSSmoothBezierFilletUninitialized;
  class(): MSSmoothBezierFillet;  smoothBezierFilletWithLineSegment1_lineSegment2_filletRadius(segment1: MSBezierSegment, segment2: MSBezierSegment, filletRadius: CGFloat): MSSmoothBezierFillet;

}

