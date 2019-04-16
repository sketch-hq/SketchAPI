interface MSChangeFlowAnimationNoAnimationActionUninitialized<InitializedType = MSChangeFlowAnimationNoAnimationAction> extends MSChangeFlowAnimationActionUninitialized<MSChangeFlowAnimationNoAnimationAction> {}

interface MSChangeFlowAnimationNoAnimationAction extends MSChangeFlowAnimationAction {
  changeFlowAnimationToNoAnimation(sender: any): IBAction;
}

declare const MSChangeFlowAnimationNoAnimationAction: {
  alloc(): MSChangeFlowAnimationNoAnimationActionUninitialized;
  class(): MSChangeFlowAnimationNoAnimationAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

