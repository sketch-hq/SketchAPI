interface MSRadialGradientEventHandlerUninitialized<InitializedType = MSRadialGradientEventHandler> extends MSGradientEventHandlerUninitialized<MSRadialGradientEventHandler> {}
interface MSRadialGradientEventHandler extends MSGradientEventHandler {
  ellipsePoint(): NSPoint;
  setEllipsePoint(point: NSPoint): void;
  ovalPath(): NSBezierPath;
}
declare const MSRadialGradientEventHandler: {
  alloc(): MSRadialGradientEventHandlerUninitialized;
  class(): MSRadialGradientEventHandler;
}

