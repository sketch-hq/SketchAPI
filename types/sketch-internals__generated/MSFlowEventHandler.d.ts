interface MSFlowEventHandlerUninitialized<InitializedType = MSFlowEventHandler> extends MSEventHandlerUninitialized<MSFlowEventHandler> {}

interface MSFlowEventHandler extends MSEventHandler, IMSFlowMenuBuilderTarget {
  findMouseAndDisconnectFromTarget(): void;
  flowBackAction(sender: any): IBAction;
  removeFlowAction(sender: any): IBAction;
  flowTargetAction(sender: any): IBAction;

  layers(): MSLayerArray;
  setLayers(layers: MSLayerArray): void;
  flowItems(): NSSet<any>;
}

declare const MSFlowEventHandler: {
  alloc(): MSFlowEventHandlerUninitialized;
  class(): MSFlowEventHandler;
  eventHandlerWithManager(aManager: MSEventHandlerManager): any;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

