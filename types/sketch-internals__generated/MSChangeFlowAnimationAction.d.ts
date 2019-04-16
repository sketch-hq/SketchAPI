interface MSChangeFlowAnimationActionUninitialized<InitializedType = MSChangeFlowAnimationAction> extends MSDocumentActionUninitialized<MSChangeFlowAnimationAction> {}

interface MSChangeFlowAnimationAction extends MSDocumentAction {
}

declare const MSChangeFlowAnimationAction: {
  alloc(): MSChangeFlowAnimationActionUninitialized;
  class(): MSChangeFlowAnimationAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

