interface MSChangeFlowAnimationFromBottomAnimationActionUninitialized<InitializedType = MSChangeFlowAnimationFromBottomAnimationAction> extends MSChangeFlowAnimationActionUninitialized<MSChangeFlowAnimationFromBottomAnimationAction> {}

interface MSChangeFlowAnimationFromBottomAnimationAction extends MSChangeFlowAnimationAction {
  changeFlowAnimationToFromBottomAnimation(sender: any): IBAction;
}

declare const MSChangeFlowAnimationFromBottomAnimationAction: {
  alloc(): MSChangeFlowAnimationFromBottomAnimationActionUninitialized;
  class(): MSChangeFlowAnimationFromBottomAnimationAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

