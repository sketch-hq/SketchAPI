interface MSChangeFlowAnimationFromTopAnimationActionUninitialized<InitializedType = MSChangeFlowAnimationFromTopAnimationAction> extends MSChangeFlowAnimationActionUninitialized<MSChangeFlowAnimationFromTopAnimationAction> {}

interface MSChangeFlowAnimationFromTopAnimationAction extends MSChangeFlowAnimationAction {
  changeFlowAnimationToFromTopAnimation(sender: any): IBAction;
}

declare const MSChangeFlowAnimationFromTopAnimationAction: {
  alloc(): MSChangeFlowAnimationFromTopAnimationActionUninitialized;
  class(): MSChangeFlowAnimationFromTopAnimationAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

