interface MSRotationGestureInterpreterUninitialized<InitializedType = MSRotationGestureInterpreter> extends NSObjectUninitialized<MSRotationGestureInterpreter> {}
interface MSRotationGestureInterpreter extends NSObject {
  updateWithDragRecognizer(recognizer: MSDragGestureRecognizer): IBAction;
  updateWithLocation(location: NSPoint): void;
  rotationInLayer(layer: MSLayer | null): CGFloat;
  rotationInDegreesInLayer(layer: MSLayer | null): CGFloat;

  centerPoint(): NSPoint;
  setCenterPoint(centerPoint: NSPoint): void;
}
declare const MSRotationGestureInterpreter: {
  alloc(): MSRotationGestureInterpreterUninitialized;
  class(): MSRotationGestureInterpreter;
}

