interface MSInsertArrowEventHandlerUninitialized<InitializedType = MSInsertArrowEventHandler> extends MSInsertLineEventHandlerUninitialized<MSInsertArrowEventHandler> {}
interface MSInsertArrowEventHandler extends MSInsertLineEventHandler {
}
declare const MSInsertArrowEventHandler: {
  alloc(): MSInsertArrowEventHandlerUninitialized;
  class(): MSInsertArrowEventHandler;
}

