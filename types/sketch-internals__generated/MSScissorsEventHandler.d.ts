interface MSScissorsEventHandlerUninitialized<InitializedType = MSScissorsEventHandler> extends MSEventHandlerUninitialized<MSScissorsEventHandler> {}
interface MSScissorsEventHandler extends MSEventHandler {
}
declare const MSScissorsEventHandler: {
  alloc(): MSScissorsEventHandlerUninitialized;
  class(): MSScissorsEventHandler;
}

