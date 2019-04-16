interface MSScissorsEventHandlerUninitialized<InitializedType = MSScissorsEventHandler> extends MSEventHandlerUninitialized<MSScissorsEventHandler> {}

interface MSScissorsEventHandler extends MSEventHandler {
}

declare const MSScissorsEventHandler: {
  alloc(): MSScissorsEventHandlerUninitialized;
  class(): MSScissorsEventHandler;
  eventHandlerWithManager(aManager: MSEventHandlerManager): any;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

