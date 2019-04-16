interface BCMagnifierWindowUninitialized<InitializedType = BCMagnifierWindow> extends NSWindowUninitialized<BCMagnifierWindow> {
  initWithScreenGrab_frameOffset(screenGrab: BCScreenGrab, offset: NSPoint): InitializedType;
}
interface BCMagnifierWindow extends NSWindow {
  updateScreenGrabIfNeeded(screenGrab: BCScreenGrab): void;
  mouseMovedTo(mousePoint: NSPoint): void;
  setCurrentColor(color: MSFlexibleColor): void;
  flagsChanged(): void;

  frameOffset(): NSPoint;
  screenFrame(): CGRect;
  setScreenFrame(screenFrame: CGRect): void;
}
declare const BCMagnifierWindow: {
  alloc(): BCMagnifierWindowUninitialized;
  class(): BCMagnifierWindow;
}

