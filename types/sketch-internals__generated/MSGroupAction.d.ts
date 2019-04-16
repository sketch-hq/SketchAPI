interface MSGroupActionUninitialized<InitializedType = MSGroupAction> extends MSDocumentActionUninitialized<MSGroupAction> {}

interface MSGroupAction extends MSDocumentAction {
  group(sender: any): IBAction;
}

declare const MSGroupAction: {
  alloc(): MSGroupActionUninitialized;
  class(): MSGroupAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

