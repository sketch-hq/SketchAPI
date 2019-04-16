interface MSImageTransformEventHandlerUninitialized<InitializedType = MSImageTransformEventHandler> extends MSTransformEventHandlerUninitialized<MSImageTransformEventHandler> {}
interface MSImageTransformEventHandler extends MSTransformEventHandler {
}
declare const MSImageTransformEventHandler: {
  alloc(): MSImageTransformEventHandlerUninitialized;
  class(): MSImageTransformEventHandler;
}

