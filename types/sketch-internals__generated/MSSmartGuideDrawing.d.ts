interface MSSmartGuideDrawingUninitialized<InitializedType = MSSmartGuideDrawing> extends NSObjectUninitialized<MSSmartGuideDrawing> {}
interface MSSmartGuideDrawing extends NSObject {
}
declare const MSSmartGuideDrawing: {
  alloc(): MSSmartGuideDrawingUninitialized;
  class(): MSSmartGuideDrawing;  smartGuideColor(): NSColor;
  resetSmartGuideColor(): void;

}

