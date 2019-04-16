interface MSNormalResizeEventHandlerUninitialized<InitializedType = MSNormalResizeEventHandler> extends MSNormalBaseEventHandlerUninitialized<MSNormalResizeEventHandler> {}
interface MSNormalResizeEventHandler extends MSNormalBaseEventHandler {

  handle(): BCCorner;
  setHandle(handle: BCCorner): void;
  normalEventHandler(): MSNormalEventHandler;
  setNormalEventHandler(normalEventHandler: MSNormalEventHandler): void;
}
declare const MSNormalResizeEventHandler: {
  alloc(): MSNormalResizeEventHandlerUninitialized;
  class(): MSNormalResizeEventHandler;
}

