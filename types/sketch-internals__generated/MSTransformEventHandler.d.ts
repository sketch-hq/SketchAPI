interface MSTransformEventHandlerUninitialized<InitializedType = MSTransformEventHandler> extends MSPointsEventHandlerUninitialized<MSTransformEventHandler> {}

interface MSTransformEventHandler extends MSPointsEventHandler {
  transformLayers(): void;

  originalRect(): NSRect;
  setOriginalRect(originalRect: NSRect): void;
}

declare const MSTransformEventHandler: {
  alloc(): MSTransformEventHandlerUninitialized;
  class(): MSTransformEventHandler;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

