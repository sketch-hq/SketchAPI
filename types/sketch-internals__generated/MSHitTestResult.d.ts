interface MSHitTestResultUninitialized<InitializedType = MSHitTestResult> extends NSObjectUninitialized<MSHitTestResult> {}
interface MSHitTestResult extends NSObject {

  layer(): MSLayer;
  overrideRepresentation(): MSOverrideRepresentation;
}
declare const MSHitTestResult: {
  alloc(): MSHitTestResultUninitialized;
  class(): MSHitTestResult;
}

