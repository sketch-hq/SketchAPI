interface MSVectorHandleUninitialized<InitializedType = MSVectorHandle> extends NSObjectUninitialized<MSVectorHandle> {}
interface MSVectorHandle extends NSObject {
  drawAtProposedPoint_inView(proposedPoint: NSPoint, canvasView: NSView): void;
  drawingSize(): NSSize;

  state(): MSHandleState;
  setState(state: MSHandleState): void;
}
declare const MSVectorHandle: {
  alloc(): MSVectorHandleUninitialized;
  class(): MSVectorHandle;
}

