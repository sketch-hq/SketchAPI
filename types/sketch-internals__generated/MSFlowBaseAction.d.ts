interface MSFlowBaseActionUninitialized<InitializedType = MSFlowBaseAction> extends MSDocumentActionUninitialized<MSFlowBaseAction> {}

interface MSFlowBaseAction extends MSDocumentAction {
  refreshLayerListInspectorAndOverlay(): void;
}

declare const MSFlowBaseAction: {
  alloc(): MSFlowBaseActionUninitialized;
  class(): MSFlowBaseAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

