interface MSLayerXFocusActionUninitialized<InitializedType = MSLayerXFocusAction> extends MSDocumentActionUninitialized<MSLayerXFocusAction> {}

interface MSLayerXFocusAction extends MSDocumentAction {
}

declare const MSLayerXFocusAction: {
  alloc(): MSLayerXFocusActionUninitialized;
  class(): MSLayerXFocusAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

