interface MSLayerHeightFocusActionUninitialized<InitializedType = MSLayerHeightFocusAction> extends MSDocumentActionUninitialized<MSLayerHeightFocusAction> {}

interface MSLayerHeightFocusAction extends MSDocumentAction {
}

declare const MSLayerHeightFocusAction: {
  alloc(): MSLayerHeightFocusActionUninitialized;
  class(): MSLayerHeightFocusAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

