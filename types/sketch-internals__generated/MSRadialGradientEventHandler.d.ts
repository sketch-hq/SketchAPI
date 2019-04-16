interface MSRadialGradientEventHandlerUninitialized<InitializedType = MSRadialGradientEventHandler> extends MSGradientEventHandlerUninitialized<MSRadialGradientEventHandler> {}

interface MSRadialGradientEventHandler extends MSGradientEventHandler {
  ellipsePoint(): NSPoint;
  setEllipsePoint(point: NSPoint): void;
  ovalPath(): NSBezierPath;
}

declare const MSRadialGradientEventHandler: {
  alloc(): MSRadialGradientEventHandlerUninitialized;
  class(): MSRadialGradientEventHandler;
  gradientHandlerForStylePart_manager(part: MSStyleBasicFill, manager: MSEventHandlerManager): MSGradientEventHandler;
}

