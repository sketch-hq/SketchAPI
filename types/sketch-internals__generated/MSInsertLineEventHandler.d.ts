interface MSInsertLineEventHandlerUninitialized<InitializedType = MSInsertLineEventHandler> extends MSEventHandlerUninitialized<MSInsertLineEventHandler> {}

interface MSInsertLineEventHandler extends MSEventHandler {

  lineShapeCreator(): MSLineShapeCreatorBlock;
  setLineShapeCreator(lineShapeCreator: MSLineShapeCreatorBlock): void;
}

declare const MSInsertLineEventHandler: {
  alloc(): MSInsertLineEventHandlerUninitialized;
  class(): MSInsertLineEventHandler;
  eventHandlerWithManager(aManager: MSEventHandlerManager): any;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

