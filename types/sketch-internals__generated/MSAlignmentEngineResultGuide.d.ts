interface MSAlignmentEngineResultGuideUninitialized<InitializedType = MSAlignmentEngineResultGuide> extends NSObjectUninitialized<MSAlignmentEngineResultGuide> {
  initWithLineSegment(segment: BCLineSegment): InitializedType;
}
interface MSAlignmentEngineResultGuide extends NSObject, INSCopying {
  bezierPath(): NSBezierPath;
  drawWithLineWidth(width: CGFloat): void;

  lineSegment(): BCLineSegment;
}
declare const MSAlignmentEngineResultGuide: {
  alloc(): MSAlignmentEngineResultGuideUninitialized;
  class(): MSAlignmentEngineResultGuide;
}

