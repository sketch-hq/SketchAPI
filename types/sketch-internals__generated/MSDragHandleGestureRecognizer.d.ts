interface MSDragHandleGestureRecognizerUninitialized<InitializedType = MSDragHandleGestureRecognizer> extends MSDragToMoveOrCopyGestureRecognizerUninitialized<MSDragHandleGestureRecognizer> {}
interface MSDragHandleGestureRecognizer extends MSDragToMoveOrCopyGestureRecognizer {

  originalHandleLocation(): NSPoint;
  setOriginalHandleLocation(originalHandleLocation: NSPoint): void;
  lockingConstraint(): MSAlignmentEngineConstraint;
  setLockingConstraint(lockingConstraint: MSAlignmentEngineConstraint): void;
  effectiveLockingConstraint(): MSAlignmentEngineConstraint;
}
declare const MSDragHandleGestureRecognizer: {
  alloc(): MSDragHandleGestureRecognizerUninitialized;
  class(): MSDragHandleGestureRecognizer;
}

