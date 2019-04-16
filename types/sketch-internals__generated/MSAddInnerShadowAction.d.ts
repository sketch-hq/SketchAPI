interface MSAddInnerShadowActionUninitialized<InitializedType = MSAddInnerShadowAction> extends MSBaseStyleActionUninitialized<MSAddInnerShadowAction> {}

interface MSAddInnerShadowAction extends MSBaseStyleAction {
  addInnerShadow(sender: any): IBAction;
}

declare const MSAddInnerShadowAction: {
  alloc(): MSAddInnerShadowActionUninitialized;
  class(): MSAddInnerShadowAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

