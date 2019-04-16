interface MSToggleFillActionUninitialized<InitializedType = MSToggleFillAction> extends MSToggleStylePartActionUninitialized<MSToggleFillAction> {}

interface MSToggleFillAction extends MSToggleStylePartAction {
}

declare const MSToggleFillAction: {
  alloc(): MSToggleFillActionUninitialized;
  class(): MSToggleFillAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

