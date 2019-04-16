interface MSTextOnPathActionUninitialized<InitializedType = MSTextOnPathAction> extends MSDocumentActionUninitialized<MSTextOnPathAction> {}

interface MSTextOnPathAction extends MSDocumentAction {
  textOnPath(sender: any): IBAction;
}

declare const MSTextOnPathAction: {
  alloc(): MSTextOnPathActionUninitialized;
  class(): MSTextOnPathAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

