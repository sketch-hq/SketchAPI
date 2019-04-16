interface MSFlattenActionUninitialized<InitializedType = MSFlattenAction> extends MSDocumentActionUninitialized<MSFlattenAction> {}

interface MSFlattenAction extends MSDocumentAction {
  flatten(sender: any): IBAction;
}

declare const MSFlattenAction: {
  alloc(): MSFlattenActionUninitialized;
  class(): MSFlattenAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

