interface MSToggleInterfaceActionUninitialized<InitializedType = MSToggleInterfaceAction> extends MSDocumentActionUninitialized<MSToggleInterfaceAction> {}

interface MSToggleInterfaceAction extends MSDocumentAction {
  toggleHideInterface(sender: any): IBAction;
  documentWillClose(): void;
}

declare const MSToggleInterfaceAction: {
  alloc(): MSToggleInterfaceActionUninitialized;
  class(): MSToggleInterfaceAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

