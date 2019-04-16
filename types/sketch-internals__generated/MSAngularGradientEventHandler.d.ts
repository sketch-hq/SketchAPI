interface MSAngularGradientEventHandlerUninitialized<InitializedType = MSAngularGradientEventHandler> extends MSGradientEventHandlerUninitialized<MSAngularGradientEventHandler> {}

interface MSAngularGradientEventHandler extends MSGradientEventHandler {
}

declare const MSAngularGradientEventHandler: {
  alloc(): MSAngularGradientEventHandlerUninitialized;
  class(): MSAngularGradientEventHandler;
  gradientHandlerForStylePart_manager(part: MSStyleBasicFill, manager: MSEventHandlerManager): MSGradientEventHandler;
}

