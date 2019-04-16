interface MSInsertSymbolEventHandlerUninitialized<InitializedType = MSInsertSymbolEventHandler> extends MSEventHandlerUninitialized<MSInsertSymbolEventHandler> {}

interface MSInsertSymbolEventHandler extends MSEventHandler {

  masterReference(): MSSymbolMasterReference;
  setMasterReference(masterReference: MSSymbolMasterReference): void;
}

declare const MSInsertSymbolEventHandler: {
  alloc(): MSInsertSymbolEventHandlerUninitialized;
  class(): MSInsertSymbolEventHandler;
  eventHandlerWithManager(aManager: MSEventHandlerManager): any;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

