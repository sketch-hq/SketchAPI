interface MSAddBorderActionUninitialized<InitializedType = MSAddBorderAction> extends MSBaseStyleActionUninitialized<MSAddBorderAction> {}

interface MSAddBorderAction extends MSBaseStyleAction {
  addBorder(sender: any): IBAction;
}

declare const MSAddBorderAction: {
  alloc(): MSAddBorderActionUninitialized;
  class(): MSAddBorderAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

