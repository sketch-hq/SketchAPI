interface MSInsertTextEventHandlerUninitialized<InitializedType = MSInsertTextEventHandler> extends MSInsertLayerEventHandlerUninitialized<MSInsertTextEventHandler> {}

interface MSInsertTextEventHandler extends MSInsertLayerEventHandler {

  textLayer(): MSTextLayer;
  setTextLayer(textLayer: MSTextLayer): void;
}

declare const MSInsertTextEventHandler: {
  alloc(): MSInsertTextEventHandlerUninitialized;
  class(): MSInsertTextEventHandler;
}

