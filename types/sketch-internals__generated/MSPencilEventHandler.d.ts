interface MSPencilEventHandlerUninitialized<InitializedType = MSPencilEventHandler> extends MSEventHandlerUninitialized<MSPencilEventHandler> {}

interface MSPencilEventHandler extends MSEventHandler {
}

declare const MSPencilEventHandler: {
  alloc(): MSPencilEventHandlerUninitialized;
  class(): MSPencilEventHandler;
  eventHandlerWithManager(aManager: MSEventHandlerManager): any;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

