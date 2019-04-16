interface MSAlignmentEngineConstraintUninitialized<InitializedType = MSAlignmentEngineConstraint> extends NSObjectUninitialized<MSAlignmentEngineConstraint> {
  initWithPoint_direction(sourcePoint: NSPoint, direction: CGVector): InitializedType;
}
interface MSAlignmentEngineConstraint extends NSObject, INSCopying {
  constraintByApplyingTransform(transform: CGAffineTransform): MSAlignmentEngineConstraint;

  sourcePoint(): NSPoint;
  direction(): CGVector;
  line(): BCLine;
}
declare const MSAlignmentEngineConstraint: {
  alloc(): MSAlignmentEngineConstraintUninitialized;
  class(): MSAlignmentEngineConstraint;  constraintWithSourcePoint_toPoint(sourcePoint: NSPoint, point2: NSPoint): MSAlignmentEngineConstraint;

}

