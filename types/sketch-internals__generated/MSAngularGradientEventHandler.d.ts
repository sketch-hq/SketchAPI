interface MSAngularGradientEventHandlerUninitialized<InitializedType = MSAngularGradientEventHandler> extends MSGradientEventHandlerUninitialized<MSAngularGradientEventHandler> {}
interface MSAngularGradientEventHandler extends MSGradientEventHandler {
}
declare const MSAngularGradientEventHandler: {
  alloc(): MSAngularGradientEventHandlerUninitialized;
  class(): MSAngularGradientEventHandler;
}

