interface MSSmartRotateEventHandlerUninitialized<InitializedType = MSSmartRotateEventHandler> extends MSEventHandlerUninitialized<MSSmartRotateEventHandler> {}
interface MSSmartRotateEventHandler extends MSEventHandler {

  numberOfRepetitions(): NSUInteger;
  setNumberOfRepetitions(numberOfRepetitions: NSUInteger): void;
}
declare const MSSmartRotateEventHandler: {
  alloc(): MSSmartRotateEventHandlerUninitialized;
  class(): MSSmartRotateEventHandler;
}

