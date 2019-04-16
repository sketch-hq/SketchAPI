interface MSMakeUppercaseActionUninitialized<InitializedType = MSMakeUppercaseAction> extends MSTextTransformActionUninitialized<MSMakeUppercaseAction> {}

interface MSMakeUppercaseAction extends MSTextTransformAction {
}

declare const MSMakeUppercaseAction: {
  alloc(): MSMakeUppercaseActionUninitialized;
  class(): MSMakeUppercaseAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

