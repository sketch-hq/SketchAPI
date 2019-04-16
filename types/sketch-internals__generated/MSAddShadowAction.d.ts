interface MSAddShadowActionUninitialized<InitializedType = MSAddShadowAction> extends MSBaseStyleActionUninitialized<MSAddShadowAction> {}

interface MSAddShadowAction extends MSBaseStyleAction {
  addShadow(sender: any): IBAction;
}

declare const MSAddShadowAction: {
  alloc(): MSAddShadowActionUninitialized;
  class(): MSAddShadowAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

