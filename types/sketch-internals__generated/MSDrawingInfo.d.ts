interface MSDrawingInfoUninitialized<InitializedType = MSDrawingInfo> extends NSObjectUninitialized<MSDrawingInfo> {}
interface MSDrawingInfo extends NSObject {

  isDragging(): boolean;
  setIsDragging(isDragging: boolean): void;
}
declare const MSDrawingInfo: {
  alloc(): MSDrawingInfoUninitialized;
  class(): MSDrawingInfo;  sharedController(): MSDrawingInfo;

}

