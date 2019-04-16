interface MSFlowEventHandlerUninitialized<InitializedType = MSFlowEventHandler> extends MSEventHandlerUninitialized<MSFlowEventHandler> {}
interface MSFlowEventHandler extends MSEventHandler, IMSFlowMenuBuilderTarget {
  findMouseAndDisconnectFromTarget(): void;

  layers(): MSLayerArray;
  setLayers(layers: MSLayerArray): void;
  flowItems(): NSSet<any>;
}
declare const MSFlowEventHandler: {
  alloc(): MSFlowEventHandlerUninitialized;
  class(): MSFlowEventHandler;
}

