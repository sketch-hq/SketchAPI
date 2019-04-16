interface MSNormalEventDataUninitialized<InitializedType = MSNormalEventData> extends NSObjectUninitialized<MSNormalEventData> {}
interface MSNormalEventData extends NSObject {

  hasMultipleTouches(): boolean;
  setHasMultipleTouches(hasMultipleTouches: boolean): void;
  didMouseDown(): boolean;
  setDidMouseDown(didMouseDown: boolean): void;
  mouseDown(): NSPoint;
  setMouseDown(mouseDown: NSPoint): void;
  midPoint(): NSPoint;
  setMidPoint(midPoint: NSPoint): void;
  originalScrollOrigin(): NSPoint;
  setOriginalScrollOrigin(originalScrollOrigin: NSPoint): void;
}
declare const MSNormalEventData: {
  alloc(): MSNormalEventDataUninitialized;
  class(): MSNormalEventData;
}

