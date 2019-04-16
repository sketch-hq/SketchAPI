interface MSVectorAdjustmentHandleUninitialized<InitializedType = MSVectorAdjustmentHandle> extends MSVectorHandleUninitialized<MSVectorAdjustmentHandle> {}
interface MSVectorAdjustmentHandle extends MSVectorHandle {

  locationOfMainPoint(): NSPoint;
  setLocationOfMainPoint(locationOfMainPoint: NSPoint): void;
}
declare const MSVectorAdjustmentHandle: {
  alloc(): MSVectorAdjustmentHandleUninitialized;
  class(): MSVectorAdjustmentHandle;
}

